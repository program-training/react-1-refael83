import { useState } from "react";


export function Text():JSX.Element {
  const [state, setState] = useState<Boolean>(false);
  const flag=():void=>{
    setState(!state)
  }
  return (
    <div className="text">
      <button onClick={flag}>Toggle Text</button>
      {state ? <div> 'Text' </div> : null}
    </div>
  );
}