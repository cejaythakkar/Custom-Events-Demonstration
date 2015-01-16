$(function(){
	(function($){
		$('.lights').on('changeState',function( event ){
			if( event.target === event.currentTarget ){
				if( $(this).hasClass('lightson') ){
					$( this ).removeClass('lightson').addClass('lightsoff');
					return;
				}
				$( this ).removeClass('lightsoff').addClass('lightson');
			}
		}).on('turnalllightsonoroff',function( events , params ){
			$( this ).removeClass( params.removeClass ).addClass( params.addClass );
			
		});
		
		$('.switch').on('click',function( event ){
			$(this).closest('.room').trigger('changeState');
		});
		$('div.masterswitch').on('click',function( event ){
			if($('.lightson').length){
				console.log('some light is on in the house');
				$('.room.lightson').trigger('turnalllightsonoroff',{
					'addClass' : 'lightsoff',
					'removeClass' : 'lightson'
				});
				return;
			}
			$('.room.lightsoff').trigger('turnalllightsonoroff',{
					'addClass' : 'lightson',
					'removeClass' : 'lightsoff'
				});
		});
	})(jQuery);
});

