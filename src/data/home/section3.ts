import { PropsImageLink } from "./header/types";
import clsx from "clsx";

export function useModel(index:number):PropsImageLink[]
{
    const N = 8;
    let contents= Array.from({length: N}, (_, index) => index + 1);

    return contents.map((i) => {
            return { image : {url: "/home/section3/" +index.toString()  + "/"+ i.toString() +".avif"
                          , art:""},
                      link:''}
    })
    

}