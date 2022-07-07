import Head from 'next/head'
import Menu from '../../components/admin/Menu'
import TopMenu from '../../components/admin/TopMenu'
import styled from "styled-components";

export default function Index() {
    return (
        <>
            <Head>
                <title>Rádio Crazzy - Painel</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Menu />
            <TopMenu />

            <Content>
awdawdawd


            </Content>

        </>
    )
}

const Content = styled.div`

    position: absolute;
    top: 50px;
    left: 18vw;
    height: calc(100% - 50px);
    width: calc(100vw - 18vw);
    padding: 30px 75px;
`;