import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { positions } from '@material-ui/system';
import { flexbox } from '@material-ui/system';
import Background from '../images/cibersec.jpg';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  grid: {
    width: '100%', 
  },
  paper: {
    color: theme.palette.text.secondary,
    width: '100%',
    height: 400,
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
  },
  title: {
    position: 'relative',
    margin: 0,
    textAlign: 'center',
    color: '#bbdefb',
    top: 120,
    fontSize: 60,
  },
  btnstart: {
    position: 'relative',
    top: 160,
    textAlign: 'center',
  },
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function FourthPromotion() {
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
    <Grid container>
      <Grid className={classes.grid}>
        <Paper className={classes.paper}>
	  <h1 className={classes.title}>Analysis</h1>
	 <div className={classes.btnstart}>
	  <Button variant="contained" color="primary" aria-describedby={id} onClick={handleClick}>
            View More
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
