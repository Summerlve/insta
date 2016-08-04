<template>
    <div class="eight column row">
        <div class="eight wide column centered">
            <div class="ui fluid card">
                <div class="image">
                    <img src="{{ image }}">
                </div>
                <div class="content">
                    <div class="description">
                        {{ content }}
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
            image: "/static/images/1.jpg",
            content: `中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国
                    Kristy is an art director living in New York. Kristy is an art director living in New York.`
        }
    }
}
</script>

<style scoped>

</style>
