<template>
  <div id="app">
    <BlogDetails/>
    <BlogCards/>
    <PageFooter/>
    <PageHeader/>
  </div>
</template>

<script>
import BlogDetails from './components/BlogDetails.vue'
import BlogCards from './components/BlogCards.vue'
import PageFooter from './components/PageFooter.vue'
import PageHeader from './components/PageHeader.vue'
export default {
  name: 'App',
  components: {
    BlogDetails,
    BlogCards,
    PageFooter,
    PageHeader
  }
}
</script>
