window.routeMatches = function(url){
	if (!window.location.origin) {
		window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
	}

	let origin = window.location.origin + '/#';
	let path = window.location.href.substring(origin.length);

	if(url === '/') {
		return path === '/';
	}

	return path.indexOf(url) >= 0;
}

window.path = () => window.location.href.substring(window.location.origin.length + 2);

window.ride = {};
let ride = window.ride;

ride.api = {}
ride.user = {};
ride.loggedOut = true;

ride.api.logIn = async function(username, password){
	ride.loggedIn = true;
}

ride.api.logOut = async function(){
	ride.loggedIn = false;
}
