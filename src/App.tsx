import React, { useState } from 'react'
import Input from './input'
import { ctrls } from './state'
import { Form, INPUT } from './types.d'
import './App.css';
import {checkValidity} from './utils'
const App = (): JSX.Element => {
  const [text, setText] = useState<Form>({
    CTRLS:ctrls
  })
  const buttonDisabeld=text.CTRLS[4].validation.check
  const onChangeHandler = (e:any, ctrlName:any) => {
    const inputs = text.CTRLS;
    inputs[ctrlName].value = e.target.value;
    inputs[ctrlName].isValid = checkValidity(e.target.value,
      inputs[ctrlName].validation,inputs)
    setText({CTRLS:inputs})
  }
  const touchInput = (ctrlName: any) => {
    const inputs = text.CTRLS;
    inputs[ctrlName].touched = true;
    setText({CTRLS:inputs})
  }
  console.log('====================================');
  console.log(text.CTRLS.map(i=>i.isValid));
  console.log('====================================');
  return (
    <div className="container">
      <h1>FormValidation</h1>
      <form>
        { text.CTRLS.map((input: INPUT) => (
          <Input
            onChange={(e:any)=>onChangeHandler(e,input.id)}
            element="input"
            key={ input.id }
            name={ input.name }
            type={ input.type }
            label={ input.label }
            sub={ input.sub }
            error={ input.error }
            touched={ input.touched }
            isValid={ input.isValid }
            touchInput={()=>touchInput(input.id)}
          />
        )) }
        <button disabled={ !buttonDisabeld }
        onClick={()=>alert("hello")}  type="button">SUBMIT</button>
      </form>
     </div>
  )
}

export default App
