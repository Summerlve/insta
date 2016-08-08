<template>
    <div id="app">
        <div class="ui segments">
            <div class="ui horizontal segments">
                <div class="ui center aligned segment">
                    <span><img src="/static/images/1.jpg" class="ui mini avatar image"></span>
                    <span class="custom-horizontal-space"></span>
                    <span>{{ username }}</span>
                    <span class="custom-horizontal-space"></span>
                    <span>
                        <i class="github link icon" href="https://github.com/Summerlve"></i>
                    </span>
                    <span>
                        <i class="twitter link icon" href="https://twitter.com/Summer_Code"></i>
                    </span>
                </div>
            </div>
        </div>
        <post-table-view></post-table-view>
        <div class="ui active centered inline loader"></div>
    </div>
</template>

<script>
    import PostTableView from "./components/PostTableView"

    export default {
        components: {
            PostTableView
        },
        data() {
            return {
                username: "Summer"
            }
        }
    }
</script>

<style scoped>
    .custom-horizontal-space {
        display: inline-block;
        margin-left: 9px;
    }
</style>
