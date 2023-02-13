import React from 'react'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

const Post = () => {
  return (
    <div>
        <Card sx={{margin:5}} >
      <CardHeader
        avatar={
          <Avatar sx={{width:35, height:35}} src="https://styles.redditmedia.com/t5_2tex6/styles/communityIcon_u89jf60zv7p41.png?width=256&s=291ef0574ce6193e7093c9a9bc1a3f80e1e69631" aria-label="Programmer">
            PH
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="ProgrammerHumor"
        subheader="13 hours ago"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://i.redd.it/6aht99vnmxk91.jpg"
        alt="Bugs meme Gru"
      />
<CardContent>
        <Typography variant="body2" color="text.secondary">
          Bugs.. Bugs... Everywhere
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>    
    </Card>

    <Card sx={{margin:5}} >
    <CardHeader
        avatar={
          <Avatar sx={{width:35, height:35}} src="https://img.freepik.com/free-vector/maths-chalkboard_23-2148178219.jpg?w=1060&t=st=1662000698~exp=1662001298~hmac=4e85bfd22fc8a3e1206cc810eee494e0ae6efd6f7763a3223377be6dc3138c65" aria-label="Programmer">
            MM
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Math Memes"
        subheader="5 hours ago"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://i.redd.it/gr6r510yhwk91.jpg"
        alt="Math Programming machine leaning"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Math + Programming
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
    </div>
  )
}

export default Post