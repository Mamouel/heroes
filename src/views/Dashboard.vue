<template>
  <div class="mx-auto mt-24">
    <div class='md:flex flex-wrap justify-center max-w-4xl mx-auto'>
      <div class="w-full max-w-md mx-auto p-3 flex-grow md:w-1/2" v-for="hero in getHeroes" :key="hero.id">
        <div class="bg-white rounded-lg mx-auto shadow">
          <router-link :to="`/heroes/${hero.id}`">
            <div class="">
              <img class="bg-cover w-full" src="@/assets/triforce.png">
              <div class="text-center">
                <h2 class="text-lg py-4">{{hero.name}}</h2>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "dashboard",
  computed: {
    ...mapGetters("heroesStore" , ["getHeroes"]),
    getMoreClicked() {

    }
  }
};
</script>
