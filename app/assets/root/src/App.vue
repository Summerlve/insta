<template>
    <div id="app">
        <div class="ui grid container">
            <div class="ui segment">
                <h4 class="ui header">
                     <a v-link="{ path: '/editor' }">Editor</a>
                     <span class="custom-horizontal-space"></span>
                     <a v-link="{ path: '/setting' }">Setting</a>
                     <span class="custom-horizontal-space"></span>
                     <a href="/logout">logOut</a>
                </h4>
                <div class="ui divider"></div>
                <router-view></router-view>
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
        width: 100%;
    }

    .grid {
        width: 100%;
        padding-top: 35px;
        padding-bottom: 35px;
    }

    .segment {
        width: 100%;
    }

    .custom-horizontal-space {
        display: inline-block;
        margin-left: 10px;
    }
</style>
