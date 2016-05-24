// Randomly return an image from an imgur album
// eg. https://imgur.com/a/wL39S

// // Settings
// var album_id = 'wL39S';
// var api_key = '7e0293e3123b889';
// var request_url = 'https://api.imgur.com/3/album/' + album_id;


// function requestAlbum() {
//     var xmlHttp = new XMLHttpRequest();

//     xmlHttp.onreadystatechange = function() { 
//         if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
//             processRequest(xmlHttp.responseText);
//         }
//     }

//     xmlHttp.open("GET", request_url, true); // true for asynchronous 
//     //xmlHttp.setRequestHeader('Client-ID', api_key);
//     xmlHttp.send(null);
// }


// function processRequest(response_text) {
//     if ( xmlHttp.responseText == "Not found" ) {
//         console.log("Imgur album not found.");
//     } else {
//         var info = eval( "(" + xmlHttp.responseText + ")" );
//         var json = JSON.parse(info);

//         var image_count = json['images_count'];
//         console.log(image_count);

//         var random_index = Math.floor((Math.random() * image_count) + 1);
//         console.log(random_index);

//         var image_url = json['images']['link'];
//         console.log(image_url);

//         console.log("------------------");
//     }
// }

// requestAlbum();

