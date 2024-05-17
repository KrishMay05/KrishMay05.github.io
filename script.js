function new_div(id, color) {
    const temp = document.getElementById(id);
    temp.style.paddingLeft = '20px';
    temp.style.paddingRight = '10px';
    temp.style.borderRadius = '10px'
    temp.style.border = '4px outset #ccc';
    temp.style.borderColor = "#00000";
    temp.style.backgroundColor = color;
    temp.style.alignSelf = "center";
  }
  
  document.addEventListener('DOMContentLoaded', function() {
      const projectsContainer = document.getElementById('projects');
    
      // Sample projects data
      const projects = [
        { name: 'Messaging System', description: 'A Java project that implements server IO, concurrency, and advanced GUIs that creates a system similar to "Facebook Marketplace" allowing for multiple sellers to communicate with a variety of consumers and visa versa. ', link: 'https://github.com/KrishMay05/Projects/tree/main/MessageSystem' },
        { name: 'FTC Robot Code', description: 'Java code that communicated with a REV microcontroller to control a robot designed to complete robocitcs challanges.', link: 'https://github.com/KrishMay05/Freight_Frenzy_2021-22' },
        { name: 'Tetris', description: 'An altered version of the worlds most popular game made in Java.', link: 'https://github.com/KrishMay05/Projects/blob/main/Games/Tetris.java' },
        { name: 'Minesweeper', description: 'An altered version of the popular game Minesweeper.', link: 'https://github.com/KrishMay05/Projects/blob/main/Games/Minesweeper.java' },
        { name: 'Webscraper', description: 'Displays the time of a given city that is inputted using a website and its code.', link: 'https://github.com/KrishMay05/Projects/blob/main/SmallProjects/Webscraper/URLReader.java' }
  
      ];
    
      // Render projects
      projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        projectElement.style.border = '4px outset #ccc';
        projectElement.innerHTML = `
          <h3>${project.name}</h3>
          <p>${project.description}</p>
          <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectsContainer.appendChild(projectElement);
      });
  });
    
  const bio = document.getElementById("bio");
  const footer = document.getElementById("footer");
  
  // const biography = document.createElement('div');
  // biography.innerHTML = "<p> Hello, my name is Krish Patel and thank you for visiting my website.<br><br> As of 2024 I am a rising Sophmore attending Purdue University studying Computer Science and Artificial Intelligence." 
  //   + " I wanted to create this website to showcase my current and future CS sideprojects serving as a code portfolio of sorts. <br><br> - Thank you, Krish Patel. <br>";
  // bio.appendChild(biography);
  
  new_div("bio", "#2d2c2c");
  new_div("footer", "#2d2c2c");
  new_div("img", "#2d2c2c");
  