import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { toast } from "react-toastify"
import * as yup from "yup"
import { useUser } from "../../hooks/UserContext"

import logo from '../../assets/logo1.svg';
import { Container, LeftContainer, RightContainer, Title, Form, InputContainer, Link } from "./styles";
import { Button } from '../../components/Button';
import { api } from "../../services/api";

export function Login() {
    const navigate = useNavigate();
    const { putUserData } = useUser();

    const schema = yup
        .object({
            email: yup.string().email('Digite um email válido').required('O email é obrigatório'),
            password: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('A senha é obrigatória'),
        })
        .required()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    console.log(errors)


    const onSubmit = async (data) => {
        
        const { data: userData } = await toast.promise(
        api.post('/sessions', {
            email: data.email,
            password: data.password,
        }),
      
        {
            pending: 'Verificando suas credenciais... ⏳',
            success: { 
                 render() { 
                    setTimeout(() => {
                        if (userData?.admin) {
                            navigate('/admin/pedidos');
                        } else {
                             navigate('/');
                        }
                    }, 2000);
                return 'Seja bem-vindo(a) 👌';
            }, 
            error: 'Email ou senha incorretos. 🤯' }
        },
        
    );

        putUserData(userData);
        
    };
    return (
        <Container>
        <LeftContainer>
            <img src={logo} alt='Logo-burguer' />
        </LeftContainer>
           <RightContainer>
                <Title>
                    Olá, seja bem vindo ao <span> MV Burguer!</span> 
                    <br /> 
                    Acesse com seu <span> Login e senha.</span>
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                   <InputContainer>
                        <label>Email</label>
                        <input type='email'  {...register('email')} />
                        {errors.email && <span>{errors.email.message}</span>}
                   </InputContainer>
                     <InputContainer>
                        <label>Senha</label>
                        <input type='password' {...register('password')} />
                        {errors.password && <span>{errors.password.message}</span>}
                   </InputContainer>
                    <Button type='submit'>Entrar</Button>
                </Form>
                <p>Ainda não possui uma conta? <Link to='/cadastro'>Clique aqui.</Link>
                </p>
           </RightContainer>
            
        </Container>
    )
}