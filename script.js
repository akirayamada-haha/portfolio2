function readyEventListeners() {
  handleBioButtonClick();
  handleContactButtonClick();
  handleProjectButtonClick();
}

//event listener for projects-button

function generateProjectHTML() {
  return `<h2>My Projects</h2>

    <div class="parks-container project-container">
    <h4>Parks and Weather Search</h4>
    <a href="https://evanpoe.github.io/Parks-and-Weather/" target="_blank">Click me</a>
    <h5>to checkout a live version!</h5>
    <img class="parks-and-weather project-image" src="./images/ParkScreenshot.PNG"><br>
    <i class="fab fa-html5"></i>
    <i class="fab fa-css3-alt"></i>
    <i class="fab fa-js"></i>
    <p class="app-description">A site that allows users to search for national parks (making calls to the NPS API) by keyword. Results listed will
    display basic information, and each provides a link to the particular park's webiste as well as a page for more information. "More Info" will 
    display just that, as well as asynchronously call to a weather API to display a forecast for that park! <p>
    </div>
    
    <i class="fas fa-bookmark"></i>
    
    <div class="quiz-container project-container">
    <h4>Quiz App</h4>
    <a href="https://evanpoe.github.io/Quiz-App/" target="_blank">Click me</a>
    <h5>to checkout a live version!</h5>
    <img class="quiz-app project-image" src="./images/Quiz-App-Screenshot 2019-11-19 23.55.29.png"><br>
    <i class="fab fa-html5"></i>
    <i class="fab fa-css3-alt"></i>
    <i class="fab fa-js"></i>
    <p class="app-description">A series of multiple choice questions centered around working out. The score and question count are 
    calculated automatically, as well as relevent feedback to each answer submitted. I created this app to demonstrate my abilities with jQuery, 
    and it is for anyone interested in fitness! <p>
    </div>

    <a href="https://github.com/EvanPoe?tab=repositories" target="_blank"><i class="fab fa-github"></br>Click here to checkout my GitHub repositories!</i>`
}

function renderProjectHTML() {
  $('main').html(generateProjectHTML());
}

function handleProjectButtonClick () {
  $('body').on('click', '.projects-button', function(event) {
    event.preventDefault();
    renderProjectHTML();
  });
}

//event listener for contact-button

function generateContactHTML() {
  return `<h3>Contact Information</h3>
      <h4>Evan Poe</h4>
      <h4><a href="mailto:evanpoe91@yahoo.com?subject=Responding%20to%20Your%20Portfolio!">evanpoe91@yahoo.com</a></h4>
      <h4><a href="https://www.linkedin.com/in/evan-poe-016375a5/" target="_blank"><i class="fab fa-linkedin"></i>
      </a></h4>
      <h4><a href="https://github.com/EvanPoe" target="_blank"><i class="fab fa-github"></i>
      </a></h4>`
}

function renderContactHTML() {
  $('main').html(generateContactHTML());
}

function handleContactButtonClick () {
  $('body').on('click', '.contact-button', function (event) {
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