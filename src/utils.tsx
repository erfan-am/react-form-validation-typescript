export const checkValidity = (value: string, rules: any, inputs: any) => {
  let isValid:boolean = true;
     if(rules.check){
        isValid=rules.check   && isValid
    }
    if(rules.minLength){
        isValid=value.length >= rules.minLength  && isValid
    }
    if(rules.maxLength){
        isValid=value.length <= rules.maxLength && isValid
    }
    if(rules.isEmail){
        const reg=/.+@[^@]+\.[^@]{2,}$/
        isValid= reg.test(value)  && isValid
    }
    if(rules.isPass){
        isValid=value.length >= rules.minLength && rules.end  && isValid
    }
    if (rules.isConfirm) {
        if (value !== "") {
            inputs[4].validation.able=true
        }
        isValid=value === inputs[2].value && rules.end  && isValid
    }
  return isValid
}