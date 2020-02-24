var i = 0;
var s = 50;

var para = document.querySelector('.demo');
var body = document.querySelector('body');
body.onload = (e) =>{
    e.preventDefault();
    alert("Please click the button to see typeWriter")
}

   function Myfunction(){
   if(i < text.length){
       para.innerHTML += text.charAt(i);
       i++;
       para.style.visibility = "visible";
   }
   setTimeout(Myfunction, s);
}


var hide = document.querySelector("hide")
var btn = document.querySelector('.btn1');


var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et dignissim magna, sit amet aliquet dui. Duis vel est in nibh auctor dignissim. Nulla non tortor tincidunt lacus aliquam pretium a in libero. Praesent non varius risus, sed egestas odio. Maecenas faucibus nulla vitae mi tincidunt imperdiet. Donec pellentesque dictum odio, eget dignissim libero tincidunt non. Ut eleifend placerat est, quis vulputate odio viverra."