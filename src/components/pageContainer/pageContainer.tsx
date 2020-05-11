import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import React, { ReactNode } from 'react';

const useStyles = makeStyles((theme) => ({
  page: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  }
}));

type PageContainerProps = {
  children: ReactNode
}

const PageContainer = ({ children }: PageContainerProps) => {
  const classes = useStyles();

  return (
    <Container className={classes.page}>
      {children}
    </Container>
  );
};

export default PageContainer;