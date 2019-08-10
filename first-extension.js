//allows an array of profile photos contain 'EntityPhoto'
let images = document.querySelectorAll('img[class*="EntityPhoto"]');

//for loop to run through array of images
for (i =0; i < images.length; i++){
    //replacing it with url of our kitten image
    images[i].src = browser.runtime.getURL("images/kitten.jpg")
}


