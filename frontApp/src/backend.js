import $ from 'jquery'
$(function () {

	// Hide Placeholder On Form Focus
	$('[placeholder]').focus(function () {
		$(this).attr('data-text', $(this).attr('placeholder'));
		$(this).attr('placeholder', '');
	}).blur(function () {
		$(this).attr('placeholder', $(this).attr('data-text'));
	});

	// Add Asterisk On Required Field

	$('input').each(function () {
		if ($(this).attr('required') === 'required') {
			$(this).after('<span class="asterisk">*</span>');
		}
	});

	// Convert Password Field To Text Field On Hover

	var passField = $('.password');

	$('.show-pass').hover(function () {

		passField.attr('type', 'text');

	}, function () {

		passField.attr('type', 'password');

	});

	// Confirmation Message On Button

	$('.confirm-membre').click(function () {

		return window.confirm('Ce Membre Sera Supprimer!!');

	});

	$('.confirm-materiel').click(function () {

		return window.confirm('Ce Matérièl Sera Supprimer!!');

	});

	$('.confirm-fourniture').click(function () {

		return window.confirm('Cette Fourniture Sera Supprimer!!');

	});

	$('.confirm-demande').click(function () {

		return window.confirm('Cette Demande Sera Supprimer!!');

	});
});