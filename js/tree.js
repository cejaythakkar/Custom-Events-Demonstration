$(function(){
	(function($){
		$("#tree li.haveChild").on('tree.expand',function( event ){
			if( event.target = event.currentTarget ){
				$(this).addClass('expanded').removeClass('collapsed');
				$(this).children('ul').slideDown();
			}
		}).on('tree.collapse',function( event ){
			if( event.target === event.currentTarget ){
				$(this).addClass('collapsed').removeClass('expanded');
				$(this).children('ul').slideUp();
			}
		});
		
		$("#tree li.haveChild>a").on('click',function( event ){				
			if(!($(this).parent('li').hasClass('collapsed'))){
				$(this).closest('li.haveChild').trigger('tree.collapse');
				return;
			}
			$(this).closest('li.haveChild').trigger('tree.expand');
		});
		
	})(jQuery);
});


	