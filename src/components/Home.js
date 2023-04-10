// components/Home.js
import React from 'react';
import MeImage from '../images/Me.png';
import HomePhotoImage from '../images/HomePhoto.png';
const Home = () => {
  return (
<body>
    <div id="root"></div>

    <div class="stars"></div>
    <div class="twinkling"></div>
  
    <header>
    
    </header>

    <div class="WelcomePage">
      <div>
        <div class="WelcomeHeading">
          <h1>Hi, my name is Evan.</h1>
          <h1>Welcome to my website.</h1></div>

          <div class="WelcomePic"> 
  <img id="ArrowThing" src={MeImage} alt="Arrow Thing" />
  <img id="SexyPhoto" src={HomePhotoImage} alt="Sexy" />
</div>


      </div>

    </div>
    
  
          <div class="YoutubeVid">
            <h1 id="Featured"> Featured Video: </h1>
            <iframe id="MyVideo" width="560" height="315" src="https://www.youtube.com/embed/B6qkhJDDEcw"
              title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
           encrypted-media; gyroscope; 
           picture-in-picture; web-share" allowfullscreen></iframe>
          </div>

  
  
  
  
  </body>
  );
};

export default Home;
