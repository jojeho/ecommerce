import Image from "next/image"
import styles from "./Container.module.css"
import clsx from "clsx"
import { PropsImage } from "@/data/home/header/types"

function ContainerIn({ contents }): { contents: PropsImage[] }
{
        return (
            
            <ul className={styles.container} >
                {contents.map((item, index) => (
                    <li key={index}><img src={item.url}  width={100} height={100}></img></li>
                    // <li><Image src={item.url} fill></Image></li>
                
                ))}

            </ul>
        )
}

export default function Container({ contents }): { contents: PropsImage[] }
{
    if(contents)
    {
    return (  
        
        <ContainerIn contents={contents}></ContainerIn>
    )}

    return (<></>)
}