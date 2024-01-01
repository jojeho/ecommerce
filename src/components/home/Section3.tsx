import { useModel } from "@/data/home/section3";
import { PropsImageLink } from "@/data/home/header/types";
import css from "./section3.module.css"

import Carousel from "@/components/atoms/craousel/Carousel"
import cssCarousel from "@/components/atoms/craousel/carousel.module.css"

function ImageLinkBox({ links }: { links: PropsImageLink[] }) {
  console.log(links)
  return (
    <ul className={css.box}>
      {links.map((item, index) => (
        <a href={item.link}>
          <img src={item.image.url} art={item.image.art}></img>
        </a>
      ))}
    </ul>
  )
}
export default function App() {
  const N = 2;
  let indexs = Array.from({ length: N }, (_, index) => index + 1);

  const views = indexs.map((value, index) => (
    <ImageLinkBox links={useModel(value)}></ImageLinkBox>
  ))

  return (
    <div className={css.root}>
    <Carousel className={cssCarousel.main}>
      {
        views.map((view, index) => (

          <Carousel.Item key={index}  className={cssCarousel.item}>

           {view}

          </Carousel.Item>
        ))
      }
    </Carousel>
    </div>

  )


}