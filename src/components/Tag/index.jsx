// Importa o componente estilizado 'Container' do arquivo de estilos.
import { Container } from "./styles";

// Define o componente funcional 'Tag' que recebe uma propriedade 'title'.
export function Tag({ title }) {
    // Retorna JSX com o componente estilizado 'Container'.
    return (
        <Container>
            {/* Renderiza o título passado como propriedade. */}
            {title}
        </Container>
    );
}
