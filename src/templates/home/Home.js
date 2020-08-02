import React from 'react';
import Page from '../../components/molecules/page/Page';
import Figure from '../../components/molecules/figure/Figure';
import Main from '../../components/molecules/main/Main';
import Header from '../../components/molecules/header/Header';

const Home = (props) => {
  return(
    <>
      <Header />
      <Page>
        <Figure />
        <Main />
      </Page>
    </>
  );
}

export default Home 

