(function() {
  'use strict';

  $(document).ready(function(e) {
    var matches = window.location.href.match(/\?code=(.*)/);
    var code = matches && matches[1];
    if (code) {
      $.getJSON('http://localhost:9999/authenticate/' + code, function(data) {
        return $.ajax({
          url: "https://api.github.com/users/austineady",
          headers: {
            "Authorization": "token " + data.token
          }
        }).then(function(data) {
          inputData(data);
          console.log(data);
        }).then(function(repos) {
          return $.ajax({
            url: "https://api.github.com/users/austineady/repos",
            headers: {
              "Autorhization": "token " + data.token
            }
          }).then(function(repos) {
            inputRepos(repos);
          });
        });
      });
    }
  });

  $('button').on('click', function(e) {
    window.location.replace('https://github.com/login/oauth/authorize?client_id=fd3e64371142f3292316');
  });

  function inputData(data) {
    var username = data.login;
    $('.username').html(username);
    var userpic = data.avatar_url;
    $('.userimage').attr("src", userpic);
    var profileimage = data.avatar_url;
    $('.profileimage').attr("src", profileimage);
    $('.profilename').html(data.name);
    $('.profileusername').html(data.login);
    $('.country').html(data.location);
    $('.email').html(data.email);
    $('.joindate').html(data.created_at);
    $('.followersocialnumber').html(data.followers);
    $('.starredsocialnumber').html(data.public_gists);
    $('.followingnumber').html(data.following);
  }

  function inputRepos(repos) {
    console.log(repos);
    $('.repobox').prepend(JST['application']());
  }

})();
