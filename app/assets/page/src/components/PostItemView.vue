<template>
    <div class="doubling two column row custom-row">
        <div class="column centered">
            <div class="ui fluid card">
                <div class="image">
                    <div class="ui active centered medium loader" v-bind:class="{disabled: post.disabled}"></div>
                    <img :src="post.img" v-on:load="post.disabled = true">
                </div>
                <div class="content">
                    <div class="meta">
                          <span class="date">{{ post.createAt }}</span>
                    </div>
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

    .description {
        word-break: break-all;
    　　word-wrap: break-word;
    }
</style>
