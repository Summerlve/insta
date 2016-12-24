<template>
    <form class="ui form" method="POST" action="/tweet">
        <div class="ui grid container">
            <div class="sixteen wide computer sixteen wide tablet sixteen wide mobile column">
                <div class="field">
                     <textarea rows="3" name="content" placeholder="tweet" required="required"></textarea>
                </div>
            </div>
        </div>
        <div class="ui divider"></div>
        <button class="fluid big ui primary button" type="submit">Tweet</button>
    </form>
</template>

<script>
    export default {

    };
</script>

<style scoped>
</style>
