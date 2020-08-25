import React, { useState, useEffect } from 'react';
import Header from '../../components/organisms/header/Header';
import Container from '../../components/atoms/containers/container/Container';
import Content from '../../components/atoms/containers/content/Content';
import Info from '../../components/molecules/infoUser/Info';
import Repository from '../../components/molecules/infoUser/Repository';

const Template = ({ data }) => {
  const { login } = data;
  const [repository, setRepository] = useState(null);

  const getRepos = async () => {
    const response = await fetch(`https://api.github.com/users/${login}/repos`, {
      headers: {
        'Authorization': '25c3cc9b70a07b5f481ed63785bdcebde8fab7af',
      }
    })

    const repos = await response.json();
    const repoName = repos[0].name;
    const repoSize = repos.length;

    setRepository({
      size: repoSize, 
      name: repoName
    });
  }

  useEffect(() => {
    getRepos();
  },[]);

  return(
    <Container width='100vw' height='100vh' direction='column'>
      <Header />
      <Content margin="120px 0 0 0">
      <Container direction='column'>
          <Info data={data} />
          {repository &&
            <Repository repo={repository} />
          }
        </Container>
      </Content>
    </Container>
  )
}

export default Template 
