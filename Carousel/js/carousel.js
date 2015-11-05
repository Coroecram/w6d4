(function(){


var Carousel = window.$.Carousel = window.$.Carousel ||
function(el){
  this.$el = el;
  this.activeIdx = 0;
  this.$el.find('button').on('click', this.slide.bind(this));
  this.$strip = this.$el.find('.items');
  this.$el.find('.items li:first-child').addClass('active');

};

Carousel.prototype.slide = function(e){
  var $button = $(e.currentTarget);
  var lastPicIdx =  this.$strip.find('li:last-child').index();
  if($button.attr('class') === 'slide-left' && this.activeIdx < lastPicIdx){
    this.$strip.css('margin-left', -((this.activeIdx+1) * 300) );
    this.activeIdx += 1;
  } else if ($button.attr('class') === 'slide-right' && this.activeIdx > 0){
    this.$strip.css('margin-left', -((this.activeIdx-1) * 300) );
    this.activeIdx -= 1;
  }
};





}());
