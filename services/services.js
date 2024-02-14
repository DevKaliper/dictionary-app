export const playAudio= (url) =>{
    const audio = new Audio(url);
    audio.play();
}