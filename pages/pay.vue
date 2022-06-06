<template>
  <div class="dm">
    <Nav />
    <div class="xl:px-24 sm:px-20 px-8 pt-12 pb-12 lg:pt-36 bg-green relative">
      <div
        class="text-blue flex flex-col lg:flex-row text-center justify-between"
      >
        <div class="mx-auto text-center">
          <h1
            class="
              mt-4
              xl:mt-4
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
            30-Day Mentorship with Joe
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
            Complete your payment below to gain access to my premium mentorship
            circle.
          </h2>
          <p class="text-sm italic">*this payment page supports USD and international payments. For Nigerian Naira payments, click <a class="underline blue" href="https://joe-elite.trade/pay-ng">here</a></p>
        </div>
      </div>
    </div>

    <!-- @submit.prevent -->
    <div class="xl:mt-16 mx-auto mt-2 sm:w-10/12 lg:w-9/12 xl:w-8/12">
      <form
        @submit.prevent
        method="post"
        class="mt-4 flex flex-col items-center space-y-6 avenir-regular px-5"
      >
        <input
          type="text"
          v-model="name"
          name="name"
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
          placeholder="Name*"
        />
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
        <div class="mt-2 text-center mx-auto w-full flex justify-center">
          <button class="cta uppercase">
            <a href="https://selar.co/pqhs">pay now</a>
          </button>
        </div>
      </form>
    </div>

    <Footer />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      email: '',
      name: '',
      loadingMore: false,
      currentPage: 1,
    }
  },

  methods: {
    payViaService() {
      console.log('Entered payViaService function')
      try {
        this.payWithFlutterwave({
          tx_ref: this.generateReference(),
          amount: 100,
          currency: 'USD',
          // payment_options: 'card',
          redirect_url: '',
          customer: {
            name: this.name,
            email: this.email,
          },
          customizations: {
            title: 'Joe Elite',
            description: 'Joe Elite 30-day Mentorship',
            logo: 'https://flutterwave.com/images/logo-colored.svg',
          },
          callback: this.makePaymentCallback,
          onclose: this.closedPaymentModal,
        })
      } catch (e) {
        console.log(e.message)
      }
    },
    makePaymentCallback(response) {
      console.log('Pay', response)
    },
    generateReference() {
      let date = new Date()
      return date.getTime().toString()
    },
    submit() {
      axios
        .post('https://www.google.com/', {
          email: this.email,
        })
        .then(() => {})
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

<style lang="scss" scoped>
</style>
