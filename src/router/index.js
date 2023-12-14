import Vue from 'vue'
import Router from 'vue-router'
import PageProject from '@/pages/PageProject.vue'
import PageBlog from '@/pages/PageBlog.vue'
import NotFound from '@/pages/NotFound.vue'
import PageMain from '@/pages/PageMain.vue'
import PageBlogDetails from '@/pages/PageBlogDetails.vue'
import BlogSlider from '@/pages/BlogSlider.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PageMain',
      component: PageMain
    },
    {
      path: '/pageproject',
      name: 'PageProject',
      component: PageProject
    },
    {
      path: '/pageblog',
      name: 'PageBlog',
      component: PageBlog
    },
    {
      path: '/pageblog-details',
      name: 'PageBlogDetails',
      component: PageBlogDetails
    },
    {
      path: '/blogslider',
      name: 'BlogSlider',
      component: BlogSlider
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    }
  ]
})
