var miniwirepath1_0 = anime.path('#miniringpath1');
var minianimePath1_0 = anime.timeline({
     loop: true,
     easing: 'linear',
     autoplay: true,
});
const runningAnim = {
     targets: ['#miniele1', '#miniele1junior', '#miniele1sophomore', '#miniele1freshman'],
     keyframes: [
         { opacity: 1, duration: 0.001 },
         {
             translateX: miniwirepath1_0('x'),
             translateY: miniwirepath1_0('y'),
             rotate: miniwirepath1_0('angle'),
             duration: 20000,
             delay: anime.stagger(500),
         },
     ],
}
const fadingAnim ={
     targets: ['#miniele1', '#miniele1junior', '#miniele1sophomore', '#miniele1freshman'],
     opacity: [
           { value: 0.5, duration: 600 },
           { value: 0.7, duration: 200 },
           { value: 0.3, duration: 400 },
           { value: 0.8, duration: 80 },
           { value: 0, duration: 100 },
           { value: 0, duration: 500 },
     ],
     delay: anime.stagger(500),
     complete: function() {
           anime({
               targets: ['#miniele1', '#miniele1junior', '#miniele1sophomore', '#miniele1freshman'],
               opacity: 0,
           })
     }
}
minianimePath1_0
.add(runningAnim)
.add(fadingAnim, '-=3000')


var wirepath1_0 = anime.path('#ringpath1_0');
var animePath1_0 = anime.timeline({
     loop: true,
     easing: 'linear',
     duration: 8000,
     autoplay: false,
});
const runningAnim1_0 = {
     targets: ['#ele1_0', '#ele1_0_junior', '#ele1_0_sophomore', '#ele1_0_freshman'],
     keyframes: [
         { opacity: 1, duration: 0.001, },
         {
               translateX: wirepath1_0('x'),
               translateY: wirepath1_0('y'),
               rotate: wirepath1_0('angle'),
               duration: 10000,
               delay: anime.stagger(500),
          },
         {
               translateX: wirepath1_0('x'),
               translateY: wirepath1_0('y'),
               rotate: wirepath1_0('angle'),
               duration: 20000,
               delay: anime.stagger(100),
          },
          {
               
          },
     ],
}
const fadingAnim1_0 ={
     targets: ['#ele1_0', '#ele1_0_junior', '#ele1_0_sophomore', '#ele1_0_freshman'],
     opacity: [
           { value: 0.5, duration: 600 },
           { value: 0.7, duration: 200 },
           { value: 0.3, duration: 400 },
           { value: 0.8, duration: 80 },
           { value: 0, duration: 100 },
           { value: 0, duration: 500 },
     ],
     delay: anime.stagger(500),
     complete: function() {
           anime({
               targets: ['#ele1_0', '#ele1_0_junior', '#ele1_0_sophomore', '#ele1_0_freshman'],
               opacity: 0,
           })
     }
}
animePath1_0
.add(runningAnim1_0)
// .add(fadingAnim1_0, '-=100')


var wirepath1_1 = anime.path('#ringpath1_1');
var animePath1_1 = anime.timeline({
     loop: true,
     easing: 'linear',
     autoplay: false,
});
const runningAnim1_1 = {
     targets: ['#ele1_1', '#ele1_1_junior', '#ele1_1_sophomore', '#ele1_1_freshman'],
     keyframes: [
         { opacity: 1, duration: 0.001, },
         {
             translateX: wirepath1_1('x'),
             translateY: wirepath1_1('y'),
             rotate: wirepath1_1('angle'),
             duration: 20000,
             delay: anime.stagger(500),
         },
     ],
}
const fadingAnim1_1 ={
     targets: ['#ele1_1', '#ele1_1_junior', '#ele1_1_sophomore', '#ele1_1_freshman'],
     opacity: [
           { value: 0.5, duration: 600 },
           { value: 0.7, duration: 200 },
           { value: 0.3, duration: 400 },
           { value: 0.8, duration: 80 },
           { value: 0, duration: 100 },
           { value: 0, duration: 500 },
     ],
     delay: anime.stagger(500),
     complete: function() {
           anime({
               targets: ['#ele1_1', '#ele1_1_junior', '#ele1_1_sophomore', '#ele1_1_freshman'],
               opacity: 0,
           })
     }
}
animePath1_1
.add(runningAnim1_1)
.add(fadingAnim1_1, '-=3000')
var wirepath2_0 = anime.path('#ringpath2_0');
var animePath2_0 = anime.timeline({
     loop: true,
     easing: 'linear',
     autoplay: false,
});
const runningAnim2_0 = {
     targets: ['#ele2_0', '#ele2_0_junior', '#ele2_0_sophomore', '#ele2_0_freshman'],
     keyframes: [
         { opacity: 1, duration: 0.001, },
         {
             translateX: wirepath2_0('x'),
             translateY: wirepath2_0('y'),
             rotate: wirepath2_0('angle'),
             duration: 20000,
             delay: anime.stagger(500),
         },
     ],
}
const fadingAnim2_0 ={
     targets: ['#ele2_0', '#ele2_0_junior', '#ele2_0_sophomore', '#ele2_0_freshman'],
     opacity: [
           { value: 0.5, duration: 600 },
           { value: 0.7, duration: 200 },
           { value: 0.3, duration: 400 },
           { value: 0.8, duration: 80 },
           { value: 0, duration: 100 },
           { value: 0, duration: 500 },
     ],
     delay: anime.stagger(500),
     complete: function() {
           anime({
               targets: ['#ele2_0', '#ele2_0_junior', '#ele2_0_sophomore', '#ele2_0_freshman'],
               opacity: 0,
           })
     }
}
animePath2_0
.add(runningAnim2_0)
.add(fadingAnim2_0, '-=3000')
var wirepath2_1 = anime.path('#ringpath2_1');
var animePath2_1 = anime.timeline({
     loop: true,
     easing: 'linear',
     autoplay: false,
});
const runningAnim2_1 = {
     targets: ['#ele2_1', '#ele2_1_junior', '#ele2_1_sophomore', '#ele2_1_freshman'],
     keyframes: [
         { opacity: 1, duration: 0.001, },
         {
             translateX: wirepath2_1('x'),
             translateY: wirepath2_1('y'),
             rotate: wirepath2_1('angle'),
             duration: 20000,
             delay: anime.stagger(500),
         },
     ],
}
const fadingAnim2_1 ={
     targets: ['#ele2_1', '#ele2_1_junior', '#ele2_1_sophomore', '#ele2_1_freshman'],
     opacity: [
           { value: 0.5, duration: 600 },
           { value: 0.7, duration: 200 },
           { value: 0.3, duration: 400 },
           { value: 0.8, duration: 80 },
           { value: 0, duration: 100 },
           { value: 0, duration: 500 },
     ],
     delay: anime.stagger(500),
     complete: function() {
           anime({
               targets: ['#ele2_1', '#ele2_1_junior', '#ele2_1_sophomore', '#ele2_1_freshman'],
               opacity: 0,
           })
     }
}
animePath2_1
.add(runningAnim2_1)
.add(fadingAnim2_1, '-=3000')
var wirepath3_0 = anime.path('#ringpath3_0');
var animePath3_0 = anime.timeline({
     loop: true,
     easing: 'linear',
     autoplay: false,
});
const runningAnim3_0 = {
     targets: ['#ele3_0', '#ele3_0_junior', '#ele3_0_sophomore', '#ele3_0_freshman'],
     keyframes: [
         { opacity: 1, duration: 0.001, },
         {
             translateX: wirepath3_0('x'),
             translateY: wirepath3_0('y'),
             rotate: wirepath3_0('angle'),
             duration: 20000,
             delay: anime.stagger(500),
         },
     ],
}
const fadingAnim3_0 ={
     targets: ['#ele3_0', '#ele3_0_junior', '#ele3_0_sophomore', '#ele3_0_freshman'],
     opacity: [
           { value: 0.5, duration: 600 },
           { value: 0.7, duration: 200 },
           { value: 0.3, duration: 400 },
           { value: 0.8, duration: 80 },
           { value: 0, duration: 100 },
           { value: 0, duration: 500 },
     ],
     delay: anime.stagger(500),
     complete: function() {
           anime({
               targets: ['#ele3_0', '#ele3_0_junior', '#ele3_0_sophomore', '#ele3_0_freshman'],
               opacity: 0,
           })
     }
}
animePath3_0
.add(runningAnim3_0)
.add(fadingAnim3_0, '-=3000')
var wirepath3_1 = anime.path('#ringpath3_1');
var animePath3_1 = anime.timeline({
     loop: true,
     easing: 'linear',
     autoplay: false,
});
const runningAnim3_1 = {
     targets: ['#ele3_1', '#ele3_1_junior', '#ele3_1_sophomore', '#ele3_1_freshman'],
     keyframes: [
         { opacity: 1, duration: 0.001, },
         {
             translateX: wirepath3_1('x'),
             translateY: wirepath3_1('y'),
             rotate: wirepath3_1('angle'),
             duration: 20000,
             delay: anime.stagger(500),
         },
     ],
}
const fadingAnim3_1 ={
     targets: ['#ele3_1', '#ele3_1_junior', '#ele3_1_sophomore', '#ele3_1_freshman'],
     opacity: [
           { value: 0.5, duration: 600 },
           { value: 0.7, duration: 200 },
           { value: 0.3, duration: 400 },
           { value: 0.8, duration: 80 },
           { value: 0, duration: 100 },
           { value: 0, duration: 500 },
     ],
     delay: anime.stagger(500),
     complete: function() {
           anime({
               targets: ['#ele3_1', '#ele3_1_junior', '#ele3_1_sophomore', '#ele3_1_freshman'],
               opacity: 0,
           })
     }
}
animePath3_1
.add(runningAnim3_1)
.add(fadingAnim3_1, '-=3000')
var wirepath4_0 = anime.path('#ringpath4_0');
var animePath4_0 = anime.timeline({
     loop: true,
     easing: 'linear',
     autoplay: false,
});
const runningAnim4_0 = {
     targets: ['#ele4_0', '#ele4_0_junior', '#ele4_0_sophomore', '#ele4_0_freshman'],
     keyframes: [
         { opacity: 1, duration: 0.001, },
         {
             translateX: wirepath4_0('x'),
             translateY: wirepath4_0('y'),
             rotate: wirepath4_0('angle'),
             duration: 20000,
             delay: anime.stagger(500),
         },
     ],
}
const fadingAnim4_0 ={
     targets: ['#ele4_0', '#ele4_0_junior', '#ele4_0_sophomore', '#ele4_0_freshman'],
     opacity: [
           { value: 0.5, duration: 600 },
           { value: 0.7, duration: 200 },
           { value: 0.3, duration: 400 },
           { value: 0.8, duration: 80 },
           { value: 0, duration: 100 },
           { value: 0, duration: 500 },
     ],
     delay: anime.stagger(500),
     complete: function() {
           anime({
               targets: ['#ele4_0', '#ele4_0_junior', '#ele4_0_sophomore', '#ele4_0_freshman'],
               opacity: 0,
           })
     }
}
animePath4_0
.add(runningAnim4_0)
.add(fadingAnim4_0, '-=3000')
var wirepath4_1 = anime.path('#ringpath4_1');
var animePath4_1 = anime.timeline({
     loop: true,
     easing: 'linear',
     autoplay: false,
});
const runningAnim4_1 = {
     targets: ['#ele4_1', '#ele4_1_junior', '#ele4_1_sophomore', '#ele4_1_freshman'],
     keyframes: [
         { opacity: 1, duration: 0.001, },
         {
             translateX: wirepath4_1('x'),
             translateY: wirepath4_1('y'),
             rotate: wirepath4_1('angle'),
             duration: 20000,
             delay: anime.stagger(500),
         },
     ],
}
const fadingAnim4_1 ={
     targets: ['#ele4_1', '#ele4_1_junior', '#ele4_1_sophomore', '#ele4_1_freshman'],
     opacity: [
           { value: 0.5, duration: 600 },
           { value: 0.7, duration: 200 },
           { value: 0.3, duration: 400 },
           { value: 0.8, duration: 80 },
           { value: 0, duration: 100 },
           { value: 0, duration: 500 },
     ],
     delay: anime.stagger(500),
     complete: function() {
           anime({
               targets: ['#ele4_1', '#ele4_1_junior', '#ele4_1_sophomore', '#ele4_1_freshman'],
               opacity: 0,
           })
     }
}
animePath4_1
.add(runningAnim4_1)
.add(fadingAnim4_1, '-=3000')
var wirepath5_0 = anime.path('#ringpath5_0');
var animePath5_0 = anime.timeline({
     loop: true,
     easing: 'linear',
     autoplay: false,
});
const runningAnim5_0 = {
     targets: ['#ele5_0', '#ele5_0_junior', '#ele5_0_sophomore', '#ele5_0_freshman'],
     keyframes: [
         { opacity: 1, duration: 0.001, },
         {
             translateX: wirepath5_0('x'),
             translateY: wirepath5_0('y'),
             rotate: wirepath5_0('angle'),
             duration: 20000,
             delay: anime.stagger(500),
         },
     ],
}
const fadingAnim5_0 ={
     targets: ['#ele5_0', '#ele5_0_junior', '#ele5_0_sophomore', '#ele5_0_freshman'],
     opacity: [
           { value: 0.5, duration: 600 },
           { value: 0.7, duration: 200 },
           { value: 0.3, duration: 400 },
           { value: 0.8, duration: 80 },
           { value: 0, duration: 100 },
           { value: 0, duration: 500 },
     ],
     delay: anime.stagger(500),
     complete: function() {
           anime({
               targets: ['#ele5_0', '#ele5_0_junior', '#ele5_0_sophomore', '#ele5_0_freshman'],
               opacity: 0,
           })
     }
}
animePath5_0
.add(runningAnim5_0)
.add(fadingAnim5_0, '-=3000')
var wirepath5_1 = anime.path('#ringpath5_1');
var animePath5_1 = anime.timeline({
     loop: true,
     easing: 'linear',
     autoplay: false,
});
const runningAnim5_1 = {
     targets: ['#ele5_1', '#ele5_1_junior', '#ele5_1_sophomore', '#ele5_1_freshman'],
     keyframes: [
         { opacity: 1, duration: 0.001, },
         {
             translateX: wirepath5_1('x'),
             translateY: wirepath5_1('y'),
             rotate: wirepath5_1('angle'),
             duration: 20000,
             delay: anime.stagger(500),
         },
     ],
}
const fadingAnim5_1 ={
     targets: ['#ele5_1', '#ele5_1_junior', '#ele5_1_sophomore', '#ele5_1_freshman'],
     opacity: [
           { value: 0.5, duration: 600 },
           { value: 0.7, duration: 200 },
           { value: 0.3, duration: 400 },
           { value: 0.8, duration: 80 },
           { value: 0, duration: 100 },
           { value: 0, duration: 500 },
     ],
     delay: anime.stagger(500),
     complete: function() {
           anime({
               targets: ['#ele5_1', '#ele5_1_junior', '#ele5_1_sophomore', '#ele5_1_freshman'],
               opacity: 0,
           })
     }
}
animePath5_1
.add(runningAnim5_1)
.add(fadingAnim5_1, '-=3000')
var wirepath6_0 = anime.path('#ringpath6_0');
var animePath6_0 = anime.timeline({
     loop: true,
     easing: 'linear',
     autoplay: false,
});
const runningAnim6_0 = {
     targets: ['#ele6_0', '#ele6_0_junior', '#ele6_0_sophomore', '#ele6_0_freshman'],
     keyframes: [
         { opacity: 1, duration: 0.001, },
         {
             translateX: wirepath6_0('x'),
             translateY: wirepath6_0('y'),
             rotate: wirepath6_0('angle'),
             duration: 20000,
             delay: anime.stagger(500),
         },
     ],
}
const fadingAnim6_0 ={
     targets: ['#ele6_0', '#ele6_0_junior', '#ele6_0_sophomore', '#ele6_0_freshman'],
     opacity: [
           { value: 0.5, duration: 600 },
           { value: 0.7, duration: 200 },
           { value: 0.3, duration: 400 },
           { value: 0.8, duration: 80 },
           { value: 0, duration: 100 },
           { value: 0, duration: 500 },
     ],
     delay: anime.stagger(500),
     complete: function() {
           anime({
               targets: ['#ele6_0', '#ele6_0_junior', '#ele6_0_sophomore', '#ele6_0_freshman'],
               opacity: 0,
           })
     }
}
animePath6_0
.add(runningAnim6_0)
.add(fadingAnim6_0, '-=3000')
var wirepath6_1 = anime.path('#ringpath6_1');
var animePath6_1 = anime.timeline({
     loop: true,
     easing: 'linear',
     autoplay: false,
});
const runningAnim6_1 = {
     targets: ['#ele6_1', '#ele6_1_junior', '#ele6_1_sophomore', '#ele6_1_freshman'],
     keyframes: [
         { opacity: 1, duration: 0.001, },
         {
             translateX: wirepath6_1('x'),
             translateY: wirepath6_1('y'),
             rotate: wirepath6_1('angle'),
             duration: 20000,
             delay: anime.stagger(500),
         },
     ],
}
const fadingAnim6_1 ={
     targets: ['#ele6_1', '#ele6_1_junior', '#ele6_1_sophomore', '#ele6_1_freshman'],
     opacity: [
           { value: 0.5, duration: 600 },
           { value: 0.7, duration: 200 },
           { value: 0.3, duration: 400 },
           { value: 0.8, duration: 80 },
           { value: 0, duration: 100 },
           { value: 0, duration: 500 },
     ],
     delay: anime.stagger(500),
     complete: function() {
           anime({
               targets: ['#ele6_1', '#ele6_1_junior', '#ele6_1_sophomore', '#ele6_1_freshman'],
               opacity: 0,
           })
     }
}
animePath6_1
.add(runningAnim6_1)
.add(fadingAnim6_1, '-=3000')
var wirepath7_0 = anime.path('#ringpath7_0');
var animePath7_0 = anime.timeline({
     loop: true,
     easing: 'linear',
     autoplay: false,
});
const runningAnim7_0 = {
     targets: ['#ele7_0', '#ele7_0_junior', '#ele7_0_sophomore', '#ele7_0_freshman'],
     keyframes: [
         { opacity: 1, duration: 0.001, },
         {
             translateX: wirepath7_0('x'),
             translateY: wirepath7_0('y'),
             rotate: wirepath7_0('angle'),
             duration: 20000,
             delay: anime.stagger(500),
         },
     ],
}
const fadingAnim7_0 ={
     targets: ['#ele7_0', '#ele7_0_junior', '#ele7_0_sophomore', '#ele7_0_freshman'],
     opacity: [
           { value: 0.5, duration: 600 },
           { value: 0.7, duration: 200 },
           { value: 0.3, duration: 400 },
           { value: 0.8, duration: 80 },
           { value: 0, duration: 100 },
           { value: 0, duration: 500 },
     ],
     delay: anime.stagger(500),
     complete: function() {
           anime({
               targets: ['#ele7_0', '#ele7_0_junior', '#ele7_0_sophomore', '#ele7_0_freshman'],
               opacity: 0,
           })
     }
}
animePath7_0
.add(runningAnim7_0)
.add(fadingAnim7_0, '-=3000')
var wirepath7_1 = anime.path('#ringpath7_1');
var animePath7_1 = anime.timeline({
     loop: true,
     easing: 'linear',
     autoplay: false,
});
const runningAnim7_1 = {
     targets: ['#ele7_1', '#ele7_1_junior', '#ele7_1_sophomore', '#ele7_1_freshman'],
     keyframes: [
         { opacity: 1, duration: 0.001, },
         {
             translateX: wirepath7_1('x'),
             translateY: wirepath7_1('y'),
             rotate: wirepath7_1('angle'),
             duration: 20000,
             delay: anime.stagger(500),
         },
     ],
}
const fadingAnim7_1 ={
     targets: ['#ele7_1', '#ele7_1_junior', '#ele7_1_sophomore', '#ele7_1_freshman'],
     opacity: [
           { value: 0.5, duration: 600 },
           { value: 0.7, duration: 200 },
           { value: 0.3, duration: 400 },
           { value: 0.8, duration: 80 },
           { value: 0, duration: 100 },
           { value: 0, duration: 500 },
     ],
     delay: anime.stagger(500),
     complete: function() {
           anime({
               targets: ['#ele7_1', '#ele7_1_junior', '#ele7_1_sophomore', '#ele7_1_freshman'],
               opacity: 0,
           })
     }
}
animePath7_1
.add(runningAnim7_1)
.add(fadingAnim7_1, '-=3000')
var wirepath8_0 = anime.path('#ringpath8_0');
var animePath8_0 = anime.timeline({
     loop: true,
     easing: 'linear',
     autoplay: false,
});
const runningAnim8_0 = {
     targets: ['#ele8_0', '#ele8_0_junior', '#ele8_0_sophomore', '#ele8_0_freshman'],
     keyframes: [
         { opacity: 1, duration: 0.001, },
         {
             translateX: wirepath8_0('x'),
             translateY: wirepath8_0('y'),
             rotate: wirepath8_0('angle'),
             duration: 20000,
             delay: anime.stagger(500),
         },
     ],
}
const fadingAnim8_0 ={
     targets: ['#ele8_0', '#ele8_0_junior', '#ele8_0_sophomore', '#ele8_0_freshman'],
     opacity: [
           { value: 0.5, duration: 600 },
           { value: 0.7, duration: 200 },
           { value: 0.3, duration: 400 },
           { value: 0.8, duration: 80 },
           { value: 0, duration: 100 },
           { value: 0, duration: 500 },
     ],
     delay: anime.stagger(500),
     complete: function() {
           anime({
               targets: ['#ele8_0', '#ele8_0_junior', '#ele8_0_sophomore', '#ele8_0_freshman'],
               opacity: 0,
           })
     }
}
animePath8_0
.add(runningAnim8_0)
.add(fadingAnim8_0, '-=3000')
var wirepath8_1 = anime.path('#ringpath8_1');
var animePath8_1 = anime.timeline({
     loop: true,
     easing: 'linear',
     autoplay: false,
});
const runningAnim8_1 = {
     targets: ['#ele8_1', '#ele8_1_junior', '#ele8_1_sophomore', '#ele8_1_freshman'],
     keyframes: [
         { opacity: 1, duration: 0.001, },
         {
             translateX: wirepath8_1('x'),
             translateY: wirepath8_1('y'),
             rotate: wirepath8_1('angle'),
             duration: 20000,
             delay: anime.stagger(500),
         },
     ],
}
const fadingAnim8_1 ={
     targets: ['#ele8_1', '#ele8_1_junior', '#ele8_1_sophomore', '#ele8_1_freshman'],
     opacity: [
           { value: 0.5, duration: 600 },
           { value: 0.7, duration: 200 },
           { value: 0.3, duration: 400 },
           { value: 0.8, duration: 80 },
           { value: 0, duration: 100 },
           { value: 0, duration: 500 },
     ],
     delay: anime.stagger(500),
     complete: function() {
           anime({
               targets: ['#ele8_1', '#ele8_1_junior', '#ele8_1_sophomore', '#ele8_1_freshman'],
               opacity: 0,
           })
     }
}
animePath8_1
.add(runningAnim8_1)
.add(fadingAnim8_1, '-=3000')
var wirepath9_0 = anime.path('#ringpath9_0');
var animePath9_0 = anime.timeline({
     loop: true,
     easing: 'linear',
     autoplay: false,
});
const runningAnim9_0 = {
     targets: ['#ele9_0', '#ele9_0_junior', '#ele9_0_sophomore', '#ele9_0_freshman'],
     keyframes: [
         { opacity: 1, duration: 0.001, },
         {
             translateX: wirepath9_0('x'),
             translateY: wirepath9_0('y'),
             rotate: wirepath9_0('angle'),
             duration: 20000,
             delay: anime.stagger(500),
         },
     ],
}
const fadingAnim9_0 ={
     targets: ['#ele9_0', '#ele9_0_junior', '#ele9_0_sophomore', '#ele9_0_freshman'],
     opacity: [
           { value: 0.5, duration: 600 },
           { value: 0.7, duration: 200 },
           { value: 0.3, duration: 400 },
           { value: 0.8, duration: 80 },
           { value: 0, duration: 100 },
           { value: 0, duration: 500 },
     ],
     delay: anime.stagger(500),
     complete: function() {
           anime({
               targets: ['#ele9_0', '#ele9_0_junior', '#ele9_0_sophomore', '#ele9_0_freshman'],
               opacity: 0,
           })
     }
}
animePath9_0
.add(runningAnim9_0)
.add(fadingAnim9_0, '-=3000')
var wirepath9_1 = anime.path('#ringpath9_1');
var animePath9_1 = anime.timeline({
     loop: true,
     easing: 'linear',
     autoplay: false,
});
const runningAnim9_1 = {
     targets: ['#ele9_1', '#ele9_1_junior', '#ele9_1_sophomore', '#ele9_1_freshman'],
     keyframes: [
         { opacity: 1, duration: 0.001, },
         {
             translateX: wirepath9_1('x'),
             translateY: wirepath9_1('y'),
             rotate: wirepath9_1('angle'),
             duration: 20000,
             delay: anime.stagger(500),
         },
     ],
}
const fadingAnim9_1 ={
     targets: ['#ele9_1', '#ele9_1_junior', '#ele9_1_sophomore', '#ele9_1_freshman'],
     opacity: [
           { value: 0.5, duration: 600 },
           { value: 0.7, duration: 200 },
           { value: 0.3, duration: 400 },
           { value: 0.8, duration: 80 },
           { value: 0, duration: 100 },
           { value: 0, duration: 500 },
     ],
     delay: anime.stagger(500),
     complete: function() {
           anime({
               targets: ['#ele9_1', '#ele9_1_junior', '#ele9_1_sophomore', '#ele9_1_freshman'],
               opacity: 0,
           })
     }
}
animePath9_1
.add(runningAnim9_1)
.add(fadingAnim9_1, '-=3000')
var wirepath10_0 = anime.path('#ringpath10_0');
var animePath10_0 = anime.timeline({
     loop: true,
     easing: 'linear',
     autoplay: false,
});
const runningAnim10_0 = {
     targets: ['#ele10_0', '#ele10_0_junior', '#ele10_0_sophomore', '#ele10_0_freshman'],
     keyframes: [
         { opacity: 1, duration: 0.001, },
         {
             translateX: wirepath10_0('x'),
             translateY: wirepath10_0('y'),
             rotate: wirepath10_0('angle'),
             duration: 20000,
             delay: anime.stagger(500),
         },
     ],
}
const fadingAnim10_0 ={
     targets: ['#ele10_0', '#ele10_0_junior', '#ele10_0_sophomore', '#ele10_0_freshman'],
     opacity: [
           { value: 0.5, duration: 600 },
           { value: 0.7, duration: 200 },
           { value: 0.3, duration: 400 },
           { value: 0.8, duration: 80 },
           { value: 0, duration: 100 },
           { value: 0, duration: 500 },
     ],
     delay: anime.stagger(500),
     complete: function() {
           anime({
               targets: ['#ele10_0', '#ele10_0_junior', '#ele10_0_sophomore', '#ele10_0_freshman'],
               opacity: 0,
           })
     }
}
animePath10_0
.add(runningAnim10_0)
.add(fadingAnim10_0, '-=3000')
var wirepath10_1 = anime.path('#ringpath10_1');
var animePath10_1 = anime.timeline({
     loop: true,
     easing: 'linear',
     autoplay: false,
});
const runningAnim10_1 = {
     targets: ['#ele10_1', '#ele10_1_junior', '#ele10_1_sophomore', '#ele10_1_freshman'],
     keyframes: [
         { opacity: 1, duration: 0.001, },
         {
             translateX: wirepath10_1('x'),
             translateY: wirepath10_1('y'),
             rotate: wirepath10_1('angle'),
             duration: 20000,
             delay: anime.stagger(500),
         },
     ],
}
const fadingAnim10_1 ={
     targets: ['#ele10_1', '#ele10_1_junior', '#ele10_1_sophomore', '#ele10_1_freshman'],
     opacity: [
           { value: 0.5, duration: 600 },
           { value: 0.7, duration: 200 },
           { value: 0.3, duration: 400 },
           { value: 0.8, duration: 80 },
           { value: 0, duration: 100 },
           { value: 0, duration: 500 },
     ],
     delay: anime.stagger(500),
     complete: function() {
           anime({
               targets: ['#ele10_1', '#ele10_1_junior', '#ele10_1_sophomore', '#ele10_1_freshman'],
               opacity: 0,
           })
     }
}
animePath10_1
.add(runningAnim10_1)
.add(fadingAnim10_1, '-=3000')
var wirepath11_0 = anime.path('#ringpath11_0');
var animePath11_0 = anime.timeline({
     loop: true,
     easing: 'linear',
     autoplay: false,
});
const runningAnim11_0 = {
     targets: ['#ele11_0', '#ele11_0_junior', '#ele11_0_sophomore', '#ele11_0_freshman'],
     keyframes: [
         { opacity: 1, duration: 0.001, },
         {
             translateX: wirepath11_0('x'),
             translateY: wirepath11_0('y'),
             rotate: wirepath11_0('angle'),
             duration: 20000,
             delay: anime.stagger(500),
         },
     ],
}
const fadingAnim11_0 ={
     targets: ['#ele11_0', '#ele11_0_junior', '#ele11_0_sophomore', '#ele11_0_freshman'],
     opacity: [
           { value: 0.5, duration: 600 },
           { value: 0.7, duration: 200 },
           { value: 0.3, duration: 400 },
           { value: 0.8, duration: 80 },
           { value: 0, duration: 100 },
           { value: 0, duration: 500 },
     ],
     delay: anime.stagger(500),
     complete: function() {
           anime({
               targets: ['#ele11_0', '#ele11_0_junior', '#ele11_0_sophomore', '#ele11_0_freshman'],
               opacity: 0,
           })
     }
}
animePath11_0
.add(runningAnim11_0)
.add(fadingAnim11_0, '-=3000')
var wirepath11_1 = anime.path('#ringpath11_1');
var animePath11_1 = anime.timeline({
     loop: true,
     easing: 'linear',
     autoplay: false,
});
const runningAnim11_1 = {
     targets: ['#ele11_1', '#ele11_1_junior', '#ele11_1_sophomore', '#ele11_1_freshman'],
     keyframes: [
         { opacity: 1, duration: 0.001, },
         {
             translateX: wirepath11_1('x'),
             translateY: wirepath11_1('y'),
             rotate: wirepath11_1('angle'),
             duration: 20000,
             delay: anime.stagger(500),
         },
     ],
}
const fadingAnim11_1 ={
     targets: ['#ele11_1', '#ele11_1_junior', '#ele11_1_sophomore', '#ele11_1_freshman'],
     opacity: [
           { value: 0.5, duration: 600 },
           { value: 0.7, duration: 200 },
           { value: 0.3, duration: 400 },
           { value: 0.8, duration: 80 },
           { value: 0, duration: 100 },
           { value: 0, duration: 500 },
     ],
     delay: anime.stagger(500),
     complete: function() {
           anime({
               targets: ['#ele11_1', '#ele11_1_junior', '#ele11_1_sophomore', '#ele11_1_freshman'],
               opacity: 0,
           })
     }
}
animePath11_1
.add(runningAnim11_1)
.add(fadingAnim11_1, '-=3000')
var wirepath12_0 = anime.path('#ringpath12_0');
var animePath12_0 = anime.timeline({
     loop: true,
     easing: 'linear',
     autoplay: false,
});
const runningAnim12_0 = {
     targets: ['#ele12_0', '#ele12_0_junior', '#ele12_0_sophomore', '#ele12_0_freshman'],
     keyframes: [
         { opacity: 1, duration: 0.001, },
         {
             translateX: wirepath12_0('x'),
             translateY: wirepath12_0('y'),
             rotate: wirepath12_0('angle'),
             duration: 20000,
             delay: anime.stagger(500),
         },
     ],
}
const fadingAnim12_0 ={
     targets: ['#ele12_0', '#ele12_0_junior', '#ele12_0_sophomore', '#ele12_0_freshman'],
     opacity: [
           { value: 0.5, duration: 600 },
           { value: 0.7, duration: 200 },
           { value: 0.3, duration: 400 },
           { value: 0.8, duration: 80 },
           { value: 0, duration: 100 },
           { value: 0, duration: 500 },
     ],
     delay: anime.stagger(500),
     complete: function() {
           anime({
               targets: ['#ele12_0', '#ele12_0_junior', '#ele12_0_sophomore', '#ele12_0_freshman'],
               opacity: 0,
           })
     }
}
animePath12_0
.add(runningAnim12_0)
.add(fadingAnim12_0, '-=3000')
var wirepath12_1 = anime.path('#ringpath12_1');
var animePath12_1 = anime.timeline({
     loop: true,
     easing: 'linear',
     autoplay: false,
});
const runningAnim12_1 = {
     targets: ['#ele12_1', '#ele12_1_junior', '#ele12_1_sophomore', '#ele12_1_freshman'],
     keyframes: [
         { opacity: 1, duration: 0.001, },
         {
             translateX: wirepath12_1('x'),
             translateY: wirepath12_1('y'),
             rotate: wirepath12_1('angle'),
             duration: 20000,
             delay: anime.stagger(500),
         },
     ],
}
const fadingAnim12_1 ={
     targets: ['#ele12_1', '#ele12_1_junior', '#ele12_1_sophomore', '#ele12_1_freshman'],
     opacity: [
           { value: 0.5, duration: 600 },
           { value: 0.7, duration: 200 },
           { value: 0.3, duration: 400 },
           { value: 0.8, duration: 80 },
           { value: 0, duration: 100 },
           { value: 0, duration: 500 },
     ],
     delay: anime.stagger(500),
     complete: function() {
           anime({
               targets: ['#ele12_1', '#ele12_1_junior', '#ele12_1_sophomore', '#ele12_1_freshman'],
               opacity: 0,
           })
     }
}
animePath12_1
.add(runningAnim12_1)
.add(fadingAnim12_1, '-=3000')
var wirepath13_0 = anime.path('#ringpath13_0');
var animePath13_0 = anime.timeline({
     loop: true,
     easing: 'linear',
     autoplay: false,
});
const runningAnim13_0 = {
     targets: ['#ele13_0', '#ele13_0_junior', '#ele13_0_sophomore', '#ele13_0_freshman'],
     keyframes: [
         { opacity: 1, duration: 0.001, },
         {
             translateX: wirepath13_0('x'),
             translateY: wirepath13_0('y'),
             rotate: wirepath13_0('angle'),
             duration: 20000,
             delay: anime.stagger(500),
         },
     ],
}
const fadingAnim13_0 ={
     targets: ['#ele13_0', '#ele13_0_junior', '#ele13_0_sophomore', '#ele13_0_freshman'],
     opacity: [
           { value: 0.5, duration: 600 },
           { value: 0.7, duration: 200 },
           { value: 0.3, duration: 400 },
           { value: 0.8, duration: 80 },
           { value: 0, duration: 100 },
           { value: 0, duration: 500 },
     ],
     delay: anime.stagger(500),
     complete: function() {
           anime({
               targets: ['#ele13_0', '#ele13_0_junior', '#ele13_0_sophomore', '#ele13_0_freshman'],
               opacity: 0,
           })
     }
}
animePath13_0
.add(runningAnim13_0)
.add(fadingAnim13_0, '-=3000')
var wirepath13_1 = anime.path('#ringpath13_1');
var animePath13_1 = anime.timeline({
     loop: true,
     easing: 'linear',
     autoplay: false,
});
const runningAnim13_1 = {
     targets: ['#ele13_1', '#ele13_1_junior', '#ele13_1_sophomore', '#ele13_1_freshman'],
     keyframes: [
         { opacity: 1, duration: 0.001, },
         {
             translateX: wirepath13_1('x'),
             translateY: wirepath13_1('y'),
             rotate: wirepath13_1('angle'),
             duration: 20000,
             delay: anime.stagger(500),
         },
     ],
}
const fadingAnim13_1 ={
     targets: ['#ele13_1', '#ele13_1_junior', '#ele13_1_sophomore', '#ele13_1_freshman'],
     opacity: [
           { value: 0.5, duration: 600 },
           { value: 0.7, duration: 200 },
           { value: 0.3, duration: 400 },
           { value: 0.8, duration: 80 },
           { value: 0, duration: 100 },
           { value: 0, duration: 500 },
     ],
     delay: anime.stagger(500),
     complete: function() {
           anime({
               targets: ['#ele13_1', '#ele13_1_junior', '#ele13_1_sophomore', '#ele13_1_freshman'],
               opacity: 0,
           })
     }
}
animePath13_1
.add(runningAnim13_1)
.add(fadingAnim13_1, '-=3000')
var wirepath14_0 = anime.path('#ringpath14_0');
var animePath14_0 = anime.timeline({
     loop: true,
     easing: 'linear',
     autoplay: false,
});
const runningAnim14_0 = {
     targets: ['#ele14_0', '#ele14_0_junior', '#ele14_0_sophomore', '#ele14_0_freshman'],
     keyframes: [
         { opacity: 1, duration: 0.001, },
         {
             translateX: wirepath14_0('x'),
             translateY: wirepath14_0('y'),
             rotate: wirepath14_0('angle'),
             duration: 20000,
             delay: anime.stagger(500),
         },
     ],
}
const fadingAnim14_0 ={
     targets: ['#ele14_0', '#ele14_0_junior', '#ele14_0_sophomore', '#ele14_0_freshman'],
     opacity: [
           { value: 0.5, duration: 600 },
           { value: 0.7, duration: 200 },
           { value: 0.3, duration: 400 },
           { value: 0.8, duration: 80 },
           { value: 0, duration: 100 },
           { value: 0, duration: 500 },
     ],
     delay: anime.stagger(500),
     complete: function() {
           anime({
               targets: ['#ele14_0', '#ele14_0_junior', '#ele14_0_sophomore', '#ele14_0_freshman'],
               opacity: 0,
           })
     }
}
animePath14_0
.add(runningAnim14_0)
.add(fadingAnim14_0, '-=3000')
var wirepath14_1 = anime.path('#ringpath14_1');
var animePath14_1 = anime.timeline({
     loop: true,
     easing: 'linear',
     autoplay: false,
});
const runningAnim14_1 = {
     targets: ['#ele14_1', '#ele14_1_junior', '#ele14_1_sophomore', '#ele14_1_freshman'],
     keyframes: [
         { opacity: 1, duration: 0.001, },
         {
             translateX: wirepath14_1('x'),
             translateY: wirepath14_1('y'),
             rotate: wirepath14_1('angle'),
             duration: 20000,
             delay: anime.stagger(500),
         },
     ],
}
const fadingAnim14_1 ={
     targets: ['#ele14_1', '#ele14_1_junior', '#ele14_1_sophomore', '#ele14_1_freshman'],
     opacity: [
           { value: 0.5, duration: 600 },
           { value: 0.7, duration: 200 },
           { value: 0.3, duration: 400 },
           { value: 0.8, duration: 80 },
           { value: 0, duration: 100 },
           { value: 0, duration: 500 },
     ],
     delay: anime.stagger(500),
     complete: function() {
           anime({
               targets: ['#ele14_1', '#ele14_1_junior', '#ele14_1_sophomore', '#ele14_1_freshman'],
               opacity: 0,
           })
     }
}
animePath14_1
.add(runningAnim14_1)
.add(fadingAnim14_1, '-=3000')
var wirepath15_0 = anime.path('#ringpath15_0');
var animePath15_0 = anime.timeline({
     loop: true,
     easing: 'linear',
     autoplay: false,
});
const runningAnim15_0 = {
     targets: ['#ele15_0', '#ele15_0_junior', '#ele15_0_sophomore', '#ele15_0_freshman'],
     keyframes: [
         { opacity: 1, duration: 0.001, },
         {
             translateX: wirepath15_0('x'),
             translateY: wirepath15_0('y'),
             rotate: wirepath15_0('angle'),
             duration: 20000,
             delay: anime.stagger(500),
         },
     ],
}
const fadingAnim15_0 ={
     targets: ['#ele15_0', '#ele15_0_junior', '#ele15_0_sophomore', '#ele15_0_freshman'],
     opacity: [
           { value: 0.5, duration: 600 },
           { value: 0.7, duration: 200 },
           { value: 0.3, duration: 400 },
           { value: 0.8, duration: 80 },
           { value: 0, duration: 100 },
           { value: 0, duration: 500 },
     ],
     delay: anime.stagger(500),
     complete: function() {
           anime({
               targets: ['#ele15_0', '#ele15_0_junior', '#ele15_0_sophomore', '#ele15_0_freshman'],
               opacity: 0,
           })
     }
}
animePath15_0
.add(runningAnim15_0)
.add(fadingAnim15_0, '-=3000')
var wirepath15_1 = anime.path('#ringpath15_1');
var animePath15_1 = anime.timeline({
     loop: true,
     easing: 'linear',
     autoplay: false,
});
const runningAnim15_1 = {
     targets: ['#ele15_1', '#ele15_1_junior', '#ele15_1_sophomore', '#ele15_1_freshman'],
     keyframes: [
         { opacity: 1, duration: 0.001, },
         {
             translateX: wirepath15_1('x'),
             translateY: wirepath15_1('y'),
             rotate: wirepath15_1('angle'),
             duration: 20000,
             delay: anime.stagger(500),
         },
     ],
}
const fadingAnim15_1 ={
     targets: ['#ele15_1', '#ele15_1_junior', '#ele15_1_sophomore', '#ele15_1_freshman'],
     opacity: [
           { value: 0.5, duration: 600 },
           { value: 0.7, duration: 200 },
           { value: 0.3, duration: 400 },
           { value: 0.8, duration: 80 },
           { value: 0, duration: 100 },
           { value: 0, duration: 500 },
     ],
     delay: anime.stagger(500),
     complete: function() {
           anime({
               targets: ['#ele15_1', '#ele15_1_junior', '#ele15_1_sophomore', '#ele15_1_freshman'],
               opacity: 0,
           })
     }
}
animePath15_1
.add(runningAnim15_1)
.add(fadingAnim15_1, '-=3000')
var wireNum = 15
function randomOutputTrial() {
     document.getElementById('outputdiag').innerHTML = Math.floor((Math.random() * 100));
};
randomOutputTrial();
document.getElementById("playbtnimage").addEventListener("click", playAnim);
document.getElementById("pausebtnimage").addEventListener("click", pauseAnim);
document.getElementById("resetbtnimage").addEventListener("click", resetAnim);
function playAnim(){
     document.getElementById("playbtnimage").style.borderColor = "white";
     document.getElementById("pausebtnimage").style.borderColor = "grey";
     document.getElementById("resetbtnimage").style.borderColor = "grey";
     minianimePath1_0.play()
     animePath1_0.play(); 
     animePath2_0.play(); 
     animePath3_0.play(); 
     animePath4_0.play(); 
     animePath5_0.play(); 
     animePath6_0.play(); 
     animePath7_0.play(); 
     animePath8_0.play(); 
     animePath9_0.play(); 
     animePath10_0.play(); 
     animePath11_0.play(); 
     animePath12_0.play(); 
     animePath13_0.play(); 
     animePath14_0.play(); 
     animePath15_0.play(); 
     animePath1_1.play(); 
     animePath2_1.play(); 
     animePath3_1.play(); 
     animePath4_1.play(); 
     animePath5_1.play(); 
     animePath6_1.play(); 
     animePath7_1.play(); 
     animePath8_1.play(); 
     animePath9_1.play(); 
     animePath10_1.play(); 
     animePath11_1.play(); 
     animePath12_1.play(); 
     animePath13_1.play(); 
     animePath14_1.play(); 
     animePath15_1.play(); 
};
function pauseAnim(){
     document.getElementById("playbtnimage").style.borderColor = "grey";
     document.getElementById("pausebtnimage").style.borderColor = "white";
     document.getElementById("resetbtnimage").style.borderColor = "grey";
     animePath1_0.pause(); 
     animePath2_0.pause(); 
     animePath3_0.pause(); 
     animePath4_0.pause(); 
     animePath5_0.pause(); 
     animePath6_0.pause(); 
     animePath7_0.pause(); 
     animePath8_0.pause(); 
     animePath9_0.pause(); 
     animePath10_0.pause(); 
     animePath11_0.pause(); 
     animePath12_0.pause(); 
     animePath13_0.pause(); 
     animePath14_0.pause(); 
     animePath15_0.pause(); 
     animePath1_1.pause(); 
     animePath2_1.pause(); 
     animePath3_1.pause(); 
     animePath4_1.pause(); 
     animePath5_1.pause(); 
     animePath6_1.pause(); 
     animePath7_1.pause(); 
     animePath8_1.pause(); 
     animePath9_1.pause(); 
     animePath10_1.pause(); 
     animePath11_1.pause(); 
     animePath12_1.pause(); 
     animePath13_1.pause(); 
     animePath14_1.pause(); 
     animePath15_1.pause(); 
};
function resetAnim(){
     document.getElementById("playbtnimage").style.borderColor = "grey";
     document.getElementById("pausebtnimage").style.borderColor = "grey";
     document.getElementById("resetbtnimage").style.borderColor = "white";
     animePath1_0.restart(); 
     animePath2_0.restart(); 
     animePath3_0.restart(); 
     animePath4_0.restart(); 
     animePath5_0.restart(); 
     animePath6_0.restart(); 
     animePath7_0.restart(); 
     animePath8_0.restart(); 
     animePath9_0.restart(); 
     animePath10_0.restart(); 
     animePath11_0.restart(); 
     animePath12_0.restart(); 
     animePath13_0.restart(); 
     animePath14_0.restart(); 
     animePath15_0.restart(); 
     animePath1_1.restart(); 
     animePath2_1.restart(); 
     animePath3_1.restart(); 
     animePath4_1.restart(); 
     animePath5_1.restart(); 
     animePath6_1.restart(); 
     animePath7_1.restart(); 
     animePath8_1.restart(); 
     animePath9_1.restart(); 
     animePath10_1.restart(); 
     animePath11_1.restart(); 
     animePath12_1.restart(); 
     animePath13_1.restart(); 
     animePath14_1.restart(); 
     animePath15_1.restart(); 
     randomOutputTrial();
};
document.getElementById("addbtnimage").addEventListener("click", function(){this.style.borderColor="white"})
function colorcheck (){
     const currentColor = document.getElementById("addbtnimage").style.borderColor;
     if (currentColor != "grey") {
         document.getElementById("addbtnimage").style.borderColor = "grey";
     }
}
colorcheck();
// var allitems = document.querySelectorAll(".pathcolor");
// let clicked=[];
// for (var j=0; j<allitems.length; j++){
//      allitems[j].addEventListener("click", jessi(j));
//      allitems[j].addEventListener("mouseover", karen(j));
//      allitems[j].addEventListener("mouseout", henry(j));
// }
// function jessi(j) {
// return function(){
//      for (var i=0; i<allitems.length; i++) {
//           allitems[i].style.stroke="grey";
//           allitems[j].style.stroke="#ff105e";
//      }
//      clicked.push(allitems[j]);
//      if (clicked.length < 3){
//           clicked[0].style.stroke="#ff105e";
//           clicked[1].style.stroke="#ff105e";
//      }
//      else {
//           clicked[clicked.length - 3].style.stroke="#ff105e";
//           clicked[clicked.length - 2].style.stroke="#ff105e";
//           clicked[clicked.length - 1].style.stroke="#ff105e";
//      }
//      }
// }
// function karen(j) {
//      return function() {
//           allitems[j].style.stroke="white";
//           if (clicked.length < 3){
//                clicked[0].style.stroke="#ff105e";
//                clicked[1].style.stroke="#ff105e";
//           }
//           else {
//                clicked[clicked.length - 3].style.stroke="#ff105e";
//                clicked[clicked.length - 2].style.stroke="#ff105e";
//                clicked[clicked.length - 1].style.stroke="#ff105e";
//           }
//      }
// }

// function henry(j) {
//      return function() {
//           allitems[j].style.stroke="grey";
//           if (clicked.length < 3){
//                clicked[0].style.stroke="#ff105e";
//                clicked[1].style.stroke="#ff105e";
//           }
//           else {
//                clicked[clicked.length - 3].style.stroke="#ff105e";
//                clicked[clicked.length - 2].style.stroke="#ff105e";
//                clicked[clicked.length - 1].style.stroke="#ff105e";
//           }
//      }
// }

