$('#indexPageArticle2 .carouselItems li:not(.active),#companyImgCarousel .carouselItems li:not(.active)').hide();

var carouselDelayFirst = 7000,
    carouselSpeedFirst = 550;

setTimeout(function(){initCarouselFade();},carouselDelayFirst);

function initCarouselFade(arrayClass, transitionSpeed)
{
    var functionLoop;
    iterateItemFade($('.carouselItems'),carouselSpeedFirst);
    functionLoop = setTimeout('initCarouselFade()',carouselDelayFirst);
}

function iterateItemFade(arrayClass,transitionSpeed)
{
    var currentItem = arrayClass.find('li.active');

    currentItem.removeClass('active')
               .fadeToggle(transitionSpeed);

    if(currentItem.is('li:last-child'))
    {
        setTimeout(function(){
            arrayClass.find('li:first-child')
                      .addClass('active')
                      .fadeToggle(transitionSpeed);
        },transitionSpeed);
    }
    else
    {
        setTimeout(function(){
            currentItem.next()
                       .addClass('active')
                       .fadeToggle(transitionSpeed);
        },transitionSpeed);
    }
}