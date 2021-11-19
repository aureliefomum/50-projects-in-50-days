const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0 

let int = setInterval(blurring, 30)


function blurring(){
    load ++
    if(load > 99){
        clearInterval(int)
    }
    loadText.innerText = `${load}%`

    // set the opacity using the scale function
    //in the arguments:
    //load stands for the amount of time 
    //inmin and inmax at 0 to 100 respectively are  the min and max loading values
    //outMin and outMax are the opacity values, so since we are going from visible to opaque (fading out) we set them to 1 and 0 respectively
    loadText.style.opacity = scale(load, 0,100, 1, 0)

    //set the blur max 
    bg.style.filter = `blur(${scale(load,0,100, 30,0)}px)`
}

const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}