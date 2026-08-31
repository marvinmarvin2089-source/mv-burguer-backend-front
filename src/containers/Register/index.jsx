import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";

import logo from '../../assets/mv-burguer-logo.png';
import { Button } from '../../components/Button';
import { api } from "../../services/api";
import { Container, Form, InputContainer, LeftContainer, RightContainer, Title, Link } from "./styles";

export function Register() {
    const navigate = useNavigate();

    const schema = yup
        .object({
            name: yup.string().required('O nome é obrigatório'),
            email: yup.string().email('Digite um email válido').required('O email é obrigatório'),
            password: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('A senha é obrigatória'),
            confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'As senhas não coincidem').required('A confirmação de senha é obrigatória')
        })
        .required()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = async (data) => {

        try {
            const { status } = await api.post
                ('/users', {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                },

                    {
                        validateStatus: () => true,

                    },

                );

            if (status === 200 || status === 201) {
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
                toast.success('Conta criada com sucesso!👌')
            } else if (status === 409) {
                toast.error('Email já cadastrado! Faça login ou utilize outro email.😔')
            } else {
                throw new Error('Erro ao criar conta');
            }

        } catch (error) {
            toast.error('😧 Falha no Sistema! Tente Novamente');
        }
    };
        
    return (
        <Container>
            <LeftContainer>
                <img src={logo} alt='Logo-burguer' />
            </LeftContainer>
            <RightContainer>
                <Title>
                    Crie sua conta
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>

                    <InputContainer>
                        <label>Nome</label>
                        <input type='text' {...register('name')} />
                        {errors.name && <span>{errors.name.message}</span>}
                    </InputContainer>

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

                    <InputContainer>
                        <label>Confirmar Senha</label>
                        <input type='password'  {...register('confirmPassword')} />
                        {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
                    </InputContainer>

                    <Button type='submit'>Criar Conta</Button>
                </Form>
                <p>Já possui conta? <Link to='/login'>Clique aqui.</Link>
                </p>
            </RightContainer>

        </Container>
    )
}