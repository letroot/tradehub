<template>
  <agile>
    <div>
      <img
        src="https://res.cloudinary.com/dq6iuhnpr/image/upload/q_auto:eco/v1642037482/tradehub/assets/testimonials-1/image_5_adsyic.png"
        alt="testimonial1"
        class="w-full sm:w-6/12 object-contain"
      />
    </div>

    <div>
      <img
        src="https://res.cloudinary.com/dq6iuhnpr/image/upload/q_auto:eco/v1642037486/tradehub/assets/testimonials-1/image_8_xtbwnp.png"
        alt="testimonial1"
        class="w-full sm:w-6/12 object-contain"
      />
    </div>
  </agile>
</template>

<script>
export default {
  name: 'Carousel',
}
</script>

<style>
.agile {
  margin-top: 20px;
}

.agile__actions {
  margin-top: 20px;
}

.agile__nav-button {
  background: transparent;
  border: none;
  color: #ccc;
  cursor: pointer;
  font-size: 24px;
  transition-duration: 0.3s;
   
}
.agile__nav-button:hover {
  color: #888[];
}

.agile__dot {
  margin: 0 10px;
  /* button */
  background-color: #eee;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 10px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  transition-duration: 0.3s;
  width: 10px;
}
.agile__dot--current {
}
.agile__dot:hover {
  /* button */
  background-color: #888;
}

.slide {
  align-items: center;
  color: #fff;
  display: flex;
  font-size: 32px;
  font-weight: 300;
  height: 200px;
  justify-content: center;
}

</style>
