import React from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Theme, AppBar, Toolbar, Button, colors } from '@mui/material';
import { Link } from 'react-router-dom';

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
    // menuButton: {
    //   marginRight: theme.spacing(2),
    // },
    link: {
      color: colors.lightBlue[50],
      textDecoration: 'none',
    },
    title: {
      flexGrow: 1,
    },
  }),
);
