<template>
  <div class="dm">
    <Nav />
    <div class="xl:px-44 sm:px-20 px-8 pt-28 pb-12 lg:pt-52 bg-orange relative">
      <div class="text-blue flex flex-col lg:flex-row justify-between">
        <div class="lg:w-6/12">
          <h1
            class="
              mt-5
              xl:mt-10
              text-3xl
              sm:text-4xl
              xl:text-6xl
              font-bold
              sm:w-8/12
              lg:w-11/12
              space
            "
          >
            Join the Premium Trading Mentorship Circle
          </h1>
          <h2
            class="
              mt-6
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
            Get one-on-one sessions with me and learn the insights I have gained
            over several years. Lorem ipsum lorem ipsum.
          </h2>
          <a href="https://t.me/ICTFlashcardDrills"
            ><button class="cta text-white mt-10">JOIN NOW</button></a
          >
        </div>
        <div class="mt-12 lg:mt-0 mx-auto w-7/12 sm:w-5/12">
          <img
            src="https://res.cloudinary.com/dq6iuhnpr/image/upload/v1629109716/tradehub/hero_crgpsy.svg"
            alt="hero"
          />
        </div>
      </div>
    </div>

    <Testimonials
      img1="https://res.cloudinary.com/dq6iuhnpr/image/upload/v1629215926/tradehub/testimonial20_nrhudu.png"
      img2="https://res.cloudinary.com/dq6iuhnpr/image/upload/v1629215926/tradehub/testimonial21_gqx8jn.png"
      img3="https://res.cloudinary.com/dq6iuhnpr/image/upload/v1629215928/tradehub/testimonial18_b41h5n.png"
      img4="https://res.cloudinary.com/dq6iuhnpr/image/upload/v1629215928/tradehub/testimonial19_hj2wys.png"
      img5="https://res.cloudinary.com/dq6iuhnpr/image/upload/v1629215925/tradehub/testimonial22_ssbzrm.png"
    />

    <div class="mt-8 w-full flex justify-center">
      <a href="https://t.me/ICTFlashcardDrills"
        ><button class="cta">join now</button></a
      >
    </div>

   <div
      class="
        flex flex-col
        lg:flex-row
        justify-between
        px-10
        sm:px-16
        lg:px-20
        xl:px-44
        py-20
      "
    >
      <div class="w-9/12 sm:w-6/12 mx-auto">
        <img
          src="https://res.cloudinary.com/dq6iuhnpr/image/upload/v1629125563/tradehub/Rectangle_94_u4zxaw.png"
          alt="mentorship"
        />
      </div>
      <div class="mt-10 lg:m-0 sm:w-8/12 lg:w-5/12 mx-auto">
        <p class="smalltitle">MENTORSHIP</p>
        <h1 class="mt-4 title">One-on-one Lifetime Remote Mentorship</h1>
        <p class="mt-8 content">
          Gain direct access to ask specific questions and to review your trading
          approach and strategy on an individual basis
        </p>
        <div class="mt-6">
          <div class="mt-10 flex items-start space-x-3 w-full">
            <img
              src="https://res.cloudinary.com/dq6iuhnpr/image/upload/v1629124904/tradehub/cirlce_pidfgf.svg"
              alt="ellipse"
              class="mt-2"
            />
            <div class="">
              <h1 class="space text-blue text-lg font-bold">Insights and Strategy</h1>
              <p class="content2">
                lorem psum
              </p>
            </div>
          </div>
          <div class="mt-10 flex items-start space-x-3 w-full">
            <img
              src="https://res.cloudinary.com/dq6iuhnpr/image/upload/v1629124904/tradehub/cirlce_pidfgf.svg"
              alt="ellipse"
              class="mt-2"
            />
            <div class="">
              <h1 class="space text-blue text-lg font-bold">
                Learn Methodology
              </h1>
              <p class="content2">
                lorem ipsum
              </p>
            </div>
          </div>

        </div>
        <a href="/mentorship"><button class="mt-12 cta">learn more</button> </a>
      </div>
    </div>

    <div class="pb-10">
      <div class="flex flex-col sm:flex-row justify-center items-center">
        <img
          src="https://res.cloudinary.com/dq6iuhnpr/image/upload/v1629127549/tradehub/Group_107_j8b6ik.svg"
          alt=""
          class="w-9/12 sm:w-4/12"
        />
        <img
          src="https://res.cloudinary.com/dq6iuhnpr/image/upload/v1629127548/tradehub/Group_108_o95xd5.svg"
          alt=""
          class="w-9/12 sm:w-4/12"
        />
      </div>
      <div class="pb-8 w-full flex justify-center">
        <button class="cta">let's talk</button>
      </div>
    </div>

    <AboutMe />

    <Testimonials
      img1="https://res.cloudinary.com/dq6iuhnpr/image/upload/v1629213788/tradehub/testimonial6_qisfid.png"
      img2="https://res.cloudinary.com/dq6iuhnpr/image/upload/v1629213833/tradehub/testimonial7_bksove.png"
      img3="https://res.cloudinary.com/dq6iuhnpr/image/upload/v1629213841/tradehub/testimonial9_wqskrj.png"
      img4="https://res.cloudinary.com/dq6iuhnpr/image/upload/v1629213836/tradehub/testimonial8_d6yde9.png"
      img5="https://res.cloudinary.com/dq6iuhnpr/image/upload/v1629213784/tradehub/testimonial4_a3bqk7.png"
    />
    <div class="py-8 w-full flex justify-center">
      <a href="https://t.me/ICTFlashcardDrills"
        ><button class="cta">join now</button></a
      >
    </div>

    <Footer />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Mentorship :: Joe Elite TradeHub',
    }
  },
}
</script>

<style lang="scss" scoped></style>
