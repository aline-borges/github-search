import React from 'react';
import Container from '../../components/atoms/containers/Container';
import PageTitle from '../../components/atoms/texts/PageTitle';
import Line from '../../components/atoms/decoration/Line';
import Button from '../../components/atoms/buttons/Button';
import Header from '../../components/molecules/header/Header';
import Page from '../../components/molecules/page/Page';
import Figure from '../../components/molecules/figure/Figure';
import Main from '../../components/molecules/main/Main';
import FollowersImage from '../../assets/images/followers.png'
import ListUser from '../../components/molecules/listUsers/ListUser';

const Following = () => {
  return(
    <>
      <Container width='100vw' height='100vh' direction='column' margin="0 0 15px 0">
        <Header />
        <Page margin="25px 0 0 0">
          <Figure width='500px' src={FollowersImage} alt='home' margin='25px 0 0 0' />
          <Main>
            <Container id="list-repo" direction='column' margin="0 0 2px 0">
              <svg className='largeIcon' width="80" height="80" viewBox="0 0 23 20" fill="#F9F3F3" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3997 8.07406H20.1058V5.66401C20.1058 5.33262 19.8478 5.06149 19.5324 5.06149H18.3854C18.07 5.06149 17.812 5.33262 17.812 5.66401V8.07406H15.5181C15.2027 8.07406 14.9446 8.34519 14.9446 8.67657V9.88159C14.9446 10.213 15.2027 10.4841 15.5181 10.4841H17.812V12.8942C17.812 13.2255 18.07 13.4967 18.3854 13.4967H19.5324C19.8478 13.4967 20.1058 13.2255 20.1058 12.8942V10.4841H22.3997C22.7151 10.4841 22.9732 10.213 22.9732 9.88159V8.67657C22.9732 8.34519 22.7151 8.07406 22.3997 8.07406ZM8.06302 9.88159C10.597 9.88159 12.6508 7.72385 12.6508 5.06149C12.6508 2.39914 10.597 0.241394 8.06302 0.241394C5.52902 0.241394 3.47529 2.39914 3.47529 5.06149C3.47529 7.72385 5.52902 9.88159 8.06302 9.88159ZM11.2744 11.0866H10.6759C9.8802 11.4707 8.99491 11.6891 8.06302 11.6891C7.13114 11.6891 6.24943 11.4707 5.45016 11.0866H4.85161C2.19215 11.0866 0.0344849 13.3536 0.0344849 16.1477V17.7143C0.0344849 18.7122 0.805081 19.5218 1.75489 19.5218H14.3712C15.321 19.5218 16.0916 18.7122 16.0916 17.7143V16.1477C16.0916 13.3536 13.9339 11.0866 11.2744 11.0866Z" fill="#F9F3F3"/>
                <defs>
                <linearGradient id="paint0_linear" x1="11.5038" y1="0.241394" x2="11.5038" y2="19.5218" gradientUnits="userSpaceOnUse">
                <stop offset="0.291667" />
                </linearGradient>
                </defs>
              </svg>
              <PageTitle color='#F9F3F3'>Followers</PageTitle>
              <Line color='#8752CC' />

              <ul id="list">
                <li><ListUser /></li>
                <li><ListUser /></li>
                <li><ListUser /></li>
              </ul>
              
              <Button margin='10px auto 25px auto' bgColor="#8752CC" color='#F9F3F3' lineHeight='21px' bgHover='#562694'>
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
