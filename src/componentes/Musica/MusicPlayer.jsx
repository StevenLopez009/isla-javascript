import { useState, useEffect } from "react";
import audiomusic from "../../assets/audio/music.mp3";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const audio = new Audio(audiomusic);
    audio.loop = true;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [isPlaying]);

  return (
    <div>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Pausar música" : "Reproducir música"}
      </button>
    </div>
  );
};

export default MusicPlayer;
