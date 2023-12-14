<template>
    <div>
        <PageHeader/>
        <BlogPromo/>
        <BlogLatest/>
        <BlogArticleNews/>
        <PageFooter/>
    </div>
</template>
<script>
import Vue from 'vue'
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'
import BlogArticleNews from '@/components/BlogArticleNews.vue'
import BlogPromo from '@/components/BlogPromo.vue'
import BlogLatest from '@/components/BlogLatest.vue'
Vue.component('PageHeader', PageHeader)
Vue.component('PageFooter', PageFooter)
Vue.component('BlogArticleNews', BlogArticleNews)
Vue.component('BlogPromo', BlogPromo)
Vue.component('BlogLatest', BlogLatest)

export default {
  name: 'PageBlog'

}
</script>
