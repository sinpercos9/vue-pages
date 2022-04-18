<template>
    <div class="grid">
    <div class="container" @click="$router.push('/pay')">
            <div class="image">
                <img src="@/assets/Images/1.jpg" alt=""/>
            </div>
            <div class="content">
                <h3>Camera</h3>
                <p>Rp 5.000.000</p>
                <p>Jejalin Tech</p>
            </div> 
    </div>
    <div class="container" @click="$router.push('/pay')">
            <div class="image">
                <img src="@/assets/Images/2.jpg" alt=""/>
            </div>
            <div class="content">
                <h3>Phone</h3>
                <p>Rp 10.000.000</p>
                <p>Jejalin Tech</p>
            </div> 
    </div>
    <div class="container" @click="$router.push('/pay')">
            <div class="image">
                <img src="@/assets/Images/3.jpg" alt=""/>
            </div>
            <div class="content">
                <h3>Dream-Catcher</h3>
                <p>Rp 200.000</p>
                <p>Jejalin Dec</p>
            </div> 
    </div>
    <div class="container" @click="$router.push('/pay')">
            <div class="image">
                <img src="@/assets/Images/4.jpg" alt=""/>
            </div>
            <div class="content">
                <h3>Heels</h3>
                <p>Rp 400.000</p>
                <p>Jejalin Fashion</p>
            </div> 
    </div>
    </div>
</template>

<script>
export default {
    name: 'post-vue',
    props: {
        image: String,
        title: String,
        Price: String,
        Seller: String
    }

}
</script>

<style lang="scss" scoped>
@import './index.scss'

</style>