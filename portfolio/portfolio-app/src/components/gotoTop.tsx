import React, {useState, useEffect} from 'react';
import { HiArrowUp } from "react-icons/hi";
const GotoTop = () => {
    const [showScroll, setShowScroll] = useState<boolean>(false);
const onScroll = () =>{
    let heighttoHide = 1200;
    // console.log(window.scrollY);
    if(window.scrollY > heighttoHide){
        setShowScroll(true);
    }else{
        setShowScroll(false);
    }
}
useEffect(()=>{
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
});  
const GotoTopBtn = () => {
    window.scrollTo({top:0, left:0, behavior: 'smooth'});
}
  return ( 

                <div className={`top-btn ${showScroll ? 'active' : '' }`} onClick={GotoTopBtn}>
                    <HiArrowUp/>
                </div>
  )
}
export default GotoTop;