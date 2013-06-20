var Song = window.song = function(file, container) {
  var self = this;

  this.$clear = $('<div class="clearfix"></div>');
  this.$container = $(container);
  this.$link = $('<a></a>');
  this.file = file;

  this.$link
      .attr('href', 'http://ksenijaprohaska.github.io/audio/'+file)
      .text(this.file.replace('.mp3', ''));

  this.$container
      .append(this.$link)
      .append(this.$clear);
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

var song_files = [
  'Autumn Leaves.mp3',
  'La\' vie on rose.mp3',
  'Non,je ne regrette rien.mp3',
  'Milord.mp3',
  'Lily Marlene.mp3',
  'Ich habe noch einen koffer in Berlin.mp3',
  'I wish you love.mp3',
  'The portrait of my love.mp3',
  'Na me couhan.mp3',
  'Djelem,djelem.mp3'
];

var poetry_files = [
  'I am not a woman.mp3',
  'If I call you my love.mp3',
  'La Exis, la exis novento siete punto nueve.mp3',
  'I understand only tenderness.mp3',
  'The artist.mp3',
  'Elat Jewish market.mp3'
];

var songs = window.songs = [];
var poetry = window.poetry = [];

$(function () {
  var $gallery = $('#gallery');

  $gallery.children().each(function() {
    thumbnails.push(new Thumbnail($(this)));
  });

  $.each(song_files, function() {
    songs.push(new Song(this, '#songs'));
  });

  $.each(poetry_files, function() {
    poetry.push(new Song(this, '#poetry'));
  });

  var $player = $('<script></script>');

  $player.attr('type', 'text/javascript')
         .attr('src', "http://webplayer.yahooapis.com/player.js");

  $('head').append($player);
});
