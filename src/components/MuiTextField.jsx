import React from 'react'
import {useState} from "react"
import {Stack,TextField, InputAdornment} from '@mui/material'


function MuiTextField() {
    const[value,setValue] = useState('')
  return (
   <Stack spacing={4}>
    <Stack direction='row' spacing={2}>
        <TextField label='Name' variant='outlined'/>
        <TextField label='Name' variant='filled'/>
        <TextField label='Name' variant='standard'/>
    </Stack>
    <Stack direction='row' spacing={2}>
        <TextField lable='Small secondary' size='small' color='secondary' value='Name' />
    </Stack>

    <Stack direction='row' spacing={3}>
        <TextField  label='Form Input'  required  value={value} onChange={(e) =>setValue(e.target.value)}
            error ={!value}
            helperText={!value ? 'Required':' Do not share with anyone'}/>
        <TextField  label='Form Input'  helperText="Do not share your password with anyone"/>
        <TextField  label='Password' type='password' helperText="Do not share your password with anyone" disabled/>
        <TextField label='Read only' value =' u can only read no edit' InputProps={{readOnly: true}}/>    
    </Stack>

    <Stack direction='row' spacing={2}>
        <TextField 
        label='Amout'
        InputProps={{
            startAdornment:<InputAdornment position='start'>$</InputAdornment>
        }}/>

       <TextField 
        label='Weight'
        InputProps={{
            endAdornment:<InputAdornment position='end'>Kg</InputAdornment>
        }}/>
    </Stack>



   </Stack>
  )
}

export default MuiTextField