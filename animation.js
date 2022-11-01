

var c = document.getElementById('canv');
var $ = c.getContext('2d');


var col = function(x, y, r, g, b) {
  $.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
  $.fillRect(x, y, 0.5,0.5);
}
var R = function(x, y, t) {
  return( Math.floor(0 + 1*Math.cos( (x*x-y*y)/300 + t )) );
}

var G = function(x, y, t) {
  return( Math.floor(192 + 100*Math.sin( (x*x*Math.cos(t/2)+y*y*Math.sin(t/3))/200 ) ) );
}

var B = function(x, y, t) {
  return( Math.floor(192 + 100*Math.sin( 5*Math.sin(t/9) + ((x-100)*(x-100)+(y-100)*(y-100))/2000) ));
}

var t = 0;
var x;
var y;

var run = function() {
  for(x=0;x<=35;x++) {
    for(y=0;y<=35;y++) {
      col(x, y, R(x,y,t), G(x,y,t), B(x,y,t));
    }
  }
  t = t + 0.05;
  window.requestAnimationFrame(run);
};

run();
