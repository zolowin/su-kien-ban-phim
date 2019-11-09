document.addEventListener('keyup',move);
var imgobj=document.getElementById('songoku');
function move(e){
    switch(e.keyCode){
        case 38:
            imgobj.style.top = parseInt(imgobj.style.top) -5 + 'px';
            break;
        case 40:
            imgobj.style.top= parseInt(imgobj.style.top) + 5 + 'px'
            break;
        case 37:
            imgobj.style.left= parseInt(imgobj.style.left) - 5 + 'px';
            break
        case 39:
            imgobj.style.left= parseInt(imgobj.style.left) + 5 + 'px';
            break;
    }
    
}