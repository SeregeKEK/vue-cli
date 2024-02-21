<template>
    <div class="slider" >
        <div class="center-container">
          <tiny-slider :mouse-drag="true" :loop="true" :controls="false" items="1" gutter="50">
            <div class="slider__item"><img class="slider__img" src="img/slider-img.jpg" alt="project photo"></div>
            <div class="slider__item"><img class="slider__img" src="img/slider-img.jpg" alt="project photo"></div>
            <div class="slider__item"><img class="slider__img" src="img/slider-img.jpg" alt="project photo"></div>
          </tiny-slider>
        </div>
    </div>
</template>
<script>
import VueTinySlider from 'vue-tiny-slider'

export default {
  name: 'SliderContent',

  components: {
    'tiny-slider': VueTinySlider
  }

}
</script>
