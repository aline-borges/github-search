import React, { Component } from 'react';
import api from '../services/api';
import Container from '../components/containers/main/Container';
import Box from '../components/containers/boxInfo/Box';
import Row from '../components/containers/row/Row';
import Photo from '../components/image/photo/Photo';
import Username from '../components/texts/username/Username';
import Name from '../components/texts/name/Name';
import Line from '../components/decoration/line/Line';
import Biography from '../components/texts/biography/Biography';
import Location from '../components/texts/location/Location';
import Company from '../components/texts/company/Company';
import Menu from '../components/menu/option/Menu';
import Button from '../components/button/Button';
import searchColor from '../assets/icons/search-color.svg';

export default class Profile extends Component {
  state = {
    avatar: '',
    username: '',
    name: '',
    bio: '',
    location: '',
    company: '',
    repositories: '',
    stars: '',
    following: '',
    followers: '',
  };

  componentDidMount() {
    this.loadProfile();
  }

  loadProfile = async () => {
    const response = await api.get(`/aline-borges`);

   this.setState({ 
     avatar: response.data.avatar_url,
     username: response.data.login,
     name: response.data.name,
     bio: response.data.bio,
     location: response.data.location,
     company: response.data.company,
    })
  }

  render() {
    return(
      <Container>
         <Button border='2px solid #32cfb1' backgroundColor='transparent' fontColor='#32cfb1' backgroundHover='#32cfb1' colorHover='#E7E4FF' src={searchColor} alt='search-icon' iconWidth='11px'>Back to Search</Button>
        <Photo src={this.state.avatar} />
        <Username>@{this.state.username}</Username>
        <Name>{this.state.name}</Name>
        <Line />
        <Biography>{this.state.bio}</Biography>
        <Box>
          <Row>
            <Location>{this.state.location}</Location>
          </Row>
          <Row>
            <Company>{this.state.company}</Company>
          </Row>
        </Box>
        <Menu />
      </Container>
    );
  }
}
