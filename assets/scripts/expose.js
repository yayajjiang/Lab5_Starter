
window.addEventListener('DOMContentLoaded', init);
//already imported import JSConfetti from 'js-confetti'


function init() {

  //const expose = document.getElementById('expose');
  const horns = document.getElementById('horn-select');
  //get the image by alternate text of an image
  const ig = document.querySelector("[alt='No image selected']");
  //get the name of horn, option value
  //const hornName = horns.value;
  // //get audio element
  const audio = document.querySelector('audio');
  const button = document.querySelector('button');
  
  const v = document.querySelector("[type='range']");
  const volumeImg = document.querySelector("[src='assets/icons/volume-level-2.svg']");
  const Confetti = new JSConfetti();

  //change the pictures and audio for every according option
  horns.addEventListener('change', function(){
    //change the image and audio accordingly
    if(horns.value == "air-horn"){
      ig.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
    }else if(horns.value == "car-horn"){
      ig.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    }else if(horns.value == "party-horn"){
      ig.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
    }
    
  })
  
  
  v.addEventListener('change', function(){
    audio.volume = v.value / 100;
    //change the icon accordingly
    if (v.value == 0) {
      //volumeImg.alt = "Volume level 0";
      volumeImg.src = "assets/icons/volume-level-0.svg";
    } else if (v.value < 33) {
      //volumeImg.alt = "Volume level 1";
      volumeImg.src = "assets/icons/volume-level-1.svg";
    } else if (v.value < 67) {
      //volumeImg.alt = "Volume level 2";
      volumeImg.src = "assets/icons/volume-level-2.svg";
    } else if (v.value <= 100) {
      //volumeImg.alt = "Volume level 3";
      volumeImg.src = "assets/icons/volume-level-3.svg";
    }
  })
  
  button.addEventListener('click', function() {
    //audio.load();
    audio.play(); //play the audio
    if (horns.value == "party-horn"){
      Confetti.addConfetti();
    }
    
    
  })
  

}