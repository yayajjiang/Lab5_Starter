// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const faceImg = document.querySelector("[src='assets/images/smiling.png']");
  const textToVoice = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const button = document.querySelector('button');
  let voices = []

  synth.addEventListener('voiceschanged', function() {
    //get the voice list
    voices = synth.getVoices();
    //iterate through the list
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  })
  // populateVoiceList();
  // if (speechSynthesis.onvoiceschanged !== undefined) {
  //   speechSynthesis.onvoiceschanged = populateVoiceList;
  // }

  //when the button is pressed, speak and change the images
  button.addEventListener('click', function() {
    //faceImg.src = "assets/images/smiling-open.png";
    const utterThis = new SpeechSynthesisUtterance(textToVoice.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    let voices = synth.getVoices();
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    synth.speak(utterThis);

    // utterThis.addEventListener('end', function(){
    //   faceImg.src = "assets/images/smiling.png";
    // })
    //change the faces in the start and end
    utterThis.addEventListener('start',() => faceImg.src = "assets/images/smiling-open.png");
    utterThis.addEventListener('end',() => faceImg.src = "assets/images/smiling.png");
  }) 

}