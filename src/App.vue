<template>
    <div>
        <div class="header-container">
            <img class="header-logo" src="../public/images/mask_w.png" />
            <nav>
                <router-link to="/">Home</router-link>
                <router-link to="/music">Music</router-link>
                <h1>Kidd Spectro</h1>
                <router-link to="/about">About</router-link>
                <router-link to="/contact">Contact</router-link>
            </nav>
        </div>
        <router-view/>
    </div>
</template>

<script>
export default{
    name: "App"
}
</script>

<style scoped>
.header-container{
    max-width: 100%;
    height:auto;
}
.header-logo{
    display: block;
    width: auto;
    height:75px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
}
nav{
    display: flex;
    align-items: center;
    justify-content: center;
}
nav a{
    flex:50%;
    text-decoration: none;
    font-family: 'Teko', sans-serif;
    color: #F22ADA;
    padding: 3px;
    text-align: center;
}
nav h1{
    font-family: 'VT323', monospace;
    text-align: center;
    font-weight: bold;
    color: white;
    font-size: 45px;

}
</style>
