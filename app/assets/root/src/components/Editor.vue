<template>
    <div id="editor">
        <form class="ui form">
            <div class="field">
                 <textarea rows="2" name="content" placeholder="Content"></textarea>
            </div>
            <div class="field">
                <button class="ui icon button" id="hidden-image-selector">
                    <i class="file image outline icon"></i>
                    <input type="file" name="img" id="image-selector">
                </button>
            </div>
            <div class="field">
                <img id="image-preview">
            </div>

            <button class="ui right floated button" type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
    function previewImg(source, target, options) {
        if (source.files && source.files[0])
        {
            const { height, width} = options;
            const reader = new FileReader();

            reader.onload = event => {
                $(target).attr("src", event.target.result)
                            .width(width).height(height);
            };

            reader.readAsDataURL(source.files[0]);
        }
    }

    // delegate hidden

    export default {
        ready() {
            // image preview
            $("#image-selector").change(event => {
                previewImg(
                    document.querySelector("#image-selector"),
                    $("#image-preview"),
                    { height: "50%", width: "50%" });
            });
        }
    };
</script>

<style scoped>
    #image-selector {
        display: none;
    }
</style>
