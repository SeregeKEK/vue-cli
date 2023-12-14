<template>
    <header class="header">
        <router-link class="header__logo" to="/">
            <img class="header__logo" src="img/LogoInterno.svg" alt="logo">
        </router-link>
        <nav class="main-nav">
            <router-link class="main-nav__link" to="/">Home</router-link>
            <router-link class="main-nav__link" to="/pageproject">Project</router-link>
            <router-link class="main-nav__link" to="/pageblog">Blog</router-link>
        </nav>
    </header>
</template>

<script>
import router from '@/router'
export default {
  name: 'PageHeader',
  router
}
</script>
