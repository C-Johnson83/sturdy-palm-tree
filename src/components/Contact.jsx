import React, { useState } from 'react'; // Import React and useState

const mystyle = {
  color: "black",
  backgroundColor: "White",
  padding: "10px",
  fontFamily: "Arial"
};

function ContactMe() {
  const [email, setEmail] = useState(''); // State for email input
  const [phone, setPhone] = useState(''); // State for phone input
  const [message, setMessage] = useState(''); // State for message input

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Log submitted email and phone
    console.log("Submitted Email:", email);
    console.log("Submitted Phone:", phone);

    setEmail(''); // Clear email input after submission
    setPhone(''); // Clear phone input after submission
    setMessage(''); // Clear message input after submission
  };

  // Function to handle clicking the link
  const handleLinkClick = () => {
    window.location.href = "mailto:chrisj21283@gmail.com";
  };

  return (
    <main style={mystyle}>
      <div>
        <h2>Contact Me</h2>

        <p>If you're on the lookout for someone who's not only well-versed in Excel and proficient in data
          analytics but also skilled in web design, or if you simply have professional aspirations you'd like
          to discuss, I'm here to connect and explore potential opportunities together. Don't hesitate to
          reach out, as I'm genuinely excited about engaging in meaningful conversations and collaborations
          that can lead to mutual growth and success.
        </p>
      </div>
      <section id="contact">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Enter Your Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Enter Your Phone:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="message">
            <label htmlFor="message">Enter Your Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
          <p>Alternative method to email me directly</p>
          <button type="button" class='alt' onClick={handleLinkClick}>Create Email</button>
        </form>
      </section>
    </main>
  );
}

export default ContactMe;
