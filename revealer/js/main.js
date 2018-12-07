document.addEventListener('DOMContentLoaded', function() {


  // Onload examples

  var rev1 = new RevealFx(document.querySelector('[data-revealer="rev-1"]'), {
    revealSettings : {
      bgcolor: '#e71d36',
      delay: 350,
      onCover: function(contentEl, revealerEl) {
        contentEl.style.opacity = 1;
      }
    }
  });
  rev1.reveal();


  var rev2 = new RevealFx(document.querySelector('[data-revealer="rev-2"]'), {
    revealSettings : {
      bgcolor: '#ff9f1c',
      delay: 600,
      onCover: function(contentEl, revealerEl) {
        contentEl.style.opacity = 0.5;
      }
    }
  });
  rev2.reveal();





  // On scroll examples

  // var scrollElToWatch_1 = document.querySelector('[data-revealer="rev-3"]'),
  //     watcher_1 = scrollMonitor.create(scrollElToWatch_1, -300),
  //     rev3 = new RevealFx(scrollElToWatch_1, {
  //       revealSettings: {
  //         bgcolor: '#2ec4b6',
  //         direction: 'rl',
  //         onCover: function(contentEl, revealerEl) {
  //           contentEl.style.opacity = 1;
  //         }
  //       }
  //     }),
  //     rev4 = new RevealFx(document.querySelector('[data-revealer="rev-4"]'), {
  //       revealSettings: {
  //         bgcolor: '#011627',
  //         direction: 'rl',
  //         delay: 250,
  //         onCover: function(contentEl, revealerEl) {
  //           contentEl.style.opacity = 0.5;
  //         }
  //       }
  //     });

  //     watcher_1.enterViewport(function() {
  //       rev3.reveal();
  //       rev4.reveal();
  //       watcher_1.destroy();
  //     });


  // const _revElements = [].slice.call(document.querySelectorAll('[data-rev]'));

  // _revElements.forEach(function(_revEl) {
  //   const _revColor = _revEl.dataset.revcolor,
  //         _revDirectoin = _revEl.dataset.revdirection,
  //         _revDelay = _revEl.dataset.revdelay;
    
  //   const watcher = scrollMonitor.create(_revEl, -300),
  //         motion = new RevealFx(_revEl, {
  //           revealSettings: {
  //             bgcolor: _revColor,
  //             direction: _revDirectoin,
  //             delay: _revDelay,
  //             onCover: function(contentEl, revealerEl) {
  //               contentEl.style.opacity = 1;
  //             }
  //           }
  //         }); 
  //         watcher.enterViewport(function() {
  //           motion.reveal();
  //           watcher.destroy();
  //         })
  // });

  class RevealItem {
    init() {
      const _revElements = [].slice.call(document.querySelectorAll('[data-rev]'));

      _revElements.forEach(function(_revEl) {
      const _revColor = _revEl.dataset.revcolor,
            _revDirection = _revEl.dataset.revdirection,
            _revDelay = _revEl.dataset.revdelay;
            let _animeTranslate = '';
    
      const watcher = scrollMonitor.create(_revEl, -300),
            motion = new RevealFx(_revEl, {
              revealSettings: {
                bgcolor: _revColor,
                direction: _revDirection,
                delay: _revDelay,
                onCover: function(contentEl, revealerEl) {
                contentEl.style.opacity = 1;
                anime({
                    targets: contentEl,
                    duration: 800,
                    delay: 80,
                    easing: 'easeOutExpo',
                    translateX: function(){
                      if (_revDirection == 'rl') {
                        return [40,0];
                      } else if (_revDirection == 'lr') {
                        return [-40,0];
                      } else {
                        return [0,0];
                      }
                    },
                    translateY: function(){
                      if (_revDirection == 'tb') {
                        return [-40,0];
                      } else if (_revDirection == 'bt') {
                        return [40,0];
                      } else {
                        return [0,0];
                      }
                    },
                    opacity: [0,1]
                  });
                }
              }
            }); 
            watcher.enterViewport(function() {
              motion.reveal();
              watcher.destroy();
            })
      });
    }
  }

  const revealer = new RevealItem();
  revealer.init();

//hamburguer menu
const menuBtn = document.querySelector('.hamburguer-menu');

menuBtn.addEventListener('click', function(e) {
  menuBtn.classList.toggle('active');
  document.querySelector('.menu-navbar').classList.toggle('active');
  e.preventDefault();
})



});