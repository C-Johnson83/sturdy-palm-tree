import React from 'react';

function Work() {
  return (
    <section className="box" id="Work">
      <h3>Work</h3>
      <aside>
        <figure className="imgBig">
          <a href="https://c-johnson83.github.io/prework-study-guide/" target="_blank"><img
              src="src/assets/images/study.PNG" className="study" alt="Study Guide" />
            <p>Pre Work Study Guide</p>
          </a>
        </figure>
        <ul>
          <figure className="imgRow">
            <a href="https://c-johnson83.github.io/fs-module-1-challenge/" target="_blank"><img
                src="src/assets/images/challenge1.PNG" className="c1" alt="Challenge 1" />
              <p>Challenge 1</p>
            </a>
            {/* Add other work items */}
          </figure>
        </ul>
      </aside>
    </section>
  );
}

export default Work;
