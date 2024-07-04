import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';
import { useState,useEffect } from 'react';
import axios from 'axios';

function Freebook() {
   const [book,setBook] = useState([])
    useEffect(()=>{
        async function getBook(){ 
            try {
                const res = await axios.get("http://localhost:4005/book")
                console.log(res.data)
                setBook(res.data.filter((data)=>data.category === 'Free'))
            } catch (error) {
                console.log(error)
            }
          }
        getBook();
    },[])

  
    let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

    return (
  <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div>
        <h1 className='font-semibold text-xl pb-2'>Free offered courses</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas aliquam assumenda nobis impedit?  </p>
      </div>    
        
      <div>
        <Slider {...settings}>
        {book.map((item) =><Card item= {item} key={item.id}/>)}    
      </Slider>
      </div>
    </div>
  </>
    )
}

export default Freebook
