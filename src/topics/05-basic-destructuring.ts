interface AudioPlayer {
    audioVolume:number;
    songDuration:number;
    song:string;
    details:Details;
}

interface Details {
    author:string;
    year:number;
}

const audioPlayer:AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "NCLC",
    details: {
        author: "Duki",
        year: 2015
    }
}

const song = "New song";

const {song:anotherSong, details} = audioPlayer;
const {author} = details;

console.log("Cancion: ", song);
console.log("Cancion: ", anotherSong);
console.log("Autor: ", audioPlayer.details.author);
console.log("Autor: ", author);
