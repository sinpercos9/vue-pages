<template>
<div id="myModal" class="modal">
    <button class="close" @click="close">X</button>
  <div class="modal-content">
    <p>Registration Successful!</p>
    <button-vue :id="'done'" :text="'Done'" @click="$router.push('/')"/>
  </div>
</div>
</template>

<script>
import Button from '@/components/button'
export default {
    name: 'modal-vue',
    components: {
        'button-vue': Button  
    },
    props: {
        show: Boolean

    }, 
    methods:{
        close(){
            this.$emit('close',false)
        }
    }

}
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>