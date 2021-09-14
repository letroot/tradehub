<template>
  <div class="dm">
    <Nav />
    <div class="xl:px-44 sm:px-20 px-8 pt-28 pb-12 lg:pt-52 bg-green relative">
      <div
        class="text-blue flex flex-col lg:flex-row text-center justify-between"
      >
        <div class="lg:w-6/12 mt-12 mx-auto text-center">
          <h1
            class="
              mt-4
              xl:mt-6
              text-3xl
              sm:text-5xl
              xl:text-6xl
              font-bold
              sm:w-8/12
              lg:w-11/12
              space
              tracking-tight
            "
          >
            The Single Secret to Maximum Profit in Trading
          </h1>
          <h2
            class="
              text-center
              mx-auto
              mt-6
              font-medium
              text-base
              sm:text-xl
              lg:text-xl
              xl:text-2xl
              w-11/12
              sm:w-8/12
              lg:w-11/12
              text-dark
            "
          >
            Wondering why you keep losing money and how to solve it?
            <br />
            I want to reveal to you the SINGLE SECRET to Maximum Profit in
            Trading.
          </h2>
          <h2
            class="
              mt-6
              mx-auto
              font-medium
              text-base
              sm:text-xl
              lg:text-xl
              xl:text-2xl
              w-11/12
              sm:w-8/12
              lg:w-11/12
              text-dark
            "
          >
            Structured Trading gives you a specific PATTERN that covers your
            psychology, strategy, risk management and trade management.
            <br />
            With this pattern, you can't go wrong. Your losses are minimal and
            your gains will readily cover your losses.
            <br />
            <br />
            Now that you know what you are lacking, are you ready to take a leap
            for change? I will give you a sneak peek into a video where I
            explain all the basics of structured trading.
          </h2>
        </div>
      </div>
    </div>

    <div class="xl:mt-20 mt-2 sm:w-10/12 lg:w-9/12 xl:w-8/12">
      <form
        @submit.prevent
        class="mt-6 flex flex-col items-center space-y-6 avenir-regular px-5"
      >
        <input
          required
          type="email"
          v-model="email"
          class="
            border-2 border-gray-300
            rounded-xl
            lg:text-lg
            xl:text-xl
            py-2
            px-5
            xl:w-7/12
            lg:w-8/12
            sm:w-9/12
            w-full
            focus:outline-none
          "
          placeholder="Email address*"
        />
        <div class="mt-8 w-full flex justify-center">
          <button @click="submit" class="cta">
              GET THE SNEAK PEEK
            </button>
        </div>
      </form>
    </div>

    <!-- <div
      class="
        text-center
        py-14
        px-16
        bg-orange
        sm:w-9/12
        mx-auto
        sm:rounded-2xl
        sm:shadow-about
      "
    >
      <p class="smalltitle">GET STARTED</p>
      <h1 class="mt-4 text-blue text-lg sm:text-xl xl:text-2xl font-bold space">
        Trials can be done to confirm Joe's competency before proceeding to live
        trading. You can also conduct remote/live interview with Joe, to
        ascertain identity and confirm credibility.
      </h1>
    </div> -->

    <TradingTestimonials
      img1="https://res.cloudinary.com/dq6iuhnpr/image/upload/v1629213842/tradehub/charts/testimonial16_drured.png"
      img2="https://res.cloudinary.com/dq6iuhnpr/image/upload/v1629213850/tradehub/charts/testimonial12_nib2l4.png"
      img3="https://res.cloudinary.com/dq6iuhnpr/image/upload/v1629213858/tradehub/charts/testimonial11_c2b2g7.png"
      img4="https://res.cloudinary.com/dq6iuhnpr/image/upload/v1629280152/tradehub/charts/new/image_9_cnk5yx.png"
      img5="https://res.cloudinary.com/dq6iuhnpr/image/upload/v1629280151/tradehub/charts/new/image_8_pmzwt0.png"
    />
    <!-- <div class="py-8 w-full flex justify-center">
      <a href="mailto:dejoea7@gmail.com"
        ><button class="cta">hire joe</button></a
      >
    </div> -->

    <Footer />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => {
    return {
      email: '',
    }
  },
  methods: {
    submit() {
      axios
        .post('tradehub.herokuapp.com/offer', {})
        .then(() => {
          console.log('Email submitted')
          window.location.href = 'https://joe-elite.trade'
        })
        .catch((error) => {
          console.log('error: ', error)
        })
    },
  },
  head() {
    return {
      title: 'Make Consistent Profits Trading :: Joe Elite TradeHub',
    }
  },
}
</script>

<style lang="scss" scoped></style>
