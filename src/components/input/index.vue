<template>
  <div>
      <input
      :id="id"
      :placeholder="placeholder"
      />
  </div>
</template>

<script>
export default {
    name: 'input-vue',
    props: {
        placeholder: String,
        id: String
    }    

}
    

</script>

<style lang="scss" scoped>
@import './index.scss'

</style>