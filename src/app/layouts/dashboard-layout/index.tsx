import React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import DashboardSidebarNavigation from './dashboard-sidebar-navigation';
import { makeStyles } from '@mui/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

type Props = {
  children: React.ReactNode;
};

const Dashboard = ({ children }: Props) => {
  const classes = useStyles();

  return (
    // <Grid
    //   container
    //   direction="row"
    //   justify="flex-start"
    //   alignItems="flex-start"
    // >
    <Grid container spacing={2}>
      <DashboardSidebarNavigation />{' '}
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>{children}</div>
        </div>
      </div>
    </Grid>
  );
};

export default Dashboard;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    // paddingTop: 64,
    // [theme.breakpoints.up('lg')]: {
    //   paddingLeft: 256,
    // },
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto',
  },
}));
