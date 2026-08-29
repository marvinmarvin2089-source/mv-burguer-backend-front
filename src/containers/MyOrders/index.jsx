import { useCallback, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext';
import { api } from '../../services/api';
import { formatDate } from '../../utils/formatDate';
import { formatPrice } from '../../utils/formatPrice';
import {
  Container,
  Content,
  EmptyState,
  ErrorMessage,
  LoadingMessage,
  OrderCard,
  OrderHeader,
  OrderMeta,
  ProductList,
  ProductRow,
  ProductImage,
  ProductInfo,
  ProductQuantity,
  ProductPrice,
  Summary,
  SummaryLine,
  StatusBadge,
  PaymentBadge,
  Timeline,
  TimelineStep,
  TimelineLine,
  CancelledState,
  RetryButton,
} from './styles';

const ORDER_STEPS = [
  'Pedido recebido',
  'Em preparação',
  'A caminho',
  'Entregue',
];

const DELIVERY_FEE_CENTS = 500;

function OrderTimeline({ status }) {
  if (status === 'Cancelado') {
    return <CancelledState role="status">Pedido cancelado</CancelledState>;
  }

  const currentStep = ORDER_STEPS.indexOf(status);
  const currentIndex = currentStep < 0 ? 0 : currentStep;

  return (
    <Timeline aria-label={`Andamento do pedido: ${status}`}>
      {ORDER_STEPS.map((step, index) => {
        const isCurrent = index === currentIndex;
        const isCompleted = index < currentIndex;

        return (
          <div key={step}>
            <TimelineStep
              $isCurrent={isCurrent}
              $isCompleted={isCompleted}
              aria-current={isCurrent ? 'step' : undefined}
            >
              <span className="dot">{isCompleted ? '✓' : index + 1}</span>
              <span className="label">{step}</span>
            </TimelineStep>
            {index < ORDER_STEPS.length - 1 && (
              <TimelineLine $isCompleted={index < currentIndex} />
            )}
          </div>
        );
      })}
    </Timeline>
  );
}

function OrderCardContent({ order }) {
  const subtotal = (order.products ?? []).reduce(
    (sum, product) => sum + Number(product.price) * Number(product.quantity),
    0,
  );
  const total = subtotal + DELIVERY_FEE_CENTS;

  return (
    <OrderCard>
      <OrderHeader>
        <div>
          <h2>Pedido #{order.id}</h2>
          <OrderMeta>{formatDate(order.createdAt)}</OrderMeta>
        </div>
        <StatusBadge $status={order.status}>{order.status}</StatusBadge>
      </OrderHeader>

      <OrderTimeline status={order.status} />

      <ProductList>
        <h3>Itens do pedido</h3>
        {order.products?.map((product) => (
          <ProductRow key={`${order.id}-${product.id}`}>
            <ProductImage src={product.url} alt="" />
            <ProductInfo>
              <strong>{product.name}</strong>
              <span>{formatPrice(product.price)} cada</span>
            </ProductInfo>
            <ProductQuantity aria-label={`Quantidade: ${product.quantity}`}>
              x{product.quantity}
            </ProductQuantity>
            <ProductPrice>
              {formatPrice(Number(product.price) * Number(product.quantity))}
            </ProductPrice>
          </ProductRow>
        ))}
      </ProductList>

      <Summary>
        <SummaryLine>
          <span>Subtotal</span>
          <strong>{formatPrice(subtotal)}</strong>
        </SummaryLine>
        <SummaryLine>
          <span>Taxa de entrega</span>
          <strong>{formatPrice(DELIVERY_FEE_CENTS)}</strong>
        </SummaryLine>
        <SummaryLine>
          <span>Pagamento</span>
          <PaymentBadge $status={order.payment_status}>
            {order.payment_status || 'Pendente'}
          </PaymentBadge>
        </SummaryLine>
        <SummaryLine $isTotal>
          <strong>Total do pedido</strong>
          <strong>{formatPrice(total)}</strong>
        </SummaryLine>
      </Summary>
    </OrderCard>
  );
}

export function MyOrders() {
  const { userInfo } = useUser();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  let storedUser = null;

  try {
    storedUser = JSON.parse(localStorage.getItem('devburger:userData'));
  } catch {
    storedUser = null;
  }

  const isAuthenticated = Boolean(userInfo?.token || storedUser?.token);

  const loadOrders = useCallback(async (silent = false) => {
    if (!silent) {
      setLoading(true);
    }

    try {
      const { data } = await api.get('/orders');
      const receivedOrders = Array.isArray(data) ? data : [];

      setOrders(
        [...receivedOrders].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        ),
      );
      setError(false);
    } catch (requestError) {
      console.error('Erro ao carregar pedidos:', requestError);
      setError(true);
    } finally {
      if (!silent) {
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      return undefined;
    }

    loadOrders();
    const intervalId = window.setInterval(() => loadOrders(true), 15000);

    return () => window.clearInterval(intervalId);
  }, [loadOrders, isAuthenticated]);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Container>
      <Content>
        <header>
          <h1>Meus Pedidos</h1>
          <p>Acompanhe seus pedidos e veja cada etapa da entrega.</p>
        </header>

        {loading && <LoadingMessage>Carregando seus pedidos...</LoadingMessage>}

        {!loading && error && (
          <ErrorMessage role="alert">
            Não foi possível carregar seus pedidos. Tente novamente.
            <RetryButton type="button" onClick={() => loadOrders()}>
              Tentar novamente
            </RetryButton>
          </ErrorMessage>
        )}

        {!loading && !error && orders.length === 0 && (
          <EmptyState>
            <h2>Você ainda não fez nenhum pedido</h2>
            <p>Escolha seus favoritos no cardápio e acompanhe tudo por aqui.</p>
          </EmptyState>
        )}

        {!loading && !error && orders.length > 0 && (
          <section aria-label="Lista de meus pedidos">
            {orders.map((order) => (
              <OrderCardContent key={order.id} order={order} />
            ))}
          </section>
        )}
      </Content>
    </Container>
  );
}
