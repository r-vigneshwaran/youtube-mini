import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
    },
    media: {
        height: '250px',
        width:'100px',
        // paddingTop: '56.25%', // 16:9
    },
    card: {
        width: '300px',
        height:'380px'
    },
   
    cardContent: {
        paddingTop:'20px',
        display: 'flex',
        justifyContent: 'center',
    },
    // here cuts
   
}));