import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { positions } from '@material-ui/system';
import Button from '@material-ui/core/Button';
import Background from '../images/programing.jpg';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  grid: {
    width: '100%',
    height: 400,
  },
  paper: {
    width: '100%',
    position: 'relative',
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    height: 400,
  },
  titleone: {
    position: 'relative',
    margin: 0,
    textAlign: 'center',
    color: '#bbdefb',
    top: 150,
    fontSize: 60,
  },
  btnthird: {
    position: 'relative',
    width: '100%',
    textAlign: 'center',
    top: 200,
  },
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function ThirdPromotion() {
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
	  <h1 className={classes.titleone}>OutSourcing</h1>
	  <div className={classes.btnthird}>
	    <Button variant="contained" color="primary" aria-describedby={id} onClick={handleClick}>
              Contact Us
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
