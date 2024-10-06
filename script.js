var isOnAction = false;
// --
// Face to face
// --
function turningHerHead () {
  var tl = gsap.timeline({repeat: -1, delay: .5});
  var leftEye  = "#matrazShe #left-eye";
  var rightEye = "#matrazShe #right-eye";
  var mouth    = "#matrazShe #mouth";
  
  tl.add("turn-to-right");
  tl.to(leftEye, {duration: 1, x: 2, ease: 'power4.out'}, 'turn-to-right');
  tl.to(rightEye, {duration: 1, x: 2, ease: 'power4.out'}, 'turn-to-right');
  tl.to(mouth, {duration: 1, x: 2, y: 0.5, ease: 'power4.out'}, 'turn-to-right');
  tl.add("turn-to-left");
  tl.to(leftEye, {duration: 0.15, scaleY: 0, repeat:3, yoyo: true, transformOrigin:"center center"}, 'turn-to-left');
  tl.to(rightEye, {duration: 0.15, scaleY: 0, repeat:3, yoyo: true, transformOrigin:"center center"}, 'turn-to-left');
  tl.to(leftEye, {duration: 1, x:-1, ease: 'power4.out'}, 'turn-to-left');
  tl.to(rightEye, {duration: 1, x:-1, ease: 'power4.out'}, 'turn-to-left');
  tl.to(mouth, {duration: 1, x:-1, y: 0.3, ease: 'power4.out'}, 'turn-to-left');
  tl.add('view-to-front');
  tl.to(leftEye, {duration: 1, x: 0, ease: 'power4.out'}, 'view-to-front');
  tl.to(rightEye, {duration: 1, x: 0, ease: 'power4.out'}, 'view-to-front');
  tl.to(mouth, {duration: 1, x: 0, y: 0, ease: 'power4.out'}, 'view-to-front');
  return tl;
}
function turningHisHead() {
  var tl = gsap.timeline({repeat: -1, delay: .5});
  var leftEye  = "#matrazHe #left-eye";
  var rightEye = "#matrazHe #right-eye";
  var mouth    = "#matrazHe #mouth";
  
  tl.add("turn-to-left");
  tl.to(leftEye, {duration: 1, x:-3, ease: 'power4.out'}, 'turn-to-left');
  tl.to(rightEye, {duration: 1, x:-3, ease: 'power4.out'}, 'turn-to-left');
  tl.to(mouth, {duration: 1, x:-3, y: 0.3, ease: 'power4.out'}, 'turn-to-left');
  tl.add("turn-to-right");
  tl.to(leftEye, {duration: 1, x: 1, ease: 'power4.out'}, 'turn-to-right');
  tl.to(rightEye, {duration: 1, x: 1, ease: 'power4.out'}, 'turn-to-right');
  tl.to(mouth, {duration: 1, x: 1, y: 0.5, ease: 'power4.out'}, 'turn-to-right');
  tl.add('view-to-front');
  tl.to(leftEye, {duration: 0.15, scaleY: 0, repeat:1, yoyo: true, transformOrigin:"center center"}, 'view-to-front');
  tl.to(rightEye, {duration: 0.15, scaleY: 0, repeat:1, yoyo: true, transformOrigin:"center center"}, 'view-to-front');
  tl.to(leftEye, {duration: 1, x: 0, ease: 'power4.out'}, 'view-to-front');
  tl.to(rightEye, {duration: 1, x: 0, ease: 'power4.out'}, 'view-to-front');
  tl.to(mouth, {duration: 1, x: 0, y: 0, ease: 'power4.out'}, 'view-to-front');
  return tl;
}
function bubblingHer(duration, maxSize, repeatStagger) {
  return gsap.fromTo(document.querySelectorAll('#matrazShe #bubbles rect'), {
    x: 'random(0, 15)',
    y: 'random(0, 15)',
    scale: `random(0.1, ${maxSize})`,
    rotation: 'random(20, 180)',
    opacity: 1
  }, {
    duration: duration,
    rotation: 'random(180, 360)',
    repeatRefresh: true,
    stagger: {
      each: 0.52,
      repeat: repeatStagger
    },
    scale: 0.1,
    y: '-=30',
    opacity: 0.1,
  })
}
function bubblingHim(duration, maxSize, repeatStagger) {
  return gsap.fromTo(document.querySelectorAll('#matrazHe #bubbles rect'), {
    x: 'random(0, 15)',
    y: 'random(0, 15)',
    scale: `random(0.1, ${maxSize})`,
    rotation: 'random(20, 180)',
    opacity: 1
  }, {
    duration: duration,
    rotation: 'random(180, 360)',
    repeatRefresh: true,
    stagger: {
      each: 0.52,
      repeat: repeatStagger
    },
    scale: 0.1,
    y: '-=30',
    opacity: 0.1,
  })
}

// --
// Jump
// --
function herJump() {
  var tl = gsap.timeline({repeat: 1});
  var leftEye  = "#matrazShe #left-eye";
  var rightEye = "#matrazShe #right-eye";
  var body = "#matrazShe";
  
  tl.add('jumpingAction')
  tl.to(body, {duration: .1, y: '5%', scaleX: 1.1, scaleY: .9, yoyo: true, repeat: 1}, 'jumpingAction');
  tl.to(body, {duration: .2, y: '-100%', yoyo: true, repeat: 1}, 'jumpingAction+=.2');
  tl.to(body, {duration: .2, y: '20%', scaleX: 1.5, scaleY: 0.7}, 'jumpingAction+=.6');
  tl.to(body, {duration: .2, y: 0, scaleX: 1, scaleY: 1, ease: 'back'}, 'jumpingAction+=.8');
  tl.to(leftEye, {duration: .2, scaleY: .1, repeat:1, yoyo: true, transformOrigin:"center center"}, 'jumpingAction+=.6');
  tl.to(rightEye, {duration: .2, scaleY: .1, repeat:1, yoyo: true, transformOrigin:"center center"}, 'jumpingAction+=.6');
}
function lookHerToJump() {
  var tl = gsap.timeline({repeat: 1});
  var leftEye  = "#matrazHe #left-eye";
  var rightEye = "#matrazHe #right-eye";
  var mouth    = "#matrazHe #mouth";
  var openMouth = "#matrazHe #mouth-open";
  
  tl.add('watchHerJump');
  MorphSVGPlugin.convertToPath(openMouth);
  tl.to(mouth, {duration: .01, morphSVG: openMouth, fill: '#584a3a'}, 'watchHerJump');
  tl.to(mouth, {duration: 1, x:-3, y: -0.3, ease: 'power4.out'}, 'watchHerJump+=.1');
  tl.to(leftEye, {duration: .4, x:-3, y: -3, ease: 'back', yoyo: true, repeat: 1}, 'watchHerJump+=.1');
  tl.to(rightEye, {duration: .4, x:-3, y: -3, ease: 'back', yoyo: true, repeat: 1}, 'watchHerJump+=.1');
  tl.to(mouth, {duration: .01, morphSVG: mouth, fill: '#584a3a00'}, 'watchHerJump+=1');
  tl.to(mouth, {duration: .4, x:0, y: 0, ease: 'power4.out'}, 'watchHerJump+=.8');
}

// --
// Kissing
// --
function moveToHim() {
  var tl       = gsap.timeline();
  var body     = "#matrazShe";
  var leftEye  = "#matrazShe #left-eye";
  var rightEye = "#matrazShe #right-eye";
  var mouth    = "#matrazShe #mouth";
  
  var hisLeftEye   = "#matrazHe #left-eye";
  var hisRightEye  = "#matrazHe #right-eye";
  var hisMouth     = "#matrazHe #mouth";
  var hisOpenMouth = "#matrazHe #mouth-open";
  var hisLiquid    = "#matrazHe #matraz-liquid-g";
  
  MorphSVGPlugin.convertToPath(hisOpenMouth);
  
  tl.add('jumpToRight')
  tl.to(body, {duration: .2, y: '10%', scaleX: 1.2, scaleY: 0.9}, 'jumpToRight');
  tl.to(body, {duration: .1, y: '-10%', scaleX: .8, scaleY: 1.1}, 'jumpToRight+=.2');
  tl.to(body, {duration: .2, x: 33}, 'jumpToRight+=.2');
  tl.to(body, {duration: .1, y: '6%', scaleX: 1.1, scaleY: .9}, 'jumpToRight+=.3');
  tl.to(body, {duration: .2, x: 66}, 'jumpToRight+=.3');
  tl.to(body, {duration: .1, y: '0%', scaleX: 1, scaleY: 1, ease: 'back'}, 'jumpToRight+=.5');
  
  tl.add('kissHim');
  tl.to(rightEye, {duration: .1, scaleX: 0, transformOrigin:"left center"}, 'kissHim');
  tl.to(leftEye, {duration: .1, x: 13.3}, 'kissHim');
  tl.to(mouth, {duration: 0, x: 12, y: 2, opacity: 0}, 'kissHim');
  tl.to(mouth, {duration: 0, x: 12, y: 2, opacity: 1}, 'kissHim');
  tl.add('isThisRealLife');//<-- when she kiss him
  tl.to(mouth, {duration: .2, x: 13, y: 3, opacity: 1}, 'kissHim+=.1');
  tl.to(mouth, {duration: .2, x: 12.8, y: 2, opacity: 1}, 'kissHim+=.2');
  tl.to(mouth, {duration: .2, x: 12, y: 3, opacity: 1}, 'kissHim+=.3');
  tl.to(mouth, {duration: .2, x: 12.2, y: 1, opacity: 1}, 'kissHim+=.4');
  tl.to(mouth, {duration: .2, x: 12, y: 2, opacity: 1}, 'kissHim+=.5');
  
  tl.to(rightEye, {duration: .1, scaleX: 1, transformOrigin:"left center"}, 'kissHim+=.6');
  tl.to(leftEye, {duration: .2, x: 0}, 'kissHim+=.6');
  tl.to(mouth, {duration: .2, x: 0, y: 0, opacity: 0}, 'kissHim+=.6');
  tl.to(mouth, {duration: .2, x: 0, y: 0, opacity: 1}, 'kissHim+=.6');
  
  tl.to(hisMouth, {duration: .01, morphSVG: hisOpenMouth, fill: '#584a3a'}, 'isThisRealLife');
  tl.to(hisLeftEye, {duration: .4, scaleX: 1.2, scaleY:1.2, transformOrigin:"center center"}, 'isThisRealLife+=.1');
  tl.to(hisRightEye, {duration: .4, scaleX: 1.2, scaleY:1.2, transformOrigin:"center center"}, 'isThisRealLife+=.1');
  tl.to(hisLiquid, {duration: 1, fill: '#F55668'}, 'isThisRealLife+=.4');
  setTimeout(() => {bubblingHim(1, 3, 20).seek(20);}, 800);
  
  tl.add('jumpToLeft');
  tl.to(hisLiquid, {duration: .3, fill: '#58c2ab'}, 'isThisRealLife+=2');
  tl.to(hisLeftEye, {duration: .4, scaleX: 1, scaleY:1, transformOrigin:"center center"}, 'isThisRealLife+=2.3');
  tl.to(hisRightEye, {duration: .4, scaleX: 1, scaleY:1, transformOrigin:"center center"}, 'isThisRealLife+=2.3');
  tl.to(hisMouth, {duration: .01, morphSVG: hisMouth, fill: '#584a3a00'}, 'isThisRealLife+=2.5');
  
  tl.to(body, {duration: .3, y: '6%', scaleX: 1.1, scaleY: .9}, 'jumpToLeft');
  tl.to(body, {duration: .1, y: '-10%', scaleX: .8, scaleY: 1.1}, 'jumpToLeft+=.2');
  tl.to(body, {duration: .2, x: 33}, 'jumpToLeft+=.2');
  tl.to(body, {duration: .1, x: 0}, 'jumpToLeft+=.4');
  tl.to(body, {duration: .2, y: '10%', scaleX: 1.2, scaleY: 0.9}, 'jumpToLeft+=.4');
  tl.to(body, {duration: .2, y: '0%', scaleX: 1, scaleY: 1, ease: 'back'}, 'jumpToLeft+=.7');
}

// --
// Play "face to face"
// --
var master = gsap.timeline();
master.addLabel('turningHerHead');
master.addLabel('turningHisHead');
bubblingHer(2, 1.5, -1).seek(100);
bubblingHim(2, 1.5, -1).seek(100);
master.add(turningHerHead(), 'turningHerHead');
master.add(turningHisHead(), 'turningHisHead');

// --
// Play "jump"
// --
function jump() {
  if (isOnAction) return;
  
  isOnAction = true;
  master.pause(0);
  herJump();
  lookHerToJump();
  setTimeout(() => {master.play('turningHerHead'); isOnAction = false}, 2000);
}

// --
// Play "kissing"
// --
function kissing() {
  if (isOnAction) return;
  
  isOnAction = true;
  master.pause(0);
  moveToHim();
  setTimeout(() => {master.play('turningHerHead'); isOnAction = false;}, 2000);
}