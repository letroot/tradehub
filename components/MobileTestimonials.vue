<template>
  <div class="mt-4">
    <p class="smalltitle text-center">MY CHARTS</p>
    <h1 class=" title text-center leading-snug">Testimonials from J.E.T. Members</h1>
    <div class="py-6 lg:py-10 bg-purple mt-6 flex overflow-x-auto">
      <div class="pl-14 lg:pl-32"></div>
      <img
        :src="img1"
        alt="testimonial1"
        class="w-full sm:w-6/12 lg:w-5/12 pr-16 lg:pr-24 object-contain"
      />
      <img
        :src="img2"
        alt="testimonial2"
        class="w-full sm:w-6/12 lg:w-5/12 pr-16 lg:pr-24 object-contain"
      />
      <img
        :src="img3"
        alt="testimonial3"
        class="w-full sm:w-6/12 lg:w-5/12 pr-16 lg:pr-24 object-contain"
      />
      <img
        :src="img4"
        alt="testimonial4"
        class="w-full sm:w-6/12 lg:w-5/12 pr-16 lg:pr-24 object-contain"
      />
      <img
        :src="img5"
        alt="testimonial5"
        class="w-full sm:w-6/12 lg:w-5/12 pr-16 lg:pr-24 object-contain"
      />
      <img
        :src="img6"
        alt="testimonial6"
        class="w-full sm:w-6/12 lg:w-5/12 pr-16 lg:pr-24 object-contain"
      />
      <img
        :src="img7"
        alt="testimonial7"
        class="w-full sm:w-6/12 lg:w-5/12 pr-16 lg:pr-24 object-contain"
      />
      <img
        :src="img8"
        alt="testimonial8"
        class="w-full sm:w-6/12 lg:w-5/12 pr-16 lg:pr-24 object-contain"
      />
      <img
        :src="img9"
        alt="testimonial9"
        class="w-full sm:w-6/12 lg:w-5/12 pr-16 lg:pr-24 object-contain"
      />
      <img
        :src="img10"
        alt="testimonial10"
        class="w-full sm:w-6/12 lg:w-5/12 pr-16 lg:pr-24 object-contain"
      />
      <img
        :src="img11"
        alt="testimonial11"
        class="w-full sm:w-6/12 lg:w-5/12 pr-16 lg:pr-24 object-contain"
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
    img6: String,
    img7: String,
    img8: String,
    img9: String,
    img10: String,
    img11: String,
  },
}
</script>

<style scoped></style>
