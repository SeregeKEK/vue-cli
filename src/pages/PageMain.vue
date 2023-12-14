<template>
    <div>
        <PageHeader/>
        <IndexPromotion/>
        <IndexProjects/>
        <IndexAchivements/>
        <IndexArticleNews/>
        <PageFooter/>
    </div>
</template>
<script>
import Vue from 'vue'
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'
import IndexAchivements from '@/components/IndexAchivements.vue'
import IndexArticleNews from '@/components/IndexArticleNews.vue'
import IndexProjects from '@/components/IndexProjects.vue'
import IndexPromotion from '@/components/IndexPromotion.vue'
Vue.component('PageHeader', PageHeader)
Vue.component('PageFooter', PageFooter)
Vue.component('IndexAchivements', IndexAchivements)
Vue.component('IndexArticleNews', IndexArticleNews)
Vue.component('IndexProjects', IndexProjects)
Vue.component('IndexPromotion', IndexPromotion)

export default {
  name: 'PageMain'

}
</script>
