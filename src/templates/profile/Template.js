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
    const responseRepository = await fetch(`https://api.github.com/users/${login}/repos`, {
      headers: {
        'Authorization': '25c3cc9b70a07b5f481ed63785bdcebde8fab7af',
      }
    })

    const responseStarred = await fetch(`https://api.github.com/users/${login}/starred`, {
      headers: {
        'Authorization': '25c3cc9b70a07b5f481ed63785bdcebde8fab7af',
      }
    })

    const repos = await responseRepository.json(), 
          starred = await responseStarred.json();

    const datesRepos = repos.map(repo => [repo.created_at, repo.name, repo.html_url]), 
          datesStarred = starred.map(repo => [repo.updated_at, repo.name, repo.stargazers_count, repo.html_url]);

    const sortRepos = datesRepos.sort(), 
          sortStarred = datesStarred.sort();

    const lastRepos = sortRepos.pop(), 
          lastStarred = sortStarred.pop();

    const nameRepos = lastRepos[1], 
          repoLink = lastRepos[2],
          nameStarred = lastStarred[1],
          starredNumbers = lastStarred[2],
          starLink = lastStarred[3];

    const repoName = nameRepos, 
          starName = nameStarred;

    const repoSize = repos.length, 
          starSize = starred.length;

    const starNumbers = starredNumbers.toLocaleString('pt-BR');

    setRepository({
      repoSize: repoSize, 
      repoName: repoName,
      repoLink: repoLink,
      starName: starName,
      starSize: starSize,
      starNumbers: starNumbers,
      starLink: starLink
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
            <Repository repo={repository}  />
          }
        </Container>
      </Content>
    </Container>
  )
}

export default Template 
