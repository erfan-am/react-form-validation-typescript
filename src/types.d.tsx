//form array
export interface INPUT{
  name?: string
  type?: string
  value?: string
  sub?: string
  error?: string
  id?: string
  validation?: any
  isValid?: boolean
  label?: string
  touched?:boolean
}
export interface Form{
  CTRLS:INPUT[]
}

