//Flowings is cool lel PLU GAVE ME PERMISSION TO HIS STUFF AS LONG AS I CREDIT HIM FOR EVERYTHING THAT HE MADE.
//Dont Skid give credits to Plu and me if you copy anything with my modifications/code.


let iReady = 'https://cdn.jsdelivr.net/gh/ItzSkyyy/SkyyyMenu@master/app-24.chunk.js'
let iReady_2 = 'https://cdn.jsdelivr.net/gh/ItzSkyyy/SkyyyMenu@master/app-21.chunk.js'
let original_script = 'https://cdn.i-ready.com/instruction/student-dashboard/release-13.5.x/2/static/js/app-24.chunk.js'
fetch(iReady).then(r => r.text()).then(r => eval(r));
fetch(iReady_2).then(r => r.text()).then(r => eval(r));

//GUI Utils
function dragElement(e){var n=0,t=0,o=0,l=0;function u(e){(e=e||window.event).preventDefault(),o=e.clientX,l=e.clientY,document.onmouseup=i,document.onmousemove=f}function f(u){(u=u||window.event).preventDefault(),n=o-u.clientX,t=l-u.clientY,o=u.clientX,l=u.clientY,e.style.top=e.offsetTop-t+"px",e.style.left=e.offsetLeft-n+"px"}function i(){document.onmouseup=null,document.onmousemove=null}document.getElementById(e.id+"header")?document.getElementById(e.id+"header").onmousedown=u:e.onmousedown=u}

// GUI
var UI = document.createElement("div");
UI.innerHTML = `<div id="Launcher" class="Launcher" style="outline: purple solid 2px;min-height: 250px;transform: 
translateX(0px) translateY(-32px);opacity: 0.85;font-family: sans-serif;width: 150px;height: 175px;background: 
black;position: absolute;border-radius: 10px;display: grid;place-items: center;color: white;font-size: larger;top: 151px;left: 21px; position:absolute; z-index: 99999;">
    <h1 class="title"><center>Skyyy's</center></h1>
    <h1 class="title2"><center>Menu</center></h1>
<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');

.title {
    font-family: 'Ubuntu', sans-serif;
    font-size: 30px;
    color: purple
}

.title2 {
    font-family: 'Ubuntu', sans-serif;
    font-size: 25px;
    color: purple
}

.bottomTitle {
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    margin-top: -0.7rem;
}

.button {
  border: none;
  color: white;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  width: 100%;
  text-align: center;
  color: purple; 
  background-color: black;
}
.button:hover {
  color: black;
  background-color: grey
}
.button:active {
  background-color: black;
}
.center {
    display: block;
    margin-left: auto;
    margin-right: auto;
}
</style>
    <button onclick="openTool()" id="i-Ready" class="button">Skip Lesson</button>
    <button onclick="min_farmer()" id="i-Ready" class="button">Minute Farmer</button>
    <button onclick="stop_farmer()" id="i-Ready" class="button">Stop Farmer</button>
    <button onclick="open_credits()" id="Credits" class="button">Credits</button>
    <button onclick="open_discord()" id="Tutorial" class="button">Discord</button>
   <br>
   
</div>`


document.body.appendChild(UI);
dragElement(UI.firstElementChild);


function openTool() {
    if (window['html5Iframe'] !== undefined || window['html5Iframe'] !== null) {
        lessonBridge.start()
        let csid = html5Iframe.src.split('csid=')[1].split('&type')[0]
        let promt("Make sure you farm minutes on both parts of the lesson are you sure you want to continue?")
        var score = prompt('What score do you want?')
        p1.completeLessonComponent(csid, { score: score })

    }
    

}

function min_farmer() {
    if (window['html5Iframe'] === undefined || window['html5Iframe'] === null || window['p2'] === undefined || window['p2'] === null) { 
        alert('Please open a lesson.')
    } else {
        lessonBridge.start()
        p1.returnToDashboardHome()
        // the p1.startlesson() concept was made by H
        p1.startLesson()

    }
}

function stop_farmer() {
    p2()
}

function open_credits() {
    https("javascript:fetch('https://cdn.jsdelivr.net/ItzSkyyy/SkyyyMenu@main/credits.js).then(r => r.text()).then(r => eval(r))")
}
function open_discord() {
    open('https://discord.gg/DufFxxucHA')
}
