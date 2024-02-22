import React from 'react';
import styles from './dropDown.module.scss';
import { Select, SelectChangeEvent } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

interface DropdownProps{
    label?:string;
}

const Dropdown = ({label}:DropdownProps) => {
    const [value, setValue] = useState<string>();
    
    const handleChange = (event:SelectChangeEvent) =>{
        setValue(event.target.value as string)
    }
  return (
    <section className={styles.mainContainer}>
        <div>{label}</div>
        <Select 
        sx={{
            background:'#fff',
            outlineColor:"#0A0A1B99",
            padding:"0px",
            borderRadius:"6px",
            marginTop:'6px',
            width:"100%"
          }}
        value={value}
        onChange={handleChange}>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
        </Select>
    </section>
  )
}

export default Dropdown