import { useEffect, useState } from "react"
import './Hero.css'
export default function HERO(){
    const [index , setIndex]=useState(0)
    const [show , setShow]=useState(true)
    const [load , setLoad]=useState(false)
    useEffect(() => {
        setTimeout(()=>{
            setLoad(true);
        }, 0)
    } , [])
    let background= document.querySelector(".hero")
    useEffect(() => {
        if (index == 10) {
          background.style.backgroundColor = '#97A97C';
        } 
        if (index == 100) {
            background.style.backgroundColor = '#B5C99A';
        } 
        if (index == 1000) {
            background.style.backgroundColor = '#CFE1B9';
        };
      }, [index]);
    function step1(){
        setIndex(index + 1)
        if (index>=10) {
            setIndex(index + 10)

        }
        if (index>=100 && index<=1000) {
            setIndex(index + 100)
            
        }
        if (index==1000) {
            setIndex(index)
            setShow(false)
        }
        if (index==10 || index==100 || index==1000) {
            window.alert('welcome')
        }


        
    }
    function step2(){
        if (index<=1000) {
            setIndex (index-100)
            
        }

        if (index<=100) {
            setIndex (index-10)
        }

        if (index<=10) {
            setIndex (index-1)
        }
       
}
    
    return(
        <>
        {load ? (<div className="hero" >
            <div>{index}</div>
            <button onClick={step1}>increasment</button>
            <button className={ show ? 'disappear' : 'appear'} onClick={step2}>decreas</button>
        
        </div>) : window.alert('welcome')}
        </>
    )
}