import React from "react";
import classes from "./BoxData.module.css"
import Popup from 'reactjs-popup';
import { Tooltip } from "react-tooltip";

{/* <Popup trigger=
{<button> Click to open popup </button>}
position="right center">
<div>GeeksforGeeks</div>
<button>Click here</button>
</Popup> */}
 
//функцтональная компонента
const BoxData = (props) => {

    let block = <div className={classes.block}  onMouseOver={() => console.log("asd")}></div>
    let string = String(props.DT.toISOString().slice(0, 10))
         if(Boolean(props.data[string])){
            //  console.log(props.data[string])
             if(props.data[string] >=1 && props.data[string] <= 9){
                block = <div className={classes.block1} onMouseOver={ () => console.log("asd")}></div>
                
             }
             else if(props.data[string] >=10 &&  props.data[string] <= 19){
                block = <div className={classes.block2} onMouseOver={() => console.log("asd")}></div>
             }
             else if(props.data[string] >=20 &&  props.data[string] <= 29){
                block = <div className={classes.block3} onMouseOver={() => console.log("asd")}></div>
             }
             else if(props.data[string] >=30){
                block = <div className={classes.block4} onMouseOver={() => console.log("asd")}></div>
                
             }
             
        } 
    
    return (
        <div >
            {block}
        </div>

    )
}

export default BoxData