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

			$('#light1').click(function()
					{
						document.getElementById('light1').style.display = 'none';
						document.getElementById('dark').style.display = 'block';
						document.getElementById("theme").style.backgroundColor = 'green';
						document.getElementById("theme1").style.backgroundColor = 'green';
						document.getElementById("form1").style.backgroundColor = 'green';
						document.getElementById("body1").style.backgroundImage = 'url(images/image2.jpg)';

			})

			$('#dark').click(function(){
				
				document.getElementById('dark').style.display = 'none';
				document.getElementById('light1').style.display = 'block';
				document.getElementById('theme').style.backgroundColor = '#262626';
				document.getElementById('theme1').style.backgroundColor = '#2196f3';
				document.getElementById('form1').style.backgroundColor = '#262626';
				document.getElementById("body1").style.backgroundImage = 'url(images/image1.jpg)';
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
			 // enter.addEventListener("contextmenu" , () =>alert('Контекстне меню'));
			 // enter.addEventListener("click" , () =>alert('Ви ввійшли в свій кабінет'));
			  serv.addEventListener("mousemove" , () =>alert('Ви провели мишкою через "Сервіси"'));
			 // trans.addEventListener("transitionend" , () =>alert('Анімація завершена'));
		})


		
		
