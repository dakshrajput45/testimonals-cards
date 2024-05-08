import { useState } from "react";
import Card from "./Card";
import {FiChevronLeft,FiChevronRight} from "react-icons/fi"

function Testimonals({review}){
    const [index,setIndex]=useState(0);
    function leftShiftHandler(){
        if(index===0) setIndex(review.length-1);
        else setIndex(index-1);
    }
    function rightShiftHandler(){
        if(index===review.length-1) setIndex(0);
        else setIndex(index+1);
    }
    function supriseHandler(){
        let random_ind = Math.floor(Math.random()*review.length)
        setIndex(random_ind);
    }
    return(
        <div>
            <Card review={review[index]}></Card>
            <div className="btn-container">
                <button className="btn" onClick={leftShiftHandler}>
                    <FiChevronLeft/>
                </button>
                <button className="btn" onClick={rightShiftHandler}>
                    <FiChevronRight/>
                </button>
            </div>
            <div>
                <button className="me" onClick={supriseHandler}>
                    Suprise Me 
                </button>
            </div>
        </div>
    );
}
export default Testimonals;