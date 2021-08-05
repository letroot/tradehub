<template>
  <div
    class="
      absolute
      w-full
      flex
      px-20
      py-3
      justify-between
      dm
      items-center
      z-30
      bg-opacity-50 bg-white
      backdrop
    "
  >
    <div>
      <img
        src="https://res.cloudinary.com/dq6iuhnpr/image/upload/v1628175918/tradehub/logo_ejt0p3.svg"
        alt="logo"
        class="h-16"
      />
    </div>
    <div class="flex w-7/12 justify-between text-white">
      <p><a href="#">About</a></p>
      <p><a href="#">Services</a></p>
      <p><a href="#">Testimonials</a></p>
      <p><a href="#">Contact</a></p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.backdrop {
  backdrop-filter: blur(39px);
}
</style>
