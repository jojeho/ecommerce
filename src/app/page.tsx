
'use client'
import Image from 'next/image'
import { DropDown } from '@/components/atoms/dropDown/DropDown'

import Section1 from "@/components/home/Section1"
import Section2  from "@/components/home/Section2"
import Section3  from "@/components/home/Section3"

import {config} from "@/config"
import Header  from '@/components/header/Header'
import {useMenu} from "@/data/header"
import SimpleCarousel from '@/components/atoms/craousel/SimpleCarousel'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react'
import SimpleTab from '@/components/atoms/tab/SimpleTab'


export default function Home()
{
    let stype="sec1"
    let ss : React.ReactNode =<Section2 ss='bb'></Section2>

    if(stype =="sec1")
    {
     ss =<Section1 ss='aa'></Section1>
    }
    else if(stype=="sec2")
    {
     ss=<Section2 ss='bb'></Section2>
    }
    

    return (
        <>
    <div>
        aaa
        {ss}
     </div>
     </>
   )
}

// export default function Home() {

//   return (
//     <main className='bg-white'   style={{height: "100%"}}    >
//       <section className='flex flex-col gap-2 px-2 py-2'>
//        <Header menus={useMenu()}></Header>
//       </section>
//       <section>
//         <Section1></Section1>
//       </section>
//       {/* 
//       <section>
//          <Section2 content={items1}></Section2>
//       </section>
//       <section>
//          <Section3 content={items1}></Section3>
//       </section> */}
//     </main>
//   )
// }
