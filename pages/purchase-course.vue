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
          sm:text-2xl
          lg:text-2xl
          xl:text-2xl
          w-11/12
          sm:w-8/12
          lg:w-7/12
          text-dark
        "
      >
        This course costs $20.
        <br>

        Transfer the equivalent Bitcoin to the address below and send proof of payment <a class="underline text-blue4" target="_blank" href="mailto:joe@joe-elite.trade">here</a>
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
        .post('https://helpmate-be.kerokuapp.com/jet-purchase', {
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
