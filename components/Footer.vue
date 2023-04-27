<template>
  <div id="footer-bar">
    <div id="logos-wrapper">
      <Stemma class="mx-2" />
      <LogoIG class="me-2" />
      <Logo class="me-2" />
    </div>
    <div id="cta-wrapper">
      <NuxtLink class="btn btn-light me-2" to="info">INFO</NuxtLink>
      <NuxtLink class="btn btn-light me-2" to="/">TORNA ALLA MAPPA</NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#footer-bar {
  position: fixed;
  left: 0px;
  bottom: 10px;
  height: 50px;
  z-index: 99999;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  #logos-wrapper {
    svg {
      height: 50px;
      width: 50px;
      display: inline;
    }
  }

  #cta-wrapper {
    a {
      &.router-link-active {
        display: none;
      }
    }
  }
}
</style>