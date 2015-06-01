this["JST"] = this["JST"] || {};
this["JST"]["application"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<li class=\"repo\">\n  <div class=\"titlebox\">\n    <a href=\""
    + alias3(((helper = (helper = helpers.repourl || (depth0 != null ? depth0.repourl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"repourl","hash":{},"data":data}) : helper)))
    + "\"><h3 class=\"repotitle\">"
    + alias3(((helper = (helper = helpers.repotitle || (depth0 != null ? depth0.repotitle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"repotitle","hash":{},"data":data}) : helper)))
    + "</h3></a>\n    <span class=\"forktext\"><a href=\""
    + alias3(((helper = (helper = helpers.forkeduserurl || (depth0 != null ? depth0.forkeduserurl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"forkeduserurl","hash":{},"data":data}) : helper)))
    + "\" class=\"forklink\">"
    + alias3(((helper = (helper = helpers.forkedfrom || (depth0 != null ? depth0.forkedfrom : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"forkedfrom","hash":{},"data":data}) : helper)))
    + "</a></span>\n    <span class=\"update\">"
    + alias3(((helper = (helper = helpers.updatetime || (depth0 != null ? depth0.updatetime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"updatetime","hash":{},"data":data}) : helper)))
    + "</span>\n  </div>\n  <div class=\"languagebox\">\n    <span class=\"repolanguage\">"
    + alias3(((helper = (helper = helpers.repolanguage || (depth0 != null ? depth0.repolanguage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"repolanguage","hash":{},"data":data}) : helper)))
    + "</span>\n    <span class=\"starredinfo\"><i class=\"fa fa-star\"></i>"
    + alias3(((helper = (helper = helpers.stargazerscount || (depth0 != null ? depth0.stargazerscount : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"stargazerscount","hash":{},"data":data}) : helper)))
    + "</span>\n    <span class=\"forkinfo\"><i class=\"fa fa-code-fork\"></i>"
    + alias3(((helper = (helper = helpers.forkcount || (depth0 != null ? depth0.forkcount : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"forkcount","hash":{},"data":data}) : helper)))
    + "</span>\n  </div>\n</li>\n";
},"useData":true});
this["JST"]["header"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<a href=\"www.github.com\" class=\"giticon\"><i class=\"fa fa-github\"></i></a>\n<!--<div class=\"pooholder\"><img src=\"./../pile_of_poo.svg\" class=\"pooimage\"></div> -->\n<div class=\"searchcontain\"><input type=\"text\" class=\"searchbar\" value=\"Search GitHub\"></div>\n<span class=\"menutext explore\"><a href=\"https://github.com/explore\" class=\"menulink\">Explore</a></span>\n<span class=\"menutext gist\"><a href=\"https://gist.github.com\" class=\"menulink\">Gist</span></a>\n<span class=\"menutext blog\"><a href=\"https://github.com/blog\" class=\"menulink\">Blog</span></a>\n<span class=\"menutext help\"><a href=\"https://help.github.com\" class=\"menulink\">Help</span></a>\n<img src=\""
    + alias3(((helper = (helper = helpers.userimage || (depth0 != null ? depth0.userimage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"userimage","hash":{},"data":data}) : helper)))
    + "\" class=\"userimage\">\n<a href=\"https://github.com/austineady\" class=\"loginurl\"><span class=\"username\">"
    + alias3(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"username","hash":{},"data":data}) : helper)))
    + "</span></a>\n<div class=\"menuicons plus\"><span class=\"octicon octicon-plus\"></span><span class=\"octicon octicon-triangle-down\"></span></div>\n<div class=\"menuicons inbox\"><span class=\"octicon octicon-inbox\"></span></div>\n<div class=\"menuicons\"><span class=\"octicon octicon-gear\"></span></div>\n<div class=\"menuicons\"><span class=\"octicon octicon-sign-out\"></span></div>\n<button name=\"login\" class=\"login\">Log In</button>\n<div class=\"plushover hovertext\">Create new...</div>\n<div class=\"inboxhover hovertext\">You have no unread notifications</div>\n<div class=\"settingshover hovertext\">Settings</div>\n<div class=\"signouthover hovertext\">Sign Out</div>\n";
},"useData":true});
this["JST"]["sidebar"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<img src=\""
    + alias3(((helper = (helper = helpers.profileimage || (depth0 != null ? depth0.profileimage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"profileimage","hash":{},"data":data}) : helper)))
    + "\" class=\"profileimage\">\n<h1 class=\"profilename\">"
    + alias3(((helper = (helper = helpers.profilename || (depth0 != null ? depth0.profilename : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"profilename","hash":{},"data":data}) : helper)))
    + "</h1>\n<h2 class=\"profileusername\">"
    + alias3(((helper = (helper = helpers.profileusername || (depth0 != null ? depth0.profileusername : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"profileusername","hash":{},"data":data}) : helper)))
    + "</h2>\n<div class=\"sideline\"></div>\n<div class=\"profileinfo\">\n  <span class=\"country\"><i class=\"fa fa-map-marker\"></i>"
    + alias3(((helper = (helper = helpers.profilelocation || (depth0 != null ? depth0.profilelocation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"profilelocation","hash":{},"data":data}) : helper)))
    + "</span>\n  <span class=\"email\"><i class=\"fa fa-envelope\"></i><a href=\"mailto:"
    + alias3(((helper = (helper = helpers.profileemail || (depth0 != null ? depth0.profileemail : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"profileemail","hash":{},"data":data}) : helper)))
    + "\" class=\"emaillink\">"
    + alias3(((helper = (helper = helpers.profileemail || (depth0 != null ? depth0.profileemail : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"profileemail","hash":{},"data":data}) : helper)))
    + "</a></span>\n  <span class=\"joindate\"><i class=\"fa fa-clock-o\"></i>"
    + alias3(((helper = (helper = helpers.joindate || (depth0 != null ? depth0.joindate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"joindate","hash":{},"data":data}) : helper)))
    + "</span>\n</div>\n<div class=\"sideline\"></div>\n<div class=\"socialcontain\">\n  <a href=\""
    + alias3(((helper = (helper = helpers.followerurl || (depth0 != null ? depth0.followerurl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"followerurl","hash":{},"data":data}) : helper)))
    + "\" class=\"sociallink\"><div class=\"follower socialbox\">\n    <span class=\"followersocialnumber\">"
    + alias3(((helper = (helper = helpers.followercount || (depth0 != null ? depth0.followercount : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"followercount","hash":{},"data":data}) : helper)))
    + "</span>\n    <span class=\"followersocialtext\">Followers</span>\n  </div></a>\n  <a href=\""
    + alias3(((helper = (helper = helpers.starredurl || (depth0 != null ? depth0.starredurl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"starredurl","hash":{},"data":data}) : helper)))
    + "\" class=\"sociallink\"><div class=\"starred socialbox\">\n    <span class=\"starredsocialnumber\">"
    + alias3(((helper = (helper = helpers.starredcount || (depth0 != null ? depth0.starredcount : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"starredcount","hash":{},"data":data}) : helper)))
    + "</span>\n    <span class=\"starredsocialtext\">Starred</span>\n  </div></a>\n  <a href=\""
    + alias3(((helper = (helper = helpers.followingurl || (depth0 != null ? depth0.followingurl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"followingurl","hash":{},"data":data}) : helper)))
    + "\" class=\"sociallink\"><div class=\"following socialbox\">\n    <span class=\"followingsocialnumber\">"
    + alias3(((helper = (helper = helpers.followingcount || (depth0 != null ? depth0.followingcount : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"followingcount","hash":{},"data":data}) : helper)))
    + "</span>\n    <span class=\"followingsocialtext\">Following</span>\n  </div></a>\n</div>\n  <div class=\"sideline\"></div>\n  <h2 class=\"organizations\">Organizations</h2>\n  <img src=\"https://avatars0.githubusercontent.com/u/11824325?v=3&s=84\" class=\"organizepic\">\n";
},"useData":true});