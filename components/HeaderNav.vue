<template>
  <header>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">
          <img
            src="/text-logo.png"
            alt="金橋省輸出展示会2022"
          />
        </nuxt-link>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <!-- <a class="navbar-item"> Home </a> -->

          <nuxt-link class="navbar-item" to="/">展示会について</nuxt-link>

          <div class="navbar-item has-dropdown is-hoverable">
            <nuxt-link class="navbar-link" to="/"> 出展企業一覧 </nuxt-link>

            <div class="navbar-dropdown">
              <nuxt-link class="navbar-item" to="/"> 工業 </nuxt-link>
              <nuxt-link class="navbar-item" to="/"> 紡績 </nuxt-link>
              <nuxt-link class="navbar-item" to="/"> アパレル </nuxt-link>
              <!-- <hr class="navbar-divider" />
              <a class="navbar-item"> Report an issue </a> -->
            </div>
          </div>

          <nuxt-link class="navbar-item" to="/">来場予約</nuxt-link>
        </div>

        <!-- <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light"> Log in </a>
            </div>
          </div>
        </div> -->
      </div>
    </nav>
  </header>
</template>