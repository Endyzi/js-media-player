const songs = [
    "Atmozfears & Demi Kanon - Come Together Chill Mix.mp3",
    "Atmozfears, Demi Kanon, David Spekter - Yesterday.mp3",
    "Malice - Psikoshit! Original Mix .mp3",
    "Radical Redemption amp; Nosferatu - The Swirling Black Waters .mp3",
    "Radical Redemption amp; N-vitral - Hannibal .mp3"
];

const createSongList = () => {
    const list = document.createElement('ol')

    for(let i = 0; i <songs.length; i++) {
        const item = document.createElement('li')
        item.appendChild(document.createTextNode(songs[i]))

        list.appendChild(item)
    }
    return list;
}

document.getElementById('songList').appendChild(createSongList())

songList.onclick = (e) => {
    //console.log(e)
    const clickedItem = e.target
    const source = document.getElementById('source')
    source.src = 'songs/' + clickedItem.innerText
    
    document.getElementById('currentlyPlayingSong').innerText = "Currently Playing: "
    document.getElementById('currentSong').innerText = clickedItem.innerText

    player.load()
    player.play()
}

const playAudio = () => {
    if(player.readyState) {
        player.play()
    }
}

const pauseAudio = () => {
    player.pause()
}

const slider = document.getElementById('volumeSlider')
    slider.oninput = (e) => {
    const volume = e.target.value
    player.volume = volume
}

const updateProgress = () => {
    if(player.currentTime > 0) {
        const progressBar = document.getElementById('progress')

        progressBar.value = (player.currentTime / player.duration) * 100
    }

}

   
