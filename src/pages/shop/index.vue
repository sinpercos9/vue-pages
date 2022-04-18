<template>
  <div>
      <header-vue/>
    <div class="grid">
        <post-vue/>
        <post-vue/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'
import Post from '@/components/posts'
export default {
    name: 'shop-page',
    components: {
        'header-vue': Header,
        'post-vue': Post

    }


}
</script>

<style lang="scss" scoped>
@import './index.scss'

</style>