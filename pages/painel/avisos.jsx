import { Head } from "next/document";
import styled from "styled-components";
import Menu from "../../components/admin/Menu";
import TopMenu from "../../components/admin/TopMenu";

const Avisos = () => {

    const fs = "site"

    function capitalize(texto) {
        return texto.charAt(0).toUpperCase() + texto.slice(1);
    }

    return (<>

        <Head>
            <title>Rádio {capitalize(fs)} - Avisos</title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Menu />
        <TopMenu />

        <Content>



        </Content>

    </>);
}

const Content = styled.div`

    position: absolute;
    top: 50px;
    left: 18vw;
    height: calc(100% - 50px);
    width: calc(100vw - 18vw);
    padding: 30px 75px;
    background-color: #E2E3DE;
    min-height: 100vh;
`;

export default Avisos;