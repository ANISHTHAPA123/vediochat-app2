import React from 'react';
import {Typography,AppBar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


import Vedioplayer from './components/Vedioplayer';
import Options from './components/Options';
import Notification from './components/Notification';

const useStyles = makeStyles((theme)=>({
    appBar: {
        borderRadius: 15,
        margin: '30px 100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '600px',
        border: '2px solid black',

        [theme.breakpoints.down('xs')]: {
            width: '90%',
          },
        },
        image: {
          marginLeft: '15px',
        },
        wrapper: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        },

}));
const App=()=>{
    const classes=useStyles();
    return(
        <div className={classes.wrapper}>
           <AppBar  className={classes.appBar} position='static' color="inherit">
              <Typography variant='h2' align='center'>Vedio Chat App</Typography>

           </AppBar>

           <Vedioplayer/>
           <Options>
                <Notification/>
           </Options>
        </div>
    );
}
export default App;