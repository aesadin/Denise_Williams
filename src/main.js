import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  $("#jquery_jplayer_1").jPlayer({
    ready: function () {
    $(this).jPlayer("setMedia", {
      m3a: "mp3/riseUp.mp3",
      oga: "/media/mysound.ogg"
    });
    },
    swfPath: "/js",
    supplied: "m3a, oga"
  });
});