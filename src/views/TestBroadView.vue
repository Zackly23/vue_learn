<script setup>
import Echo from 'laravel-echo'
import { ref } from 'vue';

const messages = ref([]);

window.Echo = new Echo({
  broadcaster: 'pusher',
  key: 'b15c7851ebc583f87aeb',
  cluster: 'ap1',
  forceTLS: true,
});

var channel = window.Echo.channel('my-channel');

channel.listen('.my-event', function(data) {
   messages.value.push(data.message);
   console.log(data);
//   alert(JSON.stringify(data));
});

</script>

<template>
  <h1>Pusher Test</h1>
  <p>
    Publish an event to channel <code>my-channel</code>
    with event name <code>my-event</code>; it will appear below:
  </p>
  <div id="app">
    <ul>
      <li v-for="message in messages">
        {{message}}
      </li>
    </ul>
  </div>  
</template>