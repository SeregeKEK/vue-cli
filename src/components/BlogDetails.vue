<template>
  <div class= "tags">
    <h2 class="title tags__title">Tags</h2>
            <div class="tags__wrapper">
                <button @click='selectTag(tag)' class="tags__btn" v-for="(tag,index) in tagsList" :key="index">{{tag}}</button>
            </div>
            <div class= "blog">
            <div @click='viewDescription()' class="blog__title"  v-for="(article,index) in filterList" :key="index"><details><summary>{{article.title}}</summary><p class="blog__text" >{{article.description}}</p></details>  </div></div>
  </div>
</template>

<script>
export default {
  name: 'BlogDetails',
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
