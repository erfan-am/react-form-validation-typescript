
export const ctrls = 
  [
    {
    value:'',
    id:'0',
    validation:{
      required:true,
      minLength:5,
      maxLength:10,
      end:false
      },
      label:'Name',
      sub:"Enter your complete name",
      error:'Your name is not valid and must be between  5 , 10 characters' ,
      type:"text",
      name:'name',
      isValid:true,
      touched:false
} ,
  {
    value:'',
    id:'1',
    validation:{
        required:true,
        isEmail:true,
        end:false
    },
    label:'Email',
    sub:'Enter your correct email ',
    error:'Email is not valid',
    isValid:true,
    type:"text",
    name:'email',
    touched:false
  },
{
  value:'',
  id:'2',
  label:'Password',
  sub:"Enter password for your account",
  error:'Password is not valid and must be between  6 , 10 characters',
  validation:{
      required:true,
      isPass:true,
      minLength:6,
      end:false,
      maxLength:10
  },
  isValid:true,
  type:"password",
  name:'password',
  touched:false
},
{
 value:'',
 id:'3',
 label:'Confirm password',
 sub:"Enter your password again",
 error:'Password is not match',
 validation:{
     required:true,
     end:false,
     isConfirm:true,
 },
 isValid:true,
 type:"password",
 name:'password',
 touched:false
    }
    ,
    {
      value:'',
      id:'4',
      label:'',
      sub:"Agree with the terms and conditions",
      error:'',
      validation:{
        check: false,
        able:false
      },
      isValid:true,
      type:"checkbox",
      name:'checkbox',
    }
]