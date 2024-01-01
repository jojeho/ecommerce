
import Carousel from "./Carousel"
import  {useMenu} from "../../../data/header"
import cssCarousel from "./carousel.module.css"
export default function SimpleCarousel()
{
  
   let contents=useMenu()[0].items

    return(
       
        <Carousel className={cssCarousel.main}>
            {
                contents.map((item,index)=>(
                   
                    <Carousel.Item key={index} width="400px" className={cssCarousel.item}>
                      
                      <img   src={item.url} alt=''></img>
                     
                    </Carousel.Item>
                ))
            }
        </Carousel>
     
    
    )

}