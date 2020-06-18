import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { positions } from '@material-ui/system';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Background from '../images/citi.jpg';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  paper: {
    height: 400,
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
  },
  city:{
    margin: 0,
    textAlign: 'center',
    position: 'relative',
    top: 80,
    fontSize: 60,
  },
  parra: {
    position: 'absolute',
    top: 200,
    textAlign: 'center',
    padding: 10,
  },
  btndiv: {
    width: '100%',
    justifyContent: 'center',
    textAlign: 'center',
  },
  btn: {
    top: 250,
    position: 'relative',
  
  },
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function FirstPromotion(){
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
      <Grid>
        <Paper className={classes.paper}>
	 <h1 className={classes.city}>Own Projects</h1>
	 <p className={classes.parra}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and         </p>
	<div className={classes.btndiv}>
	 <Button variant="contained" color="primary" className={classes.btn} onClick={handleClick} aria-describedby={id}>
            Contacto
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
