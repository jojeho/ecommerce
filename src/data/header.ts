import { PropsMenu,PropsSub } from "./home/header/types"

export function useitems1()
{
    const N = 7;
    let contents= Array.from({length: N}, (_, index) => index + 1);

    return contents.map((i) => {
          return {url:`/home/top_nav/kitchin/${i}.webp`}})
    
}


export function usePtMenu():PropsSubMenu[]
{
    const list =
       [ {url:"#" , title:"삼닷 페스타 연말 결산"},
        {url:"#" , title:"갤럭시 S23 FE"},
        {url:"#" , title:"새로운 갤럭시 시리즈"},
        {url:"#" , title:"갤럭시 북3 Intel Evo"},
        {url:"#" , title:"삼성닷컴 월간TV"},
        {url:"#" , title:"BESPOKE 김치플러스"},
        {url:"#" , title:"BESPOKE 냉장고"}]

    ;

    return list;
}

export function useMenu() : PropsMenu[]
{

    const menu1 = {
        title: "모바일", subs: [{ title: "갤럭시의 모든 것", url: "" },
        { title: "스마트폰", url: "" },
        { title: "태블릿", url: "" },
        { title: "태블릿", url: "" },
        { title: "갤럭시북", url: "" },
        ],
        items: useitems1()

    }


    const menu2 = {
        title: "TV&오디오", subs: [{ title: "TV", url: "" },
        { title: "라이프스타일 TV", url: "" },
        { title: "삼성 사운드바", url: "" },
        { title: "JBLㅣ하만카돈ㅣ마크레빈슨", url: "" },
        { title: "구매가이드 한눈에 보기", url: "" },
        ]
    }

    const menu3 = {
        title: "주방가전", subs: [{ title: "냉장고", url: "" },
        { title: "김치냉장고", url:""},
        { title: "식기세척기", url: "" },
        { title: "정수기", url: "" },
        { title: "오븐/큐커", url: "" },
        ]
    }


    const menu4= {
        title: "리빙가전", subs: [{ title: "세탁기", url: "" },
        { title: "건조기", url:""},
        { title: "에어드레서", url: "" },
        { title: "슈드레서", url: "" },
        { title: "에어컨", url: "" },
        { title: "에어드레서", url: "" },
      
        ]
    }


    const menu5= {
        title: "PC/주변기기", subs: [{ title: "갤럭시 북", url: "" },
        { title: "Windows 11", url:""},
        { title: "데스크탑", url: "" },
        { title: "PC 액세서리", url: "" },
        { title: "모니터", url: "" },
        { title: "프린터", url: "" },
        { title: "PC 액세서리", url: "" },
        { title: "토너/잉크", url: "" },
        { title: "메모리/스토리지", url: "" },      
        { title: "갤럭시 캠퍼스", url: "" },
        ]
    }

    const menus =[menu1 , menu2,menu3,menu4,menu5]

    //

    return menus 
}

