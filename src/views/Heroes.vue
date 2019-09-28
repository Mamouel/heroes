<template>

  <div class="md:w-full max-w-6xl mx-auto mt-12 px-3 py-1">

    <div class="bg-white rounded-lg w-full mx-auto shadow relative" v-for="hero in getHeroes" :key="hero.id">
      <div class="text-xl absolute top-0 right-0 cursor-pointer" @click="deleteHero(hero.id)">X</div>
      <router-link :to="`/heroes/${hero.id}`">
        <div class="flex justify-center p-6">
          <img class="h-10 w-10 rounded-full mx-auto mr-2 md:mr-6" src="@/assets/triforce.png">
          <div class="flex justify-between text-center md:text-left w-full">
            <h2 class="text-lg leading-loose">{{ hero.name }}</h2>
            <div class="text-lg text-purple-500 leading-loose">{{ hero.origin }}</div>
            <div class="hidden text-lg sm:max-w-xs max-w-lg leading-loose truncate whitespace-no-wrap overflow-x-hidden md:block">{{ hero.description }}</div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "heroes",
  computed: {
    ...mapGetters("heroesStore" , ["getHeroes"])
  },
  methods: {
    ...mapActions("heroesStore" , ["deleteHero"])
  }
};
</script>
