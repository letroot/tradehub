<template>
  <div class="gothic" id="root-el">
    <Nav />

    <div class="h-90v sm:flex-col  jumbo-section sm:h-90v">
      <div class="mt-4">
        <img class="sm:hidden w-full object-none" src="../assets/img/hero-map.png" alt="" />
      </div>
      <div class="sm:jumbo-text mt-36 sm:w-1/2">
        <h2 class="text-4xl sm:w-full sm:mt-24 sm:ml-16 sm:text-6xl">
          Testimonials from the World’s Fastest Growing Trading Community
        </h2>
        <p class="mt-3 sm:ml-16 sm:mt-4 sm:w-3/4">
          Hi, I’m Joe. I run a Telegram channel with 7,000 users where I share
          the most important market insights daily.
        </p>
        <button class="
            px-8
            py-2
            sm:ml-16
            bg-brightgreen
            text-black
            sm:px-12 sm:py-4
            mt-9
          ">
          <a href="#gallery">See More</a>
        </button>
      </div>
    </div>

    <main class="mt-16 px-8 sm:px-24 bg-neutral-50" id="gallery">
      <div class="flex-col sm:block images-wrapper">
        <img v-for="(img, img_index) in img_links" :key="img_index" :src="img"
          class="image block border-1 border-gray-100 mt-3 sm:inline-block w-full sm:w-1/4 sm:p-4 sm:border-1 sm:border-gray-300"
          alt=""
          @click="index=img_index" />
      </div>

      <CoolLightBox :items="img_links" :index="index" @close="index=null"></CoolLightBox>

      <!-- <div class="images-wrapper">
        <div class="image" v-for="(img, imageIndex) in img_links" :key="imageIndex" @click="index=imageIndex"
          :style="{ backgroundImage: `url(${img})` }"></div>
      </div> -->

    </main>
  </div>
</template>


<script>
import image_links from '~/static/data.json'
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";

const img_links = image_links
let links = []

export default {
  components: {
    CoolLightBox,
  },
  mounted() {
    img_links.resources.forEach((element) => {
      links.push(element.secure_url)
    })
  },
  data() {
    // console.log(links)
    return { img_links: links, index: null }
  }
}
</script>

<style scoped>
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
.image {
}
</style>
