<template>
  <div>
     <button class="btn" :id="id">
         {{text}}
     </button>
  </div>
</template>

<script>
export default {
    name: 'button-vue',
    props: {
        id: String,
        text: String
    }    

}
    

</script>

<style lang="scss" scoped>
@import './index.scss'

</style>