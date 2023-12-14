<template>
    <div>
        <PageHeader/>
        <BlogDetailsBanner/>
        <BlogContent/>
        <PageFooter/>
    </div>
</template>
<script>
import Vue from 'vue'
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'
import BlogDetailsBanner from '@/components/BlogDetailsBanner.vue'
import BlogContent from '@/components/BlogContent.vue'
Vue.component('PageHeader', PageHeader)
Vue.component('PageFooter', PageFooter)
Vue.component('BlogDetailsBanner', BlogDetailsBanner)
Vue.component('BlogContent', BlogContent)

export default {
  name: 'PageBlogDetails'

}
</script>
