import { useState } from "react";
import styled from "styled-components";

const MenuItemDropdown = (props) => {

    const [open, setOpen] = useState(false);

    return (<Dropdown>

        <DropdownTitle>

            <div className="icon">
                {props.objects.icon}
            </div>

            <div className="text">
                {props.objects.text}
            </div>
            
        </DropdownTitle>

    </Dropdown>);
}

export default MenuItemDropdown;

const Dropdown = styled.div`

    width: 100%;
    min-height: 50px;
    transition: 0.5s;
    height: 100px;

`;

const DropdownTitle = styled.div`

    width: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: left;
    padding: 0 20px;
    transition: 0.3s;
    cursor: pointer;
    border-bottom: 1px solid var(--grey);

    & .text {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.9rem;
        font-weight: 500;
        color: var(--white);
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

    &:hover {
        background-color: rgba(255, 255, 255, 0);
    }

`;

// {
//     icon: <AiOutlineUser />,
//     text: "Meus dados",
//     options: {
//         configurações: {
//             icon: <IoSettingsOutline />,
//             link: 'configuracoes'
//         },
//         uploads: {
//             icon: <RiFolderAddLine />,
//             link: 'uploads'
//         }
//     }
// }