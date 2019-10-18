	$(document).ready(function(){
			$('.menu-toggle').click(function(){
				$('nav').toggleClass('active')
				
			})
	
			$('#list').click(function(){
				$('form').toggleClass('active1')
	
			})

		
			$('#cancel').click(function(){
				$('form').toggleClass('active1')
			})

			$('#light1').click(function(){
				
				$('#styleslight').attr('href','styleslight.css')
				
			})

			$('#dark').click(function(){
				
				$('#styleslight').attr('href','styles.css')
				
			})

			$('#E-mail').blur(function()          //whenever you click off an input element
				{                   
   				 if( !$(this).val() ) {                      //if it is blank. 
         				alert('Введіть E-mail!');    
   				}
				});
			$('#password').blur(function()          //whenever you click off an input element
				{                   
   				 if( !$(this).val() ) {                      //if it is blank. 
         				alert('Введіть пароль!');    
   				}
				});
			  enter.addEventListener("contextmenu" , () =>alert('Контекстне меню'));
			  enter.addEventListener("click" , () =>alert('Ви ввійшли в свій кабінет'));
			  serv.addEventListener("mousemove" , () =>alert('Ви провели мишкою через "Сервіси"'));
			  trans.addEventListener("transitionend" , () =>alert('Анімація завершена'));
		})


		
		
