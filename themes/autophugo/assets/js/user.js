$("body").addClass("thin");
$("body").mouseover(function(){
  $(this).removeClass("thin");
});
$("body").mouseout(function(){
  $(this).addClass("thin");
});
$("body").scroll(function () {
  $("body").addClass("thin");
});

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);