<template>
    <div class="ui sixteen column grid container">
        <post-item-view
            v-for="item in items"
            :item="item"
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
            items: [{}, {}, {}]
        }
    }
}
</script>

<style scoped>

</style>
