import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { positions } from '@material-ui/system';
import Button from '@material-ui/core/Button';
import Background from '../images/cyber.jpg';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '100%',
    height: 400,
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    position: 'relative',
  },
  grid: {
    width: '100%',
    height: 400,
    position: 'relative',
  },
  title: {
    position: 'relative',
    top: 120,
    margin: 0,
    textAlign: 'center',
    fontSize: 60,
    color: '#bbdefb',
  },
  btnmore: {
    position: 'relative',
    top: 130,
    textAlign: 'center',
  },
   typography: {
    padding: theme.spacing(2),
  },
}));

export default function FivethPromotion(){
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

   const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
 
  return(
    <Grid>
      <Grid className={classes.grid}>
         <Paper className={classes.paper}>
           <h1 className={classes.title}> Data Center </h1>
	  <div className={classes.btnmore}> 
	  <Button variant="contained" color="primary" aria-describedby={id} onClick={handleClick}>
             More
           </Button>
	   <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>The content of the Popover.</Typography>
      </Popover>
	  </div>
	 </Paper>
      </Grid>
    </Grid>
  );
}
