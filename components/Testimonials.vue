<template>
  <div class="pt-20">
    <p class="smalltitle text-center">TESTIMONIALS</p>
    <h1 class="mt-8 title text-center">Testimonials from J.E.T. Members</h1>
    <div class="py-6 lg:py-10 bg-purple mt-14 flex overflow-x-auto">
      <div class="pl-14 lg:pl-32"></div>
      <img
        :src="img1"
        alt="testimonial1"
        class="w-9/12 sm:w-6/12 lg:w-5/12 pr-16 lg:pr-24 object-contain"
      />
      <img
        :src="img2"
        alt="testimonial2"
        class="w-9/12 sm:w-6/12 lg:w-5/12 pr-16 lg:pr-24 object-contain"
      />
      <img
        :src="img3"
        alt="testimonial3"
        class="w-9/12 sm:w-6/12 lg:w-5/12 pr-16 lg:pr-24 object-contain"
      />
      <img
        :src="img4"
        alt="testimonial4"
        class="w-9/12 sm:w-6/12 lg:w-5/12 pr-16 lg:pr-24 object-contain"
      />
      <img
        :src="img5"
        alt="testimonial5"
        class="w-9/12 sm:w-6/12 lg:w-5/12 pr-16 lg:pr-24 object-contain"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img1: String,
    img2: String,
    img3: String,
    img4: String,
    img5: String,
  },
}
</script>

<style scoped></style>
