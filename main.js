$('#message-bar').hide();
var characterForTabs = ['#','@','%','$','&','*','~','➰','🌵','❓','♈'];
var charlen = 1;
var editCode =0;

$('li > h3').css('backgroundColor', '#90E000');
$('li > p').show();

$('#add-button').on('click', function(event) {
	event.preventDefault();
	var $form = $('#add-form');
	if($form.css('display') == 'none')
	{
		$form.fadeIn('200');
		$(this).css('transform', 'scale(1.1)');
		$('li').find('p').each(function(index, el) {
			$(this).hide();
			$('li').find('h3').css('backgroundColor', 'gray');
		});
		$(this).text('❌');
		$(this).css('backgroundColor', '#FF0031');
	}
	else{
		$form.fadeOut('200');
		$(this).css('transform', 'scale(1)');
		$(this).text('➕');
		$(this).css('backgroundColor', '#35E000');
	}
});

$('#add-form > button').on('click', function(event) {
	event.preventDefault();
	var len = $('li').length;
	var text = $('textarea').val();

	if(text == ' ' || text == '')
	{
		$('#message-text').html('Invalid!');
		$('div').fadeIn(200).delay(1200).fadeOut(200);
	}
	else if(len < characterForTabs.length && text.trim().length >= 1)
	{
		var $li = $('<li><h3>'+characterForTabs[len]+'</h3><p>'+text+'<code><a href="#" id="edit">edit</a><a href="#" id="delete">delete</a></code></p></li>');
		$('ul').append($li);
		$('textarea').val('');
		$('form').fadeOut(200);
		$('#add-button').css('transform', 'scale(1)');
		$('#add-button').text('➕');
		$('#add-button').css('backgroundColor', '#35E000');
		$li.find('p').show();
		$li.find('h3').css('backgroundColor', '#90E000');
	}
	else{
		$('textarea').val('');
		$('#message-text').html('No more');
		$('div').fadeIn(200).delay(1200).fadeOut(200);
	}
});


$('ul').on('click','#delete', function(event) {
	event.preventDefault();
	var $theLi = $(this).parent('code').parent('p').parent('li');
	$theLi.remove();
});


$('ul').on('click', '#edit', function(event) {
	event.preventDefault();
	var $p = $(this).parent('code').parent('p');
	$('li').each(function(index, el) {
		$(this).find('p').hide();
		$(this).find('h3').css('backgroundColor', 'gray');
	});
	$p.parent('li').children('h3').css('backgroundColor', '#90E000');
	$('#edit-form').fadeIn(200);
	var text = $(this).parent('code').parent('p').text();
	text = text.trim().replace("edit","").replace("delete","").replace("    ","").trim();
	$('#edit-form > textarea').val(text);
	$('#edit-form > button').on('click', function(event) {
		event.preventDefault();
		var newText = $('#edit-form > textarea').val();
		$p.html(newText+'<code><a href="#" id="edit">edit</a><a href="#" id="delete">delete</a></code>');
	$('#edit-form').fadeOut(200);
	$p.show();
	});
});

$(document).on('click','h3', function(event) {
	event.preventDefault();
	var $theP = $(this).next('p');
	var liIndex = $(this).parent('li').index();
	$('#add-button').css('transform', 'scale(1)');
	$('#add-button').text('➕');
	$('#add-button').css('backgroundColor', '#35E000');

	if($theP.css('display') == 'none')
	{
		$theP.show();
		$(this).css('backgroundColor', '#90E000');
		$('li').each(function(index, el) {
			if(index != liIndex)
			{
				$(this).find('p').hide();
				$(this).find('h3').css('backgroundColor', 'gray');
			}
		});
		$('#add-form').hide();
		$('#add-button').css('transform', 'scale(1)');
	}
	else{
		$theP.hide();
		$('li').each(function(index, el) {
			if(index != liIndex)
			{
				$(this).find('h3').css('backgroundColor', 'gray');
			}
		});
		$(this).css('backgroundColor', 'gray');
	}
});



//down below is the old non- working code
// becouse jquery don't work on newly 
//appended elements


/*
$('li').on('click', function(event) {
	event.preventDefault();
	var $theP = $(this).find('p');
	var liIndex = $(this).index();
	if($theP.css('display') == 'none')
	{
		$theP.show();
		$(this).find('h3').css('backgroundColor', '#90E000');
		$('li').each(function(index, el) {
			if(index != liIndex)
			{
				$(this).find('p').hide();
				$(this).find('h3').css('backgroundColor', 'gray');
			}
		});
		$('#add-form').hide();
		$('#add-button').css('transform', 'scale(1)');
	}
	else{
		$theP.hide();
		$(this).find('h3').css('backgroundColor', 'gray');
	}
});
*/

