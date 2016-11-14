$(function() {
	setTimeout(function(){
		$(".logo-temporal").addClass("ocultar");
		$("#logo-login").removeClass("ocultar");
		$("#login").removeClass("ocultar");
		/*$("#logo").removeClass("oculto");
		$("#logo-login").css({'height':"30vh"});*/
	}, 5000);
	$.ajax({
		url: '//connect.facebook.net/es_ES/all.js',
		dataType: 'script',
		cache: true,
		success: function() {
			FB.init({
				appId: '1271991989487510',
				status: true,
				cookie: true,
				xfbml: true
			});
			FB.Event.subscribe('auth.authResponseChange', function(response) {
				if (response && response.status == 'connected') {
					window.location="pelis.html";
					FB.api('/me', function(response) {
						alert('Hola' + response.name);
					});
				}
			});
		}
	});
});













































/*$.ajax({
  url: '//connect.facebook.net/es_ES/all.js',
  dataType: 'script',
  cache: true,
  success: function() {
  alert('Facebook listo');
  }
});*/
/*
$(document).ready(function(){
  var app_id = '1271991989487510';
  var scopes = '';

  var btn_login = '<a href="#" id="login" class="btn btn-primary">Iniciar sesión</a>';

  var div_session = "<div id='facebook-session'>"+
	  "<strong></strong>"+
	  "<img>"+
	  "<a href='#' id='logout' class='btn btn-danger'>Cerrar sesión</a>"+
	  "</div>";

  window.fbAsyncInit = function() {

	FB.init({
	appId      : 1271991989487510,
	status     : true,
	cookie     : true,
	xfbml      : true,
	version    : 'v2.1'
	});


	FB.getLoginStatus(function(response) {
	statusChangeCallback(response, function() {});
	});
  };

  var statusChangeCallback = function(response, callback) {
	console.log(response);

	if (response.status === 'connected') {
	  getFacebookData();
	  if(response.status === "connected" && (window.location.pathname == "/index.html" || window.location.pathname == "/index.html")){
	  window.location = 'buscador.html';
	  }
	} else {
	callback(false);
	}
  }

  var checkLoginState = function(callback) {
	FB.getLoginStatus(function(response) {
	  callback(response);
	});
  }

  var getFacebookData =  function() {
	FB.api('/me', function(response) {
	$('#login').after(div_session);
	$('#login').remove();
	$('#facebook-session strong').text("Bienvenido: "+response.name);
	$('#facebook-session img').attr('src','http://graph.facebook.com/'+response.id+'/picture?type=large');
	});
  }

  var facebookLogin = function() {
	checkLoginState(function(data) {
	if (data.status !== 'connected') {
	  FB.login(function(response) {
	  if (response.status === 'connected')
		getFacebookData();
	  }, {scope: scopes});
	}
	})
  }

  var facebookLogout = function() {
	checkLoginState(function(data) {
	if (data.status === 'connected') {
	FB.logout(function(response) {
	  $('#facebook-session').before(btn_login);
	  $('#facebook-session').remove();
	});
	}
	});

  }

  $(document).on('click', '#login', function(e) {
	e.preventDefault();
	facebookLogin();
  });

  $(document).on('click', '#logout', function(e) {
	e.preventDefault();
	if (confirm("¿Está seguro?"))
	facebookLogout();
	else
	return false;
  });
})
*/
