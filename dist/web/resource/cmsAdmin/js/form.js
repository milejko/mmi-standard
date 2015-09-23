/*jslint unparam: true */
/*global document, $, jQuery, id, request */

function urlencode(str) {
	"use strict";
	str = String(str);
	str = str.replace(',', '%2C');
	str = str.replace(' ', '+');
	str = str.replace('&', '%26');
	str = str.replace('~', '%7E');
	str = str.replace('?', '%3F');
	str = str.replace('=', '%3D');
	str = str.replace(';', '%3B');
	str = str.replace('\'', '%27');
	str = str.replace('"', '%22');
	return str;
}

function fieldValidationOnBlur(element) {
	"use strict";
	var fieldValue = $(element).val(),
			fid = $(element).attr('id'),
			formId = fid.substr(0, fid.lastIndexOf('-')),
			name = fid.substr(fid.lastIndexOf('-') + 1),
			errorsId = formId + '-' + name + '-errors';
	if ('checkbox' === $(element).attr('type') && !$(element).is(':checked')) {
		fieldValue = '0';
	}
	$.post(request.baseUrl + '/?module=cms&controller=form&action=validate', {
		ctrl: $('#' + formId + '-' + formId + '__ctrl').val(), 
		field: name, 
		value: urlencode(fieldValue)
	},
	function (result) {
		if (result) {
			$('#' + errorsId).parent().addClass('error');
		} else {
			$('#' + errorsId).parent().removeClass('error');
		}
		$('#' + errorsId).html(result);
	});
}

$(document).ready(function () {
	"use strict";

	//podłączenie walidacji na blurze
	$('.validate').on('blur', function () {
		fieldValidationOnBlur($(this));
	});

	//checkbox na change robi blur (walidacja)
	$('input[type="checkbox"].validate').on('change', function () {
		$(this).trigger('blur');
	});

	//pola do przeciwdziałania robotom bez JS
	$('div.antirobot > input').val('js-' + $('div.antirobot > input').val() + '-js');

});