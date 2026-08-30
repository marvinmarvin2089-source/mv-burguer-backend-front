import { Container } from "./styles";

export function Footer() {
    return (
        <Container>
            <p>
                Desenvolvido por Vinícius <span>•</span> 2026
                <span className="separator"> • </span>
                Todos os direitos reservados
            </p>
        </Container>
    );
}