$(function(){
console.log('da script runnin...');

showGifs();

$('form').submit(function(event) {
  event.preventDefault();
  $('img').remove();
  showGifs();
});

function showGifs(){
  $.ajax({
    method: 'GET',
    url: 'http://api.giphy.com/v1/gifs/search?',
    data: $('form').serialize(),
    dataType: 'json',
    success: onSuccess,
    error: onError
  })
}

function onSuccess(responseData){
  var test = responseData.data[0].slug;
  getGifUrl(responseData);
}


function onError(){
  console.log('error: SEEK & DESTROY');
}

function getGifUrl(responseData){
  var images = [];
  // loop up to 25 times to get first 25 gif links
  for (var i = 0; i < 25; i++) {
    var imgURL = responseData.data[i].images.fixed_width.url;
    images.push(imgURL);
  }
  generateHTML(images);
}


function generateHTML(images){
  console.log('generateHTML function start');
  // option 1
  var imagesHTML = images.map(function(img) {
    var imgHTML = '<img src="' + img +'">';
    $('.gif-gallery').append(imgHTML);
    return imgHTML;
  });
  // ------------------------------------------------

  // for each!!!!!
  // option 2
  // images.forEach(function(img){
  //
  // })


  // console.log(imagesHTML.length);
  // console.log(imagesHTML);
  // console.log('generateHTML function end');
}

});
