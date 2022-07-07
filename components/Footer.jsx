import Link from 'next/link'
import styled from 'styled-components';
import Image from 'next/image'

const FooterWrapper = styled.section`
    width: 100vw;
    height: 100px;
    padding: 0 130px;
    color: var(--white);
    background-image: url("/images/footer.png");
    background-size: cover;
    font-size: 11px;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & .logo {
        width: 130px;
        height: 75px;
        position: relative;
    }
`

const Flex = styled.div`

    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
`

const Nav = styled.nav`
    text-align: right;
    font-size: 9px;

    & ul {
    }

`

const ano = new Date().getFullYear();

const Footer = () => {
    return (
        <FooterWrapper>
            <div className="text">
                <div className="copy">
                    Copyright &copy; CZ FãSite {ano}. Todos os direitos reservados a este site da web.
                </div>
                <p className="creditos">
                    Feito pela Carolzika. Desenhado por Weask.
                </p>
            </div>
            <Flex>
                <Nav>
                    <ul>
                        <li><Link href="#">Sobre Nós</Link></li>
                        <li><Link href="#">Equipe</Link></li>
                        <li><Link href="#">Discord</Link></li>
                        <li><Link href="#">Termos e discussão</Link></li>
                    </ul>
                </Nav>
                
                <div className='logo'>
                    <Image
                        src="/images/logo_brilho.png"
                        alt="Logo"
                        layout='fill'
                        objectFit='contain'
                    />
                </div>
            </Flex>

        </FooterWrapper >
    );
}

export default Footer;