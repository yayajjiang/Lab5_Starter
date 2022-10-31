// expose.js


window.addEventListener('DOMContentLoaded', init);
//already imported import JSConfetti from 'js-confetti'


function init() {

  //const expose = document.getElementById('expose');
  const horns = document.getElementById('horn-select');
  const sound = document.querySelector('button');
  
  //get the image by alternate text of an image
  const image = document.querySelector("[alt='No image selected']");
  //get the name of horn, option value
  //const hornName = horns.value;
  //get audio element
  const audio = document.querySelector('audio');
  const volume = document.querySelector("[type='range']");
  const volumeImg = document.querySelector("[src='assets/icons/volume-level-2.svg']");
  const jsConfetti = new jsConfetti();

  //change the pictures and audio for every according option
  horns.addEventListener('change', function() {
    if(horns.value == "air-horn"){
      image.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
    }else if(horns.value == "car-horn"){
      image.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    }else if(horns.value == "party-horn"){
      image.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
    }else{}
    
  });
  
  
  volume.addEventListener('change', function(){
    audio.volume = volume.value / 100;
    if (volume.value == 0) {
      //volumeImg.alt = "Volume level 0";
      volumeImg.src = "assets/icons/volume-level-0.svg";
    } else if (volume.value < 33) {
      //volumeImg.alt = "Volume level 1";
      volumeImg.src = "assets/icons/volume-level-1.svg";
    } else if (volume.value < 67) {
      //volumeImg.alt = "Volume level 2";
      volumeImg.src = "assets/icons/volume-level-2.svg";
    } else if (volume.value <= 100) {
      //volumeImg.alt = "Volume level 3";
      volumeImg.src = "assets/icons/volume-level-3.svg";
    } else{}
  });
  
  sound.addEventListener('click', function() {
    if (horns.value == "party-horn") {
      jsConfetti.addConfetti();
    }
    //play the audio
    audio.play();
  });
  

}