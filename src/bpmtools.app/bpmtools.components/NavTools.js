import React, { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import '@fontsource/roboto';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import GENREPRESETS from '../bpmtools.files/genrepresets';
import BpmInfo from '../BpmInfo';
import BpmAbout from '../BpmAbout';
import { Link } from "react-router-dom";

/*
<Button onClick={toggleDrawer(anchor, true)}>
              <TextField
                onChange={changeBpm}
                id="outlined-start-adornment"
                InputProps={{
                  endAdornment: <InputAdornment position="start">BPM</InputAdornment>,
                }}
                variant="outlined"
                size="small"
                type="number"
                margin="dense"
                defaultValue="128"
                style={{ width: 110 }}
              />
            </Button>
*/


const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    color: 'black',
    backgroundColor: 'white'
  },
  menuButton: {

  },
  title: {
    flexGrow: 1,
  },
  color: {

  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));
export default function NavTools(props) {
  const theme = useTheme();
  const classes = useStyles();

  const [state, setState] = React.useState({ right: false })

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeBpm = event => {
    event.preventDefault();

    const newBpm = {
      value: event.target.value
    };
    props.onBpmInput(newBpm.value);
  }

  //temp drawer
  const toggleDrawer = (anchor, open, usePreset) => (event) => {
    presetBpm(usePreset)
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const presetBpm = (preset) => {
    if (typeof(preset) == 'number' ? props.onBpmInput(preset): null);
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
    >
      <List>
        <ListItem>
        <TextField
          onChange={changeBpm}
          id="outlined-start-adornment"
          InputProps={{
            endAdornment: <InputAdornment position="start">BPM</InputAdornment>,
          }}
          variant="outlined"
          size="small"
          type="number"
          minimum="1"
          maximum="999"
          margin="dense"
          defaultValue={props.BPM}
          style={{ width: 125 }}
        />
        </ListItem>
        <Divider />

        <ListItem>
        <Typography variant="h6">
          Enter tempo above or select preset below.
        </Typography>
        </ListItem>
        <ListItem>
        <ListItemText secondary={'Note: This only affects the Delay and LFO modules'}/>

        </ListItem>
        <Divider />

        {GENREPRESETS.map((obj, index) => (
          <ListItem button key={index}>
            <ListItemText
            primary={obj.label} 
            secondary={obj.range}
            onClick={toggleDrawer(anchor, false, obj.bpm)}
            onKeyDown={toggleDrawer(anchor, false)}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
  let anchor = 'right'

  return (
    <div className={classes.root}>
      <AppBar position="fixed" classes={{
        root: classes.root
      }}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem > <Link to="/info">Info</Link> </MenuItem>
            <MenuItem > <Link to="/about">About</Link> </MenuItem>
          
          </Menu>
          <Typography variant="h6" className={classes.title}>
            MusicProduction.Tools
          </Typography>
          <div>

            <Button variant="outlined" onClick={toggleDrawer(anchor, true)} >
              {props.BPM}  BPM
            </Button>
            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
              {list(anchor)}
            </Drawer>
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}