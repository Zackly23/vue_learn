import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;
 
window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'b15c7851ebc583f87aeb',
    cluster: 'ap1',
    forceTLS: false,
});