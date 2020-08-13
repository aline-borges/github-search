import React from 'react';
import Container from '../../components/atoms/containers/Container';
import PageTitle from '../../components/atoms/texts/PageTitle';
import Line from '../../components/atoms/decoration/Line';
import ListRepo from '../../components/atoms/lists/ListRepo';
import Item from '../../components/atoms/lists/Item';
import Button from '../../components/atoms/buttons/Button';
import Header from '../../components/molecules/header/Header';
import Page from '../../components/molecules/page/Page';
import Figure from '../../components/molecules/figure/Figure';
import Main from '../../components/molecules/main/Main';
import stars from '../../assets/images/stars.png';

const Stars = () => {
  return(
    <>
      <Container width='100vw' height='100vh' direction='column'>
        <Header />
        <Page margin="100px 0 0 0">
          <Figure width='500px' src={stars} alt='home' margin='25px 0 0 0' />
          <Main>
            <Container id="list-repo" direction='column'>
            <svg className='largeIcon' width="80" height="80" viewBox="0 0 22 23" fill="#8752CC" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.81981 0.783627L7.13459 6.60825L1.12675 7.5453C0.0493653 7.71247 -0.38241 9.13343 0.398897 9.9473L4.74543 14.4785L3.7174 20.8795C3.53235 22.0365 4.67141 22.9031 5.62543 22.362L11 19.3397L16.3746 22.362C17.3286 22.8987 18.4677 22.0365 18.2826 20.8795L17.2546 14.4785L21.6011 9.9473C22.3824 9.13343 21.9506 7.71247 20.8733 7.5453L14.8654 6.60825L12.1802 0.783627C11.6991 -0.2546 10.305 -0.267797 9.81981 0.783627Z" fill="#8752CC" />
              <defs>
              <linearGradient id="paint0_linear" x1="11" y1="0" x2="11" y2="22.527" gradientUnits="userSpaceOnUse">
              <stop offset="0.291667" />
              </linearGradient>
              </defs>
            </svg>
              <PageTitle color='#8752CC'>Stars</PageTitle>
              <Line color='#8752CC' />
              <ListRepo>
                <Item target='#8752CC'>First-Repository</Item>
                <Item target='#8752CC'>Second-Repository</Item>
                <Item target='#8752CC'>Third-Repository</Item>
                <Item target='#8752CC'>Four-Repository</Item>
                <Item target='#8752CC'>Fifth-Repository</Item>
              </ListRepo>
              <Button margin='auto' bgColor="#8752CC" color="#F9F3F3" bgHover='#562694'>
                See More
                <svg width="12" height="11" viewBox="0 0 12 11" fill="#F9F3F3" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.3622 4.58106H7.10558V1.47242C7.10558 1.09097 6.7815 0.781616 6.38188 0.781616H5.65817C5.25855 0.781616 4.93447 1.09097 4.93447 1.47242V4.58106H1.6778C1.27818 4.58106 0.954102 4.89041 0.954102 5.27187V5.96267C0.954102 6.34413 1.27818 6.65348 1.6778 6.65348H4.93447V9.76212C4.93447 10.1436 5.25855 10.4529 5.65817 10.4529H6.38188C6.7815 10.4529 7.10558 10.1436 7.10558 9.76212V6.65348H10.3622C10.7619 6.65348 11.0859 6.34413 11.0859 5.96267V5.27187C11.0859 4.89041 10.7619 4.58106 10.3622 4.58106Z" fill="#F9F3F3"/>
                </svg>
              </Button>
            </Container>
          </Main>
        </Page>
      </Container>
    </>
  );
}

export default Stars 
