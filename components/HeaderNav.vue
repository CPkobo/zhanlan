<template>
  <header>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <NuxtLink class="navbar-item" to="/">
          <img
            src="/text-logo.png"
            alt="金橋省輸出展示会2022"
          />
        </NuxtLink>

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

          <NuxtLink class="navbar-item" to="/">展示会について</NuxtLink>

          <div class="navbar-item has-dropdown is-hoverable">
            <NuxtLink class="navbar-link" to="/"> 出展企業一覧 </NuxtLink>

            <div class="navbar-dropdown">
              <NuxtLink class="navbar-item" to="/category/industrial"> 工業 </NuxtLink>
              <NuxtLink class="navbar-item" to="/category/construct"> 建材 </NuxtLink>
              <NuxtLink class="navbar-item" to="/category/apparel"> アパレル </NuxtLink>
              <NuxtLink class="navbar-item" to="/category/gift">ギフト・日用品</NuxtLink>
              <!-- <hr class="navbar-divider" />
              <a class="navbar-item"> Report an issue </a> -->
            </div>
          </div>

          <NuxtLink class="navbar-item" to="/">来場予約</NuxtLink>
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