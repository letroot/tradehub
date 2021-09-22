<template>
  <div class="dm">
    <DeadNav />
    <div class="xl:px-44 sm:px-20 px-8 pt-28 pb-12 lg:pt-52 bg-green relative">
      <div
        class="text-blue flex flex-col lg:flex-row text-center justify-between"
      >
        <div class="mt-8 mx-auto text-center">
          <h1
            class="
              mt-4
              xl:mt-6
              text-2xl
              sm:text-3xl
              xl:text-5xl
              font-bold
              sm:w-8/12
              lg:w-7/12
              mx-auto
              space
              tracking-tight
            "
          >
            Your download should start now...Thank you for choosing to get this
            ebook.
            <br />
            <br />
            Time for Consistent and Maximum Profit in Trading.
            <br />
            <br />
            A special gift is waiting for you in your email.
          </h1>
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
            This gift is only going to be available for 1 week and for just 100
            people.
            <br />
            <br />

            Ensure to check it out.
            <br />
            <br />

            Cheers to Profitable Trading.
            <br />
            <br />
          </h2>
        </div>
      </div>
    </div>
    <iframe id="download_iframe" style="display:none;"></iframe>
    <Footer />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  mounted() {
    document.getElementById('download_iframe').src = "https://drive.google.com/uc?export=download&id=1O7CHQ6TpE583yumriOwWpSOEBGGPpa5L";
  },
}
</script>

<style lang="scss" scoped></style>
