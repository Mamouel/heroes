<template>
  <div id='app'>
    <div class='font-sans leading-normal tracking-normal relative'>
      <Navbar />
      <div class='flex'>
        <Sidebar />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Sidebar from './components/Sidebar.vue';
import Navbar from './components/Navbar.vue';

export default {
  name: "heroes",
  components: {
    Sidebar,
    Navbar
  }
};
</script>