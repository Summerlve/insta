<template>
    <div class="ui sixteen column grid container" id="post-table-view">
        <post-item-view
            v-for="post in postList"
            :post="post"
            :index="$index">
        </post-item-view>
    </div>
</template>

<script>
    import PostItemView from "./PostItemView";

    export default {
        components: {
            PostItemView
        },
        data() {
            return {

            }
        },
        props: ["postList"]
    }
</script>

<style scoped>

</style>
