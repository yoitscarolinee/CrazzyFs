import Head from 'next/head'
import Menu from '../../components/admin/Menu'
import TopMenu from '../../components/admin/TopMenu'
import styled from "styled-components";
import { TbUsers } from "react-icons/tb";
import { RiUserStarLine } from "react-icons/ri";
import { AiOutlineFileText } from "react-icons/ai";
import Separador from '../../components/Separador';
import { IconContext } from 'react-icons/lib';

export default function Index() {

    const user = "usuario";
    const fs = "site"

    function capitalize(texto) {
        return texto.charAt(0).toUpperCase() + texto.slice(1);
    }

    return (
        <>
            <Head>
                <title>Rádio {capitalize(fs)} - Painel</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Menu />
            <TopMenu />

            <Content>

                <Texto>Boa tarde! <span>{capitalize(user)}</span> seja bem vindo(a) ao painel <span>{capitalize(fs)}</span></Texto>

                <Separador />
                <IconContext.Provider value={{ color: 'var(--grey)', size: '1rem', style: { verticalAlign: 'middle' } }}>
                    <InfoBox>

                        <InfoBoxTitle>

                            <TbUsers />

                            <p>Membros do Site</p>

                        </InfoBoxTitle>

                        <InfoBoxTitle>

                            <RiUserStarLine />

                            <p>Membros da Equipe</p>

                        </InfoBoxTitle>

                        <InfoBoxTitle>

                            <AiOutlineFileText />

                            <p>Portal de Noticias</p>

                        </InfoBoxTitle>

                        <InfoBoxContent>

                            <p><span>23</span> membros registrados no site</p>

                        </InfoBoxContent>

                        <InfoBoxContent>

                            <p><span>23</span> membros registrados na equipe</p>

                        </InfoBoxContent>

                        <InfoBoxContent>

                            <p><span>23</span> noticias publicadas</p>

                        </InfoBoxContent>

                        <InfoBoxContent>

                            <p><span>23</span> membros onlines no site</p>

                        </InfoBoxContent>

                        <InfoBoxContent>

                            <p><span>23</span> membros onlines no painel</p>

                        </InfoBoxContent>

                        <InfoBoxContent>

                            <p><span>23</span> comentarios publicados</p>

                        </InfoBoxContent>

                    </InfoBox>
                </IconContext.Provider>

                <Separador />


            </Content>

        </>
    )
}

const InfoBoxContent = styled.div`

    width: 100%;
    height: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 0.7rem;
    font-weight: 500;
    background-color: var(--white);
    padding: 5px 10px;
    border-radius: 7px;
    white-space: nowrap;
    box-shadow:
  0px 0.9px 2.2px rgba(0, 0, 0, 0.008),
  0px 2.1px 5.3px rgba(0, 0, 0, 0.012),
  0px 4px 10px rgba(0, 0, 0, 0.015),
  0px 7.1px 17.9px rgba(0, 0, 0, 0.018),
  0px 13.4px 33.4px rgba(0, 0, 0, 0.022),
  0px 32px 80px rgba(0, 0, 0, 0.03)
;

    span {
        font-weight: 600;
    }

`;

const InfoBoxTitle = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 10px;
    user-select: none;
`;

const InfoBox = styled.div`

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 10px;
    width: 100%;
    height: 150px;
    font-size: 0.8rem;
    font-weight: 600;
    max-width: 900px;
    color: var(--grey);

`;

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
    min-height: 100vh;
`;