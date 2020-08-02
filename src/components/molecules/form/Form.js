import React from 'react';
import Container from '../../atoms/containers/Container';
import Input from '../../atoms/inputs/Input';
import Button from '../../atoms/buttons/Button';

const Form = () => {
  return(
    <>
      <form>
        <Container direction='column' justify='center'>
          <Input type='text'  margin='15px 0 0 95px' borderColor='#8752CC' color='#8752CC' opacity='50%' placeholder='Enter a user name' 
          placeholderTextColor='#8752CC' />
          <Button type='submit' margin='35px 0 0 95px' color='#201F1F' hover='#111111'>
            Search
            <svg width="10" height="12" viewBox="0 0 18 20" fill="#F9F3F3" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.7552 16.9798L14.2499 13.1558C14.0917 12.9832 13.8772 12.8873 13.6522 12.8873H13.0791C14.0495 11.5334 14.6261 9.83041 14.6261 7.97786C14.6261 3.57086 11.3528 0 7.31303 0C3.27329 0 0 3.57086 0 7.97786C0 12.3849 3.27329 15.9557 7.31303 15.9557C9.01121 15.9557 10.5723 15.3267 11.8134 14.2681V14.8933C11.8134 15.1387 11.9013 15.3727 12.0595 15.5453L15.5648 19.3693C15.8953 19.7299 16.4297 19.7299 16.7567 19.3693L17.7517 18.2839C18.0822 17.9233 18.0822 17.3403 17.7552 16.9798ZM7.31303 12.8873C4.82731 12.8873 2.81271 10.6934 2.81271 7.97786C2.81271 5.26615 4.82379 3.06841 7.31303 3.06841C9.79876 3.06841 11.8134 5.26232 11.8134 7.97786C11.8134 10.6896 9.80228 12.8873 7.31303 12.8873Z" fill="#F9F3F3"/>
            </svg>
          </Button>
        </Container>
      </form>
    </>
  );
}

export default Form 
