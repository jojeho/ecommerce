
// import Image from "next/img"
import DropDown from "../atoms/dropDown/DropDown"
import { config } from "../../config"
import { PropsMenu, PropsSub, PropsImage } from "@/data/home/header/types"
import styles from "./header.module.css"
import clsx from "clsx"

import Container from "./Container"

// function SubMenu({ menu }: { menu: PropsMenu }) {
//     // const cssDropdown="rounde"
//     return (
//         <DropDown>

//             <DropDown.Header title={menu.title}></DropDown.Header>
//             {menu.subs.map((item, index) => (

//                 <DropDown.Item >{item.title}</DropDown.Item>

//             ))}

//         </DropDown>
//     )

// }



function SubMenu({ menu }: { menu: PropsMenu }) {
    return (
        <>
            <DropDown>
                <DropDown.Header title={menu.title}></DropDown.Header>
                <DropDown.Item>
                    <div className={styles.sub_menu}>
                        <ul >
                            {menu.subs.map((item, index) => (
                                <li key={index}>{item.title}</li>
                            ))}
                        </ul>
                        <Container contents={menu.items}></Container>
                    </div>
                </DropDown.Item>
            </DropDown>
        </>
    )

}

function Nav({ menus }: { menus: PropsMenu[] }) {
    // const menu=useMenu()
    // console.log(menus)
    return (
        <>
            <ul className="flex flex-row gap-2">
                {menus.map((menu, index) => (

                    <li key={index} >
                        <SubMenu menu={menu}></SubMenu>
                    </li>
                ))}
            </ul>
        </>
    )
}


function Top() {
    const pathLogo = "./logo.svg";
    const pathCart = "./cart.svg";
    const pathUser = "./user.svg";
    const pathSearch = "./search.svg"

    const cssMain = "w-full flex flex-row justify-between"
    const cssSearchBox = styles.search__box
    const cssInput = clsx(styles.input, styles.input_not)

    return (
        <div className={cssMain}>
            <img layout="fill" src={pathLogo} art="logo" ></img>
            <div className="flex flex-row gap-2">
                <div className={cssSearchBox}>
                    <input className={cssInput}></input>
                    <img layout="fill" src={pathSearch}></img>
                </div>
                <img layout="fill" fill src={pathCart}></img>
                <img layout="fill" fill src={pathUser}></img>
            </div>
        </div>
    )
}

export default function Header({ menus }: { menus: PropsMenu[] }) {

    return (
        <div className="flex flex-col gap-2">
            <Top ></Top>
            <Nav menus={menus}></Nav>
        </div>
    )
}
