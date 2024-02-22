import React from 'react';
import { TextField } from '@mui/material';
import styles from './InputField.module.scss';

interface InputFieldProps{
  label?:string,
  error:boolean,
   type?: string, 
   variant?:'outlined' | 'standard' | 'filled', 
   helperText:string|undefined,
   field:Object
   id:string
}
const InputField  = ({label, error, type, variant, helperText, id, field}: InputFieldProps) => {
  return (
    <section className={styles.mainConatiner}>
        <div>{label}</div>
        <TextField 
        error={error}
        id={id}
        type={type}
        {...field}
        variant={variant?? "outlined"}
        helperText={helperText}
        sx={{
          background:'#fff',
          outlineColor:"#0A0A1B99",
          padding:"0px",
          borderRadius:"6px",
          marginTop:'6px',
          width:"100%"
        }}
        />
    </section>
    
  )
}

export default InputField