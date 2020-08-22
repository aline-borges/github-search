import React from 'react';
import Template from '../../templates/default/Template';
import home from '../../assets/images/home.png';
import Information from '../../components/molecules/information/Information';
import Form from '../../components/molecules/form/Form';

const Home = (props) => {
  return(
    <Template figureWidth="400px" figureSrc={home} figureAlt="home">
      <Information title='Find a User' subtitle='Type a username' text='and find a profile' />
      <Form />
    </Template>   
  );
}

export default Home 
