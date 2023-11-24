import { FiPlus } from 'react-icons/fi'

// Importa os componentes estilizados do arquivo "./styles"
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

// Importa o componente funcional 'Header' do diretório "../../components"
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"

// Define o componente funcional 'Home'
export function Home(){
    return(
        // Utiliza o componente estilizado 'Container' como o contêiner principal
        <Container>
            {/* Utiliza o componente estilizado 'Brand' para o logotipo */}
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            {/* Utiliza o componente funcional 'Header' */}
            <Header />        

            {/* Utiliza o componente estilizado 'Menu' */}
            <Menu>
                <li><ButtonText title="Todos" isActive/></li>
                <li><ButtonText title="ReactJS"/></li>
                <li><ButtonText title="NodeJS"/></li>
            </Menu>

            {/* Utiliza o componente estilizado 'Search' */}
            <Search>
                {/* Pode adicionar elementos relacionados à pesquisa aqui */}
            </Search>

            {/* Utiliza o componente estilizado 'Content' */}
            <Content>
                {/* Pode adicionar conteúdo principal aqui */}
            </Content>

            {/* Utiliza o componente estilizado 'NewNote' */}
            <NewNote>
                <FiPlus />
                Criar nota
            </NewNote>
        </Container>
    );
}
