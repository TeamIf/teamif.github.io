// Randomly return an image from an imgur album

// Settings
var album_id = '8PH6b';
var api_key = '7e0293e3123b889';
var request_url = 'https://api.imgur.com/3/album/' + album_id;
var image_url;

function requestAlbum() {
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            processRequest(xmlHttp.responseText);
        } else {
            console.log("Error with Imgur Request.");
        }
    }

    xmlHttp.open("GET", request_url, true); // true for asynchronous 
    xmlHttp.setRequestHeader('Authorization', 'Client-ID ' + api_key);
    xmlHttp.send(null);
}


function processRequest(response_text) {
    if (response_text == "Not found") {
        console.log("Imgur album not found.");
    } else {
        var info = eval( "(" + response_text + ")" );

        console.log(response_text);

        var json = JSON.parse(response_text);

console.log(json);

        var image_count = json['data']['images_count'];

console.log(image_count);
        var random_index = Math.floor((Math.random() * image_count) + 1);
console.log(random_index);
        image_url = json['data']['images'][random_index-1]['link'];

console.log(image_url);
console.log("------------");

      document.getElementById("header_splash").style = 
        "background-image: url('" + image_url + "');";


    }
}

// document.addEventListener("DOMContentLoaded", function(image_url) {
//     console.log("in the on dom content loaded");

//     document.getElementById("header_splash").style = 
//     "background-image: url('" + image_url + "');";
// }, false);

// window.onload = function(image_url) {
//         console.log("window onload called");
//     document.getElementById("header_image").style = 
//     "background-image: url('" + image_url + "');";
// }

requestAlbum();