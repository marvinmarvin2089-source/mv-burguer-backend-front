import { useEffect, useState } from "react";
import {
    Container,
    Content,
    IconContainer,
     BackButton,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

const SuccessIcon = (
    <svg
        width="32"
        height="32"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.4695 0.232963C15.8241 0.561287 15.8454 1.1149 15.5171 1.46949L6.14206 11.5945C5.97421 11.765 5.75391 11.864 5.52177 11.8732C5.28963 11.8824 5.06152 11.8011 4.89073 11.6436L0.51573 7.61232C0.160451 7.28495 0.137827 6.7314 0.465198 6.37612C0.79257 6.02084 1.34612 5.99822 1.7014 6.32559L5.43445 9.76586L14.2329 0.280571C14.5612 -0.0740208 15.1149 -0.095361 15.4695 0.232963Z"
            fill="currentColor"
        />
    </svg>
);

const InfoIcon = (
    <svg
        width="32"
        height="32"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M8 7V12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />

        <circle
            cx="8"
            cy="4"
            r="1"
            fill="currentColor"
        />
    </svg>
);

const ErrorIcon = (
    <svg
        width="32"
        height="32"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M4 4L12 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />

        <path
            d="M12 4L4 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);

const STATUS_CONTENT_MAP = {
    succeeded: {
        title: "Pedido confirmado!",
        text: "Seu pagamento foi aprovado com sucesso! 🎉",
        icon: SuccessIcon,
        color: "#22c55e",
    },

    processing: {
        title: "Pagamento em processamento",
        text: "Pagamento sendo processado...",
        icon: InfoIcon,
        color: "#f59e0b",
    },

    requires_payment_method: {
        title: "Pagamento não concluído",
        text: "Pagamento não realizado. Tente novamente.",
        icon: ErrorIcon,
        color: "#ef4444",
    },

    error: {
        title: "Erro no pagamento",
        text: "Erro ao verificar o pagamento.",
        icon: ErrorIcon,
        color: "#ef4444",
    },

    default: {
        title: "Status do pagamento",
        text: "Não foi possível confirmar o pagamento.",
        icon: ErrorIcon,
        color: "#ef4444",
    },
};

export function CompletePayment() {
    const navigate = useNavigate();
    const [paymentStatus, setPaymentStatus] = useState(null);

    useEffect(() => {
        async function checkPayment() {
            const paymentIntentId = new URLSearchParams(
                window.location.search
            ).get("payment_intent");

            if (!paymentIntentId) {
                setPaymentStatus("error");
                return;
            }

            try {
                const { data } = await api.get(`/payments/${paymentIntentId}`);
                setPaymentStatus(data.status);
            } catch (error) {
                console.error("ERRO AO CONSULTAR PAGAMENTO:", error);
                setPaymentStatus("error");
            }
        }

        checkPayment();
    }, []);
    
    const statusContent =
        STATUS_CONTENT_MAP[paymentStatus] ||
        STATUS_CONTENT_MAP.default;

   return (
    <Container>
        <Content>
            <h1>{statusContent.title}</h1>

            {paymentStatus && statusContent.icon && (
                <IconContainer $color={statusContent.color}>
                    {statusContent.icon}
                </IconContainer>
            )}

            <h2>
                {paymentStatus
                    ? statusContent.text
                    : "Carregando..."}
            </h2>

            {paymentStatus === "succeeded" && (
                <BackButton onClick={() => navigate("/cardapio")}>
                    Voltar ao Cardápio
                </BackButton>
            )}
        </Content>
    </Container>
);
}
