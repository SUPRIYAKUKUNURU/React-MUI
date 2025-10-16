import React from 'react'
import{Stack,Button,IconButton} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
 function MuiButtons() {
  return (
    <Stack>
    <Stack spacing={3} direction="row">
        {/* <h1>Button types</h1> */}
        <Button variant="text" href="https://google.com">text</Button>
        <Button variant= 'contained'>Contained</Button>
        <Button variant = 'outlined'>Outlined</Button>
    </Stack >

    <Stack spacing={3} direction='row'>
         {/* <h1>Button Colors</h1> */}
        <Button variant='contained' color="primary">Primary</Button>
        <Button variant='contained' color="secondary">Secondary</Button>
        <Button variant='contained' color="error">Danger</Button>
        <Button variant='contained' color="success">Success</Button>
        <Button variant='contained' color="warning">Warning</Button>
        <Button variant='contained' color="info" >Info</Button>
    </Stack>

    <Stack display="block" spacing={3} direction='row'>
        {/* <h1>Button Sizes</h1> */}
        <Button variant='contained' size='small'>Small</Button>
        <Button variant='contained' size='medium'>Meduim</Button>
        <Button variant='contained' size='large'>Large</Button>

    </Stack>
    <Stack spacing={2} direction='row'>
        <Button variant='contained' startIcon={ <SendIcon/>}>Send</Button>
        <Button variant='contained' endIcon={<SendIcon/>}>End</Button>
    </Stack>
    <IconButton aria-label='send' color='success' size='small' colorr='success' onClick={()=>alert(' Button Clicked')}>
        <SendIcon/>
    </IconButton>
    </Stack>
  )
}

export default MuiButtons