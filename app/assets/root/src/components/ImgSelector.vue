<template>
    <div class="sixteen wide computer sixteen wide tablet sixteen wide mobile column">
        <div class="field">
            <div class="fluid big ui top attached button" tabindex="0" id="hidden-the-image-selector">
                Choose A Picture
            </div>
            <input type="file" name="img" id="image-selector">
            <div class="ui attached center aligned segment">
                <i class="file image outline icon" id="image-placeholder">
                </i>
                <img class="ui medium centered image" id="image-preview">
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    };
</script>

<style scoped>

</style>
