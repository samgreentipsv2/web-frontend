import React from 'react';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export interface RecentProps {
    id: number,
    day : string,
    status: boolean
}

const SingResult = (props: RecentProps) => {
  return (
    <>
    <strong><p>{new Date(props.day).toDateString().slice(3,10)}</p></strong>
    <span>
        {
            props.status? <CheckBoxIcon sx={{color:"green", fontSize:"30px"}}/>: <IndeterminateCheckBoxIcon sx={{color:"red", fontSize:"30px"}}/>
            
        }
    </span>
    </>
  )
}

export default SingResult