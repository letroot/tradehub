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

They are fruits. Not the root.

Unless you solve your trading woes from the root, you keep failing.
<br />
            <br />
This book takes you out of this mess, and gets you in the direction of consistent and maximum profit in Trading.
          </h2>
        </div>
      </div>
    </div>

    <div class="xl:mt-20 mx-auto mt-2 sm:w-10/12 lg:w-9/12 xl:w-8/12">
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
        <div class="mt-8 text-center mx-auto w-full flex justify-center">
          <button @click="submit" class="cta">GET THE FREE BOOK NOW</button>
        </div>
        <p class="italic text-center text-sm">
          *A mail will be sent for you to confirm your subscription before you
          can be sent the ebook.
        </p>
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

    <!-- <TradingTestimonials
      img1="https://res.cloudinary.com/dq6iuhnpr/image/upload/v1629213842/tradehub/charts/testimonial16_drured.png"
      img2="https://res.cloudinary.com/dq6iuhnpr/image/upload/v1629213850/tradehub/charts/testimonial12_nib2l4.png"
      img3="https://res.cloudinary.com/dq6iuhnpr/image/upload/v1629213858/tradehub/charts/testimonial11_c2b2g7.png"
      img4="https://res.cloudinary.com/dq6iuhnpr/image/upload/v1629280152/tradehub/charts/new/image_9_cnk5yx.png"
      img5="https://res.cloudinary.com/dq6iuhnpr/image/upload/v1629280151/tradehub/charts/new/image_8_pmzwt0.png"
    /> -->
    <!-- <div class="py-8 w-full flex justify-center">
      <a href="mailto:dejoea7@gmail.com"
        ><button class="cta">hire joe</button></a
      >
    </div> -->

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
  methods: {
    submit() {
      axios
        .post('https://api.birdsend.co/v1/contacts', {
          headers: {
            Authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjMyZGNlMjVmOTFmMTgwYmRmMmQ5YjVlOTliN2JmNDNjMzg3MDQ5MWUzZTIxMGEwYzVmNWQ0YTNiZTYzMjQ4YWU2MmE1NDIwNjlkZGM4NTJjIn0.eyJhdWQiOiI1IiwianRpIjoiMzJkY2UyNWY5MWYxODBiZGYyZDliNWU5OWI3YmY0M2MzODcwNDkxZTNlMjEwYTBjNWY1ZDRhM2JlNjMyNDhhZTYyYTU0MjA2OWRkYzg1MmMiLCJpYXQiOjE2MzE2MzE5NTEsIm5iZiI6MTYzMTYzMTk1MSwiZXhwIjoxNjYzMTY3OTUxLCJzdWIiOiIyMzQxIiwic2NvcGVzIjpbIndyaXRlIl19.f18VUBnGVU_2UPKl8ZmFUsBLu6dSp0bPjwGmgOUpzntDu6l6XZ69iSX6a8gWzngDWxpTRrMEC6qCPCwEdlGcZabh5N5xhZrW7640ohyMpaK2YIHtRlhSHgS-wlXsoKWXXd84wWWHAKy3MD3nvBGq-WLIuuXZLAw9wb7A9IBfUarxuV2_ecP_BUCqffxiqfGVZIDZPN1HVWsOk0UWrm4MiZZgpa0T4LkfpywCSXz40L6B9Kd_vQXtNKsAIQCS9LrkZbR-J3TbeqE9c8I1ogNjR-bN_UfMyovBySwzGlf-AnIiVPsh99gM84dJZz3Qa2lfyuJxCOGy8tqvjszFPC779dfI80Al8IsSahDflz_q8-DMQ1U06vvxRsmNsRMdUvZqxoPA5oj2aYNVLWf7Cyxo_M6S872pOYxNf4HbTe7jgLU5YKoUtI7_e6BWj94KRfFtIi6wOJjZ5rt4X8AYBkE6zOcBTObcG5tN8cFDCMIpz9_KkpUL5I0uJEWJzy2qCJCx-CgHILUsxaRq2BfZTcGTvVB1VgidGrdBfIUblnUA31kyZSwrLuNkih6v1tpyT9xx2NsmbkHw8e2UYM1CYNeN08IU7PEOHwSr845Hg3AL0zEuaLLe8Kw5Jot-FXh47Ttml922sJDabeZpFVsxN7Uduas8VuKawrLt11-g-tCo2Xc',
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          email: this.email,
          tags: ['lead'],
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
