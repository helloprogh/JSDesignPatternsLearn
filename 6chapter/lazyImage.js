var myImage = (function() {
    var imageNode = document.createElement("img");
    document.body.appendChild(imageNode);

    return function(src) {
        imageNode.src = src;
    }
})()

var proxyImage = (function(){
    var img = new Image();
    
    img.onload = function() {
        myImage(this.src);
    }

    return function(src) {
        myImage("loading.gif");
        img.src = src;
    }
})()

proxyImage("http://imagecache.qq.com/music//N/k/oooGGDysoyAoNK.jpg")