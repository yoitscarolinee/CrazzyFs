import Link from 'next/link'
import styled from 'styled-components';
import Image from 'next/image'
import { MdOutlineNotificationsNone } from 'react-icons/md';
import { IconContext } from 'react-icons/lib';
import Button from './Button';



const HeaderWrapper = styled.header`

    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--white);
    height: 52px;
    padding: 0 100px;
    position: relative;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media (max-width: 900px) {
        padding: 0 50px;
    }

    @media (max-width: 600px) {
        padding: 0 20px;
    }
`

const Navbar = styled.nav`

    & ul {
        width: 30vw;
        height: 100%;
        display: flex;
        justify-content: space-around;
    }

    & ul li {
        color: var(--grey);
        font-size: 1rem;
        font-weight: 500;
        transition: 0.3s;
    }

    & ul li:first-child {
        font-weight: 700;
    }

    & ul li:hover {
        color: var(--secondary);
        font-size: 1rem;
    }

    @media (max-width: 900px) {
        display: none;
    }

`

const Logo = styled.div`
    width: 100px;
    height: 35px;
    position: relative;
`

const Flex = styled.div`

    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;    
`

const Notifications = styled.div`

    display: flex;
    align-items: center;

    @media (max-width: 600px) {
        display: none;
    }   

`


const Header = () => {
    return (<HeaderWrapper>

        <Flex>

            <Logo>
                <Image
                    alt='Logo'
                    src='https://i.imgur.com/POqqfi1.png'
                    width="100px"
                    height="100%"
                    layout='fill'
                    objectFit='contain'
                    draggable='false'
                />
            </Logo>


            <Navbar>

                <ul>

                    <li><Link href="#">Inicio</Link></li>
                    <li><Link href="#">Equipe</Link></li>
                    <li><Link href="#">Ouvinte VIP</Link></li>
                    <li><Link href="#">Lella</Link></li>

                </ul>

            </Navbar>


        </Flex>

        <Flex>
            <IconContext.Provider value={{ color: 'var(--secondary)', size: '1.5rem' }}>
                <Notifications>
                    <MdOutlineNotificationsNone />
                </Notifications>

                <Link href="/login">

                    <Button text="Logue aqui"/>

                </Link>
            </IconContext.Provider>

        </Flex>


    </HeaderWrapper>);
}

export default Header;