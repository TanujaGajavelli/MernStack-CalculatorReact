import { useState } from 'react'
import "./App.css"
function App() {
  const [display, setDisplay] = useState('')
  const [first, setFirst] = useState('')
  const [op,setOp]=useState('')
  function disp(num){
    setDisplay(display+num)

  }
  function del(){
    setDisplay(display.slice(0, -1));
  }
  function operate(num){
    setFirst(display);
    setOp(num);
    setDisplay(display+num);
  }
  function evaluate(){
    let res=0
    let second = display.slice(first.length+1);
    if(first==='' || op==='' || second===''){
      setDisplay("Error")
      return
    }
    switch(op){
      case '/':
        res= second!=='0'? parseFloat(first)/parseFloat(second) : "Error";
        break;
      case '*':
        res=parseFloat(first)*parseFloat(second);
        break;
      case '+':
        res=parseFloat(first)+parseFloat(second);
        break;
      case '-':
        res=parseFloat(first)-parseFloat(second);
        break;
      default:
        res=display
    }
    setDisplay(res.toString());
  }
  return (
    <div className='cal'>
      <div className="display">
        <input type="text" value={display} readOnly></input>
      </div>
      <div className='btn'>
          <button onClick={()=>disp('7')}>7</button>
          <button onClick={()=>disp('8')}>8</button>
          <button onClick={()=>disp('9')}>9</button>
          <button onClick={del}>Del</button>
          <button onClick={()=>disp('4')}>4</button>
          <button onClick={()=>disp('5')}>5</button>
          <button onClick={()=>disp('6')}>6</button>
          <button onClick={()=>operate('/')}>/</button>
          <button onClick={()=>disp('1')}>1</button>
          <button onClick={()=>disp('2')}>2</button>
          <button onClick={()=>disp('3')}>3</button>
          <button onClick={()=>operate('*')}>*</button>
          <button onClick={()=>disp('0')}>0</button>
          <button onClick={()=>operate('-')}>-</button>
          <button onClick={()=>operate('+')}>+</button>
          <button onClick={evaluate}>=</button>
      </div>
      </div> 
  )
}

export default App

