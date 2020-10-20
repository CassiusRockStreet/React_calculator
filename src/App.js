import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      Results: "",
    }
    this.CaptureBtn = this.CaptureBtn.bind(this);
    this.Calculate = this.Calculate.bind(this);
  }

  Calculate(){
      const Values = this.state.Results;
      const Sum = eval(Values);
      return Sum;
  }

  validate(){
    const text = this.state.Results;
    switch(text.slice(-1)){
      case "+":
      case "-":
      case "/":
      case "*":
        return false;
    }
    return true
  }
  CaptureBtn(text){
    const BtnValue = text.target.value; 
    // const previousBtn = this.state.Results.splice('');
    // console.log(previousBtn.pop());

    if(BtnValue ==="c"){
      this.setState(
        {
          Results: ""
        })
    }
    else if(BtnValue ==="="){
      console.log(this.validate());
        const ResultMath = this.validate() && this.Calculate();
        
        if(ResultMath){
            this.setState(
            {
              Results: ResultMath
            })
        }
    }
    else{
        this.setState(
          {
            Results: this.state.Results + BtnValue
          })
    }
  }

  render(){
    return(
      <table className='TableApp'>
          <tbody>
        <tr>
          <td colSpan='4'>
            <input type="text" value={this.state.Results} name="inputValue"/>  
          </td>
        </tr>
        <tr>
          <td><button value="c" onClick={this.CaptureBtn}>C</button></td>
          <td><button value="+-" onClick={this.CaptureBtn}>+/-</button></td>
          <td><button value="%" onClick={this.CaptureBtn}>%</button></td>
          <td id='lastRow'><button value=" / " onClick={this.CaptureBtn} >&#247;</button></td>
        </tr>
        <tr>
          <td><button value="7" onClick={this.CaptureBtn}>7</button></td>
          <td><button value="8" onClick={this.CaptureBtn}>8</button></td>
          <td><button value="9" onClick={this.CaptureBtn}>9</button></td>
          <td id='lastRow'><button value="*" onClick={this.CaptureBtn}>x</button></td>
        </tr>
        <tr>
          <td><button value="4" onClick={this.CaptureBtn}>4</button></td>
          <td><button value="5" onClick={this.CaptureBtn}>5</button></td>
          <td><button value="6" onClick={this.CaptureBtn}>6</button></td>
          <td id='lastRow'><button value="-" onClick={this.CaptureBtn}>-</button></td>
        </tr>
        <tr>
          <td><button value='1' onClick={this.CaptureBtn}>1</button></td>
          <td><button value='2' onClick={this.CaptureBtn}>2</button></td>
          <td><button value='3' onClick={this.CaptureBtn}>3</button></td>
          <td id='lastRow'><button value="+" onClick={this.CaptureBtn}>+</button></td>
        </tr>
        <tr>
          <td colSpan="2"><button value="0" onClick={this.CaptureBtn}>0</button></td>
          <td><button value="," onClick={this.CaptureBtn}>,</button></td>
          <td id='lastRow'><button value="=" onClick={this.CaptureBtn}>=</button></td>
        </tr>
        </tbody>
      </table>
    ) 

  }

}
export default App;
