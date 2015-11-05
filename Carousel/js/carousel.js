(function(){


var Carousel = window.$.Carousel = window.$.Carousel ||
function(el){
  this.$el = el,
  this.activeIdx = 0,
  $el.find('button').on('click', slide);
  this.$el.find('.items li:first-child').addClass('active');

};

Carousel.prototype.slide = function(e){
  var $button = e.currentTarget();
  if($button.attr('id') === 'slide-right'){

  }
  else{

  }
};





}());
