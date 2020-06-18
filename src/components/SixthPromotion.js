import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { positions } from '@material-ui/system';
import { flexbox } from '@material-ui/system';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Background from '../images/atos.jpg';


const useStyles = makeStyles((theme) => ({
  grid: {
    width: '100%',
    height: 400,
  },
  paper: {
    width: '100%',
    height: 400,
    backgroundImage: `url(${Background})`,
  },
  title: {
    margin: 0,
    position: 'relative',
    textAlign: 'center',
    fontSize: 60,
    color: '#bbdefb',
    top: 100,
  },
  btn: {
   position: 'relative',
   textAlign: 'center',
   top: 130,
  },
 typography: {
    padding: theme.spacing(2),
 },
 }));

export default function SixthPromotion() {
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
	  <h1 className={classes.title}>Pentesting</h1>
	  <div className={classes.btn}>
	    <Button variant="contained" color="primary" aria-describedby={id} onClick={handleClick}>
               Getting Started
            </Button>
	  <Popover
	    className={classes.popo}
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
            <Typography className={classes.typography}>
	      The content of the Popover.lsdkfjfjosdi fjosdi fsodifjodsifjosdifjdosifj dsoif dsoifjoids  oifsodfu sdoifusdoifu dsoif dosifu dsoi fouidsu osdifuoisdfuosid fu dsoifu osdiuf sodi fusdoi fusdoif udsoif sdoif sdoifudfisufghoiudh ipoduafh osdfiuhsdfoiugh sdfioug sodifug sdfoiugh sdofiug hdsifou gsdfipgs iugh
	    </Typography>	   
           </Popover>
	 </div>
	</Paper>
      </Grid>
    </Grid>
  );
}
