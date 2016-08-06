<template>
    <div id="login">
        <div class="ui middle aligned center aligned grid">
            <div class="column">
                <h2 class="ui blue image header">
                    <img :src="avatar" class="ui tiny avatar image">
                    <div class="blue content">
                        {{ content }}
                    </div>
                </h2>
                <form class="ui large form" action="/login" method="POST">
                    <div class="ui stacked segment">
                        <div class="field">
                            <div class="ui left icon input">
                                <i class="user icon"></i>
                                <input type="text" name="username" placeholder="Username">
                            </div>
                        </div>
                        <div class="field">
                            <div class="ui left icon input">
                                <i class="lock icon"></i>
                                <input type="password" name="password" placeholder="Password">
                            </div>
                        </div>
                        <button class="ui fluid large blue submit button" type="submit">Login</div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script scoped>
    export default {
        data() {
            return {
                avatar: "/static/images/1.jpg",
                content: "Log-in to your account"
            }
        }
    };
</script>

<style>
    body {
        background-color: #F5F5F5;
    }
</style>

<style scoped>
    #login {
        height: inherit;
    }

    #login > .grid {
        height: 100%;
    }

    .image {
        margin-top: -100px;
    }

    .column {
        max-width: 450px;
    }
</style>
