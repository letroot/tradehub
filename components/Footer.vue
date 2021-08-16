<template>
  <div
    class="
      flex flex-col
      sm:flex-row
      items-center
      sm:items-start
      py-14
      px-8
      sm:px-20
      lg:w-8/12
      justify-between
    "
  >
    <img
      src="https://res.cloudinary.com/dq6iuhnpr/image/upload/v1629109216/tradehub/logo_bzzn1g.svg"
      alt="logo"
      class="h-12 lg:h-auto"
    />
    <div
      class="
        mt-9
        sm:m-0
        flex 
        w-full
        sm:w-7/12
        justify-between
        space
        text-blue
      "
    >
      <div>
        <h1 class="font-bold text-lg">Links</h1>
        <div class="mt-4 space-y-2 flex flex-col">
          <a href="#">About</a>
          <a href="/community">Community</a>
          <a href="/mentorship">Mentorship</a>
          <a href="#">Money Management</a>
        </div>
      </div>
      <div>
        <h1 class="font-bold text-lg">Contact</h1>
        <div class="mt-4 space-y-2 flex flex-col">
          <a href="#">Email</a>
          <a href="#">Telegram</a>
          <a href="#">Quick Contact</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
