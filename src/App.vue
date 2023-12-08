<template>
  <div id="app">
    <PageHeader />
    <ProjectPromo />
    <ProjectContent />
    <PageFooter />
  </div>
</template>

<script>
import PageFooter from './components/PageFooter.vue'
import PageHeader from './components/PageHeader.vue'
import ProjectContent from './components/ProjectContent.vue'
import ProjectPromo from './components/ProjectPromo.vue'
export default {
  name: 'App',
  components: {
    PageFooter,
    PageHeader,
    ProjectContent,
    ProjectPromo
  }
}
</script>
