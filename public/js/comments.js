var date = new Date()

function toLocal(date) {
    var local = new Date(date);
    local.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return local.toJSON();
}
var saveComment = function(data) {
    // Convert pings to human readable format
    $(data.pings).each(function(index, id) {
        var user = usersArray.filter(function(user) { return user.id == id })[0];
        data.content = data.content.replace('@' + id, '@' + user.fullname);
    });
    return data;
}
$('#comments-container').comments({
    profilePictureURL: 'https://app.viima.com/static/media/user_profiles/user-icon.png',
    getComments: function(success, error) {
        var commentsArray = [{
            id: 1,
            created: toLocal(date),
            content: 'Lorem ipsum dolort sit amet',
            fullname: 'Simon Powell',
            upvote_count: 2,
            user_has_upvoted: false
        }];
        success(commentsArray);
    }
});