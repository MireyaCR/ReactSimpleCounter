//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";
import { resetWarningCache } from "prop-types/checkPropTypes";

// import 'bootstrap';

// include your styles into the webpack bundle
// import  "../styles/index.css";
const mySuperstyle={
	background: "black",
   	border:"solid 1px white",
    'border-radius':"10px",
    margin:"40px",
    padding:"8px",
    'text-aling':"center",
    display:"flex",
    'justify-content':"center",
    color:"white",	
    'font-size':"60px",      
   };

//import your own components
// import Home from "./component/home.jsx";

function Contador(props){
    return (
        <div className="contairer w-50 mx-auto mt-3 bg-dark">
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
            <div class="btn-group mr-2" role="group" aria-label="First group">
                <button type="button" className="btn btn-secondary" onClick={()=>cuentaatrasFuntion()}>Countdown999</button>
                <button type="button" className="btn btn-secondary" onClick={()=>resetFunction()}>Restart</button>
                <button type="button" className="btn btn-secondary" onClick={()=>continueFunction()}>Continue</button>
                <button type="button" className="btn btn-secondary" onClick={()=>stopFunction()}>Stop</button>
            </div>
        </div>
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
        (atras)?timer--:timer++;
    //render your react application
    ReactDOM.render(<div>
                    <Contador digitoUno={uno} digitoDos={dos} digitoTres={tres} digitoCuatro={cuatro} />,<Bonus/></div>, document.querySelector("#app")
    );
}

const resetFunction=function(){
    atras=false;
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

const stopFunction=function() {
    stop=true;
    clearInterval(interval); 
}

const cuentaatrasFuntion=function(){
    clearInterval(interval);
    timer=999;
    atras=true;
    interval=setInterval(()=>intervalFunction(atras),1000);
}

let timer;
let atras;
let interval;
let stop;
resetFunction();