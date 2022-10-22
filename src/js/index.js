//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";
import { resetWarningCache } from "prop-types/checkPropTypes";

// import 'bootstrap';

// include your styles into the webpack bundle
import  "../styles/index.css";
const mySuperstyle={
	background: "black",
   	border:"solid 1px white",
    'border-radius':"10px",
    margin:"40px",
    padding:"8px",
    'text-align':"center",
    display:"flex",
    'justify-content':"center",
    color:"white",	
    'font-size':"60px",      
   };

//import your own components
// import Home from "./component/home.jsx";

function Contador(props){
    return (
        <div className="contairer-fluid w-50 mx-auto mt-3 bg-dark">
                <div className="row justify-content-evenly">
                    <div className ="col flex-column align-items-center" style={mySuperstyle}><i className="far fa-clock" ></i></div>
                    <div className="col" style={mySuperstyle}>{props.digitoCuatro % 10}</div>
                    <div className="col" style={mySuperstyle}>{props.digitoTres % 10}</div>
                    <div className="col"style={mySuperstyle}>{props.digitoDos % 10}</div>
                    <div className="col"style={mySuperstyle}>{props.digitoUno % 10}</div>
                </div>
         </div>)
}
function Bonus(){
    return(
        <div className="row w-25 mx-auto justify-content-center">
            <div className="btn-group mr-2" role="group" aria-label="First group">
                <button type="button" className="btn btn-secondary" onClick={()=>alarmFunction()}><i className="fa fa-bell"></i></button> 
                <button type="button" className="btn btn-secondary" onClick={()=>resetFunction()}><i className="fas fa-clock"></i></button>
                <button type="button" className="btn btn-secondary" disabled={!stop} onClick={()=>continueFunction()}><i className="fas fa-play"></i></button>
                <button type="button" className="btn btn-secondary" disabled={stop} onClick={()=>stopFunction()}><i className="fa fa-stop"></i></button>
                <input className="form-control sm mr-2"type="text" placeholder='Number?' onKeyDown={(event)=>{
				    if (event.key === 'Enter' && event.target.value<9999 && event.target.value>0) {
					    cuentaatrasFuntion(event.target.value)
				    }
			    }} onChange={(event)=>{
                         contador=event.target.value;
                }}/>
            </div>
        </div>
    )
}
function Alarm(props) {
    return(
         <div className="alert alert-danger w-50 text-center mx-auto" style={{visibility: (props.show?"visible":"hidden")}} role="alert">Tiempo!!!</div>
      )
}

Contador.propTypes= {
    digitoCuatro: propTypes.number,
    digitoTres: propTypes.number,
    digitoDos: propTypes.number,
    digitoUno: propTypes.number
};

const intervalFunction=function(atras){
        const cuatro =Math.floor(timer/1000);
        const tres =Math.floor(timer/100);
        const dos =Math.floor(timer/10);
        const uno =Math.floor(timer/1); 
    //render your react application
    ReactDOM.render(<div>
                    <Contador digitoUno={uno} digitoDos={dos} digitoTres={tres} digitoCuatro={cuatro} /><Bonus/><Alarm show={alarm===timer}/></div>,document.querySelector("#app")
    );
    (atras)?timer--:timer++;
    if(timer===-1){
        clearInterval(interval);
    }
}

const resetFunction=function(){
    atras=false;
    stop=false;
    clearInterval(interval);
    timer=0;
    interval=setInterval(()=>intervalFunction(false),1000);
}

const continueFunction=function(){
    if(stop){
        stop=false;
        interval=setInterval(()=>intervalFunction(atras),1000)
    }
}

const stopFunction=function(){
    stop=true;
    clearInterval(interval); 
    intervalFunction(atras);
}

const cuentaatrasFuntion=function(value){
    clearInterval(interval);
    timer=value;
    atras=true;
    interval=setInterval(()=>intervalFunction(atras),1000);
}

const alarmFunction=function(){
    alarm=parseInt(contador);    
    resetFunction();
}

let contador;
let alarm;
let timer;
let atras;
let interval;
let stop=false;
resetFunction();