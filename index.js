const starrybg = document.querySelector(".starry__bg")
const blurrystar = document.querySelector(".blurry__circle")
let shadowList = []
for(i=0; i<300; i++){
    var randX = Math.floor(Math.random()*starrybg.clientWidth-100) +50
    var randY = Math.floor(Math.random()*starrybg.clientHeight-100) + 50
    var randSize = Math.floor(Math.random()*5)-3

    shadowList.push([`${randX}px ${randY}px 0px ${randSize}px white`])
    // 10px 0px 0px -5px white;
}
// console.log(shadowList.join(', '))
blurrystar.style.boxShadow = shadowList.join(', ')
// blurrystar.style.width = `${randSize}px`
// blurrystar.style.height = `${randSize}px`
 


const scaler = document.querySelectorAll('.scaler')
let scaleValue = 1
scaler.forEach((button,i)=>{
    button.addEventListener('mouseup',e=>{
        e.preventDefault()
        // up
        if(i===0) 
        {
            scaleValue += .2
            starrybg.style.transform = `scale(${scaleValue},${scaleValue})`

        }
        // down
        else
        {

            scaleValue -= .2
            starrybg.style.transform = `scale(${scaleValue},${scaleValue})`

        }
    })
})


const text = document.querySelectorAll('.text')
let newtext =['The interconnected internet platforms have become more',
    'As technology develops, the virtual world is now capable',
    'Thus, life is now completely different than the past centuries.',
    'In the real world, it is a giant server located in the stratosphere']

let newtext2 =['substantial than any country or corporation.',
    'of replacing the real one. Using a device installed behind the ear,',
    'The center of this change is the virtual internet space',
    "and powered by solar energy. In the virtual world, it's a place"]

let newtext3 =['Humans have redefined the "net" and how we interact with it.',
    'humans can now easily sync to the virtual world.',
    "-- cyTus, the world's largest virtual city.",
    "where 70% of the Earth's population is living their second life."]
const foreignText = "!@#$%^&*()_+-=?/\[]{};:'<>,."


// Create foreign Array with respect to new text's length
const arrayCreator = (txt) =>{
    const foreignText = "!@#$%^&*()_+-=?/\[]{};:'<>,."

    let newarray = new Array(txt.length)
    for(j=0; j<newarray.length;j++){
        newarray[j] = foreignText.charAt(Math.floor(Math.random()*foreignText.length))
    }
    return newarray
}

// Shuffle foreign Array
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;   
}
var a = 0
var b = 0
var c = 0
var next = 0

const glitchEffect = (selector,txt,iter) =>{

    setTimeout(()=>{
        const arrayCreate = arrayCreator(txt).join('')
        // change text Content
        text[selector].textContent = txt.slice(0,selector == 0 ? a : selector == 1 ? b : c) + arrayCreate.slice(selector == 0 ? a : selector == 1 ? b : c,txt.length)
        // change loop limit
        if(selector == 0)
            a++
        else if(selector == 1)
            b++
        else if(selector == 2)
            c++

        if((selector == 0 ? a : selector == 1 ? b : c)<=txt.length){ 
            glitchEffect(selector,txt,iter)
        }
        else{
            if(c>txt.length){
                setTimeout(()=>{
                    a=0; c=0; b=0
                    next = next<3 ? next+1 : next-next
                    repeater(next)                    
                },3000)
            }
        }
    },50)

}

const repeater = (nxt) => {
    glitchEffect(0,newtext[nxt],a)
    setTimeout(()=>{
        glitchEffect(1,newtext2[nxt],b)
    },300)
    setTimeout(()=>{
        glitchEffect(2,newtext3[nxt],c)
    },600)
}
repeater(next)


//CHARACTER CHANGER
const btn = document.querySelectorAll('.charbtn')
btn.forEach((button,i)=>{
    button.addEventListener('mouseup',(e)=>{
        e.preventDefault()
        if(i==0){
            console.log("moving left")
        }
        else{
            console.log("moving right")

        }
    })
})

const left = document.querySelector('.left')
const right = document.querySelector('.right')
const char_ctn = document.querySelector('.characters__container')
const chars = document.querySelector('.characters')
const char = document.querySelectorAll('.character')


window.addEventListener('resize',()=>{
    const stbg = document.querySelector('.starry__bg')
    stbg.style.width = `${window.innerWidth}px`
    stbg.style.height = `${window.innerHeight}px`
    char_ctn.scrollTo(0,0)
    current_char = 0
})

let current_char = 0
left.addEventListener('mouseup',()=>{
    console.log(char_ctn)

    char_ctn.style.pointerEvents = 'none'
    setTimeout(() => char_ctn.style.pointerEvents = 'fill', 500)
    if(current_char == 0){
        current_char = char.length-1
        chars.style.scrollBehavior = 'unset'
        chars.scrollTo(char[current_char].getBoundingClientRect().left,0)
        chars.style.scrollBehavior = 'smooth'
        chars.scrollBy(-char[0].getBoundingClientRect().width,0)
        current_char--
    }
    else{
        current_char--
        chars.scrollBy(-char[0].getBoundingClientRect().width-5,0)
    }
})
right.addEventListener('mouseup',()=>{
    char_ctn.style.pointerEvents = 'none'
    setTimeout(() => char_ctn.style.pointerEvents = 'fill', 500)
    if(current_char == char.length-2){
        current_char=0
        chars.scrollBy(char[0].getBoundingClientRect().width,0)
        setTimeout(()=>{
            chars.style.scrollBehavior = 'unset'
            chars.scrollTo(0,0)
            chars.style.scrollBehavior = 'smooth'
        },500)
    }
    else{
        current_char ++
        chars.scrollBy(char[0].getBoundingClientRect().width+5,0)
    }
    
})


const section = document.querySelectorAll('.section')
let currentsect = 0
var timer = null;

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

const imgbg = document.querySelector('.imgbg')
const scrl = document.querySelectorAll('.scroll')
let scrolling = false

const gameplay = document.querySelector('.gameplay')
const gameplaysongs = document.querySelector('.songs')
const gpsongs = document.querySelectorAll('.song')
const gpscroll = gameplay.querySelectorAll('.scroll')
const scrollbtn = document.querySelectorAll('.scroll__button')

let activeColor = 'hsl(297,100%,87%)'
let inactiveColor = 'hsl(300,13%,13%)'

// console.log(starrybg.style.transform.split(/[a-z(), ]/g).filter(e=>e)[1])


// let size =  parseFloat(starrybg.style.transform.split(/[a-z(), ]/g).filter(e=>e))
// console.log(size)
window.addEventListener('wheel', function(event){
    if(timer !== null) {
        clearTimeout(timer);        
    }
    timer = setTimeout(function() {
        let beforesect = currentsect

        if (event.deltaY < 0){
            if(currentsect != 0){
                currentsect--; scrolling = true
            }
            else scrolling = false
        }
        else if (event.deltaY > 0){
            if(currentsect != section.length-1){
                scrolling = true; currentsect++
            }
            else scrolling = false
        }
        if(scrolling){
                let particlesize = parseFloat(starrybg.style.transform.split(/[a-z(), ]/g).filter(e=>e))
                section[currentsect].style.opacity = 1
                section[currentsect].style.transform = 'scale(1,1)'
                section[currentsect].style.pointerEvents = 'fill'
                section[beforesect].style.opacity = 0
                if(beforesect>currentsect){
                    starrybg.style.transform = `scale(${particlesize-.2},${particlesize-.2})`
                    section[beforesect].style.transform = 'scale(1.7,1.7)'
                }
                else{
                    starrybg.style.transform = `scale(${particlesize+.2},${particlesize+.2})`
                    section[beforesect].style.transform = 'scale(.7,.7)'
                }
                
                section[beforesect].style.pointerEvents = 'none'
                scrollbtn[currentsect].style.setProperty('--beforecolor', activeColor)
                scrollbtn[currentsect].style.setProperty('--aftercolor', activeColor)
                scrollbtn[beforesect].style.setProperty('--beforecolor','transparent')
                scrollbtn[beforesect].style.setProperty('--aftercolor',inactiveColor)
            
        }
    }, 300);
});

scrollbtn.forEach((item,i)=>{
    item.addEventListener('mouseup',()=>{
        console.log('here')
        let beforesect = currentsect
        currentsect = i
        if(beforesect!=currentsect){
            section[currentsect].style.opacity = 1
            section[currentsect].style.transform = 'scale(1,1)'
            section[currentsect].style.pointerEvents = 'fill'
            section[beforesect].style.opacity = 0
            if(beforesect>currentsect) section[beforesect].style.transform = 'scale(1.7,1.7)'
            else section[beforesect].style.transform = 'scale(.7,.7)'
            section[beforesect].style.pointerEvents = 'none'
            
            scrollbtn[currentsect].style.setProperty('--beforecolor', activeColor)
            scrollbtn[currentsect].style.setProperty('--aftercolor', activeColor)
            scrollbtn[beforesect].style.setProperty('--beforecolor','transparent')
            scrollbtn[beforesect].style.setProperty('--aftercolor',inactiveColor)
        }
    })
})

let currentsong = 0
gpscroll.forEach((scrl,i) => {
    scrl.addEventListener('mouseup',()=>{

        gameplay.style.pointerEvents = 'none'
        setTimeout(() => gameplay.style.pointerEvents = 'fill', 500)
        if(i==0){
            currentsong = currentsong!=0 ? currentsong-1 : currentsong 
            gameplaysongs.scrollBy(-gpsongs[0].getBoundingClientRect().width, 0)
        }
        if(i==1){
            currentsong = currentsong!=gpsongs.length-1 ? currentsong+1 : currentsong
            gameplaysongs.scrollBy(gpsongs[0].getBoundingClientRect().width, 0)
        }

        if(currentsong==gpsongs.length-1){
            gpscroll[1].classList.add('end')
            // gpscroll[1].style.color = 'grey'
            // gpscroll[1].style.borderColor = 'grey'
            // gpscroll[1].style.pointerEvents = 'none'
        }
        else if(currentsong==0){
            gpscroll[0].classList.add('end')

            // gpscroll[0].style.color = 'grey'
            // gpscroll[0].style.borderColor = 'grey'
            // gpscroll[0].style.pointerEvents = 'none'

        }
        else{
            gpscroll[0].classList.remove('end')
            gpscroll[1].classList.remove('end')

            // gpscroll[0].style.color = 'white'
            // gpscroll[1].style.color = 'white'
            // gpscroll[0].style.borderColor = 'white'
            // gpscroll[1].style.borderColor = 'white'
            // setTimeout(()=>{
                // gpscroll[0].style.pointerEvents = 'fill'
                // gpscroll[1].style.pointerEvents = 'fill'
            // },500)
        }

    })
})