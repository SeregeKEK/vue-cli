<template>
    <div>
        <PageHeader/>
        <SliderBaner/>
        <SliderText/>
        <SliderContent/>
        <PageFooter/>
    </div>
</template>

<script>
import Vue from 'vue'
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'
import SliderContent from '@/components/SliderContent.vue'
import SliderText from '@/components/SliderText.vue'
import SliderBaner from '@/components/SliderBaner.vue'
Vue.component('PageHeader', PageHeader)
Vue.component('PageFooter', PageFooter)
Vue.component('SliderContent', SliderContent)
Vue.component('SliderText', SliderText)
Vue.component('SliderBaner', SliderBaner)

export default {
  name: 'BlogSlider'
}
</script>

<style lang="scss" scoped>

</style>
