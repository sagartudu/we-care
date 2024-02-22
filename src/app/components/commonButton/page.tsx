import React from 'react';
import styles from './commonButton.module.scss';
import { Button } from '@mui/material';

const CommonButton = () => {
  return (
    <Button className={styles.buttonContainer}>Login</Button>
  )
}

export default CommonButton;