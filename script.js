let songIndex = 1;
let audioElement = new Audio("song/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let masterPlayName = document.getElementById("masterPlayName");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songs=[
    {songName: 'Chinna Chinna Kangal', filePath:"song/1.mp3"},
    {songName: 'Whistle Podu', filePath:"song/2.mp3"},
    {songName: 'Naa Ready', filePath:"song/3.mp3"},
    {songName: 'Ranjithame', filePath:"song/4.mp3"},
    {songName: 'Jolly O Gymkhana', filePath:"song/5.mp3"},
    {songName: 'Kutti Story', filePath:"song/6.mp3"},
    {songName: 'Verithanam', filePath:"song/7.mp3"},
    {songName: 'Papa Papa', filePath:"song/8.mp3",},
    {songName: 'Chella Kutti', filePath:"song/9.mp3"},
    {songName: 'Vaanavil Vattamagudhae', filePath:"song/10.mp3"},
    {songName: 'Selfie Pulla', filePath:"song/11.mp3"},
    {songName: 'Kandangi Kandangi', filePath:"song/12.mp3"},
    {songName: 'Vanganna Vanakanganna', filePath:"song/13.mp3"},
]

songItems.forEach((element, i) => {
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

masterPlay.addEventListener("click", () => {
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove("bi-play-circle-fill");
        masterPlay.classList.add("bi-pause-circle-fill");
    }else{
        audioElement.pause();
        masterPlay.classList.remove("bi-pause-circle-fill");
        masterPlay.classList.add("bi-play-circle-fill");
    }
});

audioElement.addEventListener("timeupdate", () => {
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener("change", () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const allPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove("bi-pause-circle-fill");
        element.classList.add("bi-play-circle-fill");
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener("click", (event) => {
        allPlays();
        songIndex = parseInt(event.target.id);
        event.target.classList.remove("bi-play-circle-fill");
        event.target.classList.add("bi-pause-circle-fill");
        audioElement.src = `song/${songIndex}.mp3`;
        masterPlayName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("bi-play-circle-fill");
        masterPlay.classList.add("bi-pause-circle-fill");
    })
});

document.getElementById("next").addEventListener("click", () => {
    if(songIndex>=13){
        songIndex = 1;
    }else{
        songIndex +=1;
    }
    allPlays();
    audioElement.src = `song/${songIndex}.mp3`;
    masterPlayName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("bi-play-circle-fill");
    masterPlay.classList.add("bi-pause-circle-fill");
})

document.getElementById("pervious").addEventListener("click", () => {
    if(songIndex<=1){
        songIndex = 1;
    }else{
        songIndex -=1;
    }
    allPlays();
    audioElement.src = `song/${songIndex}.mp3`;
    masterPlayName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("bi-play-circle-fill");
    masterPlay.classList.add("bi-pause-circle-fill");
})