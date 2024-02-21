<template>
    <div class="blog-content">
        <div class="center-container">
            <div class="blog-content__left">
                <div class="blog-content__kitchen" v-for="article in filterList" :key="article.id">
                    <h2 class="blog-content__title">{{article.header}}</h2>
                    <img class="blog-content__img-kitchen1" :src="article.imgSrc" alt="kitchen">
                    <div class="blog-content__info">
                        <p class="blog-content__data">{{article.dateText}}</p>
                        <p class="breadcrumbs">{{ article.breadcrumbs }}</p>
                    </div>
                    <div class="blog-content__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                        turpmaximus.posuere
                        in.Contrary to
                        popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have
                        suffered alteration in some form, by injecthumour, or randomised words which don't look even
                        slightly
                        believable. <br>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the
                        Internet
                        tend to repeat predefined chunks as necessary.
                    </div>
                    <img class="blog-content__img-quotes" src="img/Quotes.png" alt="quotes">
                    <h3 class="blog-content__title">{{article.subheader}}</h3>
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
                    <img class="blog-content__img-kitchen2" :src="article.subImgSrc" alt="kitchen">
                    <p class="blog-content__bottom-text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                        turpmaximus.posuere in.Contrary
                        to popular
                        belief.There are many variations of passages of Lorem Ipsum available, but the majority have
                        suffered.
                    </p>
                </div>
            </div>
            <div class= "tags">
                <h2 class="title tags__title">Tags</h2>
                <div class="tags__wrapper">
                    <button @click='selectTag(tag)' class="tags__btn" v-for="(tag,index) in tagsList" :key="index">{{tag}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'BlogContent',
  data () {
    return {
      currentTagBtn: '',
      selectedTag: '',
      tagsList: [
        'Kitchen',
        'Bedroom',
        'Building',
        'Architecture',
        'Kitchen Planning',
        'Bedroom'
      ],
      articlesList: [
        {
          id: 1,
          tag: 'Kitchen',
          header: 'Let’s Get Solution for Building Construction Work',
          imgSrc: 'styles/img/blog-details/blog-details-card1.jpg',
          dateText: '26 December,2022',
          breadcrumbs: 'Interior / Home / Decore',
          blockquote: 'The details are not the details.<br>They make the design.',
          subheader: 'Design sprints are great',
          subImgSrc: 'styles/img/blog-details/blog-details-card2.jpg'
        },
        {
          id: 2,
          tag: 'Bedroom',
          header: 'Title 2',
          imgSrc: '#',
          dateText: '26 December,2022',
          breadcrumbs: 'Lorem / Home / Decore',
          blockquote: 'Lorem ipsum dolor sit amet consectetur.',
          subheader: 'Lorem ipsum dolor sit amet consectetur',
          subImgSrc: '#'
        },
        {
          id: 3,
          tag: 'Building',
          header: 'Title 3',
          imgSrc: '#',
          dateText: '26 December,2022',
          breadcrumbs: 'Interior / Ipsum / Decore',
          blockquote: 'Lorem ipsum dolor sit amet.',
          subheader: 'Consectetur adipisicing elit',
          subImgSrc: '#'
        },
        {
          id: 4,
          tag: 'Architecture',
          header: 'Title 4',
          imgSrc: '#',
          dateText: '26 December,2022',
          breadcrumbs: 'Interior / Home / Dolor',
          blockquote: 'Lorem ipsum dolor sit amet.<br> Consectetur adipisicing elit.',
          subheader: 'Lorem ipsum dolor sit amet',
          subImgSrc: '#'
        },
        {
          id: 5,
          tag: 'Kitchen Planning',
          header: 'Title 5',
          imgSrc: '#',
          dateText: '26 December,2022',
          breadcrumbs: 'Lorem / Home / Dolor',
          blockquote: 'The details are not the details.<br> They make the design.',
          subheader: 'Design sprints are great',
          subImgSrc: '#'
        },
        {
          id: 6,
          tag: 'Bathroom',
          header: 'Title 6',
          imgSrc: '#',
          dateText: '26 December,2022',
          breadcrumbs: 'Lorem / Ipsum / Dolor',
          blockquote: 'Lorem ipsum dolor sit amet consectetur.',
          subheader: 'Lorem ipsum dolor sit amet consectetur.',
          subImgSrc: '#'
        }
      ]

    }
  },
  computed: {
    filterList () {
      return this.selectedTag
        ? this.articlesList.filter((el) => el.tag.includes(this.selectedTag))
        : this.articlesList
    }
  },
  methods: {
    selectTag (tag) {
      if (this.currentTagBtn) {
        this.currentTagBtn.target.classList.remove('tags__btn_activ')
        event.target.classList.add('tags__btn_activ')
        this.currentTagBtn = event
      } else {
        event.target.classList.add('tags__btn_activ')
        this.currentTagBtn = event
      }
      if (this.selectedTag === tag) {
        this.selectedTag = ''
        event.target.classList.remove('tags__btn_activ')
      } else {
        this.selectedTag = tag
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
