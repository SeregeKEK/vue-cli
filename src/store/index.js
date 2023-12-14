import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cardsList: [
      {
        sizeBig: true,
        imgSrc: 'img/project-photo5.jpg',
        name: 'Minimal Bedroom',
        type: 'Decor / Artchitecture',
        tag: 'Bedroom'
      },
      {
        sizeBig: false,
        imgSrc: 'img/project-photo6.jpg',
        name: 'Minimal Bedroom',
        type: 'Decor / Artchitecture',
        tag: 'Bedroom'
      },
      {
        sizeBig: true,
        imgSrc: 'img/project-photo7.jpg',
        name: 'Modern Bedroom',
        type: 'Decor / Artchitecture',
        tag: 'Bedroom'
      },
      {
        sizeBig: false,
        imgSrc: 'img/project-photo8.jpg',
        name: 'Classic Minimal Bedroom',
        type: 'Decor / Artchitecture',
        tag: 'Bedroom'
      },
      {
        sizeBig: true,
        imgSrc: 'img/project-photo9.jpg',
        name: 'Minimal Bedroom table',
        type: 'Decor / Artchitecture',
        tag: 'Bedroom'
      },
      {
        sizeBig: false,
        imgSrc: 'img/project-photo10.jpg',
        name: 'System Table',
        type: 'Decor / Artchitecture',
        tag: 'Bedroom'
      },
      {
        sizeBig: true,
        imgSrc: 'img/project-photo11.jpg',
        name: 'Modern Bedroom',
        type: 'Decor / Artchitecture',
        tag: 'Bedroom'
      },
      {
        sizeBig: false,
        imgSrc: 'img/project-photo12.jpg',
        name: 'Modern Bedroom',
        type: 'Decor / Artchitecture',
        tag: 'Bedroom'
      },
      {
        sizeBig: false,
        imgSrc: 'photo.jpg',
        name: 'Modern Bathroom',
        type: 'Decor / Artchitecture',
        tag: 'Bathroom'
      },
      {
        sizeBig: false,
        imgSrc: 'photo.jpg',
        name: 'Modern Bathroom',
        type: 'Decor / Artchitecture',
        tag: 'Bathroom'
      },
      {
        sizeBig: false,
        imgSrc: 'photo.jpg',
        name: 'Bathroom',
        type: 'Decor / Artchitecture',
        tag: 'Bathroom'
      },
      {
        sizeBig: false,
        imgSrc: 'photo.jpg',
        name: 'Kitchan',
        type: 'Decor / Artchitecture',
        tag: 'Kitchan'
      },
      {
        sizeBig: false,
        imgSrc: 'photo.jpg',
        name: 'Modern Kitchan',
        type: 'Decor / Artchitecture',
        tag: 'Kitchan'
      },
      {
        sizeBig: false,
        imgSrc: 'photo.jpg',
        name: 'Modern Living Area',
        type: 'Decor / Artchitecture',
        tag: 'Living Area'
      },
      {
        sizeBig: false,
        imgSrc: 'photo.jpg',
        name: 'Modern Living Area',
        type: 'Decor / Artchitecture',
        tag: 'Living Area'
      },
      {
        sizeBig: false,
        imgSrc: 'photo.jpg',
        name: 'Modern Living Area',
        type: 'Decor / Artchitecture',
        tag: 'Living Area'
      },
      {
        sizeBig: false,
        imgSrc: 'photo.jpg',
        name: 'Modern Living Area',
        type: 'Decor / Artchitecture',
        tag: 'Living Area'
      }
    ],
    cards: [
      {
        img: 'img/article1.png',
        type: 'Kitchan Design',
        name: 'Let’s Get Solution For Building Construction Work',
        date: '2022-12-26',
        dateExpanded: '26 December,2022'
      },
      {
        img: 'img/article2.png',
        type: 'Living Design',
        name: 'Low Cost Latest Invented Interior Designing Ideas.',
        date: '2022-12-22',
        dateExpanded: '22 December,2022'
      },
      {
        img: 'img/article3.png',
        type: 'Interior Design',
        name: 'Best For Any Office & Business Interior Solution',
        date: '2022-12-25',
        dateExpanded: '25 December,2022'
      },
      {
        img: 'img/article4.png',
        type: 'Kitchan Design',
        name: 'Let’s Get Solution For Building Construction Work',
        date: '2022-12-26',
        dateExpanded: '26 December,2022'
      },
      {
        img: 'img/article5.png',
        type: 'Living Design',
        name: 'Low Cost Latest Invented Interior Designing Ideas.',
        date: '2022-12-22',
        dateExpanded: '22 December,2022'
      },
      {
        img: 'img/article6.png',
        type: 'Interior Design',
        name: 'Best For Any Office & Business Interior Solution',
        date: '2022-12-25',
        dateExpanded: '25 December,2022'
      }
    ],
    articlesList: [
      {
        tag: 'Kitchen',
        title: 'Kitchen 1',
        description: 'Lol kek cheburek'
      },
      {
        tag: 'Kitchen',
        title: 'Kitchen 2',
        description: 'Lol kek cheburek'
      },
      {
        tag: 'Kitchen',
        title: 'Kitchen 3',
        description: 'Lol kek cheburek'
      },
      {
        tag: 'Bedroom',
        title: 'Bedroom 1',
        description: 'Lol kek cheburek'
      },
      {
        tag: 'Bedroom',
        title: 'Bedroom 2',
        description: 'Lol kek cheburek'
      },
      {
        tag: 'Bedroom',
        title: 'Bedroom 3',
        description: 'Lol kek cheburek'
      },
      {
        tag: 'Building',
        title: 'Building 1',
        description: 'Lol kek cheburek'
      },
      {
        tag: 'Building',
        title: 'Building 2',
        description: 'Lol kek cheburek'
      },
      {
        tag: 'Building',
        title: 'Building 3',
        description: 'Lol kek cheburek'
      },
      {
        tag: 'Architecture',
        title: 'Architecture 1',
        description: 'Lol kek cheburek'
      },
      {
        tag: 'Architecture',
        title: 'Architecture 2',
        description: 'Lol kek cheburek'
      },
      {
        tag: 'Architecture',
        title: 'Architecture 3',
        description: 'Lol kek cheburek'
      },
      {
        tag: 'Kitchen Planning',
        title: 'Kitchen Planning 1',
        description: 'Lol kek cheburek'
      },
      {
        tag: 'Kitchen Planning',
        title: 'Kitchen Planning 2',
        description: 'Lol kek cheburek'
      },
      {
        tag: 'Kitchen Planning',
        title: 'Kitchen Planning 3',
        description: 'Lol kek cheburek'
      },
      {
        tag: 'Bedroom',
        title: 'Bedroom 1',
        description: 'Lol kek cheburek'
      },
      {
        tag: 'Bedroom',
        title: 'Bedroom 2',
        description: 'Lol kek cheburek'
      },
      {
        tag: 'Bedroom',
        title: 'Bedroom 3',
        description: 'Lol kek cheburek'
      }
    ]

  },

  getters: {
    cardItems (state) {
      return state.cardsList
    },
    cardArticle (state) {
      return state.cards
    },
    articleItem (state) {
      return state.articlesList
    }
  }
})
