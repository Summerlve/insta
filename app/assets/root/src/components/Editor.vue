<template>
    <div id="editor">
        <form class="ui form" method="POST" action="/post" enctype="multipart/form-data">
            <div class="ui grid container">
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
                    <div class="sixteen wide computer sixteen wide tablet sixteen wide mobile column">
                        <div class="field">
                             <input type="text" name="content" placeholder="content">
                        </div>
                    </div>
                </div>
            </div>
            <div class="ui divider"></div>
            <button class="fluid big ui primary button" type="submit">Post It</button>
        </form>
    </div>
</template>

<script>
    function previewImg(source, target) {
        if (source.files && source.files[0])
        {
            const reader = new FileReader();

            reader.onload = event => {
                $(target).attr("src", event.target.result);
            };

            reader.readAsDataURL(source.files[0]);
        }
    }

    export default {
        ready() {
            // delegate hidden file input click event
            $("#hidden-the-image-selector").on("click", event => {
                $("#image-selector").click();
                return false;
            });

            // image preview
            $("#image-selector").change(event => {
                $("#image-placeholder").hide();

                previewImg(
                    document.querySelector("#image-selector"),
                    $("#image-preview"));
            });
        }
    };
</script>

<style scoped>
    #image-selector {
        display: none;
    }

    #image-placeholder {
        font-size: 200px;
    }
</style>
