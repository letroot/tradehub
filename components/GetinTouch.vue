<template>
  <div
    class="
      py-20
      xl:py-36
      lg:py-28
      xl:px-32
      lg:px-14
      px-10
      bg-black
      text-white
      dm
    "
  >
    <div
      class="
        xl:text-5xl
        lg:text-4xl
        sm:text-3xl
        text-xl
        sm:w-8/12 w-10/12
        mx-auto
        text-white text-center
      "
    >
      <h2>I bring deep expertise, extensive knowledge and experience.</h2>
      <h1 class="mt-10">Let’s work together.</h1>
    </div>
    <div class="sm:px-14 px-7 sm:pt-20 pt-8 pb-6 mt-16 xl:w-10/12 mx-auto ibm">
      <div class="flex justify-between flex-col sm:flex-row">
        <input
          type="text"
          class="
            border-b border-white
            bg-black
            sm:w-5/12
            w-full
            py-2
            px-5
            text-white
            placeholder-white
            lg:text-xl
            focus:outline-none
          "
          placeholder="First name*"
        />
        <input
          type="text"
          class="
            border-b border-white
            bg-black
            sm:w-5/12
            w-full
            py-2
            px-5
            text-white
            placeholder-white
            lg:text-xl
            focus:outline-none
            mt-10
            sm:mt-0
          "
          placeholder="Last name*"
        />
      </div>

      <div class="flex justify-between flex-col sm:flex-row sm:mt-16 mt-10">
        <input
          type="email"
          class="
            border-b border-white
            bg-black
            sm:w-5/12
            w-full
            py-2
            px-5
            text-white
            placeholder-white
            lg:text-xl
            focus:outline-none
          "
          placeholder="Email address*"
        />
        <input
          type="number"
          class="
            border-b border-white
            bg-black
            sm:w-5/12
            w-full
            py-2
            px-5
            text-white
            placeholder-white
            lg:text-xl
            focus:outline-none
            mt-10
            sm:mt-0
          "
          placeholder="Phone*"
        />
      </div>

      <div class="flex justify-between flex-col sm:flex-row sm:mt-16 mt-10">
        <input
          type="email"
          class="
            border-b border-white
            bg-black
            sm:w-5/12
            w-full
            py-2
            px-5
            text-white
            placeholder-white
            lg:text-xl
            focus:outline-none
          "
          placeholder="What do you want to enquire about?"
        />
        <input
          type="text"
          class="
            border-b border-white
            bg-black
            sm:w-5/12
            w-full
            py-2
            px-5
            text-white
            placeholder-white
            lg:text-xl
            focus:outline-none
            mt-10
            sm:mt-0
          "
          placeholder="Name of organisation"
        />
      </div>

      <div class="flex justify-between sm:mt-16 mt-10">
        <textarea
          type="text"
          class="
            border-b border-white
            bg-black
            w-full
            py-1
            px-5
            text-white
            placeholder-white
            lg:text-xl
            focus:outline-none
          "
          placeholder="Message"
        />
      </div>

      <div class="xl:mt-10 mt-10 w-full flex justify-center">
        <a href="#"
          ><button
            class="
              mt-12
              bg-trade-blue2
              rounded-full
              px-12
              py-3
              font-bold
              flex
              uppercase
              text-sm
              lg:text-xl
              items-center
            "
          >
            send message
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'titleunder'],
}
</script>
