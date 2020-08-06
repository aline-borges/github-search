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
import RepositoryImage from '../../assets/images/Repository.png';

const Repositories = () => {
  return(
    <>
      <Container width='100vw' height='100vh' direction='column'>
        <Header />
        <Page>
          <Figure width='500px' src={RepositoryImage} alt='home' margin='25px 0 0 0' />
          <Main>
            <Container id="list-repo" direction='column'>
              <svg id='repoLogo' width="80" height="80" viewBox="0 0 20 24" fill="#24927D" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.9809 6.67012C19.9809 4.64414 18.1576 3.00319 15.9065 3.00319C13.6555 3.00319 11.8322 4.64414 11.8322 6.67012C11.8322 8.33857 13.0698 9.74575 14.7606 10.1904C14.7301 10.9283 14.5467 11.4967 14.2004 11.8817C13.4161 12.7618 11.6896 12.9085 9.8612 13.0597C8.42499 13.1789 6.93784 13.3073 5.72063 13.8344V7.23391C7.37584 6.76637 8.57269 5.37752 8.57269 3.73657C8.57269 1.71059 6.74941 0.0696411 4.49832 0.0696411C2.24723 0.0696411 0.42395 1.71059 0.42395 3.73657C0.42395 5.37752 1.6208 6.76637 3.27601 7.23391V16.3691C1.6208 16.8413 0.42395 18.2301 0.42395 19.8711C0.42395 21.897 2.24723 23.538 4.49832 23.538C6.74941 23.538 8.57269 21.897 8.57269 19.8711C8.57269 18.3126 7.49298 16.9788 5.96509 16.4517C6.12297 16.2133 6.36234 16.0025 6.72394 15.8374C7.549 15.4616 8.7815 15.3607 10.0904 15.2507C12.2396 15.072 14.674 14.8657 16.1103 13.2614C16.8233 12.4639 17.1849 11.4371 17.2103 10.1491C18.8197 9.65408 19.9809 8.28357 19.9809 6.67012ZM4.49832 3.00319C4.9465 3.00319 5.31319 3.33321 5.31319 3.73657C5.31319 4.13993 4.9465 4.46996 4.49832 4.46996C4.05014 4.46996 3.68344 4.13993 3.68344 3.73657C3.68344 3.33321 4.05014 3.00319 4.49832 3.00319ZM4.49832 20.6045C4.05014 20.6045 3.68344 20.2744 3.68344 19.8711C3.68344 19.4677 4.05014 19.1377 4.49832 19.1377C4.9465 19.1377 5.31319 19.4677 5.31319 19.8711C5.31319 20.2744 4.9465 20.6045 4.49832 20.6045ZM15.9065 5.93673C16.3547 5.93673 16.7214 6.26675 16.7214 6.67012C16.7214 7.07348 16.3547 7.4035 15.9065 7.4035C15.4584 7.4035 15.0917 7.07348 15.0917 6.67012C15.0917 6.26675 15.4584 5.93673 15.9065 5.93673Z" fill="#24927D" />
                <defs>
                <linearGradient id="paint0_linear" x1="10.2024" y1="0.0696411" x2="10.2024" y2="23.538" gradientUnits="userSpaceOnUse">
                <stop offset="0.291667" />
                </linearGradient>
                </defs>
              </svg>
              <PageTitle color='#24927D'>Repositories</PageTitle>
              <Line color='#24927D' />
              <ListRepo>
                <Item target='#24927D'>First-Repository</Item>
                <Item target='#24927D'>Second-Repository</Item>
                <Item target='#24927D'>Third-Repository</Item>
                <Item target='#24927D'>Four-Repository</Item>
                <Item target='#24927D'>Fifth-Repository</Item>
              </ListRepo>
              <Button margin='auto' bgColor="#24927D" color="#F9F3F3" hover='#146A5A'>
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

export default Repositories 
