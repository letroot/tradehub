<template>
  <div
    class="fixed w-full bg-transparent z-30"
    :class="{ 'bg-white': scrollPosition > 150 }"
  >
    <div
      class="
        lg:w-11/12
        xl:w-10/12
        flex
        px-9
        sm:px-28
        py-4
        justify-between
        items-center
      "
    >
      <div class="w-full lg:w-auto flex items-center justify-between">
        <div>
          <a href="/">
            <img
              src="https://res.cloudinary.com/dq6iuhnpr/image/upload/v1629109216/tradehub/logo_bzzn1g.svg"
              alt="logo"
              class="h-8 lg:h-10 xl:h-12"
            />
          </a>
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
        <p class="nav-hover"><a href="/">Home</a></p>
        <p class="nav-hover"><a href="/community">Community</a></p>
        <p class="nav-hover"><a href="/mentorship">Mentorship</a></p>
        <p class="nav-hover"><a href="/trading">Money Management</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isopen: false,
      scrollPosition: null,
    }
  },
  methods: {
    toggle() {
      this.isopen = !this.isopen
    },
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
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
