import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

// Configure Echo to use Reverb (or another WebSocket service)
window.Pusher = Pusher;

const echo = new Echo({
    broadcaster: 'reverb', // or 'reverb' if using Reverb as the broadcaster
    key: '9ellx8irlu8qldmvafyx',  // Your app key from Reverb or Pusher
    cluster: 'mt1', // Reverb cluster or leave blank if not using clusters
    wsHost: 'localhost',  // WebSocket server host (could be different in production)
    wsPort: 8080,         // WebSocket server port
    forceTLS: false,      // Disable TLS if using ws:// instead of wss://
    disableStats: true    // Optional: disable stats for improved performance
});

export default echo;
