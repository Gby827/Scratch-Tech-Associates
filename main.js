
function online(){
    if(navigator.onLine){
        return true;
    }else{
        return false;
    }
}

window.onload = function() {
    console.log("Website loaded.");
    if(online()){
        console.log("navigator.online == true");
        location.reload();
    }
};