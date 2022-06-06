<template>
  <div class="gothic" id="root-el">
    <nav class="bg-white h-16 flex">
      logo
    </nav>
    <div class="flex column jumbo-section">

      <div class="jumbo-text w-1/2">
        <h2 class="w-full mt-24 ml-16">Testimonials from the World’s Fastest Growing Trading Community</h2>
        <p class="ml-16 mt-4 w-3/4">
          Hi, I’m Joe. I run a Telegram channel with 7,000 users where I share the
          most important market insights daily.
        </p>
        <button class="ml-16 bg-brightgreen text-black px-12 py-4 mt-9">
          <a href="#gallery">Learn More</a>
        </button>
      </div>

    </div>

    <main class="pt-16 px-24 bg-neutral-50" id="gallery">
      <div v-for="img in img_links.resources" class="w-1/4 p-4 inline-block border-1 border-gray-300" :key="img.asset_id">
        <!-- {{ img.url }} -->
        <img :src="img.secure_url" alt="" />
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
    return {img_links}
  }
}
</script>

<style scoped>
nav {

}

#root-el {
}

.jumbo-section {
  background-color:#EDFFF3;
  height: 90vh;
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
