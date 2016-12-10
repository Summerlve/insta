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
        <div class="ui sixteen column grid container">
            <div class="doubling two column row custom-row">
                <div class="column centered">
                    <button  v-bind:class="{ disabled: loadMore }" id="load-more" class="fluid ui mini button" type="button">More</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PostTableView from "./components/PostTableView"
    import moment from "moment";

    function min(array) {
        return array.sort((pre, lat) => lat - pre)[array.length - 1];
    }

    export default {
        ready() {
            const num = 5; // page num
            let pos = -1;

            // data handler
            const dataHandler =  postList => {
                if (postList.length === 0)
                {
                    this.$data.loadMore = true;
                    return ;
                }

                if (postList.length < num)
                {
                    this.$data.loadMore = true;
                }

                postList.map(post => post.createAt = moment.utc(post.createAt).local().format("YYYY/MM/DD"));
                postList.map(post => post.disabled = false);

                this.$data.postList.push(...postList);
                pos = min(postList.map(post => post.id)) - 1;
            };

            // load more event
            $("#load-more").on("click", event => {
                $.ajax({
                    url: `/post?&pos=${pos}&num=${num}`,
                    dataType: "json",
                    method: "GET",
                })
                .done(dataHandler)
                .fail(error => {
                    alert(error);
                });
            });

            // get user info
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

            // get init data
            $.ajax({
                url: `/post?&pos=${pos}&num=${num}`,
                dataType: "json",
                method: "GET",
            })
            .done(dataHandler)
            .fail(error => {
                alert(error);
            });

            // icon click handler
            $("i.link").on("click", event => {
                const link = $(event.currentTarget).attr("href");
                if (!link)
                {
                    alert("have no link");
                    return false;
                }

                location.href = link;
            })
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
                postList: [],
                loadMore: false
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
