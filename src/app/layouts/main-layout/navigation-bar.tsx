import React from 'react';
import { Theme } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';

import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { colors } from '@mui/material';

export default function NavigationBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link className={`${classes.link} ${classes.title}`} to={'/'}>
            LOGO
          </Link>
          <Button color="inherit">
            <Link className={classes.link} to={'/'}>
              Home
            </Link>
          </Button>
          <Button color="inherit">
            <Link className={classes.link} to={'/about'}>
              About
            </Link>
          </Button>
          <Button color="inherit">
            <Link className={classes.link} to={'/dashboard'}>
              Dashboard
            </Link>
          </Button>
          <Button color="inherit">
            <Link className={classes.link} to={'/login'}>
              Login
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    link: {
      color: colors.lightBlue[50],
      textDecoration: 'none',
    },
  }),
);
