import styled from "styled-components";
import Image from 'next/image'
import { MdPeopleAlt } from 'react-icons/md';
import { IconContext } from "react-icons/lib";

const Wrapper = styled.section`
    width: 100vw;
    height: 475px;
    background-color: var(--white);
    display: flex;
    align-items:center;
    justify-content: center;
    background-image: url("./images/bg_grid.png");

    @media (max-width: 600px) {
        height: 550px;
    }
`

const GridWrapper = styled.div`
    display: grid;
    max-width: 1200px;
    min-width: 900px;
    grid-template-columns: 400px 1fr 222.5px;
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 35px;
    grid-row-gap: 35px;
    width: calc(100vw - 200px);
    height: 450px;
    margin-top: -60px;

    & > div {
        -webkit-box-shadow: 0px 4px 0px 0px var(--main); 
        box-shadow: 0px 4px 0px 0px var(--main);
        border-radius: 5px;
        background-color: var(--white);
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.35));
        transition: 0.3s;
        color: var(--white);
    }

    & > div:hover {
        margin-top: -10px;
    }

    & .maior {
        grid-row: span 2;
        border-radius: 5px;
    }

    & .fade {
        width: 100%;
        height: 100%;
        background-color: #CBCDFF;
        opacity: 0.5;
        border-radius: 5px;
        position: absolute;
        top: 0;
        left: 0;
    }

    & .menor {
    }

    & .slider {
    
        color: var(--secondary);
        padding: 15px

    }

    & .slider h3{
        margin-left: 5px;
        font-weight: 600;
    }

    & .discord {
    }

    & .gridImg {
        border-radius: 5px;
    }

    & h1 {
        position: absolute;
        width: 100%;
        padding: 20px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.35));
        font-weight: 800;
    }

    @media(max-width: 970px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(6, 1fr);
        grid-column-gap: 15px;
        grid-row-gap: 15px;
        min-width: 600px;

        & .maior {
            grid-area: 1 / 1 / 5 / 3;
        }

        & .menor {
            grid-area: 1 / 3 / 3 / 5;
        }

        & .menor2 {
            grid-area: 3 / 3 / 5 / 5;
        }

        & .slider {
            grid-area: 5 / 1 / 7 / 3;
        }

        & .discord {
            grid-area: 5 / 3 / 7 / 5;
        }
    }

    @media(max-width: 600px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(6, 1fr);
        grid-column-gap: 15px;
        grid-row-gap: 15px;
        min-width: 80%;
        height: 530px;

        & .maior {
            grid-area:  1 / 1 / 2 / 2;
        }

        & .menor {
            grid-area: 2 / 1 / 3 / 2;
        }

        & .menor2 {
            grid-area: 3 / 1 / 4 / 2;
        }

        & .slider {
            grid-area: 4 / 1 / 6 / 2;
        }

        & .discord {
            grid-area: 6 / 1 / 7 / 2;
        }
    }
`

const Flex = styled.div`

    display: flex;
    align-items: center;
`

const Grid = () => {
    return (
        <Wrapper>
            <GridWrapper>
                <div className="maior">

                    <Image
                        src="/grid/grid1.jpg"
                        alt="Logo"
                        layout='fill'
                        objectFit='cover'
                        className="gridImg"
                    />

                    <div className="fade"></div>

                    <h1>Manutenção na Rádio Crazzy</h1>

                </div>
                <div className="menor">



                    <Image
                        src="/grid/grid2.png"
                        alt="Logo"
                        layout='fill'
                        objectFit='cover'
                        className="gridImg"
                    />

                    <div className="fade"></div>

                    <h1>Vagas na Equipe</h1>

                </div>
                <div className="slider">
                    <Flex>
                        <IconContext.Provider value={{ color: 'var(--main)', size: '1.5rem' }}>
                            <MdPeopleAlt /><h3> Parceiros</h3>
                        </IconContext.Provider>
                    </Flex>
                </div>
                <div className="menor menor2">



                    <Image
                        src="/grid/grid3.png"
                        alt="Logo"
                        layout='fill'
                        objectFit='cover'
                        className="gridImg"
                    />

                    <div className="fade"></div>

                    <h1>Sobre nós</h1>

                </div>
                <div className="discord">



                    <Image
                        src="/grid/discord.png"
                        alt="Logo"
                        layout='fill'
                        objectFit='cover'
                        className="gridImg"
                    />

                    <div className="fade"></div>

                    <h1>Discord</h1>

                </div>
            </GridWrapper>
        </Wrapper>
    );
}

export default Grid;