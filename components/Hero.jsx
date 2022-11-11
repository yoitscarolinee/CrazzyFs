import styled from "styled-components";
import Image from 'next/image'
import { IconContext } from "react-icons/lib";
import { AiOutlineReload, AiFillHeart } from 'react-icons/ai';
import { FaHeadphonesAlt, FaPlay } from 'react-icons/fa';
import { useEffect, useState } from "react";

const HeroWrapper = styled.section`

    display: flex;
    align-items: center;
    justify-content: center;
    height: 400px;
    width: 100%;
    background-image: url("./images/Header.png");
    background-size: cover;

    @media (max-width: 1000px) {
        gap: 50px;
    }

    @media (max-width: 700px) {
        flex-direction: column;
        gap: 10px;
    }

    @media (max-width: 600px) {
        height: 500px;
    }
`

const Logo = styled.div`
    width: 450px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    position: relative;
    -webkit-filter: drop-shadow(1px 1px 0 white)
                drop-shadow(-1px 1px 0 white)
                drop-shadow(1px -1px 0 white)
                drop-shadow(-1px -1px 0 white);
    filter: drop-shadow(1px 1px 0 white)
        drop-shadow(-1px 1px 0 white)
        drop-shadow(1px -21x 0 white)
        drop-shadow(-1px -1px 0 white);
        user-select: none;

    @media (max-width: 1000px) {
        width: 50%;
        min-width: 300px;
    }
`

const Player = styled.div`

    width: 250px;
    height: 135px;
    position: absolute;
    right: 100px;

    @media (max-width: 1000px) {
        position: relative;
    }

    @media (max-width: 700px) {
        margin-left: 50%;
    }

`

const Personagem = styled.div`

    width: 80px;
    height: 135px;
    background-color: var(--white);
    border-radius: 5px;
    position: absolute;
    left: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    & .fundo {
        width: 70px;
        height:120px;
        background-color: #f363b454;
        border-radius: 5px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    & .fundo .chao {
        width: 100%;
        height: 85px;
        background-color: #F363B454;
        position: absolute;
    }

    & .fundo .chao .sombra {
        width: 50px;
        height: 20px;
        border-radius: 100%;
        background-color: #49494961;
        position: absolute;
        bottom: -27.5px;
        left: 50%;
        transform: translateX(-50%);
    }

    & .personagem {
        width: 75px;
        height: 130px;
        bottom: 15px;
        position: absolute;
    }

`

const Controles = styled.div`
    width: 250px;
    background-color: var(--white);
    height: 100px;
    top: 20px;
    border-radius 5px;
    position: absolute;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    & .controles {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 70px;
        bottom: 15px;
        left: 100px;
        position: absolute;
    }

    & .nomes {
        font-size: 11px;
        color: var(--main);
        position: absolute;
        left: 100px;
        top: 10px;
    }

    & .locutor {
        font-weight: 700;
        font-size: 12px;
    }

    & .programa {
        font-size: 8px;
        font-weight: 400;
    }

    & .musica {
        font-size: 10px;
        font-weight: 600;
        margin-top: 5px; 
        width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; 
        -webkit-box-orient: vertical;
    }

`

function playpause() {
    console.log('click');
    console.log(audio.volume);
}


const Hero = () => {

    const [locutor, setLocutor] = useState("");
    const [programa, setPrograma] = useState("");
    const [musica, setMusica] = useState("");

    useEffect(() => {
        async function fetchData() {
            let response = await fetch('api/radio')
            let json = await response.json()
            setLocutor(json.locutor);
            setPrograma(json.programa);
            setMusica(json.musica);
        }

        fetchData();

        setTimeout(() => {
            fetchData();
            console.log('[DEBUG] Player atualizado')
        }, 20000);
    });

    return (<HeroWrapper>

        <Logo>
            <Image
                src="/images/logo_hero.png"
                alt="Logo"
                layout='fill'
                objectFit='contain'
                draggable='false'
            />
        </Logo>

        <Player>

            <Controles>

                <div className="nomes">
                    <p className="locutor">{locutor}</p>
                    <p className="programa">{programa}</p>
                    <p className="musica">{musica}</p>
                </div>

                <div className="controles">

                    <IconContext.Provider value={{ color: 'var(--main)', size: '0.8rem' }}>

                        <a onClick={()=>console.log('funcnionando')}><FaPlay /></a>
                        <AiOutlineReload />
                        <FaHeadphonesAlt />
                        <AiFillHeart />

                    </IconContext.Provider>

                </div>

            </Controles>
            <Personagem>


                <div className="fundo">

                    <div className="chao">

                        <div className="sombra"></div>

                    </div>

                </div>

                <div className="personagem">

                    <Image
                        src="/images/manequim.gif"
                        alt="Manequim"
                        layout='fill'
                        objectFit='contain'
                    />

                </div>

            </Personagem>

            <audio id="audio" autoP lay="" preload="auto" src="https://stream2.svrdedicado.org/8316/stream"></audio>

        </Player>

    </HeroWrapper>);
}

export default Hero;
