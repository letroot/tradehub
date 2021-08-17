<template>
  <div
    class="
      absolute
      w-full
      lg:w-11/12
      xl:w-10/12
      flex
      px-9
      sm:px-28
      py-4
      justify-between
      dm
      items-center
      z-30
    "
  >
    <div class="w-full lg:w-auto flex items-center justify-between">
      <div>
        <img
          src="https://res.cloudinary.com/dq6iuhnpr/image/upload/v1629109216/tradehub/logo_bzzn1g.svg"
          alt="logo"
          class="h-8 lg:h-10 xl:h-12"
        />
      </div>
      <button
        class="lg:hidden focus:outline-none flex justify-center"
        @click="toggle"
      >
        <img
          src="https://res.cloudinary.com/dq6iuhnpr/image/upload/v1629110281/tradehub/menu_kssonn.svg"
          alt="menu"
          class="h-6"
        />
      </button>
    </div>
    <div
      class="
        space
        flex flex-col
        px-9
        sm:px-20
        py-9
        lg:p-0 lg:flex-row lg:w-9/12
        xl:w-7/12
        w-full
        justify-between
        text-blue text-lg
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
      <p><a href="/">Home</a></p>
      <p><a href="/community">Community</a></p>
      <p><a href="/mentorship">Mentorship</a></p>
      <p><a href="/trading">Money Management</a></p>
      <p><a href="#">About</a></p>
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
