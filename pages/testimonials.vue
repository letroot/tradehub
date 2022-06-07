<template>
  <div class="gothic" id="root-el">
    <Nav />

    <div class="h-90v sm:flex-col  jumbo-section sm:h-90v">
      <div class="mt-4">
        <img
          class="sm:hidden w-full object-none"
          src="../assets/img/hero-map.png"
          alt=""
        />
      </div>
      <div class="sm:jumbo-text mt-36 sm:w-1/2">
        <h2 class="text-4xl sm:w-full sm:mt-24 sm:ml-16 sm:text-6xl">
          Testimonials from the World’s Fastest Growing Trading Community
        </h2>
        <p class="mt-3 sm:ml-16 sm:mt-4 sm:w-3/4">
          Hi, I’m Joe. I run a Telegram channel with 7,000 users where I share
          the most important market insights daily.
        </p>
        <button
          class="
            px-8
            py-2
            sm:ml-16
            bg-brightgreen
            text-black
            sm:px-12 sm:py-4
            mt-9
          "
        >
          <a href="#gallery">See More</a>
        </button>
      </div>
    </div>

    <main class="mt-16 px-8 sm:px-24 bg-neutral-50" id="gallery">
      <div class="flex-col sm:block">
        <img
          v-for="img in img_links.resources"
          :key="img.asset_id"
          :src="img.secure_url"
          class="block border-2 border-gray-100 mt-3 sm:inline-block w-full sm:w-1/4 sm:p-4 sm:border-1 sm:border-gray-300"
          alt=""
        />
      </div>
    </main>
  </div>
</template>


<script>
import image_links from '~/static/data.json'
// import { ref } from '@nuxtjs/composition-api'

const img_links = image_links

export default {
  data() {
    return { img_links }
  },
}
</script>

<style scoped>
nav {
}

#root-el {
}

.jumbo-section {
  background-color: #edfff3;
  padding: 20px;
  background-image: url('../assets/img/hero-map.png');
  background-position: left;
  background-position-x: 700px;
  background-repeat: no-repeat;
  /* background-attachment: fixed; */
}

.jumbo-text h2 {
  font-size: 70px;
  line-height: 1;
}
</style>
