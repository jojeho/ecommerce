import { Interface } from "readline";

export interface PropsSubMenu {
    url: string,
    title: string,
}

export interface PropsImage {
    url: string,
    art:string ,

}


export interface PropsMenu {
    title: string,
    subs: PropsSubMenu[],
    items?:PropsImage[],
}

export interface PropsImageLink{
    image: PropsImage,
    link : string ,
}
