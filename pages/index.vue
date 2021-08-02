<template>
  <div class="dm">
    <Nav />
    <div class="h-screen relative">
      <img
        src="https://res.cloudinary.com/dq6iuhnpr/image/upload/v1627924778/tradehub/Rectangle_4_jpgfpq.png"
        alt="hero-img"
        class="h-screen w-full object-cover"
      />
      <div class="absolute bottom-44 left-40 text-white">
        <div class="flex items-end space-x-6">
          <img
            src="https://res.cloudinary.com/dq6iuhnpr/image/upload/v1627924274/tradehub/line_jpn4qj.png"
            alt="line"
            class="mb-2"
          />
          <h3 class="text-2xl w-4/12">
            I help companies make ambitious trades and secure returns
          </h3>
        </div>
        <h1 class="mt-10 text-7xl font-bold w-6/12">
          I’m Joe, <br />
          A financial trader with a difference.
        </h1>
      </div>
      <div
        class="
          absolute
          bottom-0
          left-40
          -mb-40
          border-2 border-black
          bg-green-500
          w-3/12
          p-8
          text-white
        "
      >
        <h4 class="text-2xl font-medium">Want to get started?</h4>
        <p class="mt-5 text-lg w-10/12">
          An independent financial trader that helps prop firms get high returns
        </p>
        <button
          class="
            mt-8
            bg-yellow-400
            rounded-full
            px-12
            py-2
            font-bold
            uppercase
            text-lg
          "
        >
          Let’s talk
        </button>
      </div>
    </div>

    <div class="flex justify-between pl-40 pr-20 pt-60 bg-black text-white">
      <div class="w-4/12">
        <p class="uppercase">HIGH VALUE TRADING</p>
        <h1 class="mt-4 text-6xl font-bold">
          High-yield financial trading for Proprietary Firms
        </h1>
        <p class="mt-8 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <a href="#" class="mt-5 flex uppercase text-lg"
          >about me
          <img
            src="https://res.cloudinary.com/dq6iuhnpr/image/upload/v1627928979/tradehub/arrow_mhkjx7.svg"
            alt="arrow"
            class="ml-4"
        /></a>
      </div>
      <div class="w-6/12">
        <img
          src="https://res.cloudinary.com/dq6iuhnpr/image/upload/v1627929205/tradehub/skyscrapers_rsbzag.png"
          alt="skyscrapers"
        />
      </div>
    </div>

    <div class="text-center">
      <h1 class="mt-4 text-5xl font-bold">Trading in 3 Categories</h1>
      <p class="mt-4 text-xl w-5/12 mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore.
      </p>
      <div class="mt-8 flex justify-between w-6/12 mx-auto">
        <div class="p-20 border-4 border-yellow-400">$1 - $9m</div>
        <div class="p-20 border-4 border-yellow-400">$1 - $9m</div>
        <div class="p-20 border-4 border-yellow-400">$1 - $9m</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

.dm {
  font-family: 'DM Sans', sans-serif;
}
</style>
