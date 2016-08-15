<template>
    <div id="setting">
        <form class="ui form" action="/setting" method="POST">
            <div class="ui grid container">
                <div class="sixteen wide computer sixteen wide tablet sixteen wide mobile column">
                    <div class="field">
                        <label>Username</label>
                        <input type="text" name="username" placeholder="Username" required="required">
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
                        <input type="password" name="password" placeholder="New Password" required="required">
                    </div>
                </div>
                <div class="sixteen wide computer sixteen wide tablet sixteen wide mobile column">
                    <div class="field">
                        <label>New Password Again</label>
                        <input type="password" name="password_again" placeholder="New Password Again" required="required">
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
                        <input type="text" name="github" placeholder="Github Address" required="required">
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
                        <input type="text" name="twitter" placeholder="Twitter Address" required="required">
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
            const formOfPwd = $("form")[1]
            $(formOfPwd).on("submit", event => {
                const newPwd = $("input[name='password']").val();
                const newPwdAgain = $("input[name='password_again']").val();

                if (newPwd !== newPwdAgain)
                {
                    alert("two passwords are not consistent");
                    return false;
                }
            });
        }
    };
</script>

<style scoped>
    #setting {
        width: 100%;
    }
</style>
