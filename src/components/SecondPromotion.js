import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { positions } from '@material-ui/system';
import { flexbox } from '@material-ui/system';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Background from '../images/net.jpg';
import BackgroundTwo from '../images/networking.jpg';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    height: 400,
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
  },
  grid: {
    width: '50%',
    [theme.breakpoints.down('sm')]: {
       width: '100%',
     },
    display: 'inline-block',
  },
  gridtwo: {
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  papertwo: {
    width: '100%',
    height: 400,
    backgroundImage: `url(${BackgroundTwo})`,
  },
  title: {
    position: 'relative',
    margin: 0,
    textAlign: 'center',
    top: 50,
    color: '#bbdefb',
  },
  para: {
    top: 60,
    position: 'relative',
    textAlign: 'center',
    color: '#bbdefb',
    padding: 5,
  },
  btnbox: {
    top: 80,
    position: 'relative',
    textAlign: 'center',
  },
  secondtitle: {
    margin: 0,
    position: 'relative',
    top: 50,
    textAlign: 'center',
    color: '#bbdefb',
  },
  secondpara: {
    textAlign: 'center',
    top: 80,
    position: 'relative',
    color: '#bbdefb',
    padding: 10,
  },
  secondbtn: {
  postition: 'relative',
  textAlign: 'center',
  },
  btnboxtwo: {
    position: 'relative',
    textAlign: 'center',
    top: 80,
  },
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function SecondPromotion(){
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
	  <h1 className={classes.title}> Networking</h1>
	  <p className={classes.para}>iewdlkjfe wflc ewkcnweofkjwel weocwenokewmcweoklc weockwenoweklc ewkcnewcm ewlkc elc ewokcnweock </p>
	 <div className={classes.btnbox}>
	  <Button className={classes.btn}variant="contained" color="primary" onClick={handleClick} aria-describedby={id} >
            Service
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
      <Grid className={classes.gridtwo}>
        <Paper className={classes.papertwo}>
	  <h1 className={classes.secondtitle}> CyberSecurity </h1>
	  <p className={classes.secondpara}>djeowidnweod wedoweidnoewidnwoednmweokc ew dewodnweodinweocnewoc weodnewodjn ewkc ewodnewkjc ewkc ewoc welc ewock ewlkc wekc ewkcj ewk cewkc ewkc ewkc kewcj wkc </p>
	  <div className={classes.btnboxtwo}>
	  <Button className={classes.secondbtn}variant="contained" color="primary" aria-describedby={id} onClick={handleClick}>
             Getting Started
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
