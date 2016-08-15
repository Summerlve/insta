<template>
    <div class="doubling two column row custom-row">
        <div class="column centered">
            <div class="ui fluid card">
                <div class="image">
                    <img :src="post.img">
                </div>
                <div class="content">
                    <div class="description">
                        {{ post.content }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        props: ["post"]
    }
</script>

<style scoped>
    #post-table-view .custom-row:first-child {
        margin-top: 16px;
    }
</style>
