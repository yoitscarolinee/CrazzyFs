import styled from "styled-components";

const ButtonDiv = styled.div`
    padding: 5px 30px;
    background-color: var(--main);
    color: var(--secondary);
    font-weight: 600;
    font-size: 15px;
    border-radius: 5px;
    margin-left: 10px;
    cursor: pointer;
    border: 2px solid rgba(0,0,0,0);
    transition: 0.3s;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    &:hover{
        border: 2px solid var(--secondary);
        background-color: transparent;
    }
`

const Button = (props) => {
    return ( <ButtonDiv>
        <p>{props.text}</p>
    </ButtonDiv> );
}
 
export default Button;