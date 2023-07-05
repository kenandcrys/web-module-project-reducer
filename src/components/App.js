import React, { useReducer } from 'react';
import reducer from '../reducers';
import './App.css';
import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import { actionCreater, clear, applyNumber, memoryPlus } from '../actions/index';
function App() {

  const initialState
   = {
     total: 0,
     operation: '',
     memory: 0
  };

 
    const [state, dispatch] = useReducer(reducer, initialState)

  const eventHandlerOperator = operator => {
        return dispatch(actionCreater(operator));
  }

  const eventHandler = num => {
    return dispatch(applyNumber(num));
  }

  const clearDisplay = () => {
    return dispatch(clear());
  }

  const memory_plus = () =>{
    return dispatch(memoryPlus())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={() => {memory_plus()}} value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={()=> {eventHandler(1)}} value={1}/>
              <CalcButton onClick={()=> {eventHandler(2)}} value={2}/>
              <CalcButton onClick={()=> {eventHandler(3)}} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={()=> {eventHandler(4)}} value={4}/>
              <CalcButton onClick={()=> {eventHandler(5)}} value={5}/>
              <CalcButton onClick={()=> {eventHandler(6)}} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={()=> {eventHandler(7)}} value={7}/>
              <CalcButton onClick={()=> {eventHandler(8)}} value={8}/>
              <CalcButton onClick={()=> {eventHandler(9)}} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => {eventHandlerOperator('+')}} value={"+"}/>
              <CalcButton onClick={() => {eventHandlerOperator("*")}} value={"*"}/>
              <CalcButton onClick={() => {eventHandlerOperator("-")}} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={ () => clearDisplay()} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
