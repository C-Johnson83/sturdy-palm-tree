import React, { useState, useEffect } from 'react';

function Portfolio() {
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const reposPerPage = 6;

  useEffect(() => {
    fetch('https://api.github.com/users/c-johnson83/repos')
      .then(response => response.json())
      .then(data => {
        setRepos(data);
      })
      .catch(error => {
        console.error('Error fetching repos:', error);
      });
  }, []);

  // Get current repositories
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <section className="box" id="app-card">
      <h3>Work</h3>
      <div className='card-container'>
        {currentRepos.map(repo => (
          <div key={repo.id} className="card">
            <figure className="imgRow">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repoHasImage(repo) ? (
                  <img src={`src/assets/images/${repo.name}.jpg`} alt={`${repo.name} image`} />
                ) : (
                  <p>No Image</p>
                )}
                <p>{repo.name}</p>
              </a>
            </figure>
          </div>
        ))}
      </div>
      <Pagination
        reposPerPage={reposPerPage}
        totalRepos={repos.length}
        paginate={paginate}
      />
    </section>
  );
}

function Pagination({ reposPerPage, totalRepos, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function repoHasImage(repo) {
  try {
    require(`../assets/images/${repo.name}.jpg`);
    return true;
  } catch (error) {
    return false;
  }
}

export default Portfolio;
