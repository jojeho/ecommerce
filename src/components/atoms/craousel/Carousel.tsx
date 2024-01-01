import { useRef, useState } from "react";
import cssCarousel from "./carousel.module.css"
import { Children } from 'react';
import clsx from "clsx";
type OnSelectImageType = {
  currentIndex: number;
  behavior?: "auto" | "smooth";
};

function CarouselItem({ className,  children }) {

  return (
    <div className={className} >
      {children}
    </div>
  )
}

function BasicControler({ className, handleImageMove,currentImageIndex, children }:{
                           className:string
                          , handleImageMove:{ (currentIndex: number): void }
                          , currentImageIndex:number
                          ,children:Children  }) {

  return (
    <div className={className}>
   
      <button className={cssCarousel.left_button} onClick={() => handleImageMove(currentImageIndex - 1)}>
      
      </button>
      <button className={cssCarousel.right_button} onClick={() => handleImageMove(currentImageIndex + 1)}>
      
      </button>
    </div>
  )
}


function CarouselMain({ className, children }) {
  const cssMain=className;
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const contentRef = useRef<HTMLDivElement[] | null[]>([]);

  const Dtype = (<CarouselItem />).type

  const contents = Children.toArray(children).filter((e) => (e.type == Dtype))

  function onSelectImage({
    currentIndex,
    behavior = "smooth"
  }: OnSelectImageType) {

    setCurrentImageIndex(currentIndex);   
    // contentRef.current[currentIndex]?.click()
    contentRef.current[currentIndex]?.scrollIntoView({
      inline: "center",
      block: "nearest",
      // border : "5px solid #1d210a"
      behavior,

    });
  }

  function handleImageMove(currentIndex: number) {
    const firstIndex = 0;
    const lastIndex = contents?.length - 1;
    // console.log(currentIndex)
    if (currentIndex < firstIndex) {
      return onSelectImage({ currentIndex: lastIndex, behavior: "auto" });
    }
    if (currentIndex > lastIndex) {
      return onSelectImage({ currentIndex: firstIndex, behavior: "auto" });
    }

    onSelectImage({ currentIndex });
  }

  // const classname = "flex flex-col z-100  overflow-x-scroll scrollbar-hide scroll-smooth gap-5"
  return (
    <div  className={cssCarousel.root} >

      <ul className={cssMain} >

        {contents.map((child, index) => (

          <li key={index} ref={(el) => (contentRef.current[index] = el)}
          // className={clsx(styles.item)}
          // onClick={(e)=>(alert('a'))}
          >
            {child}
          </li>

        ))}
      </ul>

      <BasicControler className={cssCarousel.controller} currentImageIndex={currentImageIndex} handleImageMove={handleImageMove}></BasicControler>
      {/* <div className={styles.controller}> */}

    </div>
  );
}

const Carousel = Object.assign(CarouselMain, {
  Item: CarouselItem
});

export default Carousel;