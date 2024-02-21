<template>
  <div>
    <div class="errorPage">
      <div class="errorPage__left">
        <h1 class="errorPage__title">404</h1>
        <p class="errorPage__text">We are sorry, but the page
            you requested was not found</p>
            <router-link class="errorPage__link" to="/">Back To Home
          <svg width="18" height="17" viewBox="0 -1 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
          </svg>
        </router-link>
      </div>
      <div class="errorPage__right">
        <img class="errorPage__img" src="img/404.png" alt="404 img">
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router'
export default {
  name: 'PageNotFound',
  router
}
</script>
<style>
  .errorPage{
    display: flex;
    justify-content: space-between;
  }

  .errorPage__left{
    max-width: 569px;
    margin-left: 360px;
    margin-top: 250px;
  }

  .errorPage__title{
    font-size: 250px;
    color: #CDA274;
  }

  .errorPage__text{
    margin-top: -30px;
    margin-bottom: 46px;
    font-size: 35px;
    line-height: 53px;
    letter-spacing: 0.01em;
    text-align: left;
    font-family: 'DM Serif Display';
    font-weight: 400;
  }

  .errorPage__link{
    padding: 26px 69px 26px 54px;
    background-color: #292F36;
    border-radius: 18px;
    border-color: transparent;
    box-shadow: 0px 10px 20px 0px #C0C0C059;
    font-family: Jost;
    font-size: 18px;
    font-weight: 600;
    line-height: 23px;
    text-align: center;
    color: white;
    position: relative;
  }

  .errorPage__link svg{
    margin-top: 3px;
    margin-left: 10px;
    position: absolute;
  }

  .errorPage__link:hover{
    background-color: #CDA274;
  }

  .errorPage__link:hover svg path{
    stroke: #292F36;
  }
</style>
