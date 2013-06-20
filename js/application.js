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

$(function () {
  var $gallery = $('#gallery');

  $gallery.children().each(function() {
    thumbnails.push(new Thumbnail($(this)));
  });
});
