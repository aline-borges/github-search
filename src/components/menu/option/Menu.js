import React, { Component } from 'react';
import api from '../../../services/api';
import Style from './style';
import Column from '../../../components/containers/column/Column';
import Row from '../../../components/containers/row/Row';
import Grid from '../../../components/containers/grid/Grid';
import Icon from '../../../components/image/iconMenu/Icon';
import code from '../../../assets/icons/code.svg';
import star from '../../../assets/icons/star.svg';
import following from '../../../assets/icons/following.svg';
import followers from '../../../assets/icons/followers.svg';
import Paragraph from '../../texts/paragraph/Paragraph';

export default class Menu extends Component {
  state = {
    repositories: '',
    stars: '',
    following: '',
    followers: '',
  };

  componentDidMount(){
    this.loadMenu();
    this.loadStars();
  }

  loadMenu = async () => {
    const response = await api.get(`/aline-borges`);

    this.setState({
      repositories: response.data.public_repos,
      following: response.data.following,
      followers: response.data.followers,
    })
  }

  loadStars = async () => {
    const response = await api.get(`/aline-borges/starred`);

    this.setState({
      stars: response.data.length,
    })
  }

  render(){
    return(
      <Grid>
        <Style>
          <Column>
            <Paragraph>
              Repositories
            </Paragraph>
            <Row>
              <Icon src={code} />
              <Paragraph>
                {this.state.repositories}
              </Paragraph>
            </Row>
          </Column>
        </Style>
        <Style>
          <Column>
            <Paragraph>
              Stars
            </Paragraph>
            <Row>
              <Icon src={star} />
              <Paragraph>
              {this.state.stars}
              </Paragraph>
            </Row>
          </Column>
        </Style>
        <Style>
          <Column>
            <Paragraph>
              Following
            </Paragraph>
            <Row>
              <Icon src={following} />
              <Paragraph>
              {this.state.following}
              </Paragraph>
            </Row>
          </Column>
        </Style>
        <Style>
          <Column>
            <Paragraph>
              Followers
            </Paragraph>
            <Row>
            <Icon src={followers} />
            <Paragraph>
            {this.state.followers}
            </Paragraph>
            </Row>
          </Column>
        </Style>
      </Grid>
      );
  }
  
} 
