import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
      },
  icon: {
    marginRight: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    background: 'linear-gradient(to right bottom, #1C64A2, #10BC65)',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    align: 'center',
  },
  cardContent: {
    flexGrow: 1,
  },
 
}));

export default function ModuleCard() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Your modules section */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Your Modules
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End  modules section */}
          <Grid container spacing={4}>
                     <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="/htmliconon.png"
                    title="Image title"
                    style={{width: '50%', height: 'auto'}}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" style = {{fill: '#f5f5f5'}}>
                      HTML
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                    <Link href='https://outboxedu.teachable.com/' target="blank" passHref={true}>View From LMS</Link> 
                    </Button>
                    <Button size="small" color="primary" >
                      <TrendingFlatIcon/>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="/csslogo.jpeg"
                    title="Image title"
                    style={{width: '50%', height: 'auto'}}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" style = {{fill: '#f5f5f5'}}>
                      CSS
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                    <Link href='https://outboxedu.teachable.com/' target="blank" passHref={true}>View From LMS</Link> 
                    </Button>
                    <Button size="small" color="primary" >
                      <TrendingFlatIcon/>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="/javascriptlogo.png"
                    title="Image title"
                    style={{width: '50%', height: 'auto'}}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" style = {{fill: '#f5f5f5'}}>
                      JavaScript
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                    <Link href='https://outboxedu.teachable.com/' target="blank" passHref={true}>View From LMS</Link> 
                    </Button>
                    <Button size="small" color="primary" >
                      <TrendingFlatIcon/>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="/nextjsreactlogo.png"
                    title="Image title"
                    style={{width: '50%', height: 'auto'}}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" style = {{fill: '#f5f5f5'}}>
                      React With Nextjs
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                    <Link href='https://outboxedu.teachable.com/p/react-js' target="blank" passHref={true}>View From LMS</Link> 
                    </Button>
                    <Button size="small" color="primary" >
                      <TrendingFlatIcon/>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="/reactgatsby.png"
                    title="Image title"
                    style={{width: '50%', height: 'auto'}}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" style = {{fill: '#f5f5f5'}}>
                      React With Gatsby
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                    <Link href='https://outboxedu.teachable.com/p/react-js' target="blank" passHref={true}>View From LMS</Link> 
                    </Button>
                    <Button size="small" color="primary" >
                      <TrendingFlatIcon/>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="/nodejslogo.png"
                    title="Image title"
                    style={{width: '50%', height: 'auto'}}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" style = {{fill: '#f5f5f5'}}>
                      Stacking Node(MERN)
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                    <Link href='https://outboxedu.teachable.com/' target="blank" passHref={true}>View From LMS</Link> 
                    </Button>
                    <Button size="small" color="primary" >
                      <TrendingFlatIcon/>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
          </Grid>
        </Container>
      </main>
     
    </React.Fragment>
  );
}