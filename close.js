// Close signal back to parent
var closeBtn = document.querySelector('.close-btn');
var exitSfx = new Audio('sfx/exiting.mp3');
exitSfx.preload = 'auto';

var sfxEnabled = true;

window.addEventListener('message', function(e){
  if(!e || !e.data) return;
  var data = e.data;
  if(data && data.type === 'sfx-state'){
    sfxEnabled = !!data.enabled;
  }
});

if(closeBtn){
  closeBtn.addEventListener('click', function(){
    if(exitSfx && sfxEnabled){
      try{
        exitSfx.currentTime = 0;
      }catch(err){}
      exitSfx.play().catch(function(){});
    }
    if(window.parent){
      window.parent.postMessage('close-subwindow', '*');
    }
  });
}