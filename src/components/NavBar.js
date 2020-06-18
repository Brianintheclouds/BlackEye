import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AssistantPhotoIcon from '@material-ui/icons/AssistantPhoto';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { positions } from '@material-ui/system';
import { display } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
  navbar: {
    width: '100%',
    height: 40,
    backgroundColor: '#000000',
  },
  navtitle: {
    margin: 0,
    color: '#bbdefb',
    paddingRight: 10,
  },
  icons: {
    flexDirection: 'row-reverse', 
    display: 'flex',
    width: '100%', 
    position: 'relative',
    top: 5,
  },
  api: {
    paddingRight: 10,
    color: '#bbdefb',
  },
  cbi: {
    paddingRight: 10,
    color: '#bbdefb',
  },
}));

export default function NavBar(){
  const classes = useStyles();  

  return(
    <div className={classes.navbar}>
      
      <div className={classes.icons}>
       	<AssistantPhotoIcon className={classes.api} />
	<ChatBubbleIcon className={classes.cbi} />
      </div>
    </div>
  );
}
