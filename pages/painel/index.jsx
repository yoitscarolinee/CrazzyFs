import Head from 'next/head'
import Menu from '../../components/admin/Menu'
import TopMenu from '../../components/admin/TopMenu'
import styled from "styled-components";
import Separador from '../../components/Separador';

export default function Index() {

    const user = "Carol";
    const fs = "Flopados"

    return (
        <>
            <Head>
                <title>Rádio {fs} - Painel</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Menu />
            <TopMenu />

            <Content>

                <Texto>Boa tarde! <span>{user}</span> seja bem vindo(a) ao painel da <span>{fs}</span></Texto>

                <Separador />

            </Content>

        </>
    )
}

const Texto = styled.div`
    font-size: 1.1rem;
    color: var(--grey);

    span {
        font-weight: 600;
    }
`;

const Content = styled.div`

    position: absolute;
    top: 50px;
    left: 18vw;
    height: calc(100% - 50px);
    width: calc(100vw - 18vw);
    padding: 30px 75px;
    background-color: #E2E3DE;
`;