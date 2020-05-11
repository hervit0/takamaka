import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import React from 'react';
import CustomHeader from '../../components/header/header';
import PageContainer from '../../components/pageContainer/pageContainer';
import logo from '../../resources/book.jpg';
import { Routes } from '../../navigation/router';
import DashboardActions from './components/dashboardActions';

const useStyles = makeStyles((theme: Theme) => ({
    typoShare: {
      margin: theme.spacing(1),
    },
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    titleBar: {
      minWidth: theme.spacing(2),
    },
  }),
);

const tileData = [
  { title: 'Parry Hotter' },
  { title: 'Germione Hanger' },
  { title: 'Won Reasley' },
];

const UserDashboardPage = () => {
  const classes = useStyles();

  return (
    <PageContainer>
      <CustomHeader header='Dashboard'/>
      <DashboardActions/>
      <Typography className={classes.typoShare} variant='h4' color="textPrimary">
        My stories
      </Typography>
      <GridList className={classes.gridList} cols={2.5}>
        {tileData.map((tile) => (
          <GridListTile key={tile.title}>
            <img src={logo} alt={tile.title}/>
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`} href={Routes.dashboard}>
                  <PlayCircleOutlineIcon/>
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </PageContainer>
  );
};

export default UserDashboardPage;
