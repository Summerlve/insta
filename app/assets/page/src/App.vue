<template>
    <div id="app">
        <div class="ui segments">
            <div class="ui horizontal segments">
                <div class="ui center aligned segment">
                    <span>{{ user.username }}</span>
                    <span class="custom-horizontal-space"></span>
                    <span>
                        <i class="github link icon" href="{{ user.github }}"></i>
                    </span>
                    <span>
                        <i class="twitter link icon" href="{{ user.twitter }}"></i>
                    </span>
                </div>
            </div>
        </div>
        <post-table-view :post-list="postList"></post-table-view>
    </div>
</template>

<script>
    import PostTableView from "./components/PostTableView"

    export default {
        ready() {
            $.ajax({
				url: "/setting",
				dataType: "json",
				method: "GET"
			}).done(user => {
                this.$data.user.username = user.username;
                this.$data.user.github = user.github;
                this.$data.user.twitter = user.twitter;
            }).fail(error => {
                alert(error);
            });

            const initNum = 5;

            $.ajax({
				url: `/post?&pos=0&num=${initNum}`,
				dataType: "json",
				method: "GET",
			}).done(postList => {
                this.$data.postList = postList;
            }).fail(error => {
                alert(error);
            });
        },
        components: {
            PostTableView
        },
        data() {
            return {
                user: {
                    username: "",
                    github: "",
                    twitter: ""
                },
                postList: []
            }
        }
    }
</script>

<style scoped>
    .custom-horizontal-space {
        display: inline-block;
        margin-left: 9px;
    }
</style>
