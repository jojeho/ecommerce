

import { config } from "@/config"
import { usePtMenu } from "@/data/header"
import { PropsSub } from "@/data/home/header/types"
import { useState } from "react"
import "./local_global.css"
import cssSection from "./section1.module.css"
import cssSection1 from "./section1_1.module.css"
import cssSection2 from "./section1_2.module.css"
import cssSection3 from "./section1_3.module.css"
import cssSection4 from "./section1_4.module.css"

function View1() {
    return (

        < >
            <img src="/home/pt/section_1/default.webp"></img>
            <div className={cssSection1.message}>
                <h4><em>삼닷페스티벌</em> 연말결산</h4>
                <h3>최대 49% 활인 혜택으로 2023년 인기 제품을 만나보세요
                </h3>
                <h2>2023.12.01 ~ 2023.12.31</h2>
                <h1>※ 기준가 대비 쿠폰적용가 할인율</h1>
            </div>

        </>

    )
}


function View2() {
    return (

        <>
            <img src="/home/pt/section_2/default.webp"></img>
            <div className={cssSection2.message}>
                <h3>12월 8일 00시 Comming Soon</h3>
                <h4>Galaxy S23 FE</h4>
                <h1>삼성닷컴의 특별한 혜택을 기대해 주세요</h1>

            </div>

        </>

    )
}

function View3() {
    return (
        < >
            <img src="/home/pt/section_3/default.webp"></img>
            <div className={cssSection3.message}>
                <h4>Galaxy Z Fold5 I Z Flip5 I</h4>
                <h4>S23 Series</h4>
                <h2>Z 폴드51TB 그레이 18% 즉시 할인!</h2>
                <h2>갤럭시로 따뜻한 연말 선물 미리 준비하세요</h2>
            </div>
        </>
    )
}


function View4() {
    return (
        <>
            <img src="/home/pt/section_4/default.webp"></img>
            <div className={cssSection4.message}>
                <h4>Galaxy Book3x인텔®Evo</h4>
                <h4>인텔 플랫폼인증</h4>
                <h2>갤럭시 복3 구매시 선착순 400명 해피머니 증정</h2>
                {/* <h2>갤럭시로 따뜻한 연말 선물 미리 준비하세요</h2> */}
            </div>
        </>
    )
}

function Controller({  cssLeftButton,cssRightButton , handleMove, currentIndex, children }) {


    return (
        <div className={cssSection.controller}>

            <button className={cssLeftButton} onClick={() => handleMove(currentIndex - 1)}>

            </button>
            <button className={cssRightButton} onClick={() => handleMove(currentIndex + 1)}>

            </button>
        </div>
    )
}



function Menu({ cssMenu , menus, setPageIndex }) {
    
    return (
        <ul className={cssMenu }>
            {menus.map((item, index) =>
            (
                <li key={index}>
                    <button onClick={() => (setPageIndex(index))}>{item.title}</button>
                </li>
            ))}
        </ul>

    )
}

function controller() {

}


// function PTMenu({menus}:{menus:PropsSub[]})
// {
//     console.log(menus);
//     return 
//     (
//         <>
//         <ul>          
//             {menus.map((item,index)=>
//             (   
//                 <a key={index} href={item.url} >{item.title}</a>
//             ))}
//         </ul>
//         </>

//     )
// }


export default function App({ss}:{ss:string}) {
    const [pageIndex, setPageIndex] = useState<number>(0)
    const views = [<View1></View1>, <View2></View2>, <View3></View3>, <View4></View4>]

    const handleMove = (index) => {

        if (index == views.length) {

            index = 0
        }
        else if (index == -1) {
            index = views.length - 1;
        }
        setPageIndex(index)
    }

    const whiteIndexs=[0,3];
    
    const found =whiteIndexs.find((el)=>(el==pageIndex))

    let cssLeftButton;
    let cssRightButton;
    let cssMenu;
    if(found==undefined)
    {
        cssLeftButton=cssSection.left_button;
        cssRightButton=cssSection.right_button;
        cssMenu=cssSection.menu ;
    }
    else
    {
        cssLeftButton=cssSection.left_button_white;
        cssRightButton=cssSection.right_button_white;
        cssMenu=cssSection.menu_white ;
    }

   let ptMenu=usePtMenu()
    ptMenu=ptMenu.slice(0,4)

    return (
        // <section className="relative ">
        <section className={cssSection1.root}>

            {views.map((view, index) => {
                if (index === pageIndex) {
                    return (<div>{view}</div>)
                }
                return (<div></div>)
            }
            )}

            <Menu   cssMenu={cssMenu} menus={ptMenu} setPageIndex={setPageIndex} ></Menu>
            <Controller cssLeftButton={cssLeftButton} cssRightButton={cssRightButton} handleMove={handleMove} currentIndex={pageIndex}></Controller>
        </section>
    )
}




Link
{
  href:string
}

Label
{
  text:string,
  htmlfor?:string
}

Image
{
  src:string,
  width?:string,
  height?:string
}

LinkLabel
{
  link:Link,
  label:Label
}

LinkImage
{
  link:Link,
  image:Image
}

menu :
  header,
  list for item 
  Item
  {
    link:Link,
    label:Label
  }

menu2:
  header,
  list for item 
  item
  {
    list :LinkText[],
    image:Image
  }


  

  

		


    
