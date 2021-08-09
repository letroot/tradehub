<template>
  <div
    class="
      absolute
      w-full
      flex
      px-9
      sm:px-20
      py-3
      justify-between
      dm
      items-center
      z-30
      bg-opacity-50 bg-white
      backdrop
    "
  >
    <div class="w-full flex items-center justify-between">
      <div>
        <img
          src="https://res.cloudinary.com/dq6iuhnpr/image/upload/v1628259171/tradehub/logo_xme14g.svg"
          alt="logo"
          class="h-8 lg:h-12 xl:h-16"
        />
      </div>
      <button
        class="lg:hidden focus:outline-none flex justify-center"
        @click="toggle"
      >
        <img
          src="https://res.cloudinary.com/dq6iuhnpr/image/upload/v1628504157/tradehub/menu_tdq39n.svg"
          alt="menu"
          class="h-8"
        />
      </button>
    </div>
    <div
      class="
        flex flex-col
        px-9
        sm:px-20
        py-9
        lg:p-0 lg:flex-row lg:w-7/12
        w-full
        justify-between
        text-white text-lg
        lg:text-sm
        xl:text-base
        absolute
        inset-x-0
        bg-white bg-opacity-50
        backdrop-mobile
        lg:bg-transparent
        top-14
        space-y-3
        lg:space-y-0 lg:static
      "
      :class="{
        hidden: !isopen,
        flex: isopen,
        'lg:flex': !isopen,
      }"
    >
      <p><a href="#">About</a></p>
      <p><a href="#">Services</a></p>
      <p><a href="#">Testimonials</a></p>
      <p><a href="#">Contact</a></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isopen: false,
    }
  },
  methods: {
    toggle() {
      this.isopen = !this.isopen
    },
  },
}
</script>

<style scoped>
.backdrop {
  backdrop-filter: blur(39px);
}

.backdrop-mobile {
  backdrop-filter: blur(0);
}

@media screen and (max-width: 768px) {
  .backdrop-mobile {
    backdrop-filter: blur(39px);
  }
}
</style>
