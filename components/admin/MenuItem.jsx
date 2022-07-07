import Link from 'next/link'
import { FaMitten } from "react-icons/fa";
import styled from 'styled-components';

const Item = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    align-items: center;
    justify-content: left;
    padding: 0 20px;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.1);
    transition: 0.3s;
    border-bottom: 1px solid var(--grey);
    &:hover {
        background-color: rgba(255, 255, 255, 0);
    }
    & .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        color: var(--white);
        font-size: 1.5rem;
        margin-right: 10px;
    }
    & .text {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.9rem;
        font-weight: 500;
        color: var(--white);
    }

`;

const MenuItem = (props) => {

    let link = "/painel/" + props.link;

    return (<div>
        <Link href={link}>

            <Item>

                <div className="icon">

                    {props.icon}

                </div>

                <div className="text">
                    <p>{props.text}</p>
                </div>


            </Item>

        </Link>
    </div>);
}

export default MenuItem;