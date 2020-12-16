import React from 'react';
import { Grid } from '@material-ui/core'
import useStyles from './style'
import Video from './Video/Video'

const Videos = ({ result }) => {
    const obj = { ...result }
    const classes = useStyles();
    return (
        <main className={classes.content}>
            
            <div className={classes.toolbar}>
                {
                    result.items && (
                        <Grid container justify='center' spacing={1} className={classes.grid}>
                            {obj.items.map((video) => (
                                <Grid item  >
                                    <Video result={video} />
                                </Grid>
                            ))}
                        </Grid>
                    )
                }

            </div>
            
        </main>
    )
}

export default Videos
