import React from 'react';

function Picture() {
  return (
    <section className="picture">
      <img src="../assets/images/me.jpg" className="me" alt="Chris Johnson" />
      <section className="captionBox">
        <section className="caption">
          <h2>What's up everyone?!<br />Check me out below!</h2>
        </section>
      </section>
    </section>
  );
}

export default Picture;