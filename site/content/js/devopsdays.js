$(document).ready( function(){


	$('span.pullquote').each(function(index) {
		var $parentParagraph = $(this).parent('p');
		$parentParagraph.css('position', 'relative');
		$(this).clone().addClass('pulledquote').prependTo($parentParagraph);
	});


	var origWrite = document.write;	
	var tmpDocWrite = document.write;
	document.write = function(arg){
	    //some code to parse the document.write content
	 	var newtext='<div>'+arg.replace("font-size:90%", "")+'</div>';
		$('#tweetboxwrap').empty();
		var wrap=document.getElementById('tweetboxwrap');
		wrap.innerHTML=newtext;
	};
	$.getScript('http://tweetfeed.com/showwidget.php?k=devopsdays+OR++@devopsdays+OR+devopsdays09&l=3&w=300&u=devopsdays', function(){
	    //called once the script is "gotten"
	    document.write = tmpDocWrite;
	});
	
});
