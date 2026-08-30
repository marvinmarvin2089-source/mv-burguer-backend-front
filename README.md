# MV Burguer — Frontend

![MV Burguer](docs/devburger-cover.png)

Aplicação frontend de uma hamburgueria digital, desenvolvida para reproduzir a jornada completa de compra: descoberta do cardápio, seleção de produtos, carrinho persistente, autenticação, pagamento online e acompanhamento do pedido.

O projeto integra uma API REST própria e também inclui uma área administrativa para gerenciamento de produtos e pedidos.

[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Styled Components](https://img.shields.io/badge/Styled--Components-DB7093?logo=styledcomponents&logoColor=white)](https://styled-components.com/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=white)](https://axios-http.com/)
[![Stripe](https://img.shields.io/badge/Stripe-635BFF?logo=stripe&logoColor=white)](https://stripe.com/)

**Bibliotecas complementares**

[![Material UI](https://img.shields.io/badge/Material_UI-007FFF?logo=mui&logoColor=white)](https://mui.com/)
[![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?logo=reacthookform&logoColor=white)](https://react-hook-form.com/)
[![Yup](https://img.shields.io/badge/Yup-4B5563?logo=yup&logoColor=white)](https://github.com/jquense/yup)

## Demonstração

[Acessar o MV Burguer online](https://mv-burguer-backend-front.vercel.app)

### Links do projeto

- **Frontend:** [mv-burguer-backend-front.vercel.app](https://mv-burguer-backend-front.vercel.app)
- **Backend/API:** [MvBurguerBack no GitHub](https://github.com/marvinmarvin2089-source/MvBurguerBack)
- **API em produção:** [mvburguerback.onrender.com](https://mvburguerback.onrender.com)

> A API utiliza uma instância gratuita do Render. Após um período de inatividade, a primeira requisição pode levar alguns segundos enquanto o serviço é inicializado.

## Sobre o projeto

O MV Burguer foi construído como um projeto de portfólio full stack, com foco em uma experiência de usuário clara, responsiva e próxima de um produto real. No frontend, a aplicação organiza fluxos públicos, autenticados e administrativos, mantendo o estado compartilhado com Context API e centralizando a comunicação com a API REST.

## Funcionalidades

- Catálogo de produtos organizado por categorias e ofertas.
- Filtro de produtos por categoria.
- Carrinho com inclusão, remoção e alteração de quantidades.
- Persistência do carrinho no `localStorage`.
- Cadastro, login e logout de usuários.
- Autenticação baseada em token e envio automático do Bearer Token.
- Checkout com Stripe Payment Element.
- Criação de pedidos e consulta do status do pagamento.
- Acompanhamento dos próprios pedidos, com atualização periódica.
- Painel administrativo protegido para produtos e pedidos.
- Criação e edição de produtos.
- Upload de imagens PNG, SVG e JPEG.
- Atualização do status dos pedidos.
- Notificações de sucesso, erro e confirmação de ações.
- Interface responsiva para diferentes tamanhos de tela.

## Jornada do usuário

1. Explorar a página inicial e o cardápio.
2. Filtrar produtos por categoria e adicionar itens ao carrinho.
3. Revisar itens, quantidades e total do pedido.
4. Criar uma conta ou entrar com uma conta existente.
5. Informar os dados de pagamento no Stripe Payment Element.
6. Confirmar o pagamento e acompanhar o pedido em **Meus pedidos**.

## Tecnologias

- React 19 e Vite 8.
- React Router DOM.
- Context API e hooks personalizados para estado compartilhado.
- Axios para comunicação com a API REST.
- Styled Components e Material UI.
- React Hook Form e Yup para formulários e validação.
- Stripe Elements / Payment Element.
- React Select, Swiper e Phosphor Icons.
- React Toastify para feedbacks da interface.
- ESLint e Prettier.

## Arquitetura

O frontend é organizado por responsabilidades, com rotas, layouts, componentes reutilizáveis, contextos, serviços e utilitários separados:

```text
src/
├── components/    # Componentes reutilizáveis da interface
├── config/        # Configurações de serviços externos
├── containers/    # Páginas e fluxos da aplicação
├── hooks/         # Contextos e hooks de usuário e carrinho
├── layouts/       # Layouts público e administrativo
├── routes/        # Rotas da aplicação
├── services/      # Cliente HTTP e integrações com a API
├── styles/        # Tema e estilos globais
└── utils/         # Funções utilitárias
```

As principais rotas incluem:

| Rota | Fluxo |
| --- | --- |
| `/` | Página inicial |
| `/cardapio` | Catálogo de produtos |
| `/carrinho` | Revisão do carrinho |
| `/checkout` | Checkout e pagamento |
| `/complete-payment` | Conclusão do pagamento |
| `/meus-pedidos` | Acompanhamento de pedidos |
| `/login` e `/cadastro` | Acesso e criação de conta |
| `/admin/pedidos` | Gestão administrativa de pedidos |
| `/admin/novo-produto` | Cadastro de produto |
| `/admin/editar-produto` | Edição de produto |

## Stripe e pagamentos

O checkout utiliza o Stripe Payment Element para coletar os dados de pagamento com segurança no ambiente do Stripe. O frontend cria a intenção de pagamento por meio da API e consulta o resultado antes de concluir o fluxo do pedido.

Para testar localmente, use o modo de testes do Stripe e o cartão oficial:

```text
Número: 4242 4242 4242 4242
Validade: qualquer data futura
CVC: qualquer código de três dígitos
```

Esse cartão funciona **somente em ambiente de testes**. Não use cartão real durante a validação do projeto.

## Autenticação

O fluxo de autenticação contempla cadastro, login e logout. Após o login, o token é armazenado para autorizar requisições protegidas, como criação de pedidos e acesso aos pedidos do usuário. Rotas administrativas são protegidas no frontend e dependem das permissões reconhecidas pela API.

Nenhuma credencial real ou conta administrativa de demonstração é publicada neste repositório.

## Painel administrativo

Usuários autorizados podem acessar fluxos administrativos para:

- Cadastrar e editar produtos.
- Enviar imagens de produtos.
- Consultar pedidos.
- Filtrar pedidos por status.
- Atualizar o andamento dos pedidos.

## Responsividade

A interface foi estruturada para se adaptar a dispositivos móveis, tablets e desktops, mantendo a navegação, o cardápio, o carrinho, o checkout e os fluxos administrativos utilizáveis em diferentes larguras de tela.

## Como executar

### Pré-requisitos

- Node.js instalado.
- npm ou Yarn.
- Uma instância da API disponível localmente ou em produção.
- Uma chave publicável de teste do Stripe para habilitar o checkout.

### Instalação

```bash
npm install
```

Crie o arquivo de ambiente a partir do exemplo:

```bash
cp .env.example .env
```

No Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

Depois, acesse a URL exibida pelo Vite, normalmente `http://localhost:5173`.

## Variáveis de ambiente

Configure o arquivo `.env` localmente:

```env
VITE_API_URL=http://localhost:3001
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_sua_chave_publicavel
```

O arquivo `.env` não deve ser versionado. Nunca coloque chaves secretas do Stripe ou outros segredos no frontend.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento com hot reload. |
| `npm run build` | Gera a versão otimizada para produção. |
| `npm run preview` | Executa uma prévia local do build de produção. |
| `npm run lint` | Verifica problemas de qualidade no código. |

## Backend e API

O frontend consome uma API REST própria para autenticação, catálogo, pedidos e pagamentos. Entre os recursos utilizados estão:

- `POST /sessions`
- `POST /users`
- `GET /categories`
- `GET /products`
- `POST /products`
- `PUT /products/:id`
- `POST /create-payment-intent`
- `POST /orders`
- `GET /orders`
- `PUT /orders/:id`

O endereço da API é definido por `VITE_API_URL`, permitindo alternar entre desenvolvimento e produção sem alterar o código da aplicação.

## Aprendizados

Este projeto consolidou práticas de desenvolvimento frontend e integração full stack, incluindo:

- Organização de uma aplicação React por fluxos e responsabilidades.
- Gerenciamento de estado global com Context API.
- Persistência de dados no navegador.
- Construção de formulários com validação.
- Autenticação e autorização por token.
- Integração de pagamentos com Stripe.
- Comunicação com API REST e tratamento de estados de carregamento e erro.
- Criação de interfaces responsivas e reutilizáveis.

## Autor

**Marcus Vinícius Pereira da Silva**

Projeto desenvolvido para portfólio profissional.
