import React, { useState } from 'react';
import Input from './input';
import { ctrls } from './state';
import { Form, INPUT } from './types.d';
import './App.css';
import { checkValidity } from './utils';
const App = (): JSX.Element => {
  const [text, setText] = useState<Form>({
    CTRLS: ctrls
  });
  const buttonDisabeld = text.CTRLS[4].validation.check;
  
const onChangeHandler = (e:any, ctrlName:any) => {
  const inputs = text.CTRLS;
  inputs[ctrlName].value = e.target.value;
  inputs[ctrlName].validation.end = true;
  inputs[ctrlName].isValid = checkValidity(e.target.value,
    inputs[ctrlName].validation, inputs);
  setText({ CTRLS: inputs });
}
const touchInput = (ctrlName: any) => {
  const inputs = text.CTRLS;
  inputs[ctrlName].touched = true;
  setText({ CTRLS: inputs });
}
const onCheck=(ctrlName:any)=>{
  const inputs = text.CTRLS; 
    inputs[ctrlName].validation.check = !inputs[ctrlName].validation.check;
    setText({ CTRLS: inputs });
}
const inputStyle =text.CTRLS.map((input:INPUT)=>
  <Input
    onChange={(e:any)=>onChangeHandler(e,input.id)}
    element="input"
    key={ input.id }
    name={ input.name }
    type={ input.type }
    label={ input.label }
    sub={ input.sub }
    disabled={input.validation.able}
    end={input.validation.end}
    error={ input.error }
    touched={ input.touched }
    isValid={ input.isValid }
    touchInput={ () => touchInput(input.id) }
    onCheck={()=>onCheck(input.id)}
  />
    )
  return (
    <div className="container">
      <h1>FormValidation</h1>
      <form>
        {inputStyle}
        <button disabled={!buttonDisabeld}
        onClick={()=>alert("hello")} style={{opacity:!buttonDisabeld ? 0.2 : 1}}  type="button">SUBMIT</button>
      </form>
     </div>
  )
}

export default App
