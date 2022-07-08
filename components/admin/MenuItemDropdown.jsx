import { useEffect, useState } from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { IconContext } from "react-icons/lib";
import Link from "next/link";

const MenuItemDropdown = (props) => {

    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);

    const optionsKeys = Object.keys(props.objects.options);
    const optionsLength = optionsKeys.length;

    const size = 35 * optionsLength;

    const handleClick = () => {
        setOpen(!open);
        console.log(options)
    }
    
    let optionsHtml = [];

    useEffect(() => {

        for (let i = 0; i < optionsLength; i++) {
            const element = optionsKeys[i];
            let link = "/painel/" + props.objects.options[element].link;
            optionsHtml.push([
            <Link href={link} key={i}>
                <DropdownContent>
                    <div className="icon">
                        {props.objects.options[element].icon}
                    </div>
                    <div className="text">
                        {props.objects.options[element].text}
                    </div>
                </DropdownContent>
            </Link>
            ]);
            setOptions(optionsHtml);
        }

    }, [])
        


    return (<Dropdown isOpen={open} size={size}>

        <DropdownTitle onClick={handleClick}>

            <div className="icon">
                {props.objects.icon}
            </div>

            <div className="text">
                {props.objects.text}
            </div>

            <Arrow isOpen={open}>

                <IconContext.Provider value={{ color: 'var(--white)', size: '0.8rem', style: { verticalAlign: 'middle' } }}>
                    <IoIosArrowForward />
                </IconContext.Provider>
            </Arrow>

        </DropdownTitle>

        <IconContext.Provider value={{ color: 'var(--light-grey)', size: '0.8rem', style: { verticalAlign: 'middle' } }}>
            <div className="dropdownContent">
                {options}
            </div>
        </IconContext.Provider>


    </Dropdown>);
}

export default MenuItemDropdown;

const DropdownContent = styled.div`

    display: flex;
    align-items: center;
    justify-content: left;
    padding: 10px 20px;
    white-space: nowrap;
    color: var(--light-grey);
    font-size: 0.8rem;
    gap: 10px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
        background-color: rgba(0,0,0,0.1);
        color: var(--white);
    }

`;

const Dropdown = styled.div`

    width: 100%;
    transition: 0.3s;
    overflow: hidden;
    min-height: 50px;
    height: ${props => props.isOpen ? props.size + 50 + 'px' : "50px"};

`;

const Arrow = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    transform: ${props => props.isOpen ? "rotate(90deg)" : "rotate(0deg)"};
    transition: 0.3s;


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
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    & .text {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;
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