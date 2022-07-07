import styled, { css } from "styled-components";
import { MdOutlineNotificationsNone, MdOutlineNotificationsActive } from 'react-icons/md';
import { IconContext } from "react-icons/lib";
import { useEffect, useState } from "react";

const NotificationButton = styled.div`
    background-color: var(--white);
    border-radius: 5px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    float: right;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.5);
    transition: 0.3s;

    &:hover {
        border: 1px solid var(--secondary)
    }
`;

const NotificationBoxWrapper = styled.div`

    display: none;

    width: 200px;
    background-color: var(--white);
    position: absolute;
    right: -210px;
    border-radius: 5px;
    color: var(--grey);
    font-size: 12px;    
    font-weight: 600;
    border: 1px solid rgba(0, 0, 0, 0.5);
    box-shadow:
    0.4px 0px 2.2px rgba(0, 0, 0, 0.017),
    1.1px 0px 5.3px rgba(0, 0, 0, 0.024),
    2px 0px 10px rgba(0, 0, 0, 0.03),
    3.6px 0px 17.9px rgba(0, 0, 0, 0.036),
    6.7px 0px 33.4px rgba(0, 0, 0, 0.043),
    16px 0px 80px rgba(0, 0, 0, 0.06)
    ;


    & .notificacao {
        padding: 10px;
        border-bottom: 1px solid var(--grey);
    }

    & .notificacao:last-child {
        border-bottom: none;
    }

    & .notificacao p:last-child {
        font-size: 10px;
        color: var(--secondary);
        text-align: right;
        margin-top: 5px;
    }

`;

const NotificationBox = () => {

    const [notificacoes, setNotificacoes] = useState([]);
    const [toast, setToast] = useState('');
    const [visible, setVisible] = useState(false);

    function handleClick() {
        setVisible(!visible);
        console.log(visible);
    }

    useEffect(() => {

        setTimeout(() => {
            if (notificacoes.length > 0) {
                setToast(<MdOutlineNotificationsActive />);
                return
            } else {
                setToast(<MdOutlineNotificationsNone />);
            };

        }, 1000);

    });

    return (

        <>
            <IconContext.Provider value={{ color: 'var(--black)', size: '1.2rem' }}>
                <NotificationButton onClick={handleClick}>

                    {toast}

                </NotificationButton>
            </IconContext.Provider>
                <NotificationBoxWrapper>
                    <div className="notificacao">

                        <p>texto muito legal e grande</p>
                        <p>- autor</p>

                    </div>
                    <div className="notificacao">

                        <p>texto muito legal e grande</p>
                        <p>- autor</p>

                    </div>
                    <div className="notificacao">

                        <p>texto muito legal e grande</p>
                        <p>- autor</p>

                    </div>
                </NotificationBoxWrapper>
        </>

    );
}

export default NotificationBox;