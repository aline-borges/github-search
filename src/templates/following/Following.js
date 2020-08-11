import React from 'react';
import Container from '../../components/atoms/containers/Container';
import PageTitle from '../../components/atoms/texts/PageTitle';
import Line from '../../components/atoms/decoration/Line';
import Button from '../../components/atoms/buttons/Button';
import Header from '../../components/molecules/header/Header';
import Page from '../../components/molecules/page/Page';
import Figure from '../../components/molecules/figure/Figure';
import Main from '../../components/molecules/main/Main';
import FollowingImage from '../../assets/images/following.png'
import ListUser from '../../components/molecules/listUsers/ListUser';

const Following = () => {
  return(
    <>
      <Container width='100vw' height='100vh' direction='column' margin="0 0 15px 0">
        <Header />
        <Page margin="25px 0 0 0">
          <Figure width='500px' src={FollowingImage} alt='home' margin='25px 0 0 0' />
          <Main>
            <Container id="list-repo" direction='column' margin="0 0 2px 0">
              <svg id='followLogo' width="80" height="80" viewBox="0 0 24 20" fill="#F9F3F3" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.08101 9.88159C10.6316 9.88159 12.6987 7.72384 12.6987 5.06149C12.6987 2.39914 10.6316 0.241394 8.08101 0.241394C5.53044 0.241394 3.46329 2.39914 3.46329 5.06149C3.46329 7.72384 5.53044 9.88159 8.08101 9.88159ZM11.3134 11.0866H10.7109C9.91005 11.4707 9.01898 11.6891 8.08101 11.6891C7.14303 11.6891 6.25556 11.4707 5.45107 11.0866H4.8486C2.17177 11.0866 0 13.3536 0 16.1477V17.7142C0 18.7122 0.775632 19.5218 1.73164 19.5218H14.4304C15.3864 19.5218 16.162 18.7122 16.162 17.7142V16.1477C16.162 13.3536 13.9902 11.0866 11.3134 11.0866ZM22.9659 6.25145L21.963 5.19329C21.7971 5.0163 21.5265 5.0163 21.3569 5.18953L17.5762 9.10585L15.9347 7.38117C15.7688 7.20418 15.4982 7.20418 15.3287 7.3774L14.3149 8.42803C14.1454 8.60125 14.1454 8.88368 14.3113 9.06067L17.2587 12.1598C17.4247 12.3368 17.6952 12.3368 17.8648 12.1636L22.9623 6.88409C23.1283 6.7071 23.1319 6.42468 22.9659 6.25145Z" fill="#F9F3F3" />
                <defs>
                <linearGradient id="paint0_linear" x1="11.5443" y1="0.241394" x2="11.5443" y2="19.5218" gradientUnits="userSpaceOnUse">
                <stop offset="0.291667" />
                </linearGradient>
                </defs>
              </svg>
              <PageTitle color='#F9F3F3'>Following</PageTitle>
              <Line color='#24927D' />

              <ul id="list">
                <li><ListUser /></li>
                <li><ListUser /></li>
                <li><ListUser /></li>
              </ul>
              
              <Button margin='10px auto 25px auto' bgColor="#24927D" color='#F9F3F3' lineHeight='21px' bgHover='#146A5A'>
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

export default Following 
