// https://github.com/michael/github
var Github = require('github-api');

//set the information your need to use the github-api
var username = "motlj";
var reponame = "example";
var email = "joshuadamotl@gmail.com";
var author = "Joshua Motl";

// https://github.com/settings/tokens
var oauthToken = "25d2f206192bdc3ff3f25163c4fe21f8de4611cb";

//create instance of wrapper
var github = new Github({
	'token':oauthToken,
	'auth':"oauth"
})

//create rep object
var repo = github.getRepo(username, reponame);

//set options
var options = {
	'author':{'name': author, 'email': email},
	'commmitter':{'name': author, 'email': email}
}

//set the changes you want to make
var branchToModiy = 'master';
var fileToModify = 'github/index.html';
var fileContents = 'did this work?';
var commitMsg = 'attempting to change';

//write the changes to Github
repo.write(branchToModiy, fileToModify, fileContents, commitMsg, options, function(err) {});
