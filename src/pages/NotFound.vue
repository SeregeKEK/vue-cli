
import Vue from 'vue/types/umd';
<template>
    <div>
        <PageHeader/>
        <PageNotFound/>
    </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import PageNotFound from '@/components/PageNotFound.vue'
export default {
  name: 'NotFound',
  components: {
    PageNotFound,
    PageHeader
  }
}
</script>

<style lang="scss" scoped>

</style>
