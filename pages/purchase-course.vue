<template>
  <div class="dm">
    <Nav />
    <div class="xl:px-44 sm:px-20 px-8 pt-28 pb-12 lg:pt-52 bg-green relative">
      <div
        class="text-blue flex flex-col lg:flex-row text-center justify-between"
      >
        <div class="mt-2 mx-auto text-center">
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
            Ready to Purchase the Course?
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
            I want to reveal to you the SINGLE SECRET to Maximum Profit in
            Trading.
          </h2>
        </div>
      </div>
    </div>

    <div class="xl:mt-20 mx-auto mt-2 sm:w-10/12 lg:w-9/12 xl:w-8/12">
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
        The course costs $20. Transfer the equivalent Bitcoin to the address below and send proof of payment <a class="underline text-blue4" target="_blank" href="mailto:joe@joe-elite.trade">here</a>
      </h2>
      <h2
        id="btc-address"
        class="
          text-center
          font-mono
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
          text-blue4
        "
      >
        15JqQ3jSXXTjBDbaKQNE6wyrxVPrYSAJ1K
      </h2>
      <div class="mt-8 text-center mx-auto w-full flex justify-center">
        <button @click="copy('btc-address'), changetext" id="copy" class="cta">
          COPY BTC WALLET ADDRESS
        </button>
      </div>
      <form
        @submit.prevent
        class="mt-14 flex flex-col items-center space-y-6 avenir-regular px-5"
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
          <button @click="submit" class="cta">GET THE COURSE</button>
        </div>
        <p class="italic text-center text-sm">
          *A mail will be sent for you to confirm your subscription before you
          can be sent the ebook.
        </p>
      </form>
    </div>
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
          tags: ['purchase'],
        })
        .then(() => {
          console.log('Email submitted')
          window.location.href = 'https://joe-elite.trade/thankyou'
        })
        .catch((error) => {
          console.log('error: ', error)
        })
    },
    copy(id) {
      var text = document.getElementById(id).innerText
      var elem = document.createElement('textarea')
      document.body.appendChild(elem)
      elem.value = text
      elem.select()
      document.execCommand('copy')
      document.body.removeChild(elem)
    },

    changetext() {
      setTimeout(function () {
        document.getElementById('copy').innerText = 'Copied'
      }, 3000)
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
