<template>
  <div class="flex flex-col flex-row">
    <div class="bg-gray-900 shadow-lg fixed bottom-0 relative h-full min-h-full z-10 w-48">
      <div class="sm:mt-20 sm:w-48 sm:fixed sm:left-0 sm:top-0 content-center sm:content-start text-left justify-between">
        <ul class="list-reset flex flex-row sm:flex-col py-0 sm:py-3 px-1 sm:px-2 text-center sm:text-left">
          <li class="mr-3 flex-1">
              <router-link to="/" class="block py-1 sm:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500">
                  <i class="fas fa-tasks pr-0 sm:pr-3"></i><span class="pb-1 sm:pb-0 text-xs sm:text-base text-gray-600 sm:text-gray-400 block sm:inline-block">Dashboard</span>
              </router-link>
          </li>
          <li class="mr-3 flex-1">
              <router-link to="/heroes" class="block py-1 sm:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
                  <i class="fa fa-envelope pr-0 sm:pr-3"></i><span class="pb-1 sm:pb-0 text-xs sm:text-base text-gray-600 sm:text-gray-400 block sm:inline-block">Heroes</span>
              </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "sidebar",
};
</script>