let songName=document.querySelector("#song-name")
let songSinger=document.querySelector("#song-singer")
let songImage=document.querySelector(".song-image")
let playPauseImg=document.querySelector("#play-pause")
let volumeRange=document.querySelector("#volume-range")
let songRange=document.querySelector("#song-duration")
let volSvg=document.querySelector("#vol-svg")
let musicAnim=document.querySelector("#musicanim")
let playlistImg=document.querySelector("#playlist-img")
let playlist=document.querySelector(".playlist")
let playlistSong=document.querySelectorAll(".playlist-songs")
let index=0;
let playingSong=false;
let track=document.createElement("audio")
let songs=[
    {
        name:"Ve kamleya",
        path:"firstsong.mp3",
        image:"p1.jpg",
        singer:"Arijit Singh"
    },
    {
        name:"Apna bana le ",
        path:"secondsong.mp3",
        image:"pic2.jpg",
        singer:"Arijit Singh"
    },
    {
        name:"Ishq mubarak",
        path:"thirdsong.mp3",
        image:"pic3.jpg",
        singer:"Arijit Singh"
    },
    {
        name:"Dil galti kar betha",
        path:"fourthsong.mp3",
        image:"pic1.jpg",
        singer:"Jubin Nautiyal"
    },
    {
        name:"O Maahi",
        path:"fivesong.mp3",
        image:"pic6.jpg",
        singer:"Arijit Singh"
    },
    {
        name:"Tere Muskurana",
        path:"sixsong.mp3",
        image:"pic7.jpg",
        singer:" Rishabh"
    },
    {
        name:"Baaton hi baaton meain",
        path:"sevensong.mp3",
        image:"pic8.jpg",
        singer:"Gurmeet"
    },
    {
        name:"Rabba Janda",
        path:"eightsong.mp3",
        image:"pic9.jpg",
        singer:"Jubin Nautiyal"
    },
    {
        name:"Lambiyaan si Judaiyaan",
        path:"ninesong.mp3",
        image:"pic10.jpg",
        singer:"Arijit singh"
    },
    {
        name:"Tere sang Ishq hua",
        path:"tensong.mp3",
        image:"pic11.jpg",
        singer:"Arijit singh"
    },
    {
        name:"Tumhe Chahte hum",
        path:"elevensong.mp3",
        image:"pic12.jpg",
        singer:"Chitransh Paliwal"
    },
    {
        name:"Woh is Qadar",
        path:"twelvesong.mp3",
        image:"pic13.jpg",
        singer:"Tulsi Kumar"
    },
    {
        name:"Teri Baaton mein aisa uljha jiya",
        path:"thirteensong.mp3",
        image:"pic14.jpg",
        singer:"Tanishk Bagchi"
    },
    {
        name:"Pehli Nazar mein kaise jaado kar diya",
        path:"fourteensong.mp3",
        image:"pic15.jpg",
        singer:"Atif Aslam"
    },
    {
        name:"Subha hone na de",
        path:"fifteensong.mp3",
        image:"pic16.jpg",
        singer:"Mika singh"
    },
    {
        name:"Subhanallah",
        path:"sixteensong.mp3",
        image:"pic17.jpg",
        singer:"Shilpa Rao and Sreerama Chandra"
    },
    {
        name:"Fakira",
        path:"eighteensong.mp3",
        image:"pic18.jpg",
        singer:"Neeti Mohan, Sanam Puri"
    },
    {
        name:"Ishq Bulaava",
        path:"nineteensong.mp3",
        image:"pic19.jpg",
        singer:"Sanam Puri and Shipra Goyal"
    },
    
]

function loadTrack(index){
    track.src=songs[index].path;
    songName.innerHTML=songs[index].name;
    songSinger.innerHTML=songs[index].singer;
    songImage.style=` background-image: url("${songs[index].image}");`
    volume()
    duration()
    setInterval(()=>{
    songRange.max=track.duration
    songRange.value=track.currentTime
    },1000)
    track.loop=true
    track.load()

}
loadTrack(index);

function playPause(){
    if(playingSong==false){
        playSong()
        
    }else{
        pauseSong()
       
    }
}
function playSong(){
    track.play();
    playingSong=true;
playPauseImg.src="pause.svg"
musicAnim.style.display="block"   

}

function pauseSong(){
    track.pause();
    playingSong=false;
playPauseImg.src="play.svg"
musicAnim.style.display="none"   

}
function nextSong(){
    if(index<songs.length-1){
        index++;
        loadTrack(index)
        playSong()
    }else{
        index=0;
        loadTrack(index)
        playSong()
    }
}
function previousSong(){
    if(index>0){
        index--;
        loadTrack(index)
        playSong()
    }else{
        index=songs.length-1;
        loadTrack(index)
        playSong()
    }
}
function volume(){
    track.volume=volumeRange.value/100;
    if(volumeRange.value==0){
        volSvg.src="mute.svg"
    }else{
        volSvg.src="volume.svg"
    }
}
function duration(){
    track.currentTime=songRange.value
}
playlistImg.addEventListener("click",()=>{
    playlist.classList.toggle("playlist-active")
    if( playlist.classList.contains("playlist-active")){
        playlistImg.src="cross.svg"
    }else{
        playlistImg.src="playlist.svg"
    }
})

playlistSong.forEach((song,index)=>{
    song.addEventListener('click',()=>{
        loadTrack(index);
        playSong()
        playlist.classList.remove("playlist-active")
         playlistImg.src="playlist.svg"
    })
})