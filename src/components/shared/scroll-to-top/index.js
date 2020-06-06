import React, {useState, useEffect} from 'react';
import { IoIosArrowRoundUp } from "react-icons/io";
import {ScrollTopButton} from './scroll-to-top.style'

const ScrollToTop = (props) => {
    const [stick, setStick] = useState(false)     
    const onClickHandler = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    useEffect(() => {
      var position = window.pageYOffset
      window.addEventListener('scroll', function(){
        let scrollPos = window.pageYOffset;
        if(scrollPos < 200){
          setStick(false);
        }else if(scrollPos < position){
          setStick(true);
        }else{
          setStick(false);
        }
        position = scrollPos  
      });
      return () => {
          window.removeEventListener('scroll', function(){
            let scrollPos = window.pageYOffset;
            if(scrollPos < 200){
              setStick(false);
            }else if(scrollPos < position){
              setStick(true);
            }else{
              setStick(false);
            }
            position = scrollPos  
          });
      }
    });

    
    
    return (
        <ScrollTopButton type="button" onClick={onClickHandler} isStick={stick} {...props}>
          <IoIosArrowRoundUp className="icon arrow-up"/>
          <IoIosArrowRoundUp className="icon arrow-bottom"/>
        </ScrollTopButton>
    )
}

export default ScrollToTop
