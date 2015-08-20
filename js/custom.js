$('#indexPageArticle2 .carouselItems li:not(.active),#companyImgCarousel .carouselItems li:not(.active)').hide();

var carouselDelayFirst = 7000,
    carouselSpeedFirst = 550;

initCarouselFade('.carouselItems',carouselSpeedFirst);

function initCarouselFade(arrayClass, transitionSpeed)
{

  setTimeout(function(){
      var arrayJQ = $(arrayClass),
          currentItem = arrayJQ.find('li.active');

      currentItem.removeClass('active')
                 .fadeToggle(transitionSpeed);

      if(currentItem.is('li:last-child'))
        currentItem = arrayJQ.find('li:first-child');
      else
        currentItem = currentItem.next();

      setTimeout(function(){
        currentItem.addClass('active')
                   .fadeToggle(transitionSpeed);
      },500);

      setTimeout('initCarouselFade(\'' + arrayClass + '\',' + transitionSpeed + ')',carouselDelayFirst)
  },carouselDelayFirst);

}