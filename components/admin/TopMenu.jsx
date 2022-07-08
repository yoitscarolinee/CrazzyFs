import { BiSearchAlt } from "react-icons/bi";
import { RiSendPlaneLine } from "react-icons/ri";
import { IconContext } from "react-icons/lib";
import styled from "styled-components";
import Link from "next/link";

const Menu = styled.div`
    display: flex;
    width: calc(100vw - 18vw);
    padding: 0 30px;
    height: 50px;
    max-width: calc(100vw - 200px);
    background-color: var(--white);
    position: absolute;
    top: 0;
    left: 18vw;
    -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.15); 
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.15);
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
`;

const Locutor = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--secondary);
`;

const Search = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25vw;
    height: 35px;
    border-radius: 20px;
    background-color: rgba(0,0,0,0.1);
`;

const Form = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 0 0 0 20px;

    input {
        width: 100%;
        height: 100%;
        border: none;
        background-color: transparent;
        color: var(--black);
        font-weight: 500;
        font-family: "Montserrat", sans-serif;
        font-size: 0.8rem;
    }

    button {
        border: none;
        background-color: transparent;
        height: 35px;
        width: 42px;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: 0.3s;
    }
    button:hover {
        background-color: rgba(0,0,0,0.15);
    }

`;

const BtnSite = styled.div`
    display: flex;	
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: rgba(0,0,0,0.8);
    font-size: 0.9rem;
    font-weight: 600;
    background-color: transparent;
    padding: 5px 10px;
    border-radius: 20px;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        background-color: rgba(0,0,0,0.1);
    }
`;

const Flex = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
`;

const TopMenu = (props) => {
    return (<Menu>

        <Flex>
            <Link href="/">
                <BtnSite>

                    <IconContext.Provider value={{ color: "rgba(0,0,0,0.8)", size: "1rem" }}>
                        <RiSendPlaneLine />
                        Ir para o site
                    </IconContext.Provider>
                </BtnSite>
            </Link>

            <Search>

                <Form>

                    <input type="text" placeholder="Procurar..." />
                    <button>
                        <IconContext.Provider value={{ color: "rgba(0,0,0,0.3)", size: "1.2rem" }}>
                            <BiSearchAlt />
                        </IconContext.Provider>
                    </button>

                </Form>

            </Search>
        </Flex>

        <Locutor>

            <div className="avatar">

            </div>

        </Locutor>

    </Menu>);
}

export default TopMenu;