import styled from 'styled-components';
import Background from '../../assets/bg 1.svg';

export const Container = styled.main`
  min-height: calc(100vh - 72px);
  padding: 42px 24px 72px;
  background: linear-gradient(rgba(255, 255, 255, 0.76), rgba(255, 255, 255, 0.76)),
    url('${Background}');
`;

export const Content = styled.div`
  width: 100%;
  max-width: 980px;
  margin: 0 auto;

  > header {
    margin-bottom: 28px;
    text-align: center;

    h1 {
      margin: 0 0 8px;
      color: ${(props) => props.theme.darkPurple};
      font-size: clamp(28px, 4vw, 38px);
    }

    p {
      margin: 0;
      color: ${(props) => props.theme.darkGray};
    }
  }
`;

export const OrderCard = styled.article`
  margin-bottom: 24px;
  padding: clamp(18px, 3vw, 28px);
  border-radius: 18px;
  background: ${(props) => props.theme.white};
  box-shadow: 0 8px 24px rgba(54, 54, 54, 0.12);
`;

export const OrderHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;

  h2 {
    margin: 0 0 6px;
    color: ${(props) => props.theme.mainBlack};
    font-size: 22px;
  }
`;

export const OrderMeta = styled.span`
  color: ${(props) => props.theme.darkGray};
  font-size: 14px;
`;

const badge = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 30px;
  padding: 5px 12px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 700;
`;

export const StatusBadge = styled.span`
  ${badge}
  color: ${(props) =>
    props.$status === 'Cancelado' ? props.theme.red : props.theme.darkPurple};
  background: ${(props) =>
    props.$status === 'Cancelado' ? '#ffe8e3' : '#f0e5f4'};
`;

export const PaymentBadge = styled.span`
  ${badge}
  color: ${(props) => {
    if (props.$status === 'Aprovado') return '#3f7611';
    if (props.$status === 'Falhou') return props.theme.red;
    return '#8a5a00';
  }};
  background: ${(props) => {
    if (props.$status === 'Aprovado') return '#e9f6dc';
    if (props.$status === 'Falhou') return '#ffe8e3';
    return '#fff4d6';
  }};
`;

export const Timeline = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 30px 0 34px;

  > div {
    position: relative;
    display: flex;
    align-items: flex-start;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 12px;
    margin: 26px 0;

    > div {
      min-height: 42px;
      align-items: center;
    }
  }
`;

export const TimelineStep = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: ${(props) => {
    if (props.$isCurrent) return props.theme.darkPurple;
    if (props.$isCompleted) return props.theme.gren;
    return props.theme.lightGray;
  }};
  font-size: 12px;
  font-weight: ${(props) => (props.$isCurrent ? 800 : 600)};
  text-align: center;

  .dot {
    display: grid;
    width: 30px;
    height: 30px;
    place-items: center;
    border: 2px solid currentColor;
    border-radius: 50%;
    background: ${(props) => props.theme.white};
    font-size: 13px;
  }

  ${(props) =>
    props.$isCurrent &&
    `
      .dot {
        color: ${props.theme.white};
        border-color: ${props.theme.purple};
        background: ${props.theme.purple};
        box-shadow: 0 0 0 5px #f0e5f4;
      }
    `}

  @media (max-width: 640px) {
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    text-align: left;

    .label {
      flex: 1;
    }
  }
`;

export const TimelineLine = styled.span`
  position: absolute;
  top: 14px;
  left: 50%;
  width: 100%;
  height: 3px;
  background: ${(props) =>
    props.$isCompleted ? props.theme.gren : props.theme.lightGray};

  @media (max-width: 640px) {
    top: 30px;
    left: 14px;
    width: 3px;
    height: calc(100% + 12px);
  }
`;

export const CancelledState = styled.div`
  margin: 26px 0 30px;
  padding: 14px;
  border: 1px solid #ffc4b8;
  border-radius: 10px;
  color: ${(props) => props.theme.red};
  background: #fff3f0;
  font-weight: 800;
  text-align: center;
`;

export const ProductList = styled.div`
  h3 {
    margin: 0 0 14px;
    color: ${(props) => props.theme.mainBlack};
    font-size: 17px;
  }
`;

export const ProductRow = styled.div`
  display: grid;
  grid-template-columns: 58px 1fr auto auto;
  align-items: center;
  gap: 14px;
  padding: 12px 0;
  border-top: 1px solid ${(props) => props.theme.secondWhite};
`;

export const ProductImage = styled.img`
  width: 58px;
  height: 58px;
  object-fit: contain;
  border-radius: 10px;
  background: ${(props) => props.theme.secondWhite};
`;

export const ProductInfo = styled.div`
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 4px;

  strong {
    overflow: hidden;
    color: ${(props) => props.theme.mainBlack};
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  span {
    color: ${(props) => props.theme.darkGray};
    font-size: 13px;
  }
`;

export const ProductQuantity = styled.span`
  color: ${(props) => props.theme.darkGray};
  font-weight: 700;
  white-space: nowrap;
`;

export const ProductPrice = styled.strong`
  min-width: 95px;
  color: ${(props) => props.theme.mainBlack};
  text-align: right;

  @media (max-width: 560px) {
    min-width: auto;
  }
`;

export const Summary = styled.div`
  margin-top: 18px;
  padding-top: 16px;
  border-top: 1px solid ${(props) => props.theme.lightGray};
`;

export const SummaryLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: ${(props) => (props.$isTotal ? '14px' : '0')};
  color: ${(props) => props.theme.darkGray};

  ${(props) =>
    props.$isTotal &&
    `
      color: ${props.theme.mainBlack};
      font-size: 18px;
    `}
`;

export const LoadingMessage = styled.p`
  padding: 40px;
  color: ${(props) => props.theme.darkGray};
  text-align: center;
`;

export const EmptyState = styled.div`
  padding: 48px 24px;
  border-radius: 18px;
  background: ${(props) => props.theme.white};
  box-shadow: 0 8px 24px rgba(54, 54, 54, 0.1);
  text-align: center;

  h2 {
    margin: 0 0 8px;
    color: ${(props) => props.theme.darkPurple};
    font-size: 22px;
  }

  p {
    margin: 0;
    color: ${(props) => props.theme.darkGray};
  }
`;

export const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px;
  border-radius: 14px;
  color: ${(props) => props.theme.red};
  background: #fff3f0;
  text-align: center;

  @media (max-width: 560px) {
    flex-direction: column;
  }
`;

export const RetryButton = styled.button`
  padding: 9px 14px;
  border: 0;
  border-radius: 8px;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.purple};
  cursor: pointer;
  font-weight: 700;
`;
