$(document).ready(function(){
	makeAjaxReqCurrent()
	onClickFav();
	
	
});

function makeAjaxReqFav() {
	$.ajax({
		url: 'https://gh-pinned-repos.now.sh/?username=fatmaMy',
		type: 'GET',
		dataType: 'json'
	}).success(favoriteHandle)

	.fail(function(error){
		$('#error').fadeIn();
	});
}


function onClickFav(e) {
	$('#fav').click(function(e){
		$('#current').fadeOut('');
		$('#favorite').fadeIn();
		$('#error').fadeOut();
		e.preventDefault();
		makeAjaxReqFav();

	});
}

function makeAjaxReqCurrent() {

	$.ajax({
		url: 'https://api.github.com/users/fatmaMY/repos?sort=updated&per_page=5',
		type: 'GET',
		dataType: 'json'
	}).success(resultHandler)

	.fail(function(error){
		$('#error').fadeIn();
	});
  $('#curr').click(function(e){
		$('#favorite').fadeOut('');
		$('#current').fadeIn();
		$('#error').fadeOut();
		e.preventDefault();

	});
	
}

function onClickCurrent(){
	$('#curr').click(function(e){
		$('#favorite').fadeOut('');
		$('#current').fadeIn();
		$('#error').fadeOut();
		e.preventDefault();
		makeAjaxReqCurrent();
		
		
	});
}

function resultHandler(data) {
	var html=''
	html+='<div class="row">'
	html+='<ul>'
	$.each(data,function(i,item){
	
		html+='<li><a href="'+item.html_url+'" target="_blank">'+item.name+'</a></li>'+'Last update at: '+item.pushed_at.replace(/\T.*$/g,"")
	    });
	    html+='</ul>'
		html+='</div>'
		html
		
	$('#current').html(html);

}

function favoriteHandle(data) {
	var html2=''
	html2+='<div class="row">'
	html2+='<ul>'
	$.each(data,function(i,item){
	
		html2+='<li><a href="https://github.com/fatmaMY/'+item.repo+'" target="_blank">'+item.repo+'</a></li>'+'Language: '+item.language
	    });
	    html2+='</ul>'
		html2+='</div>'
		html2
		
	$('#favorite').html(html2);

}
