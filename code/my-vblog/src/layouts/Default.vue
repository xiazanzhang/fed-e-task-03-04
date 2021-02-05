<template>
  <div class="layout sticky-header">
    <header class="header sticky">
      <div class="container">
        <div class="left">
          <a href="/" aria-current="page" class="home-link active--exact active"
            ><img
              src="../assets/img/logo.svg"
              alt="Nichlas W. Andersen"
              class="logo"
          /></a>
        </div>
        <nav class="nav right">
          <a href="/" class="nav__link" style="margin-right:3rem;">Journal</a
          ><a href="/contact" class="nav__link">Say Hi!</a>
        </nav>
      </div>
    </header>
    <slot />
    <footer class="footer">
      <div class="container">
        <span>Copyright © 2021</span>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style></style>
