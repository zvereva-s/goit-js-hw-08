import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);
    const KEY_NAME = "videoplayer-current-time";


    player.on('play', function() {
        console.log('played the video!')
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title)
    })

    const onCurrentTime = data =>
    localStorage.setItem(KEY_NAME, JSON.stringify(data.seconds));
    
    const currentTime = localStorage.getItem(KEY_NAME);

    player.setCurrentTime(currentTime).then(function (seconds) {
    }).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
    });

    player.on('timeupdate', throttle(onCurrentTime, 1000));

