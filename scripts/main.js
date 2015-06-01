(function() {
  'use strict';

  function app(token) {
    console.log(token);
    $.ajax({
    url: "https://api.github.com/users/austineady",
    headers: {
      "Authorization": "token " + token
    }
  }).then(function(data) {
    inputHeader(data);
    inputSideBar(data);
    console.log(data);
  }).then(function(repos) {
    return $.ajax({
      url: "https://api.github.com/users/austineady/repos",
      headers: {
        "Authorization": "token " + token
      }
    }).then(function(repos) {
      console.log(repos);
      repos.forEach(function(repo) {
        return $.ajax({
          url: String(repo.url),
          headers: {
            "Authorization": "token " + token
          }
        }).then(function(repo) {
          inputRepos(repo);
        });
      });
    });
  });
  }

  $(document).ready(function(e) {
    var token = localStorage.getItem('GITHUB_TOKEN');
    if (token) {
      app(token);
    } else {
      var matches = window.location.href.match(/\?code=(.*)/);
      var code = matches && matches[1];
      if (code) {
        $.getJSON('http://localhost:9999/authenticate/' + code, function(data) {
          localStorage.setItem('GITHUB_TOKEN', data.token);
          window.location.replace('/');
      });
    }
  }
});

  $('button').on('click', function(e) {
    window.location.replace('https://github.com/login/oauth/authorize?client_id=fd3e64371142f3292316');
  });

  function inputHeader(data) {
    $('.header').append(JST['header']({
      userimage: data.avatar_url,
      username: data.login
    }));
  }

  function inputSideBar(data) {
    $('.userimage').attr("src", data.avatar_url);
    $('.username').html(data.login);
    $('.sidebar').append(JST['sidebar']({
      profileimage : data.avatar_url,
      profilename : data.name,
      profileusername : data.login,
      profilelocation : data.location,
      profileemail : data.email,
      joindate : (new Date(data.created_at)),
      followercount : data.followers,
      followerurl: data.followers_url,
      starredcount : data.public_gists,
      starredurl: data.gists_url,
      followingcount : data.following,
      followingurl: data.following_url,
    }));
  }

  function inputRepos(repo) {
    console.log(repo.updated_at);
    if(repo.fork === true) {
      $('.repobox').prepend(JST['application']({
      repotitle : repo.name,
      repourl : repo.html_url,
      forkedfrom : "forked from" + " " + repo.parent.full_name,
      forkeduserurl : repo.parent.owner.url,
      updatetime : "Last updated " + (new Date(repo.updated_at)),
      repolanguage : repo.language,
      stargazerscount : repo.stargazers_count,
      forkcount : repo.forks_count,
    }))} else {
      $('.repobox').prepend(JST['application']({
      repotitle : repo.name,
      repourl : repo.html_url,
      updatetime : "Last updated " + (new Date(repo.updated_at)),
      repolanguage : repo.language,
      stargazerscount : repo.stargazers_count,
      forkcount : repo.forks_count,
    }
  ));
  }
}

    $('.repositories').on('click', function(e) {
      $('.repositories').attr("box-shadow", "0, 2px, 2px rgba(250, 250, 250, 1)");
      inputRepos(repo);
    });

})();
