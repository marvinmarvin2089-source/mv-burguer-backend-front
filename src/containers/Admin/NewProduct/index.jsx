import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { ImageIcon } from "@phosphor-icons/react"
import { useNavigate } from "react-router-dom"

import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { toast } from "react-toastify";


import { Container, Form, InputGroup, Label, Input, LabelUpload, Select, SubmitButton, ErrorMessage, ContainerCheckbox, } from './styles';


const schema = yup.object({
  name: yup
    .string()
    .required('Digite o nome do Produto'),

  price: yup
    .number()
    .positive()
    .required('Digite o Preço do Produto')
    .typeError('Digite o Preço do Produto'),

  category: yup
    .object()
    .required('Escolha uma Categoria'),

  offer: yup
    .bool(),

  file: yup
    .mixed()
    .test(
      'required',
      'Escolha um arquivo para continuar',
      (value) => {
        return value && value.length > 0;
      }
    )
    .test(
      'fileSize',
      'Carregue arquivos até 5MB',
      (value) => {
        return (
          value &&
          value.length > 0 &&
          value[0].size <= 5 * 1024 * 1024
        );
      }
    )
    .test(
      'type',
      'Carregue apenas imagens PNG, SVG e JPEG',
      (value) => {
        return (
          value &&
          value.length > 0 &&
          (
            value[0].type === 'image/jpeg' ||
            value[0].type === 'image/png' ||
            value[0].type === 'image/svg+xml'
          )
        );
      }
    ),
});


export function NewProduct() {
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {

    async function loadCategories() {
      const { data } = await api.get('/categories');

      setCategories(data);

    }

    loadCategories();
  }, []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const fileRegister = register('file');


  const onSubmit = async (data) => {
    const productFormData = new FormData();

    productFormData.append('name', data.name);
    productFormData.append('price', data.price);
    productFormData.append('category_id', data.category.id);
    productFormData.append('file', data.file[0]);
    productFormData.append('offer', data.offer);

    await toast.promise(api.post('/products', productFormData), {
      pending: 'Adicionando o produto...',
      success: 'Produto criado com sucesso!',
      error: 'Falha ao adicionar o produto, tente novamente!'
    });

    setTimeout(() => {
      navigate('/admin/produtos');
    }, 2000);


  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Label>Nome</Label>
          <Input type='text' {...register('name')} />
          <ErrorMessage>{errors?.name?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <Label>Preço</Label>
          <Input type='number' {...register('price')} />
          <ErrorMessage>{errors?.price?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <LabelUpload>
            <ImageIcon />

            <input
              type='file'
              {...fileRegister}
              accept='image/png, image/svg+xml, image/jpeg'
              onChange={(event) => {
                setFileName(event.target.files[0]?.name);
                fileRegister.onChange(event);
              }}
            />

            {fileName || 'Upload do Produto'}
          </LabelUpload>

          <ErrorMessage>{errors?.file?.message}</ErrorMessage>
        </InputGroup>
        <InputGroup>
          <Label>Categoria</Label>
          <Controller
            name='category'
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={categories}
                getOptionLabel={(category) => category.name}
                getOptionValue={(category) => category.id}
                placeholder='Categorias'
                menuPortalTarget={document.body}
              />
            )}
          />

          <ErrorMessage>{errors?.category?.message}</ErrorMessage>
        </InputGroup>
        <InputGroup>
          <ContainerCheckbox>
            <input type="checkbox" 
              {...register('offer')}
            />
            <Label>Produto em Oferta ?</Label>
          </ContainerCheckbox>
        </InputGroup>

        <SubmitButton>Adicionar Produto</SubmitButton>
      </Form>
    </Container>
  );
}
