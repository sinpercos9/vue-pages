<template>
    <div class="login-page">
        <div class="container">
            <div class="title">
                <h1>Registration Form</h1>
            </div>
            <div class="form">
                <input-vue :id="'Username'" :placeholder="'Username*'"/>
                <input-vue :id="'Email'" :placeholder="'Email Address*'"/>
                <input-vue :id="'First'" :placeholder="'First Name*'"/>
                <input-vue :id="'Last'" :placeholder="'Last Name*'"/>
                <input-vue :id="'Password'" :placeholder="'Password*'"/>
                <input-vue :id="'Confirm'" :placeholder="'Confrim Password*'"/>

                <button-vue :id="'Submit'" :text="'Submit'" @click="triggerModal"/>
                <p>Or</p>
                <button-vue :id="'Cancel'" :text="'Cancel'" @click="$router.push('/')"/>
            </div>
            <modal-vue v-if="showModal" @close="triggerModal" />
        </div>
    </div>
</template>

<script>
import Input from '@/components/input'
import Button from '@/components/button'
import Modal from '@/components/modal'
export default {
    name: 'register-page',
    components: {
        'input-vue': Input,
        'button-vue': Button,
        'modal-vue': Modal
    },
    data(){
        return{
            showModal: false
        }
    },
    methods:{
        triggerModal(){
            if(this.showModal == false){
                this.showModal = true
            } else {
                this.showModal = false
            }
        }
    }
    
}
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>