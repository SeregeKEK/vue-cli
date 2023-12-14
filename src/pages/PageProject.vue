<template>
    <div>
        <PageHeader/>
        <ProjectPromo/>
        <ProjectContent/>
        <PageFooter/>
    </div>
</template>

<script>
import Vue from 'vue'
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'
import ProjectPromo from '@/components/ProjectPromo.vue'
import ProjectContent from '@/components/ProjectContent.vue'
Vue.component('PageHeader', PageHeader)
Vue.component('PageFooter', PageFooter)
Vue.component('ProjectPromo', ProjectPromo)
Vue.component('ProjectContent', ProjectContent)

export default {
  name: 'PageProject'

}
</script>

<style lang="scss" scoped>

</style>
