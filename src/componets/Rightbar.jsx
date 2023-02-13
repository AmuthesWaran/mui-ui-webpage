import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'



export const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{display: {xs:"none", sm:"block"}}} >
      <Box position="fixed" width={350} >
        <Typography variant='h6' fontWeight={100} mt={2} mb={2} >Online Friends</Typography>
        <AvatarGroup max={8}>
          <Avatar alt="Remy Sharp" src= "https://avatars1.githubusercontent.com/u/45748836?s=400&u=bc11dcbbdfe0274602b1dd035ec316a752aea87c&v=4" />
          <Avatar alt="Travis Howard" src = "https://yt3.ggpht.com/a/AATXAJxn4K_J9jBq4_8yvkpoKV8ryWHpDP_EknjbAg=s900-c-k-c0xffffffff-no-rj-mo" />
          <Avatar alt="Cindy Baker" src="https://th.bing.com/th/id/OIP.ax-2aejGhCAKkgOxiSAeXAHaHa?pid=ImgDet&rs=1" />
          <Avatar alt="Agnes Walker" src="https://immunoatlas.org/pub/img/about-lit-hsin.png" />
          <Avatar alt="Trevor Henderson" src="https://tradesmartu.com/wp-content/uploads/2018/01/Active-Trader-Avatar.png" />
          <Avatar alt="Trevor Henderson" src="https://th.bing.com/th/id/OIP.ETXfhrOqohu9QR1dqEd8xQHaHa?pid=ImgDet&w=500&h=500&rs=1" />
          <Avatar alt="Trevor Henderson" src="https://tradesmartu.com/wp-content/uploads/2018/01/Active-Trader-Avatar.png" />
          <Avatar alt="Trevor Henderson" src="https://tradesmartu.com/wp-content/uploads/2018/01/Active-Trader-Avatar.png" />
          <Avatar alt="Trevor Henderson" src="https://tradesmartu.com/wp-content/uploads/2018/01/Active-Trader-Avatar.png" />
          <Avatar alt="Trevor Henderson" src="https://tradesmartu.com/wp-content/uploads/2018/01/Active-Trader-Avatar.png" />
        </AvatarGroup>

        <Typography variant='h6' fontWeight={100} mt={2} mb={2} >Latest Memes</Typography>

        <ImageList sx={{width:390, height:225}} cols={3} rowHeight={100} gap={5}  >
            
            <ImageListItem>
              <img
                  src="https://i.redd.it/m63ph6fgiyp81.jpg"
                  alt="" 
                />
            </ImageListItem>

            <ImageListItem>
              <img
                  src="https://i.redd.it/x4xsrmg4bad91.jpg"
                  alt=""
                />
            </ImageListItem>

            <ImageListItem>
              <img
                  src="https://i.redd.it/yj253q39kop81.jpg"
                  alt=""
                />
            </ImageListItem>
        </ImageList>

        <Typography variant='h6' fontWeight={100} >Latest Conversation</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="https://th.bing.com/th/id/OIP.iKM6SYsp79j7vR6oKaWbvgHaHa?pid=ImgDet&w=512&h=512&rs=1" />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://th.bing.com/th/id/OIP.BmuJWAAp77-72B_kiwMZewAAAA?pid=ImgDet&w=300&h=300&rs=1" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://yt3.ggpht.com/a/AATXAJy8nfDhH9Zhk2zOPYRKsQ-SJrJtBKfHgsKDPA=s900-c-k-c0xffffffff-no-rj-mo" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>

      </Box>
    </Box>
  )
}
