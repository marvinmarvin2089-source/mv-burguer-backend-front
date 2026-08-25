# DevBurger — Frontend

![DevBurger](docs/devburger-cover.png)

Aplicação web de uma hamburgueria digital, desenvolvida com React e Vite. O projeto simula a experiência completa de compra: navegação pelo cardápio, filtro por categoria, carrinho persistente, autenticação de usuários, checkout com Stripe e gerenciamento de produtos e pedidos para administradores.

## Visão geral

O DevBurger foi construído para demonstrar desenvolvimento frontend moderno, integração com APIs REST, gerenciamento de estado com Context API, formulários, autenticação baseada em token e processamento de pagamentos.

### Funcionalidades

- Página inicial e cardápio responsivo.
- Filtro de produtos por categoria.
- Carrinho com inclusão, remoção, alteração de quantidade e persistência no navegador.
- Cadastro e login de usuários.
- Checkout integrado ao Stripe Elements.
- Criação e acompanhamento de pedidos.
- Painel administrativo protegido para produtos e pedidos.
- Atualização de status dos pedidos.
- Feedback visual com notificações de sucesso e erro.

### Experiência demonstrada

- Navegação por categorias e visualização de produtos.
- Carrinho com resumo do pedido e taxa de entrega.
- Checkout com Stripe Elements e confirmação de pagamento.
- Redirecionamento usando apenas o identificador do pagamento na URL.
- Painel administrativo para acompanhar pedidos e alterar seus status.

## Tecnologias

- React 19, Vite 8 e React Router
- Styled Components e Material UI
- Axios
- React Hook Form e Yup
- Stripe Elements
- React Toastify
- ESLint e Prettier

## Pré-requisitos

- Node.js 20 ou superior.
- npm ou Yarn.
- Uma instância da API backend do DevBurger executando localmente ou publicada.
- Chave pública de teste do Stripe para habilitar o checkout.

## Como executar

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Crie um arquivo `.env` a partir do exemplo:

   ```bash
   cp .env.example .env
   ```

   No Windows, use `Copy-Item .env.example .env` no PowerShell.

3. Configure as variáveis de ambiente:

   ```env
   VITE_API_URL=http://localhost:3001
   VITE_STRIPE_PUBLISHABLE_KEY=pk_test_sua_chave_publicavel
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Acesse a URL exibida pelo Vite, normalmente `http://localhost:5173`.

### Acessos principais

```text
/                 Página inicial
/cardapio         Catálogo de produtos
/carrinho         Carrinho de compras
/checkout         Checkout e pagamento
/admin/produtos   Gerenciamento de produtos
/admin/pedidos    Gerenciamento de pedidos
```

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o ambiente de desenvolvimento com hot reload. |
| `npm run build` | Gera a versão otimizada para produção. |
| `npm run preview` | Executa uma prévia local do build de produção. |
| `npm run lint` | Analisa o código em busca de problemas de qualidade. |

## Integração com o backend

O frontend espera uma API compatível com os principais recursos abaixo:

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

O endereço da API pode ser alterado por `VITE_API_URL`, permitindo usar o mesmo frontend em desenvolvimento, homologação ou produção.

## Teste do pagamento

Com o backend e o Stripe configurados em modo de teste, use o cartão:

```text
Número: 4242 4242 4242 4242
Validade: qualquer data futura
CVC: qualquer código de três dígitos
```

## Estrutura do projeto

```text
src/
├── components/    # Componentes reutilizáveis da interface
├── config/        # Configurações de serviços externos
├── containers/    # Páginas e fluxos da aplicação
├── hooks/         # Contextos de usuário e carrinho
├── layouts/       # Layouts público e administrativo
├── routes/        # Rotas da aplicação
├── services/      # Cliente HTTP e integrações com a API
├── styles/        # Tema e estilos globais
└── utils/         # Funções utilitárias
```

## Segurança e configuração

O projeto usa apenas variáveis públicas no frontend. A chave publicável do Stripe deve ser configurada no `.env`; chaves secretas nunca devem ser adicionadas ao frontend ou versionadas. O arquivo `.env` está incluído no `.gitignore`.

## Próximas evoluções

- Adicionar testes automatizados de componentes e fluxos críticos.
- Melhorar code splitting para reduzir o tamanho do bundle inicial.
- Adicionar estados de carregamento e mensagens de erro nas listagens.
- Publicar uma demonstração online integrada ao backend.

## Status

Projeto funcional, desenvolvido como parte de um portfólio profissional full stack.
