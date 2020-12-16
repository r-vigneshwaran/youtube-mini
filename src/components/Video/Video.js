import React from 'react'
import { Card, CardMedia, CardContent,  Typography } from '@material-ui/core';
// import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import useStyles from './style'
const Video = ({ result }) => {
    console.log(result)
    const classes = useStyles();
    const link = `https://www.youtube.com/embed/${result.id.videoId}`;
    return (
      
        <Card className={classes.card}>
        
            <CardMedia className={classes.media}  title='Title of the video'>
                <iframe width="300" height="250" src={link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </CardMedia>
            <CardContent>
                <div className={classes.cardcontent}>
                    <Typography variant='h6' gutterBottom>
                        <sup>
                        {result.snippet.title}
                        </sup>
                    </Typography>
                </div>
                {/* <Typography variant='body2' color='textSecondary' >{result.snippet.description}</Typography> */}
            </CardContent>
            
        </Card>
    )
}

export default Video
