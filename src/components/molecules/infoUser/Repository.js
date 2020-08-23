import React, { useEffect } from 'react';
import Container from '../../atoms/containers/container/Container';
import Paragraph from '../../atoms/texts/Paragraph';

const Repository = () => {
  return(
    <Container direction='column' justify='left' align='left' margin='50px 0 0 0' padding='15px'>
      <Container direction='row'>
        <Container direction='row'>
          <Container bgColor='#201F1F' width='200px' direction='column' justify='center' align='center' margin='0 35px 0 0' padding='25px 40px' radius='12px 0 0 12px'>
              <Paragraph size='16px' spacing='1px' margin='0 0 2px 0'>Repositories</Paragraph>
              <Container direction='row'>
                <svg id='repository' className="repository" width="24" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.9809 6.67012C19.9809 4.64414 18.1576 3.00319 15.9065 3.00319C13.6555 3.00319 11.8322 4.64414 11.8322 6.67012C11.8322 8.33857 13.0698 9.74575 14.7606 10.1904C14.7301 10.9283 14.5467 11.4967 14.2004 11.8817C13.4161 12.7618 11.6896 12.9085 9.8612 13.0597C8.42499 13.1789 6.93784 13.3073 5.72063 13.8344V7.23391C7.37584 6.76637 8.57269 5.37752 8.57269 3.73657C8.57269 1.71059 6.74941 0.0696411 4.49832 0.0696411C2.24723 0.0696411 0.42395 1.71059 0.42395 3.73657C0.42395 5.37752 1.6208 6.76637 3.27601 7.23391V16.3691C1.6208 16.8413 0.42395 18.2301 0.42395 19.8711C0.42395 21.897 2.24723 23.538 4.49832 23.538C6.74941 23.538 8.57269 21.897 8.57269 19.8711C8.57269 18.3126 7.49298 16.9788 5.96509 16.4517C6.12297 16.2133 6.36234 16.0025 6.72394 15.8374C7.549 15.4616 8.7815 15.3607 10.0904 15.2507C12.2396 15.072 14.674 14.8657 16.1103 13.2614C16.8233 12.4639 17.1849 11.4371 17.2103 10.1491C18.8197 9.65408 19.9809 8.28357 19.9809 6.67012ZM4.49832 3.00319C4.9465 3.00319 5.31319 3.33321 5.31319 3.73657C5.31319 4.13993 4.9465 4.46996 4.49832 4.46996C4.05014 4.46996 3.68344 4.13993 3.68344 3.73657C3.68344 3.33321 4.05014 3.00319 4.49832 3.00319ZM4.49832 20.6045C4.05014 20.6045 3.68344 20.2744 3.68344 19.8711C3.68344 19.4677 4.05014 19.1377 4.49832 19.1377C4.9465 19.1377 5.31319 19.4677 5.31319 19.8711C5.31319 20.2744 4.9465 20.6045 4.49832 20.6045ZM15.9065 5.93673C16.3547 5.93673 16.7214 6.26675 16.7214 6.67012C16.7214 7.07348 16.3547 7.4035 15.9065 7.4035C15.4584 7.4035 15.0917 7.07348 15.0917 6.67012C15.0917 6.26675 15.4584 5.93673 15.9065 5.93673Z" fill="#8752CC" />
                  <defs>
                  <linearGradient id="paint0_linear" x1="10.2024" y1="0.0696411" x2="10.2024" y2="23.538" gradientUnits="userSpaceOnUse">
                  <stop offset="0.291667" />
                  </linearGradient>
                  </defs>
                </svg>
                <Paragraph size='36px'>15</Paragraph>
              </Container>
            </Container>

          <Container bgColor='#2C2C2D' direction='column' margin='0 0 0 -34px' padding='25px 70px' radius='0 12px 12px 0'>
              <Paragraph size='24px' spacing='1px' margin='0 0 5px 0'>Last Repository</Paragraph>
              <Container direction='row' justify='flex-end'>
                <svg id='circle' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7.01264" cy="7.35444" r="6.51899" fill="#F1E05A"/>
                </svg>
                <Paragraph size='14px' margin='0 0 5px 0'>JavaScript</Paragraph>
              </Container>
            </Container>
          </Container>

          <Container direction='row'>
          <Container bgColor='#201F1F' width='200px' direction='column' justify='center' align='center' margin='0 35px 0 50px' padding='25px 40px' radius='12px 0 0 12px'>
              <Paragraph size='16px' spacing='1px' margin='0 0 2px 0'>Stars</Paragraph>
              <Container direction='row'>
                <svg id='starPurple' className="repository" width="24" height="24" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.81981 0.783627L7.13459 6.60825L1.12675 7.5453C0.0493653 7.71247 -0.38241 9.13343 0.398897 9.9473L4.74543 14.4785L3.7174 20.8795C3.53235 22.0365 4.67141 22.9031 5.62543 22.362L11 19.3397L16.3746 22.362C17.3286 22.8987 18.4677 22.0365 18.2826 20.8795L17.2546 14.4785L21.6011 9.9473C22.3824 9.13343 21.9506 7.71247 20.8733 7.5453L14.8654 6.60825L12.1802 0.783627C11.6991 -0.2546 10.305 -0.267797 9.81981 0.783627Z" fill="#8752CC" />
                  <defs>
                  <linearGradient id="paint0_linear" x1="11" y1="0" x2="11" y2="22.527" gradientUnits="userSpaceOnUse">
                  <stop offset="0.291667" />
                  </linearGradient>
                  </defs>
                </svg>
                <Paragraph size='36px'>15</Paragraph>
              </Container>
            </Container>

          <Container bgColor='#2C2C2D' direction='column' margin='0 0 0 -40px' padding='25px 70px' radius='0 12px 12px 0'>
              <Paragraph size='24px' spacing='1px' margin='0 0 5px 0'>Last Repository</Paragraph>
              <Container direction='row' justify='flex-end'>
                <svg id='starGrey' width="16" height="16" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.81981 0.783627L7.13459 6.60825L1.12675 7.5453C0.0493653 7.71247 -0.38241 9.13343 0.398897 9.9473L4.74543 14.4785L3.7174 20.8795C3.53235 22.0365 4.67141 22.9031 5.62543 22.362L11 19.3397L16.3746 22.362C17.3286 22.8987 18.4677 22.0365 18.2826 20.8795L17.2546 14.4785L21.6011 9.9473C22.3824 9.13343 21.9506 7.71247 20.8733 7.5453L14.8654 6.60825L12.1802 0.783627C11.6991 -0.2546 10.305 -0.267797 9.81981 0.783627Z" fill="#504D4D" />
                  <defs>
                  <linearGradient id="paint0_linear" x1="11" y1="0" x2="11" y2="22.527" gradientUnits="userSpaceOnUse">
                  <stop offset="0.291667"/>
                  </linearGradient>
                  </defs>
                </svg>
                <Paragraph>134</Paragraph>
              </Container>
            </Container>
          </Container>
      </Container>
    </Container>
  );
}

export default Repository 
