import React from 'react';
import Container from '../../atoms/containers/Container';
import ImageProfile from '../../atoms/images/ImageProfile';
import Name from '../../atoms/texts/Name';
import Username from '../../atoms/texts/Username';
import Paragraph from '../../atoms/texts/Paragraph';
import Button from '../../atoms/buttons/Button';


const ListUser = () => {
  return(
    <Container direction='row'>
      <ImageProfile  src='https://avatars1.githubusercontent.com/u/3043525?v=4' alt='photoprofile' width='70px' margin='10px 15px 0 0'/>
      <Container direction='column' margin='10px 0 0 0' justify='left' align='center'>
        <Container direction='row' justify='right' align='flex-end' margin='2px 0 0 px'>
          <Name size='24px' weight='500' color='#F9F3F3' margin='10px 10px 0 0'>Guilherme Oliveira</Name>
          <Username size='12px' weight='normal' color='#F9F3F3' margin='0 15px 5px 0'>@guibfo</Username>
        </Container>
        <Container direction='row' margin='2px 85px 10px 0'>
          <Container direction='row'>
          <svg id='place' width="18" height="18" viewBox="0 0 23 23" fill="#8752CC" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.0232 1.83716C7.46823 1.83716 4.59302 4.71237 4.59302 8.26734C4.59302 13.09 11.0232 20.2091 11.0232 20.2091C11.0232 20.2091 17.4534 13.09 17.4534 8.26734C17.4534 4.71237 14.5782 1.83716 11.0232 1.83716ZM11.0232 10.5638C10.4141 10.5638 9.83001 10.3219 9.39933 9.8912C8.96866 9.46053 8.7267 8.87641 8.7267 8.26734C8.7267 7.65827 8.96866 7.07415 9.39933 6.64347C9.83001 6.2128 10.4141 5.97085 11.0232 5.97085C11.6323 5.97085 12.2164 6.2128 12.6471 6.64347C13.0777 7.07415 13.3197 7.65827 13.3197 8.26734C13.3197 8.87641 13.0777 9.46053 12.6471 9.8912C12.2164 10.3219 11.6323 10.5638 11.0232 10.5638Z" fill="#8752CC" />
            <defs>
              <linearGradient id="paint0_linear" x1="11.0232" y1="1.83716" x2="11.0232" y2="20.2091" gradientUnits="userSpaceOnUse">
                <stop offset="0.291667" />
              </linearGradient>
            </defs>
          </svg>
          <Paragraph weight='500' size='12px' margin='0 10px 0 1px'>Rio de Janeiro, Brazil</Paragraph>
          </Container>
          <Container direction='row'>
          <svg id='job' width="15" height="15" viewBox="0 0 19 18" fill="#8752CC" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.59299 17.5369H13.779V1.87895C13.779 0.841612 13.0075 0 12.0566 0H6.31536C5.36446 0 4.59299 0.841612 4.59299 1.87895V17.5369ZM6.88948 2.50526H11.4825V3.7579H6.88948V2.50526ZM18.3719 5.63685V15.6579C18.3719 16.6952 17.6005 17.5369 16.6496 17.5369H14.9272V3.7579H16.6496C17.6005 3.7579 18.3719 4.59951 18.3719 5.63685ZM3.44474 17.5369H1.72237C0.771478 17.5369 0 16.6952 0 15.6579V5.63685C0 4.59951 0.771478 3.7579 1.72237 3.7579H3.44474V17.5369Z" fill="#8752CC" />
            <defs>
              <linearGradient id="paint0_linear" x1="9.18597" y1="0" x2="9.18597" y2="17.5369" gradientUnits="userSpaceOnUse">
                <stop offset="0.291667" />
              </linearGradient>
            </defs>
          </svg>
          <Paragraph weight='500' size='12px' margin='0 10px 0 6px'>FGV</Paragraph>
          </Container>
        </Container>
      </Container>
      <Button margin='auto auto 15px 5px' padding='8px 16px' bgColor="#3E3C3C" color="#F9F3F3" size='10px' lineHeight='21px' bgHover='#F9F3F3' colorHover='#3E3C3C'>View Profile</Button>
    </Container>
  );
}

export default ListUser 
