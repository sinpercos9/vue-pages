<template>
    <div class="login-page">
        <div class="container">
            <div class="title">
            <img src="@/assets/Images/logo.jpg" alt="logo"/>
            </div>
            <div class="form">
                <input-vue :id="'Email'" :placeholder="'Email'"/>
                <input-vue :id="'Pass'" :placeholder="'Password'"/>
                <button-vue :id="'Login'" :text="'Login'" @click="$router.push('/shop')"/>
                <p>Or</p>
                <button-vue :id="'Register'" :text="'Register'" @click="$router.push('/register')"/>
            </div>
        </div>
    </div>

  
</template>

<script>
import Input from '@/components/input'
import Button from '@/components/button'
export default {
    name: 'login-page',
    components: {
        'input-vue': Input,
        'button-vue': Button
    }
    
}
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>