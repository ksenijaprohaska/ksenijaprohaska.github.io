var Song = window.song = function(file) {
  var self = this;

  this.$container = $('#songs');
  this.$link = $('<a></a>');
  this.file = file;

  this.$link
      .attr('href', 'http://ksenijaprohaska.github.io/audio/'+file)
      .text(file);

  this.$container.append(this.$link);
}

var Thumbnail = window.Thumbnail = function($link) {
  var self = this;

  this.$container = $('<span></span>');
  this.$link = $link;
  this.l_url = $link.attr('href');
  this.m_url = this.l_url.replace('.jpg', '_m.jpg');
  this.t_url = this.l_url.replace('.jpg', '_t.jpg');

  this.$container.css({
    width: '90px',
    height: '90px',
    float: 'left',
    overflow: 'hidden',
    background: 'url(\''+this.t_url+'\') no-repeat 0 0'
  });

  this.$link
      .html(this.$container)
      .attr('href', this.m_url);
}

var thumbnails = window.thumbnails = [];

var song_files = ['01_Autumn_Leaves.mp3'];
var songs = window.songs = [];

$(function () {
  var $gallery = $('#gallery');

  $gallery.children().each(function() {
    thumbnails.push(new Thumbnail($(this)));
  });

  $.each(song_files, function() {
    songs.push(new Song(this));
  });

  var $player = $('<script></script>');

  $player.attr('type', 'text/javascript')
         .attr('src', "http://webplayer.yahooapis.com/player.js");

  $('body').append($player);
});
