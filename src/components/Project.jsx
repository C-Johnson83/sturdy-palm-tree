import { useState, useEffect } from 'react';

function Project() {
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const reposPerPage = 6;

  // useEffect(() => {
  //   fetch('https://api.github.com/users/c-johnson83/repos?sort=created&page=1')
  //     .then(response => response.json())
  //     .then(data => {
  //       setRepos(data);
  //       console.log(data)
  //     })
  //     .catch(error => {
  //       console.error('Error fetching repos:', error);
  //     });
  // }, []);


  useEffect(() => {
    // Fetch repositories from both page 1 and page 2
    Promise.all([
      fetch('https://api.github.com/users/c-johnson83/repos?sort=created&page=1'),
      fetch('https://api.github.com/users/c-johnson83/repos?sort=created&page=2')
    ])
      .then(responses => Promise.all(responses.map(response => response.json())))
      .then(data => {
        // Concatenate the repositories from both pages
        const allRepos = data[0].concat(data[1]);
        setRepos(allRepos);
        console.log(allRepos);
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

  const mystyle = {
    color: "black",
    backgroundColor: "White",
    padding: "10px",
    fontFamily: "Arial"
  };

  return (
    <section className="box" id="app-card">
      <h2 style={mystyle}>Repo's</h2>
      <div className='card-container'>
        {currentRepos.map(repo => (
          <div key={repo.id} className="card">
            <figure className="imgRow">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repoHasImage(repo) ? (
                  <img src={`src/assets/images/${repo.name}`} alt={`${repo.name} image`} />
                ) : (
                  <h3>No Image Available</h3>
                )}
                <h3>{repo.name}</h3>
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
    require(`src/assets/images/${repo.name}.PNG`);
    return true;
  } catch (error) {
    return false;
  }
}


export default Project;
