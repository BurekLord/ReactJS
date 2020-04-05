import React, { useEffect, useRef, useState } from 'react';
import classes from './AudioPlayer.module.css';

const AudioPlayer = (props) => {
    let [ playMusic, setPlayMusic ] = useState(false);

    let song = props.start ? require('../../assets/music/Piano Ballad  iMovie Song-Music.mp3') : require('../../assets/music/Plinketts List Song FULL  (OrangesPlayground).mp3');
    let playImage = !playMusic ? require('../../assets/images/sound on.png') : require('../../assets/images/sound off.png');

    const sound = useRef(null);

    useEffect(() => {
        if (sound.current) {
            sound.current.volume = 0.05;
            setTimeout(() => { sound.current.volume = 0.1 }, 1000)
            setTimeout(() => { sound.current.volume = 0.15 }, 1500)
            setTimeout(() => { sound.current.volume = 0.2 }, 2000)
        }
    }, [])

    const toggleSound = () => {
        setPlayMusic(!playMusic);
        sound.current.volume = playMusic ? 0.2 : 0;
    }

    return (
        <figure className={classes.audioControl}>
            <img onClick={toggleSound} src={playImage} alt="sound control" />
            <audio
                ref={sound}
                autoPlay
                loop
                src={song}>
                Your browser does not support the
            <code>audio</code> element.
        </audio>
        </figure>
    );
}

export default AudioPlayer;