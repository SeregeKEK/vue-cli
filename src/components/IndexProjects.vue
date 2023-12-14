<template>
     <section class="projects">
        <div class="center-container">
            <div class="projects__description">
                <h2 class="projects__title">Follow Our Projects
                </h2>
                <p class="projects__subtitle">It is a long established fact that a reader will be distracted by the
                    of
                    readable content of page lookings at its layouts points.
                </p>
            </div>
        </div>
        <div class="projects__cards">
            <div class="project-card">
                <img class="project-card__img" src="img/kuhnya1.png" alt="project-card">
                <div class="project-card__descrition">
                    <div class="project-card__text">
                        <h3 class="project-card__title">Modern Kitchan</h3>
                        <p class="project-card__subtitle">Decor / Artchitecture</p>
                    </div>
                    <router-link class="project-card__link" to="/blogslider">
                        <img class="project-card__icon" src="img/Vector_galochka.svg" alt="link">
                    </router-link>
                </div>
            </div>
            <div class="project-card">
                <img class="project-card__img" src="img/kuhnya2.png" alt="project-card">
                <div class="project-card__descrition">
                    <div class="project-card__text">
                        <h3 class="project-card__title">Modern Kitchan</h3>
                        <p class="project-card__subtitle">Decor / Artchitecture</p>
                    </div>
                    <router-link class="project-card__link" to="/blogslider">
                        <img class="project-card__icon" src="img/Vector_galochka.svg" alt="link">
                    </router-link>
                </div>
            </div>
            <div class="project-card">
                <img class="project-card__img" src="img/kuhnya3.png" alt="project-card">
                <div class="project-card__descrition">
                    <div class="project-card__text">
                        <h3 class="project-card__title">Modern Kitchan</h3>
                        <p class="project-card__subtitle">Decor / Artchitecture</p>
                    </div>
                    <router-link class="project-card__link" to="/blogslider">
                        <img class="project-card__icon" src="img/Vector_galochka.svg" alt="link">
                    </router-link>
                </div>
            </div>
            <div class="project-card">
                <img class="project-card__img" src="img/kuhnya4.png" alt="project-card">
                <div class="project-card__descrition">
                    <div class="project-card__text">
                        <h3 class="project-card__title">Modern Kitchan</h3>
                        <p class="project-card__subtitle">Decor / Artchitecture</p>
                    </div>
                    <router-link class="project-card__link" to="/blogslider">
                        <img class="project-card__icon" src="img/Vector_galochka.svg" alt="link">
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'IndexProjects',

  data () {
    return {

    }
  },

  mounted () {

  },

  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>
