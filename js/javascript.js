$(function() {getContentSize();});
			
$(window).resize(function(){getContentSize();});

function getContentSize(){
	if ($('#auth-content').size()){
		$('#auth-content').css({height: '100%', width: '100%'});
		if(($(window).height())>$('#auth-content').height()){
			$('#auth-content').css({height: $(window).height()});
			$('.v_center').css({marginTop: '-152px'});					
		}
		else {
			$('.v_center').css({marginTop: '0px'});	
		}
	}
	else{
		setColsSize();
		$('#content').css({position: 'relative', width: '100%', height: '100%'});
		if(($(window).height()-$('header').height())>$('#content').height()){
			$('#content').css({position: 'absolute', width: '100%', height: $(window).height()-$('header').height()});
		}
		$('aside').css({height: getHeight()});
		$('article').css({height: getHeight()});
		$('#aside_button').css({height: getHeight()});
		$('#slide-nav').css({height: getHeight(), background: 'linear-gradient(rgb(90, 150, 220), rgb(10,70,140))'});
	}
}

/*function select(item){
	$('aside div').removeClass('selected');
	$(item).addClass('selected');
}*/
function select(path){
	window.location.href=path;
}
function leftMenuItemsDisplaying(block, arrow){
	if($(block).attr('display')=='show'){
		$(block).css('display', 'none');
		$(block).attr('display', 'withhold');
		$(arrow).find('.arrow').removeClass('visible');
		$(arrow).find('.arrow').addClass('withhold');
	}
	else if($(block).attr('display')=='withhold'){
		$(block).css('display', 'inline-block');
		$(block).attr('display', 'show');
		$(arrow).find('.arrow').removeClass('withhold');
		$(arrow).find('.arrow').addClass('visible');
	}
	getContentSize();
}

function getHeight(){
	return $('#content').height();
}

function setColsSize(){
	$('aside').height('100%');
	$('article').height('100%');
}




/*
$(function() {
	var authContent = React.createClass({		
		onClick: function(){
			auth();
		},
		render: function(){
			return(
				React.createElement('div', {className: "col-md-12 col-xs-12 row", id: "auth-content"},
					React.createElement('div', {className: "col-md-4 col-sm-4 col-xs-3 v_center"}),
					React.createElement('div', {className: "col-md-4 col-sm-4 col-xs-3 v_center"},
						React.createElement('div', null, 
							React.createElement('div', {className: "logo-img"},
								React.createElement('img', {alt: "logo", src: "img/logo-novomet.png"})
							),
							React.createElement('div', {className: "name"}, 'Автоматизированная система удалённого контроля и управления наземным оборудованием скважин')
						),
						React.createElement('form', null,
							React.createElement('div', {className: "form-group"},
								React.createElement('label', {htmlFor:"inputEmail"}, 'Логин:'),
								React.createElement('input', {type: "email", className:"form-control", id:"inputEmail", placeholder:"Введите логин"})
							),
							React.createElement('div', {className: "form-group"},
								React.createElement('label', {htmlFor: "inputPassword"}, 'Пароль:'),
								React.createElement('input', {type: "password", className: "form-control", id: "inputPassword", placeholder: "Введите пароль"})
							),
							React.createElement('button', {type:"button", className: "btn btn-default", onClick: this.onClick}, 'Войти')
						)
					),
					React.createElement('div', {className: "col-md-4 col-sm-4 col-xs-3 v_center"})
				)
			);
		}
	});
	
	var header = React.createClass({
		render: function(){
			return(
				React.createElement('div', {className: 'row'},
					React.createElement('header', {className: 'col-md-12'},
						React.createElement('div', {className: 'header_content'},
							React.createElement('img', {alt: "logo", src: 'img/logo-novomet.png'}, null)
						),
						React.createElement('div', {className: 'header_content'},
							React.createElement('span', null, 'Автоматизированная система удалённого контроля и управления наземным оборудованием скважин')
						)
					)
				)
			);
		}
	});		
	
	var navbar = React.createClass({
		render: function(){
			return(
				React.createElement('div', {className: "navbar navbar-inverse col-md-2 col-sm-2 col-xs-1", role: "navigation", id: "slide-nav"},
					React.createElement('div', {className: "nav-container"},
						React.createElement('div', {className: "navbar-header"},
							React.createElement('a', {className: "navbar-toggle"}, 
								React.createElement('span', {className: "sr-only"}, 'Toggle navigation'),
								React.createElement('span', {className: "icon-bar"}),
								React.createElement('span', {className: "icon-bar"}),
								React.createElement('span', {className: "icon-bar"})
							)
						),
						React.createElement('div', {id: "slidemenu"},
							React.createElement('aside', null,
								React.createElement('div', {className: "menu-user-block"},
									React.createElement('div', {id: "username"}, 'Имя сотрудника'),
									React.createElement('div', {id: "department"}, 'Отдел'),
									React.createElement('div', null,
										React.createElement('input', {type: "button", value: "Выйти"})
									)
								),
								React.createElement('div', {className: "menu-block"},
									React.createElement('div', {className: "menu-block-title",  onclick: "leftMenuItemsDisplaying('#monitoring', this)"},
										React.createElement('div', {className:"arrow visible"}),
										React.createElement('div', {className: "block-title-text"}, 'Мониторинг'),
										React.createElement('div', {className: "status"},
											React.createElement('div', {className: "error"}, '003'),
											React.createElement('div', {className: "warning"}, '002'),
											React.createElement('div', {className: "work"}, '001')
										)
									),
									React.createElement('div', {className: "menu-block-content", id: "monitoring", display: "show"},
										React.createElement('div', {className: "link", onclick: "select(this)"}, 'Таблица'),
										React.createElement('div', {className: "link", onclick:"select(this)"}, 'Карта')
									)
								),
								React.createElement('div', {className: "menu-block"},
									React.createElement('div', {className: "menu-block-title", onclick: "leftMenuItemsDisplaying('#analytics', this)"},
										React.createElement('div', {className: "arrow visible"}),
											React.createElement('div', {className: "block-title-text"}, 'Аналитика')
									),
									React.createElement('div', {className: "menu-block-content", id: "analytics", display:"show"},
										React.createElement('div', {className: "link", onclick: "select(this)"}, 'Отчеты'),
										React.createElement('div', {className: "link", onclick: "select(this)"}, 'OLAP')							
									)
								),
								React.createElement('div', {className: "menu-block"},
									React.createElement('div', {className: "menu-block-title", onclick: "leftMenuItemsDisplaying('#settings', this)"},
										React.createElement('div', {className: "arrow visible"}),
										React.createElement('div', {className: "block-title-text"}, 'Настройки')
									),
									React.createElement('div', {className: "menu-block-content", id: "settings", display: "show"},
										React.createElement('div', {className: "link", onclick: "select(this)"}, 'Общие настройки'),
										React.createElement('div', {className: "link", onclick: "select(this)"}, 'Параметры объектов')							
									)
								),
								React.createElement('div', {className: "menu-block"},
									React.createElement('div', {className: "menu-block-title", onclick: "leftMenuItemsDisplaying('#guide', this)"},
										React.createElement('div', {className: "arrow visible"}),
										React.createElement('div', {className: "block-title-text"}, 'Справочники')
									),
									React.createElement('div', {className: "menu-block-content", id: "guide", display: "show"},
										React.createElement('div', {className: "link", onclick: "select(this)"}, 'Скважины'),	
										React.createElement('div', {className: "link", onclick: "select(this)"}, 'Параметры измерений')				
									)
								)
							)
						)
					)
				)
			);
		}
	});
	
	var article = React.createClass({
		render: function(){
			return(
				React.createElement('article', {className: "col-md-10 col-sm-10 col-xs-11"},
					React.createElement('div', {className: "page_content"})
				)
			);
		}
	});
	
	var page = React.createClass({
		getInitialState: function() {
			return {auth: false};
		},
		render: function(){
			if (this.state.auth == true){
				return(
					React.createElement('div', null,
						React.createElement(header),
						React.createElement('div', {className: "col-md-12 col-xs-12 row", id:"content"},
							React.createElement(navbar),
							React.createElement(article)
						)
					)
				);
			}
			else{return React.createElement(authContent);}
		}
	});
	
	var container = React.render(React.createElement(page), document.getElementById('container'));
	getContentSize();
	
	function auth(){
		container.replaceState({auth: true});
		getContentSize();
	}
});*/
