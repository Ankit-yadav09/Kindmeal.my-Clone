import React, { useState } from 'react'
import { useEffect } from 'react'
import {AiOutlineArrowLeft,AiOutlineArrowRight} from "react-icons/ai"
import styles from "../../Styles/banner.module.css"

let images=[
    {
        url:"https://images.unsplash.com/photo-1598449426314-8b02525e8733?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmVnZXRhcmlhbiUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80"
    },
    {
        url:"https://www.healthifyme.com/blog/wp-content/uploads/2022/03/shutterstock_119600791-1-1024x678.jpg"
    },
    {
        url:"https://www.golokaso.com/wp-content/uploads/2018/05/veg-food-cover.jpg"
    },
    {
        url:"https://www.girlgonegourmet.com/wp-content/uploads/2021/05/Mexican-Fruit-Salad-11.jpg"
    },
    {
        url:"https://selecthealth.org/-/media/selecthealth/blogs/post/2021/05/fuice_juice_blog_lg.ashx"
    }
       
    ]
const BannerHome = () => {
    const[currentSlide,setCurrentSlide]=useState(0)
    const slideLength = images.length;

    const nextSlide=()=>{
        setCurrentSlide(currentSlide===slideLength-1 ? 0 : currentSlide+1)
    }
    const prevSlide=()=>{
        setCurrentSlide(currentSlide=== 0 ? slideLength-1 : currentSlide-1)
    }

    const autoScroll= true;
    let slideInterval;
    let intervalTime=2000;

    function auto(){
        slideInterval=setInterval(nextSlide, intervalTime)
    }

    useEffect(()=>{
        if(autoScroll){
            auto()
        }
        return ()=>clearInterval(slideInterval)
    },[currentSlide])

    useEffect(()=>{
        setCurrentSlide(0)
    },[])

  return (
    <div>
        {/* <img src={process.env.PUBLIC_URL+"Images/Variety-fruits-vegetables.webp"} alt="" /> */}
        <div className={styles.slider}>
            <AiOutlineArrowLeft id={styles.leftArrow} className={styles.arrow} onClick={prevSlide} />
            <AiOutlineArrowRight id={styles.rightArrow} className={styles.arrow} onClick={nextSlide} />
            
            {images.map((slide,index)=>{
                return (
                    <div className={index===currentSlide ? "slide current" : "slide"} 
                    key={Date.now()+index}>
                        
                        {index === currentSlide && (
                            <>
                            <img src={slide.url} alt="slide" 
                             className={styles.slideImage}
                            />
                            </>
                        )}
                        
                    </div>
                )
            }

            )}

        </div>
    </div>
  )
}

export default BannerHome