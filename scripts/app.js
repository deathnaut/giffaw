$(function(){
console.log('da script runnin...');

$.ajax({
  method: 'GET',
  url: 'http://api.giphy.com/v1/gifs/search?q=cats&api_key=dc6zaTOxFJmzC',
  dataType: 'json',
  success: onSuccess,
  error: onError
})

function onSuccess(responseData){
  var test = responseData.data[0].slug;
  getGifUrl(responseData);
}


function onError(){
  alert('error: fix yer shit brah');
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
  // method 1
  var imagesHTML = images.map(function(img) {
    var imgHTML = '<img src="' + img +'">';
    $('.gif-gallery').append(imgHTML);
    return imgHTML;
  });

  // for each!!!!!
  // method 2


  console.log(imagesHTML.length);
  console.log(imagesHTML);
  console.log('generateHTML function end');
}

});
