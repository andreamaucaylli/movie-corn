$(document).ready(cargarPagina);

var cargarPagina = function () {
    $('#titulo').keyup(buscarPorTitulo);
    $('#i').keyup(buscarPorAño);

    var buscarPorTitulo = function () {
        if (event.keyCode == 13) {
            $('#search-by-title-button').click();
        } else {
            return false
        }
    };

    var buscarPorAño = function () {
        if (event.keyCode == 13) {
            $('#search-by-id-button').click();
        } else {
            return false
        }
    };

    $('#search-by-id-button').click(busquedaPorTitulo);

    var busquedaPorTitulo = function () {
        var c = $('#search-by-id-form').serialize();
        var d = 'http://www.omdbapi.com/?' + c;
        var e = $('#search-by-id-request');
        e.find('a').attr('href', d).html(d);
        e.show('slow');
        var f = $('#search-by-id-progress');
        f.show('slow');
        var g = $('#search-by-id-response');
        $.ajax({
            type: 'GET',
            dataType: 'text',
            url: '/?' + c,
            statusCode: {
                403: function () {
                    g.find('pre').html('HTTP 403 Forbidden!')
                }
            },
            success: function (a) {
                g.find('pre').html(a.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
            },
            complete: function () {
                f.hide();
                g.show('slow')
            }
        })
    };

    $('#search-by-id-reset').click(function () {
        var a = $('#search-by-id-request');
        a.hide('slow');
        a.find('a').attr('href', 'javascript:;').html('');
        var b = $('#search-by-id-progress');
        b.hide('slow');
        var c = $('#search-by-id-response');
        c.hide('slow');
        c.find('pre').html('');
    });
    $('#search-by-title-button').click(function () {
        var c = $('#search-by-title-form').serialize();
        var d = 'http://www.omdbapi.com/?' + c;
        var e = $('#search-by-title-request');
        e.find('a').attr('href', d).html(d);
        e.show('slow');
        var f = $('#search-by-title-progress');
        f.show('slow');
        var g = $('#search-by-title-response');
        $.ajax({
            type: 'GET',
            dataType: 'text',
            url: '/?' + c,
            statusCode: {
                403: function () {
                    g.find('pre').html('HTTP 403 Forbidden!')
                }
            },
            success: function (a) {
                g.find('pre').html(a.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
            },
            complete: function () {
                f.hide();
                g.show('slow')
            }
        })
    });
    $('#search-by-title-reset').click(function () {
        var a = $('#search-by-title-request');
        a.hide('slow');
        a.find('a').attr('href', 'javascript:;').html('');
        var b = $('#search-by-title-progress');
        b.hide('slow');
        var c = $('#search-by-title-response');
        c.hide('slow');
        c.find('pre').html('');
    });
};

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