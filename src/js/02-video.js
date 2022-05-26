import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('play', function() {
        console.log('played the video!')
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title)
    })

const onCurrentTime = throttle(data =>
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds)), 1000);
    
    const currentTime = localStorage.getItem("videoplayer-current-time");

    player.setCurrentTime(currentTime).then(function (seconds) {
    }).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
    });

    player.on('timeupdate', onCurrentTime);