import Cabecalho from "../componentes/Cabecalho";
import Conteudo from "../componentes/Conteudo";
import Menu from "../componentes/Menu";

function Home (){
    return (
        <>
            <Cabecalho/>
            <Conteudo>
                <Menu/>
            </Conteudo>
        </>
    )
}

export default Home;