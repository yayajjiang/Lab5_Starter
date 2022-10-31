// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const faceImg = document.querySelector("[src='assets/images/smiling.png']");
  const textToVoice = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const button = document.querySelector('button');


  synth.addEventListener('voiceschanged', (event) => {
    //get the voice list
    let voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = voices[i].name + "(" + voices[i].lang + ")";
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  })
  //when the button is pressed
  button.addEventListener('click', function() {
    faceImg.src = "assets/images/smiling-open.png";
    const utterThis = new SpeechSynthesisUtterance(textToVoice.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    let voices = synth.getVoices();
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);

    utterThis.addEventListener('end', function(){
      faceImg.src = "assets/images/smiling.png";
    })
  }) 

}