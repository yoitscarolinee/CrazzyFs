import Image from "next/image";
import { BiBookBookmark, BiHomeAlt, BiMicrophone } from "react-icons/bi";
import { AiOutlineUser, AiOutlineStar, AiOutlineFileText, AiOutlineMessage, AiFillSound } from "react-icons/ai";
import { RiFolderAddLine, RiSoundModuleFill, RiUserSearchLine } from "react-icons/ri";
import { FiSettings, FiServer, FiPower, FiAlertCircle, FiUsers } from "react-icons/fi";
import { BiBlock, BiPaint, BiBadgeCheck } from "react-icons/bi";
import { TbClockOff, TbLivePhoto, TbClock } from "react-icons/tb";
import { GiBubbles } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import styled from "styled-components";
import MenuItem from "./MenuItem";
import MenuItemDropdown from "./MenuItemDropdown";
import NotificationBox from "./NotificationBox";

const MenuBar = styled.div`
    width: 18vw;
    min-width: 200px;
    background-color: #343538;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    user-select: none;
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
                uploads: {
                    link: 'uploads',
                    text: 'Uploads',
                    icon: <RiFolderAddLine />,
                },
                configuracoes: {
                    link: 'configuracoes',
                    text: 'Configurações',
                    icon: <FiSettings />,
                }
            }
        }
    ];

    const administracao = [
        {
            icon: <AiOutlineStar />,
            text: "Administração",
            options: {
                alertas: {
                    link: 'alertas',
                    text: 'Alertas no Site',
                    icon: <FiAlertCircle />,
                },
                avisos: {
                    link: 'avisos',
                    text: 'Avisos',
                    icon: <AiOutlineMessage />,
                },
                configuracoes: {
                    link: 'configradio',
                    text: 'Configurações da Rádio',
                    icon: <FiSettings />,
                },
                blacklist: {
                    link: 'blacklist',
                    text: 'Lista Negra',
                    icon: <BiBlock />,
                },
                equipe: {
                    link: 'equipe',
                    text: 'Membros da Equipe',
                    icon: <FiUsers />,
                },
                temaSite: {
                    link: 'temasite',
                    text: 'Tema do site',
                    icon: <BiPaint />,
                },
                vinhetas: {
                    link: 'vinhetas',
                    text: 'Vinhetas',
                    icon: <RiSoundModuleFill />,
                }
            }
        }
    ];

    const coordenacao = [
        {
            icon: <AiOutlineStar />,
            text: "Coordenação",
            options: {
                programação: {
                    link: 'desmarcarprogramacao',
                    text: 'Desmarcar programação',
                    icon: <TbClockOff />,
                },
                radio: {
                    link: 'desmarcarradio',
                    text: 'Desmarcar horarios rádio',
                    icon: <TbClockOff />,
                }
            }
        }
    ];

    const moderacao = [
        {
            icon: <AiOutlineStar />,
            text: "Moderação",
            options: {
                emblemas: {
                    link: 'emblemas',
                    text: 'Emblemas de Usuário',
                    icon: <BiBadgeCheck />,
                },
                timeline: {
                    link: 'timeline',
                    text: 'Timeline',
                    icon: <GiBubbles />,
                },
                registrados: {
                    link: 'usuarios',
                    text: 'Usuários Registrados',
                    icon: <RiUserSearchLine />,
                }
            }
        }
    ];

    const portalNoticias = [
        {
            icon: <AiOutlineFileText />,
            text: "Portal de Notícias",
            options: {
                uploads: {
                    link: 'uploads',
                    text: 'Uploads',
                    icon: <RiFolderAddLine />,
                },
                configurações: {
                    link: 'configuracoes',
                    text: 'Uploads',
                    icon: <FiSettings />,
                }
            }
        }
    ];

    const locucao = [
        {
            icon: <BiMicrophone />,
            text: "Locução",
            options: {
                live: {
                    link: 'aovivo',
                    text: 'Entrar no Ar',
                    icon: <TbLivePhoto />,
                },
                horarios: {
                    link: 'horarios',
                    text: 'Horarios',
                    icon: <TbClock />,
                },
                vinhetas: {
                    link: 'vinhetas',
                    text: 'Vinhetas',
                    icon: <AiFillSound />,
                }
            }
        }
    ];

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
            <IconContext.Provider value={{ color: 'var(--white)', size: '1.2rem', style: { verticalAlign: 'middle' } }}>
                <MenuItem link="" text="Homepage" icon={<BiHomeAlt />} />
                <MenuItemDropdown objects={dados[0]} size='2' />
                <MenuItemDropdown objects={administracao[0]} size='7' />
                <MenuItemDropdown objects={coordenacao[0]} size='2' />
                <MenuItemDropdown objects={moderacao[0]} size='2' />
                <MenuItemDropdown objects={portalNoticias[0]} size='2' />
                <MenuItemDropdown objects={locucao[0]} size='2' />
                <MenuItem link="logs" text="Logs" icon={<FiServer />} />
                <MenuItem link="changelog" text="Changelog" icon={<BiBookBookmark />} />
                <MenuItem link="../api/auth/logout" text="Deslogar-se" icon={<FiPower />} />
            </IconContext.Provider>

        </MenuBar>

    );
}

export default Menu;