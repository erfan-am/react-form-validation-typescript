import React from 'react'

const Input = (props:any) => {
  const element = ( )=>{
    switch (props.element) {
      case "input":
        return <input
        style={{border:props.isValid && props.end ? '1px solid green' : '1px solid #333'}}
        value={props.type !=="checkbox"  && props.value}
        className={`${props.type === "checkbox" && 'checkbox'}`}
        name={props.name}
        type={props.type}
        onClick={props.onCheck }
        onChange={props.type !=="checkbox"  ? props.onChange : undefined}
        onBlur={props.type !=="checkbox" ? props.touchInput : undefined}
        required
        />
        break;
      case "textarea":
        return <textarea />
        break
      default:
        break;
    }
  }
  return (
    <div className="input_group">
      {element() }
      <label style={{
                color:!props.isValid ? 
                props.touched && 'red' : 
                props.end && 'green'  
            }} 
            htmlFor={props.name}>{props.label}</label>
     <p style={{color:!props.isValid ?
             props.touched && 'red' :  props.end ? 'green' :'#333'   }}>
            {!props.isValid && props.touched  ?  props.error : 
            props.end ? 'done..' : props.sub}
            </p>
    </div>
  )
}

export default Input
