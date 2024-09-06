import Rodape from '../componentes/Rodape'
import Logo from '../componentes/Logo'
import Titulo from '../componentes/Titulo'
import InputEmail from '../componentes/InputEmail'
import InputSenha from '../componentes/InputSenha'
import Botao from '../componentes/Botao'
import Link from '../componentes/Link'
import Conteudo from '../componentes/Conteudo'

function Login (){
    return (
        <>
            <Conteudo>
                <Logo imagem="https://www.svgrepo.com/show/411955/learn.svg" texto="Logo da Aplicação"/>
                <Titulo texto="Aluno Online" estilo=""/>
                <InputEmail/>
                <InputSenha/>
                <Botao texto="Entrar"/>
                <Link texto="Esqueceu a Senha?"/>
            </Conteudo>
            <Rodape/>
        </>
    )
}

export default Login