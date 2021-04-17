import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import footerAdornment from '../../assets/Footer Adornment.svg';

const useStyle = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.arcBlue,
    width: '100%',
    zIndex: 1302,
  },
  adornment: {
    width: '25em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '21em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '15em',
    },
  },
  mainContainer: {
    position: 'absolute',
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '.75rem',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  gridItem: {
    margin: '3em',
  },
}));

export default function Footer({ setValue, setSelectedIndex }) {
  const classes = useStyle();

  return (
    <footer className={classes.footer}>
      <Grid
        container
        justify={'center'}
        direction={'row'}
        className={classes.mainContainer}
      >
        <Grid item className={classes.gridItem}>
          <Grid container direction={'column'} spacing={2}>
            <Grid
              item
              className={classes.link}
              component={Link}
              to={'/'}
              onClick={() => setValue(0)}
            >
              Home
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction={'column'} spacing={2}>
            <Grid
              item
              className={classes.link}
              component={Link}
              to={'/services'}
              onClick={() => setValue(1)}
              onClick={() => setSelectedIndex(0)}
            >
              Services
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to={'/customsoftware'}
              onClick={() => setValue(1)}
              onClick={() => setSelectedIndex(1)}
            >
              Custom Software Development
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to={'/mobileapps'}
              onClick={() => setValue(1)}
              onClick={() => setSelectedIndex(2)}
            >
              Mobile App Development
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to={'/websites'}
              onClick={() => setValue(1)}
              onClick={() => setSelectedIndex(3)}
            >
              Website Development
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction={'column'} spacing={2}>
            <Grid
              item
              className={classes.link}
              component={Link}
              to={'/revolution'}
              onClick={() => setValue(2)}
            >
              The Revolution
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to={'/revolution'}
              onClick={() => setValue(2)}
            >
              Vision
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to={'/revolution'}
              onClick={() => setValue(2)}
            >
              Technology
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to={'/revolution'}
              onClick={() => setValue(2)}
            >
              Process
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction={'column'} spacing={2}>
            <Grid
              item
              className={classes.link}
              component={Link}
              to={'/about'}
              onClick={() => setValue(3)}
            >
              About Us
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to={'/about'}
              onClick={() => setValue(3)}
            >
              History
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to={'/about'}
              onClick={() => setValue(3)}
            >
              Team
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction={'column'} spacing={2}>
            <Grid
              item
              className={classes.link}
              component={Link}
              to={'/contact'}
              onClick={() => setValue(4)}
            >
              Contact Us
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <img
        src={footerAdornment}
        alt='decorative black slash'
        className={classes.adornment}
      />
    </footer>
  );
}
