import { useState, useEffect } from 'react';

function Project() {
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const reposPerPage = 6;

  const repoImages = {
    'break-time': '/assets/images/clock.PNG',
    'prework-study-guide': '/assets/images/study.PNG',
    'fs-module-1-challenge': '/assets/images/challenge1.PNG',
    'belly-button-challenge': '/assets/images/belly-button-challenge.PNG',
    'leaflet-challenge': '/assets/images/leaflet.PNG',
    'weather-app': '/assets/images/Weather.PNG',
    'game': '/assets/images/RPS.PNG',
    'portfolio': '/assets/images/firstPortfolio.PNG',
    'passGen': '/assets/images/PassGen.PNG',
    'codeQuiz': '/assets/images/Code Quiz.PNG',
    'scheduler': '/assets/images/scheduler.PNG    ',
    'bards_instrument': '/assets/images/MyDashboard.PNG',
    'trip_planner': '/assets/images/explore.png',
    'upgraded-parakeet': '/assets/images/logo.PNG',
    'html-challenge': '/assets/images/Daily MinTemp.jpeg',
    'Group3': '/assets/images/hateCrimes.jpeg',
    'VBA-challenge': '/assets/images/VBA-challenge sheet 2018.PNG',
    'supreme-bassoon': '/assets/images/makeReadme.PNG',
    'studious-telegram': '/assets/images/EcomBackEnd.PNG',
    'the-three-amigos': '/assets/images/printHub.PNG',
    'urban-spork': '/assets/images/noteTaker.PNG',
    'super-broccoli': '/assets/images/pwa.PNG',
    'cautious-chainsaw': '/assets/images/socialMediaAPI.PNG',
    };

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
        const repoDates = allRepos.map(repo => ({
          ...repo,
          created_at: repo.created_at.split('T')[0] // Extracting only the date part
        }));
        setRepos(repoDates);
        console.log(repoDates);
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
      <Pagination
        reposPerPage={reposPerPage}
        totalRepos={repos.length}
        paginate={paginate}
      />
      <div className='card-container'>
        {currentRepos.map(repo => (
          <div key={repo.id} className="card">
            <div>
              {repo.name in repoImages ? (
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  <img src={repoImages[repo.name]} alt={`${repo.name} image`} className='cardImg' />
                </a>
              ) : (
                <h3>No Image Available</h3>
              )}
              <h3>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </h3>
              <p>{repo.description}</p>
              <p>created on<br /> {repo.created_at}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pagination({ reposPerPage, totalRepos, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='pagNav'>
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



export default Project;
