import { useState } from "react";

interface Props{
    title:string
    img:string 
    text:string
}
export function Card(props:Props):JSX.Element {
  const [backgroundColor, setBackgroundColor] = useState('yellow');
  const [customColor,setCustomColor]= useState('')
  const changeColor:React.ChangeEventHandler<HTMLSelectElement> =(event)=>{
    setBackgroundColor(event.target.value)
  }
  
  return (
    <div className="card" style={{backgroundColor:backgroundColor}}>
      <h1>{props.title}</h1>
      <img src={props.img}></img>
      <p>{props.text}</p>
      <select value={backgroundColor} onChange={changeColor}>
        <option value={"red"}>red</option>
        <option value={"blue"}>blue</option>
      </select>
      <input></input>
      <button>add color</button>
    </div>
  );
}