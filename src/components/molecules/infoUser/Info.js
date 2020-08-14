import React from 'react';
import Container from '../../atoms/containers/container/Container';
import ImageProfile from '../../atoms/images/ImageProfile';
import Username from '../../atoms/texts/Username';
import Name from '../../atoms/texts/Name';
import Paragraph from '../../atoms/texts/Paragraph';

const Info = () => {
  return(
    <Container direction='row' justify='left' align='center'>
      <ImageProfile src='https://avatars1.githubusercontent.com/u/30665365?v=4' alt='photoprofile' width='140px' />
      <Container direction='column' justify='center' margin='0 0 0 15px'>
        <Username size='16px' weight='normal' color='#F9F3F3'>@aline-borges</Username>
        <Name size='36px' weight='500' color='#8752CC'>Aline Borges</Name>
        <Container direction='row'>
          <Container direction='row'>
            <svg id='place' width="18" height="18" viewBox="0 0 23 23" fill="#8752CC" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.0232 1.83716C7.46823 1.83716 4.59302 4.71237 4.59302 8.26734C4.59302 13.09 11.0232 20.2091 11.0232 20.2091C11.0232 20.2091 17.4534 13.09 17.4534 8.26734C17.4534 4.71237 14.5782 1.83716 11.0232 1.83716ZM11.0232 10.5638C10.4141 10.5638 9.83001 10.3219 9.39933 9.8912C8.96866 9.46053 8.7267 8.87641 8.7267 8.26734C8.7267 7.65827 8.96866 7.07415 9.39933 6.64347C9.83001 6.2128 10.4141 5.97085 11.0232 5.97085C11.6323 5.97085 12.2164 6.2128 12.6471 6.64347C13.0777 7.07415 13.3197 7.65827 13.3197 8.26734C13.3197 8.87641 13.0777 9.46053 12.6471 9.8912C12.2164 10.3219 11.6323 10.5638 11.0232 10.5638Z" fill="#8752CC" />
                <defs>
                <linearGradient id="paint0_linear" x1="11.0232" y1="1.83716" x2="11.0232" y2="20.2091" gradientUnits="userSpaceOnUse">
                <stop offset="0.291667" />
                </linearGradient>
                </defs>
              </svg>
            <Paragraph weight='500' size='14px' spacing='1px' margin='0 15px 0 1px'>Rio de Janeiro, Brazil</Paragraph>
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
            <Paragraph weight='500' size='14px' spacing='1px' margin='0 10px 0 6px'>FGV</Paragraph>
          </Container>
        </Container>

        <Container direction='row' margin='5px 0 0'>
          <Container direction='row' margin='0 2px 0 0'>
            <svg id='following' width="16" height="16" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.08101 9.88159C10.6316 9.88159 12.6987 7.72384 12.6987 5.06149C12.6987 2.39914 10.6316 0.241394 8.08101 0.241394C5.53044 0.241394 3.46329 2.39914 3.46329 5.06149C3.46329 7.72384 5.53044 9.88159 8.08101 9.88159ZM11.3134 11.0866H10.7109C9.91005 11.4707 9.01898 11.6891 8.08101 11.6891C7.14303 11.6891 6.25556 11.4707 5.45107 11.0866H4.8486C2.17177 11.0866 0 13.3536 0 16.1477V17.7142C0 18.7122 0.775632 19.5218 1.73164 19.5218H14.4304C15.3864 19.5218 16.162 18.7122 16.162 17.7142V16.1477C16.162 13.3536 13.9902 11.0866 11.3134 11.0866ZM22.9659 6.25145L21.963 5.19329C21.7971 5.0163 21.5265 5.0163 21.3569 5.18953L17.5762 9.10585L15.9347 7.38117C15.7688 7.20418 15.4982 7.20418 15.3287 7.3774L14.3149 8.42803C14.1454 8.60125 14.1454 8.88368 14.3113 9.06067L17.2587 12.1598C17.4247 12.3368 17.6952 12.3368 17.8648 12.1636L22.9623 6.88409C23.1283 6.7071 23.1319 6.42468 22.9659 6.25145Z" fill="#8752CC" />
                <defs>
                <linearGradient id="paint0_linear" x1="11.5443" y1="0.241394" x2="11.5443" y2="19.5218" gradientUnits="userSpaceOnUse">
                <stop offset="0.291667" />
                </linearGradient>
                </defs>
              </svg>
            <Paragraph weight='500' size='14px' spacing='1px' margin='0 10px 0 5px'>1</Paragraph>
          </Container>

          <Container direction='row'>
            <svg id='followers' width="15" height="15" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.3997 8.07406H20.1058V5.66401C20.1058 5.33262 19.8478 5.06149 19.5324 5.06149H18.3854C18.07 5.06149 17.812 5.33262 17.812 5.66401V8.07406H15.5181C15.2027 8.07406 14.9446 8.34519 14.9446 8.67657V9.88159C14.9446 10.213 15.2027 10.4841 15.5181 10.4841H17.812V12.8942C17.812 13.2255 18.07 13.4967 18.3854 13.4967H19.5324C19.8478 13.4967 20.1058 13.2255 20.1058 12.8942V10.4841H22.3997C22.7151 10.4841 22.9732 10.213 22.9732 9.88159V8.67657C22.9732 8.34519 22.7151 8.07406 22.3997 8.07406ZM8.06302 9.88159C10.597 9.88159 12.6508 7.72385 12.6508 5.06149C12.6508 2.39914 10.597 0.241394 8.06302 0.241394C5.52902 0.241394 3.47529 2.39914 3.47529 5.06149C3.47529 7.72385 5.52902 9.88159 8.06302 9.88159ZM11.2744 11.0866H10.6759C9.8802 11.4707 8.99491 11.6891 8.06302 11.6891C7.13114 11.6891 6.24943 11.4707 5.45016 11.0866H4.85161C2.19215 11.0866 0.0344849 13.3536 0.0344849 16.1477V17.7143C0.0344849 18.7122 0.805081 19.5218 1.75489 19.5218H14.3712C15.321 19.5218 16.0916 18.7122 16.0916 17.7143V16.1477C16.0916 13.3536 13.9339 11.0866 11.2744 11.0866Z" fill="#8752CC" />
              <defs>
              <linearGradient id="paint0_linear" x1="11.5038" y1="0.241394" x2="11.5038" y2="19.5218" gradientUnits="userSpaceOnUse">
              <stop offset="0.291667" />
              </linearGradient>
              </defs>
            </svg>
            <Paragraph weight='500' size='14px' spacing='1px' margin='0 10px 0 5px'>1</Paragraph>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}

export default Info 
