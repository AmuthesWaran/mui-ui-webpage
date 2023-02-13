import { Avatar, Box, Button, ButtonGroup, Fab, Modal, styled, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import {Add as AddIcon} from '@mui/icons-material';
import { Stack } from '@mui/system';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';

const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"

})

const UserBox = styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px"

})


const Add = () => {
    const [open, setOpen] = useState(false)
  return (
    <>
        <Tooltip onClick={e=>setOpen(true)} 
        title="Add" sx={{position:"fixed", bottom:20, left:{xs:"calc(50%-25)", md:30 }}} >
        <Fab color="primary" aria-label="add">
            <AddIcon />
        </Fab>
        </Tooltip>
        <StyledModal
            open={open}
            onClose={e=>setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5} >
                <Typography variant='h6' color='gray' textAlign="center">
                    Create Post
                </Typography>
                <UserBox>
                <Avatar sx={{width:30, height:30}} src="https://images.pexels.com/photos/313690/pexels-photo-313690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  />                    
                    <Typography fontWeight={500} variant="span" >Admin</Typography>
                </UserBox>
                <TextField sx={{width:"100%"}}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your Mind?"
                        variant="standard"
                />
                <Stack direction="row" gap={1} mt={2} mb={3} > 
                <EmojiEmotionsIcon color="primary" />
                <ImageIcon color="secondary" />
                <MovieCreationIcon color="success" />
                <PersonAddIcon color="error" />
                </Stack>

                <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                    <Button>Post</Button>
                    <Button sx={{width:"100px"}} >
                    <DateRangeIcon />
                    </Button>
                </ButtonGroup>
            </Box>
        </StyledModal>
    </>
  )
}

export default Add