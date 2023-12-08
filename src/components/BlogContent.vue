<template>
    <article class="blog-content">
        <div class="center-container">
            <div class="blog-content__kitchen">
                <h2 class="blog-content__title">Let’s Get Solution for Building
                    Construction Work</h2>
                <img class="blog-content__img-kitchen1" src="img/newsImage1.png" alt="kitchen">
                <div class="blog-content__info">
                    <div class="blog-content__data">26 December,2022</div>
                    <nav class="breadcrumbs">
                        <ul class="breadcrumbs__ul">
                            <li class="breadcrumbs__li"><a href="#" class="breadcrumbs__link">Interior</a></li>
                            <li class="breadcrumbs__li">/<a href="#" class="breadcrumbs__link">Home</a></li>
                            <li class="breadcrumbs__li">/<a href="#" class="breadcrumbs__link">Decore</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="blog-content__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                    turpmaximus.posuere
                    in.Contrary to
                    popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have
                    suffered alteration in some form, by injecthumour, or randomised words which don't look even
                    slightly
                    believable. <br><br>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the
                    Internet
                    tend to repeat predefined chunks as necessary.
                </div>
                <img class="blog-content__img-quotes" src="img/Quotes.png" alt="quotes">
                <h2 class="blog-content__title">Design sprints are great</h2>
                <p class="blog-content__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                    turpmaximus.posuere
                    in.Contrary
                    to popular
                    belief.There are many variations of passages of Lorem Ipsum available, but the majority have
                    suffered.
                </p>
                <ul class="blog-content__list">
                    <li class="blog-content__marker-color"><span class="blog-content__listElement">Contrary to popular belief.There are many variations of
                        passages of
                        Lorem Ipsum
                        available, but the
                        majority have suffered.</span></li>
                    <li class="blog-content__marker-color"><span class="blog-content__listElement">Contrary to popular belief.There are many variations of
                        passages of
                        Lorem Ipsum available, but the
                        majority have suffered.</span></li>
                    <li class="blog-content__marker-color"><span class="blog-content__listElement">Contrary to popular belief.There are many variations of
                        passages of
                        Lorem Ipsum available, but the
                        majority have suffered.</span></li>
                </ul>
                <img class="blog-content__img-kitchen2" src="img/newsImage2.png" alt="kitchen">
                <p class="blog-content__bottom-text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                    turpmaximus.posuere in.Contrary
                    to popular
                    belief.There are many variations of passages of Lorem Ipsum available, but the majority have
                    suffered.
                </p>
            </div>
                <BlogDetails/>
        </div>
    </article>
</template>

<script>
import BlogDetails from './BlogDetails.vue'
export default {
  name: 'BlogContent',
  components: {
    BlogDetails
  },
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
