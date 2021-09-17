<template>
  <div class="dm">
    <DeadNav />
    <div class="xl:px-44 sm:px-20 px-8 pt-28 pb-12 lg:pt-52 bg-green relative">
      <div
        class="text-blue flex flex-col lg:flex-row text-center justify-between"
      >
        <div class="mx-auto text-center">
          <h1
            class="
              mt-4
              xl:mt-6
              text-3xl
              sm:text-5xl
              xl:text-6xl
              font-bold
              sm:w-8/12
              lg:w-7/12
              mx-auto
              space
              tracking-tight
            "
          >
            The Single Secret to Consistent and Maximum Profit in Trading
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
              lg:w-7/12
              text-dark
            "
          >
            Wondering why you keep losing money and how to solve it?
            <br />
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
              lg:w-7/12
              text-dark
            "
          >
            Many people think the problem is:
            <br />
            <br />
            Risk management
            <br />

            Poor psychology
            <br />

            Terrible trade management
            <br />
            <br />

            And so on.

            <br />
            <br />
            But these are all symptoms. Not the real sickness.
            <br />

            They are fruits. Not the root. Unless you solve your trading woes
            from the root, you keep failing.
            <br />
            <br />
            This book takes you out of this mess, and gets you in the direction
            of consistent and maximum profit in Trading.
          </h2>
        </div>
      </div>
    </div>

    <!-- @submit.prevent -->
    <div class="xl:mt-20 mx-auto mt-2 sm:w-10/12 lg:w-9/12 xl:w-8/12">
      <form
        action="https://app.birdsend.co/subscribe"
        method="post"
        bs-form
        class="mt-6 flex flex-col items-center space-y-6 avenir-regular px-5"
      >
        <input type="hidden" name="meta_id" value="10495" />
      <input type="hidden" name="meta_user_id" value="2341" />
        <input
          type="email"
          v-model="email"
          name="email"
          required
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
        <div class="mt-8 text-center mx-auto w-full flex justify-center">
          <!-- <button @click="submit" class="cta">GET THE FREE BOOK NOW</button> -->
          <button type="submit" class="cta">GET THE FREE BOOK NOW</button>
        </div>
      <div class="">
        <a
          href="https://birdsend.co/?utm_source=form&amp;utm_medium="
          class="bs-branding-url"
          target="_blank"
        ></a>
      </div>
      <div id="bs-message"></div>
        <p class="italic text-center text-sm">
          *A mail will be sent for you to confirm your subscription before you
          can be sent the ebook.
        </p>
      </form>
    </div>

    <!-- BirdSend Form Starts -->
    <!-- <form action="https://app.birdsend.co/subscribe" method="post" bs-form>
      <input type="email" name="email" placeholder="Email Address" required />
      <button type="submit">Get Instant Access</button>
    </form> -->
    <!-- BirdSend Form Ends -->

    <Footer />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data: () => {
    return {
      email: '',
    }
  },
  mounted() {
    ;(function (w, d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) {
        return
      }
      js = d.createElement(s)
      js.id = id
      js.src = 'https://cdn.birdsend.co/assets/static/js/form.js'
      fjs.parentNode.insertBefore(js, fjs)
    })(window, document, 'script', 'birdsend-form-js')
  },
  methods: {
    submit() {
      axios
        .post('https://www.google.com/', {
          email: this.email,
        })
        .then(() => {
          console.log('Email submitted')
          window.location.href = 'https://joe-elite.trade/thankyou'
        })
        .catch((error) => {
          console.log('error: ', error)
        })
    },
  },
  head() {
    return {
      title:
        'Learn How to Make Consistent Profits Trading :: Joe Elite TradeHub',
    }
  },
}
</script>

<style lang="scss" scoped></style>
