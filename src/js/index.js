//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";


//import your own components
// import Home from "./component/home.jsx";

function Contador(props){
    return (<div className="contairer w-50 mx-auto mt-1 bg-dark">
                <div className="row p-3 justify-content-evenly">
                    <div className ="col p-1 mx-1 mt-2 bg-dark text-white text-center border rounded"><i className="far fa-clock"></i></div>
                    <div className="col p-1 mx-1 mt-2 bg-dark text-white text-center border rounded">{props.digitoCuatro % 10}</div>
                    <div className="col p-1 mx-1 mt-2 bg-dark text-white text-center border rounded">{props.digitoTres % 10}</div>
                    <div className="col p-1 mx-1 mt-2 bg-dark text-white text-center border rounded">{props.digitoDos % 10}</div>
                    <div className="col p-1 mx-1 mt-2 bg-dark text-white text-center border rounded">{props.digitoUno % 10}</div>
                </div>
         </div>)
}

Contador.propTypes= {
    digitoCuatro: propTypes.number,
    digitoTres: propTypes.number,
    digitoDos: propTypes.number,
    digitoUno: propTypes.number
};
let timer=0;
setInterval(function(){
    const cuatro =Math.floor(timer/1000)
    const tres =Math.floor(timer/100)
    const dos =Math.floor(timer/10)
    const uno =Math.floor(timer/1)
    timer++;
//render your react application
ReactDOM.render(<Contador digitoUno={uno} digitoDos={dos} digitoTres={tres} digitoCuatro={cuatro} />, document.querySelector("#app")
);
},1000);