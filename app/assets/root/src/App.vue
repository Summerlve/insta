<template>
    <div id="app">
        <div class="ui grid container">
            <div class="sixteen wide computer sixteen wide tablet sixteen wide mobile column">
                <div class="ui segment">
                    <a v-link="{ path: '/editor' }">editor</a>
                    <a v-link="{ path: '/setting' }">setting</a>
                    <a href="#">logout</a>
                </div>
            </div>
            <div class="sixteen wide computer sixteen wide tablet sixteen wide mobile column">
                <div class="ui segment">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    #app {
        height: 100%;
    }
</style>
