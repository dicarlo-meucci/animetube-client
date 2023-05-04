<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'

const options = {
      type   : 'loop',
      drag   :'free',
      snap   : true,
      perPage: 1,
      gap    : '1rem',
      height : '13rem',
      breakpoints: {
        1000: {
          perPage: 1,
        },
    }
}
</script>

<template>
  <Splide :options="options" aria-label="My Favorite Images">
    
    <SplideSlide>
      <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fnaruto.fandom.com%2Fit%2Fwiki%2FNaruto_Uzumaki&psig=AOvVaw3CBtkdYwIG8k07l9dfWhqg&ust=1683287106538000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMiKj6TL2_4CFQAAAAAdAAAAABAD" alt="Sample 1">
    </SplideSlide>
    
    <SplideSlide>
      <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwall.alphacoders.com%2Fby_sub_category.php%3Fid%3D177860%26name%3DHunter%2Bx%2BHunter%2BSfondi%26lang%3DItalian&psig=AOvVaw1F5NE8HGZ7eF4XhebmtvbV&ust=1683287169443000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLj4msPL2_4CFQAAAAAdAAAAABAD" alt="Sample 2">
    </SplideSlide>

    <SplideSlide>
      <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.alphacoders.com%2F114%2F1143428.jpg&tbnid=fUTvMTQet1kQMM&vet=12ahUKEwiXxfnKy9v-AhWRhv0HHRvxDP8QMygBegUIARC3AQ..i&imgrefurl=https%3A%2F%2Fwall.alphacoders.com%2Fby_sub_category.php%3Fid%3D312362%26name%3DFire%2BForce%2BSfondi%26lang%3DItalian&docid=InjU8uHzZIdy_M&w=3840&h=2160&q=fireforce%204k&ved=2ahUKEwiXxfnKy9v-AhWRhv0HHRvxDP8QMygBegUIARC3AQ" alt="Sample 3">
    </SplideSlide>

    <SplideSlide>
      <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages8.alphacoders.com%2F118%2Fthumb-1920-1184364.jpg&tbnid=i7G2oTqavl241M&vet=12ahUKEwiMy_Lby9v-AhWA8rsIHdsABL8QMygAegUIARC5AQ..i&imgrefurl=https%3A%2F%2Fwall.alphacoders.com%2Fby_sub_category.php%3Fid%3D345045%26name%3DHigh-Rise%2BInvasion%2BSfondi%26filter%3D4K%2BUltra%2BHD%26lang%3DItalian&docid=MOZduZgG2RotQM&w=1920&h=1200&q=high%20risie%20invasion%204k&ved=2ahUKEwiMy_Lby9v-AhWA8rsIHdsABL8QMygAegUIARC5AQ" alt="Sample 4">
    </SplideSlide>
  </Splide>
</template>

<style scoped>
</style>
