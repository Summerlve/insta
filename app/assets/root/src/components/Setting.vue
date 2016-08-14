<template>
    <div id="setting">
        <form class="ui form" action="/setting" method="POST">
            <div class="ui grid container">
                <div class="sixteen wide computer sixteen wide tablet sixteen wide mobile column">
                    <div class="field">
                        <label>Username</label>
                        <input type="text" name="username" placeholder="Username">
                    </div>
                </div>
                <div class="sixteen wide computer sixteen wide tablet sixteen wide mobile column">
                    <button class="fluid big ui primary button" type="submit">Change Username</button>
                </div>
            </div>
        </form>
        <div class="ui divider"></div>
        <form class="ui form" action="/setting" method="POST">
            <div class="ui grid container">
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
                    <button class="fluid big ui primary button" type="submit">Change Password</button>
                </div>
            </div>
        </form>
        <div class="ui divider"></div>
        <form class="ui form" action="/setting" method="POST">
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
        <form class="ui form" action="/setting" method="POST">
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

    };
</script>

<style scoped>
    #setting {
        width: 100%;
    }
</style>
