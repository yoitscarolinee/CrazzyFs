import Image from "next/image";
import { BiBookBookmark, BiHomeAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { RiFolderAddLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io";
import { IconContext } from "react-icons/lib";
import styled from "styled-components";
import MenuItem from "./MenuItem";
import MenuItemDropdown from "./MenuItemDropdown";
import NotificationBox from "./NotificationBox";

const MenuBar = styled.div`
    width: 18vw;
    min-width: 200px;
    background-color: #343538;
    height: 100vh;
`;

const Perfil = styled.div`
    width: 100%;
    height: 150px;
    border-bottom: 3px solid rgba(255, 255, 255, 0.2);
    position: relative;
    color: var(--white);

    & .bgImg {
        opacity: 0.1;
        width: 100%;
        height: 100%;
    }

    & .perfilContent {
        position: absolute;
        width: 100%;
        z-index: 2;
        padding: 20px;
    }

    & .notificacoes {
        position: absolute;
        right: 0;
    }

    & .pfp {
        position: relative;
        width: 60px;
        margin-bottom: 10px;
        height: 60px;
        border-radius: 50%;
        border: 2px solid var(--white);
    }

    & .pfp img {
        border-radius: 50%;
    }
`;

const Menu = () => {

    const dados = [
        {
            icon: <AiOutlineUser />,
            text: "Meus dados",
            options: {
                configurações: {
                    icon: <IoSettingsOutline />,
                    link: 'configuracoes'
                },
                uploads: {
                    icon: <RiFolderAddLine />,
                    link: 'uploads'
                }
            }
        }
    ]

    return (

        <MenuBar>

            <Perfil>

                <div className="perfilContent">

                    <NotificationBox className="notificacoes" />

                    <div className="pfp">

                        <Image
                            src="/painel/usuarios/carol.jpg"
                            alt="Foto de perfil"
                            layout='fill'
                            objectFit='cover'
                            draggable="false"
                        />

                    </div>

                    <h3>Usuario</h3>
                    <p>Cargo</p>

                </div>

                <div className="bgImg">

                    <Image
                        src="/painel/usuarios/carol.jpg"
                        alt="Background perfil"
                        layout='fill'
                        objectFit='cover'
                        draggable="false"
                    />

                </div>

            </Perfil>
            <IconContext.Provider value={{ color: 'var(--white)', size: '1.2rem' }}>
                <MenuItem link="" text="Homepage" icon={<BiHomeAlt />} />
                <MenuItemDropdown objects={dados[0]} />
                <MenuItem link="changelog" text="Changelog" icon={<BiBookBookmark />} />
            </IconContext.Provider>

        </MenuBar>

    );
}

export default Menu;