import Image from "next/image";
import styled from "styled-components";
import { CgLogIn } from "react-icons/cg";
import { MdLock } from "react-icons/md";
import { IconContext } from "react-icons";
import { useState } from "react";
import Head from 'next/head'
import axios from "axios";
import { useRouter } from "next/router";

const Section = styled.section`

    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--white);
    background-image: url("./images/Header.png");
    background-size: cover;
    gap: 50px;

`;

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
`

const Texto = styled.div`
    text-align: center;
    user-select: none;
`;

const Form = styled.form`

    display: flex;
    align-items: center;
    width: 50%;
    height: 50px;
    background-color: #560182;
    border-radius: 10px;
    border: 2px solid var(--secondary);

    input {
        width: 100%;
        height: 100%;
        border: none;
        background-color: transparent;
        color: var(--white);
    }

    input::placeholder {
        color: #fff !important;
        opacity: 0.5;
    }

    button {
        width: 50px;
        height: 50px;
        background-color: var(--secondary);
        border-radius: 0 10px 10px 0;
        border: none;
        cursor: pointer;
    }

    .icone {
        width: 50px;
        opacity: 0.5;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

`;

const Error = styled.div`
    display: ${(props) => (props.isOn === true ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
    backdrop-filter: blur(3px);
    transition: 0.3s;

    .box {
        width: 300px;
        height: 150px;
        background-color: var(--white);
        color: var(--black);
        border-radius: 5px;
        border: 2px solid var(--secondary);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px;
        background-image: url("./images/bg_grid.png");
        font-weight: 600;
    }

    button {
        padding: 5px 35px;
        border: 2px solid var(--secondary);
        border-radius: 5px;
        background-color: var(--white);
        color: var(--secondary);
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
    }

    button:hover {
        background-color: var(--secondary);
        color: var(--white);
    }

`;


const Erro = ({ isOn, handle }) => {
    return (<Error isOn={isOn}>

        <div className="box">

            Senha incorreta.

            <button onClick={handle}>Ok</button>

        </div>

    </Error>)
}



const Acesso = () => {

    const router = useRouter();

    const [isOn, setIsOn] = useState(false);
    const [password, setPassword] = useState("");

    const handleToggle = () => setIsOn(prev => !prev)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const credentials = {
            password
        };

        const user = await axios.post('/api/auth/login', credentials);

        if(user.status === 200) {
            router.push("/");
        }

    }


    return (<>

        <Head>
            <title>Rádio Crazzy - Sua diversão!</title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon.png" />
        </Head>

        <Section>

            <Erro isOn={isOn} handle={handleToggle} />

            <Logo>
                <Image
                    src="/images/logo_hero.png"
                    alt="Logo"
                    layout='fill'
                    objectFit='contain'
                    draggable='false'
                />
            </Logo>

            <Texto>
                <h2>Nosso site ainda não está pronto...</h2>
                <h3>Mas não falta muito!</h3>
            </Texto>

            <Form 
            onSubmit={(e) => handleSubmit(e)}
            >

                <div className="icone">
                    <IconContext.Provider value={{ color: "var(--white)", size: '1.2rem', style: { verticalAlign: 'middle' } }}>
                        <MdLock />
                    </IconContext.Provider>
                </div>

                <input
                type="password"
                placeholder="Acesso ao desenvolvimento..."
                onChange={(e) => setPassword(e.target.value)}
                />
                <IconContext.Provider value={{ color: "var(--white)", size: '1.5rem', style: { verticalAlign: 'middle' } }}>
                    <button><CgLogIn /></button>
                </IconContext.Provider>

            </Form>

        </Section>
    </>);
}

export default Acesso;