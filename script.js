function readyEventListeners() {
    handleBioButtonClick();
    handleContactButtonClick();
    handleProjectButtonClick();
  }
  
  //event listener for projects-button
  
  function generateProjectHTML() {
    return `<h2>My Projects</h2>
      <h4>Quiz App</h4>
      <img src="./images/Quiz-App-Screenshot 2019-11-19 23.55.29.png" height="300" width="400"><br>
      <i class="fab fa-html5"></i>
      <img src="./images/CSS3_logo_and_wordmark.svg.png" height="25" width="25">
      <img src="./images/jSLogo.jpg" height="25" width="25">
      <h5>A series of 5, multiple choice questions centered around working out. Score and question number are calculated and displayed automatically, with rendered feedback for each answer submitted. </h5>`
  }
  
  function renderProjectHTML() {
    $('main').html(generateProjectHTML());
  }
  
  function handleProjectButtonClick () {
    $('body').on('click', '.projects-button', function (event) {
      event.preventDefault();
      renderProjectHTML();
    });
  }
  
  //event listener for contact-button
  
  function generateContactHTML() {
    return `<h3>Contact Information</h3>
      <ul>
        <li>Evan Poe</li>
        <li>evanpoe91@yahoo.com</li>
        <li><a href="https://www.linkedin.com/in/evan-poe-016375a5/"><img src="C:\Users\evanp\projects\Portfolio-Page\images\linkedin-logo-512x512.png" height="125" width="150">
        </a></li>
        <li><a href="https://github.com/EvanPoe"><img src="C:\Users\evanp\projects\Portfolio-Page\images\gitHub.jpg" height="125" width="150">
        </a></li>
      </ul>`
  }
  
  function renderContactHTML() {
    $('main').html(generateContactHTML());
  }
  
  function handleContactButtonClick () {
    $('.contact-button').on('click', function (event) {
      event.preventDefault();
      renderContactHTML();
    });
  }
  
  //event listenser for bio-button
  
  function generateBioHTML() {
    return `<h2>Hi, I'm Evan!
        </h2>
        <p>I enjoy video games, fitness, and coding. I strive constantly for efficiency, optimization, and have a laser-like focus when it comes to solving a problem. I thrive in environments where I can learn from others, and share my knowledge. Feel free to browse my projects and contact me!
        </p>
        <form>
          <input type="submit" class="projects-button" value="Projects">
          <input type="submit" class="contact-button" value="Contact Me">
        </form>
    `
  }
  
  function renderBioHTML() {
    $('main').html(generateBioHTML());
  }
  
  function handleBioButtonClick () {
    $('.bio-button').on('click', function (event) {
      event.preventDefault();
      renderBioHTML();
    });
  }
  
  $(readyEventListeners)