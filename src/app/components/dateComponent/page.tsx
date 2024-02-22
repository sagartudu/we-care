import React from 'react';
import styles from './DateComponent.module.scss';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { TextField } from '@mui/material';

interface DateProps{
    label:String;
    error:boolean;
    id:string;
    helperText:string | undefined,
    field:Object
}

const DateComponent = ({label, error, id, helperText, field}:DateProps) => {
  return (
    <section className={styles.mainConatiner}>
    <div>{label}</div>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker
    sx={{
        background:'#fff',
        outlineColor:"#0A0A1B99",
        padding:"0px",
        borderRadius:"6px",
        marginTop:'6px',
        width:"100%"
      }}
      slotProps={{
        textField: {
          helperText:helperText,
          className: error ? styles.warning: ''
        },
      }}

      {...field}
    />
    </LocalizationProvider>
    
</section>
  )
}

export default DateComponent