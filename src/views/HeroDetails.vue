<template>
    <div class="w-full mt-24 max-w-6xl mx-auto px-3 py-1">

      <div class="bg-white rounded-lg w-full mx-auto shadow">

          <div class="md:flex justify-between p-6">
            <img class="h-64 w-64 mx-auto" src="@/assets/triforce.png">
            <div>
              <h2 class="text-3xl text-center p-6">{{getHero.name}}</h2>
              <div class="text-center">
                <div class="text-purple-500">{{getHero.origin}}</div>
              </div>
            <div class="p-6">{{ getHero.description }}</div>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "heroDetails",
  data() {
    return {
      heroes: {}
    }
  },
  computed: {
    ...mapGetters("heroesStore" , ["getHero"]),
  },
  methods: {
    ...mapActions("heroesStore" , ["selectHero"]),
  },
  mounted() {
    let id = this.$route.params.id;
    this.selectHero(id);
  }
};
</script>
