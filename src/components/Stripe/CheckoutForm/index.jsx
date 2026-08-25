import { useState } from "react";
import {
    PaymentElement,
    useElements,
    useStripe,
} from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { Container } from "./styles";
import { useCart } from "../../../hooks/CartContext";
import { api } from "../../../services/api";

export function CheckoutForm() {
    const { cartProducts, clearCart } = useCart();

    const navigate = useNavigate();

    const stripe = useStripe();
    const elements = useElements();

    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setLoading(true);
        setErrorMessage("");

        try {
            const { error, paymentIntent } = await stripe.confirmPayment({
                elements,
                confirmParams: {
                    return_url: `${window.location.origin}/complete-payment`,
                },
                redirect: "if_required",
            });

            if (error) {
                setErrorMessage(error.message);
                toast.error(error.message);
                return;
            }

            console.log("PAYMENT INTENT:", paymentIntent);

            if (paymentIntent?.status === "succeeded") {
                const products = cartProducts.map((product) => {
                    return {
                        id: product.id,
                        quantity: product.quantity,
                    };
                });

                const { status } = await api.post(
                    "/orders",
                    { products, paymentIntentId: paymentIntent.id },
                    {
                        validateStatus: () => true,
                    }
                );

                if (status === 200 || status === 201) {
                    toast.success("Pedido realizado com sucesso! 👌");

                    clearCart();

                    navigate(
                        `/complete-payment?payment_intent=${paymentIntent.id}`
                    );
                } else if (status === 409) {
                    toast.error(
                        "Falha ao realizar pedido! Tente novamente. 😔"
                    );
                } else {
                    throw new Error("Erro ao realizar pedido");
                }
            } else {
                toast.error("Pagamento não foi concluído.");
            }
        } catch (error) {
            console.error(error);

            toast.error("😧 Falha no Sistema! Tente novamente");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <PaymentElement />

                {errorMessage && (
                    <p className="error-message">{errorMessage}</p>
                )}

                <button disabled={!stripe || loading}>
                    {loading ? "Processando..." : "Pagar"}
                </button>
            </form>
        </Container>
    );
}
