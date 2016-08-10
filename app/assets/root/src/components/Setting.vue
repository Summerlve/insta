<template>
    <div id="setting">
        <form class="ui form">
            <div class="ui grid container">
                <div class="sixteen wide computer sixteen wide tablet sixteen wide mobile column">
                    <div class="field">
                        <label>Username</label>
                        <input type="text" name="first-name" placeholder="Username">
                    </div>
                </div>
                <div class="sixteen wide computer sixteen wide tablet sixteen wide mobile column">
                    <div class="field">
                        <label>New Password</label>
                        <input type="password" name="password" placeholder="New Password">
                    </div>
                </div>
                <div class="sixteen wide computer sixteen wide tablet sixteen wide mobile column">
                    <div class="field">
                        <label>New Password Again</label>
                        <input type="password" name="password_again" placeholder="New Password Again">
                    </div>
                </div>
                <div class="sixteen wide computer sixteen wide tablet sixteen wide mobile column">
                    <button class="fluid big ui primary button" type="submit">Change Account's infomation</button>
                </div>
            </div>
        </form>
        <div class="ui divider"></div>
        <form class="ui form">
            <div class="ui grid container">
                <div class="sixteen wide computer sixteen wide tablet sixteen wide mobile column">
                    <div class="field">
                        <div class="fluid big ui top attached button" tabindex="0" id="choose-image">
                            Choose A Picture
                        </div>
                        <input type="file" name="img" id="image-input-hidden">
                        <div class="ui attached center aligned segment">
                            <i class="file image outline icon" id="image-placeholder">
                            </i>
                            <img class="ui medium circular centered image" id="image-preview">
                        </div>
                    </div>
                </div>
                <div class="sixteen wide computer sixteen wide tablet sixteen wide mobile column">
                    <button class="fluid big ui primary button" type="submit">Change Avatar</button>
                </div>
            </div>
        </form>
        <div class="ui divider"></div>
        <form class="ui form">
            <div class="ui grid container">
                <div class="sixteen wide computer sixteen wide tablet sixteen wide mobile column">
                    <div class="field">
                        <label>Github Address</label>
                        <input type="text" name="github" placeholder="Github Address">
                    </div>
                </div>
                <div class="sixteen wide computer sixteen wide tablet sixteen wide mobile column">
                    <button class="fluid big ui primary button" type="submit">Change Github Address</button>
                </div>
            </div>
        </form>
        <div class="ui divider"></div>
        <form class="ui form">
            <div class="ui grid container">
                <div class="sixteen wide computer sixteen wide tablet sixteen wide mobile column">
                    <div class="field">
                        <label>Twitter Address</label>
                        <input type="text" name="twitter" placeholder="Twitter Address">
                    </div>
                </div>
                <div class="sixteen wide computer sixteen wide tablet sixteen wide mobile column">
                    <button class="fluid big ui primary button" type="submit">Change Twitter Address</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        ready() {
            this.imgSelInit();
        },
        methods: {
            imgSelInit() {
                // delegate hidden file input click event
                $("#choose-image").on("click", event => {
                    $("#image-input-hidden").click();
                    return false;
                });

                // image preview
                $("#image-input-hidden").change(event => {
                    $("#image-placeholder").hide();

                    this.previewImg(
                        document.querySelector("#image-input-hidden"),
                        $("#image-preview"));
                });
            },
            previewImg(source, target) {
                if (source.files && source.files[0])
                {
                    const reader = new FileReader();

                    reader.onload = event => {
                        $(target).attr("src", event.target.result);
                    };

                    reader.readAsDataURL(source.files[0]);
                }
            }
        }
    };
</script>

<style scoped>
    #setting {
        width: 100%;
    }

    #image-input-hidden {
        display: none;
    }

    #image-placeholder {
        font-size: 200px;
    }
</style>
