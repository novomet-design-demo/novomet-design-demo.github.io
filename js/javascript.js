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
		$('#slide-nav').css({height: getHeight()});
		
	}
	if($('#left-col').height()>$('#right-col').height()){
		$('#right-col').css({height: $('#left-col').height()});
	}
	else{
		$('#left-col').css({height: $('#right-col').height()});
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
	$('#slide-nav').height('100%');
}

function tableToBlocks(){
	$('.page_content').html(wellToHtml()+wellToHtml()+wellToHtml()+wellToHtml());
	getContentSize();
}
/*
function wellToHtml(){
	return (
		'<div class="col-md-4 wellBlock">'+
			'<div class="wellBlockHeader col-md-12"> Векторнефть > Призабойненское > Куст 123 > Скважина 319</td></div>'+
			'<div class="wellBlockContent col-md-12 row">'+
				'<div class="col-md-6"><table class="table">'+
					'<tr><td>Параметр</td><td>Значение</td></tr>'+
					'<tr><td>Режим</td><td>Ручной</td></tr>'+
					'<tr><td>Частота, Гц</td><td>60.2</td></tr>'+
					'<tr><td>Частота зад, Гц</td><td>60.2</td></tr>'+
					'<tr class="well-warning"><td>загрузка, %</td><td>77.4</td></tr>'+
					'<tr><td>Ток двигателя, А</td><td>24.4 23.2 32.4</td></tr>'+
					'<tr><td>Дисб тока двигателя, %</td><td>12.0</td></tr>'+
					'<tr><td>Напряж двиг, В</td><td>3889</td></tr>'+
					'<tr><td>Сопр изол, кОм</td><td>9999</td></tr>'+
					'<tr><td>Активн мощн, кВт</td><td>555.5</td></tr>'+
					'<tr><td>Полная мощн, кВА</td><td>555.5</td></tr>'+
					'<tr><td>Коэфф мощности</td><td>0.875</td></tr>'+
				'</table></div>'+
				'<div class="col-md-6"><table class="table">'+
					'<tr><td>Параметр</td><td>Значение</td></tr>'+
					'<tr><td>Напряжение Ud, В</td><td>555</td></tr>'+
					'<tr><td>Вых напряж ПЧ, В</td><td>444</td></tr>'+
					'<tr><td>Вых ток ПЧ, А</td><td>124.4 123.2 132.4</td></tr>'+
					'<tr class="well-danger"><td>Темпер радиат, С</td><td>116.5</td></tr>'+
					'<tr><td>Вх ток, А</td><td>124.4 123.2 132.4</td></tr>'+
					'<tr><td>Дисб вх тока, %</td><td>12.0</td></tr>'+
					'<tr><td>Межфаз напряж, В</td><td>400 410 412</td></tr>'+
					'<tr><td>Вх напряж АВС, В</td><td>220 222 212</td></tr>'+
					'<tr class="well-warning"><td>Дисб вх напряж, %</td><td>12.0</td></tr>'+
					'<tr><td>Дав на прием, Мпа</td><td>2.534</td></tr>'+
					'<tr><td>Темпер двиг, С</td><td>160.4</td></tr>'+
				'</table></div>'+
			'<div class="clear"></div></div>'+
			'<div class="wellBlockFooter col-md-12">'+
				'<div class="col-md-4 footerPart"><input class="startButton" type="button" value="Пуск"></div>'+
				'<div class="col-md-4 footerPart"><input class="stopButton" type="button" value="Стоп"></div>'+
				'<div class="col-md-4 footerPart"><input class="warningButton" type="button" value="Квитировать"></div>'+
			'</div>'+
		'</div>'
	);
}*/

function wellToHtml(){
	return (
		'<div class="col-md-4 col-sm-6 col-xs-12 wellBlock">'+
			'<div class="wellBlockHeader col-md-12 col-sm-12 col-xs-12"> Векторнефть > Призабойненское > Куст 123 > Скважина 319</td></div>'+
			'<div class="wellBlockContent col-md-12 col-sm-12 col-xs-12" ondblclick="objectInformation()">'+
				'<table class="table">'+
					'<tr><th>Параметр</th><th class="value">Значение</th><th class="tableBorder"></th><th>Параметр</th><th class="value">Значение</th></tr>'+
					'<tr><td>Режим</td><td class="value">Ручной</td><td class="tableBorder"></td><td>Напряжение Ud, В</td><td class="value">555</td></tr>'+
					'<tr><td>Частота, Гц</td><td class="value">60.2</td><td class="tableBorder"></td><td>Вых напряж ПЧ, В</td><td class="value">444</td></tr>'+
					'<tr><td>Частота зад, Гц</td><td class="value">60.2</td><td class="tableBorder"></td><td>Вых ток ПЧ, А</td><td class="value">124.4 123.2 132.4</td></tr>'+
					'<tr><td class="warningRow">загрузка, %</td><td class="value warningRow">77.4</td><td class="tableBorder"></td><td class="errorRow">Темпер радиат, С</td><td class="value errorRow">116.5</td></tr>'+
					'<tr><td class="warningRow">Ток двигателя, А</td><td class="value warningRow">24.4 23.2 32.4</td><td class="tableBorder"></td><td>Вх ток, А</td><td class="value">124.4 123.2 132.4</td></tr>'+
					'<tr><td class="warningRow">Дисб тока двигателя, %</td><td class="value warningRow">12.0</td><td class="tableBorder"></td><td>Дисб вх тока, %</td><td class="value">12.0</td></tr>'+
					'<tr><td class="warningRow">Напряж двиг, В</td><td class="value warningRow">3889</td><td class="tableBorder"></td><td>Межфаз напряж, В</td><td class="value">400 410 412</td></tr>'+
					'<tr><td class="warningRow">Сопр изол, кОм</td><td class="value warningRow">9999</td><td class="tableBorder"></td><td>Вх напряж АВС, В</td><td class="value">220 222 212</td></tr>'+
					'<tr><td>Активн мощн, кВт</td><td class="value">555.5</td><td class="tableBorder"></td><td>Дисб вх напряж, %</td><td class="value">12.0</td></tr>'+
					'<tr><td>Полная мощн, кВА</td><td class="value">555.5</td><td class="tableBorder"></td><td>Дав на прием, Мпа</td><td class="value">2.534</td></tr>'+
					'<tr><td>Коэфф мощности</td><td class="value">0.875</td><td class="tableBorder"></td><td class="errorRow">Темпер двиг, С</td><td class="value errorRow">160.4</td></tr>'+
				'</table>'+
			'</div>'+
			'<div class="wellBlockFooter col-md-12 col-sm-12 col-xs-12">'+
				'<div class="col-md-4 col-sm-4 col-xs-4 footerPart"><input class="startButton" type="button" value="Пуск"></div>'+
				'<div class="col-md-4 col-sm-4 col-xs-4 footerPart"><input class="stopButton" type="button" value="Стоп"></div>'+
				'<div class="col-md-4 col-sm-4 col-xs-4 footerPart"><input class="warningButton" type="button" value="Квитировать"></div>'+
			'</div>'+
		'</div>'
	);
} 

function objectInformation(){
	$('.page_content').html(
		'<div class="tabs col-md-12 col-sm-12 col-xs-11">'+
			'<div id="data" onclick="information(this)">Данные</div>'+
			'<div onclick="setpoints(this)">Уставки</div>'+
			'<div onclick="archive(this)">Архив</div>'+
			'<div onclick="inf(this)">Информация</div>'+
			'<div onclick="downloads(this)">Загр. файлы</div>'+
		'</div><div class="panel col-md-12 col-sm-12 col-xs-11  row information"></div>');
	information('#data');
}

function information(item){
	$('.panel').addClass('information');
	$('.tabs div').removeClass('selected-tab');
	$(item).addClass('selected-tab');
	$('.panel').html(
		'<div class="col-md-12 row">'+
				'<div class="col-md-10">'+
					'<div class="wellBlockHeader col-md-12 col-sm-12 col-xs-12"> Векторнефть > Призабойненское > Куст 123 > Скважина 319</td></div>'+
					'<div class="wellBlockContent col-md-12 col-sm-12 col-xs-12">'+
						'<table class="table">'+
							'<tr><th>Параметр</th><th class="value">Значение</th><th class="tableBorder"></th><th>Параметр</th><th class="value">Значение</th></tr>'+
							'<tr><td>Режим</td><td class="value">Ручной</td><td class="tableBorder"></td><td>Напряжение Ud, В</td><td class="value">555</td></tr>'+
							'<tr><td>Частота, Гц</td><td class="value">60.2</td><td class="tableBorder"></td><td>Вых напряж ПЧ, В</td><td class="value">444</td></tr>'+
							'<tr><td>Частота зад, Гц</td><td class="value">60.2</td><td class="tableBorder"></td><td>Вых ток ПЧ, А</td><td class="value">124.4 123.2 132.4</td></tr>'+
							'<tr><td class="warningRow">загрузка, %</td><td class="value warningRow">77.4</td><td class="tableBorder"></td><td class="errorRow">Темпер радиат, С</td><td class="value errorRow">116.5</td></tr>'+
							'<tr><td class="warningRow">Ток двигателя, А</td><td class="value warningRow">24.4 23.2 32.4</td><td class="tableBorder"></td><td>Вх ток, А</td><td class="value">124.4 123.2 132.4</td></tr>'+
							'<tr><td class="warningRow">Дисб тока двигателя, %</td><td class="value warningRow">12.0</td><td class="tableBorder"></td><td>Дисб вх тока, %</td><td class="value">12.0</td></tr>'+
							'<tr><td class="warningRow">Напряж двиг, В</td><td class="value warningRow">3889</td><td class="tableBorder"></td><td>Межфаз напряж, В</td><td class="value">400 410 412</td></tr>'+
							'<tr><td class="warningRow">Сопр изол, кОм</td><td class="value warningRow">9999</td><td class="tableBorder"></td><td>Вх напряж АВС, В</td><td class="value">220 222 212</td></tr>'+
							'<tr><td>Активн мощн, кВт</td><td class="value">555.5</td><td class="tableBorder"></td><td>Дисб вх напряж, %</td><td class="value">12.0</td></tr>'+
							'<tr><td>Полная мощн, кВА</td><td class="value">555.5</td><td class="tableBorder"></td><td>Дав на прием, Мпа</td><td class="value">2.534</td></tr>'+
							'<tr><td>Коэфф мощности</td><td class="value">0.875</td><td class="tableBorder"></td><td class="errorRow">Темпер двиг, С</td><td class="value errorRow">160.4</td></tr>'+
						'</table>'+
					'</div>'+
					'<div class="wellBlockFooter col-md-12 col-sm-12 col-xs-12">'+
						'<div class="col-md-4 col-sm-4 col-xs-4 footerPart"><input class="startButton" type="button" value="Пуск"></div>'+
						'<div class="col-md-4 col-sm-4 col-xs-4 footerPart"><input class="stopButton" type="button" value="Стоп"></div>'+
						'<div class="col-md-4 col-sm-4 col-xs-4 footerPart"><input class="warningButton" type="button" value="Квитировать"></div>'+
					'</div>'+
				'</div>'+
				'<div class="col-md-2" style="height: 100%;">'+
					'<div class="rightCol">'+
						'<input type="button" value="Отобразить все"/>'+
						'<input type="button" value="Запросить данные"/>'+
					'</div>'+
				'</div>'+
		'</div>'
	);
	getContentSize();
}

function setpoints(item){
	$('.panel').removeClass('information');
	$('.tabs div').removeClass('selected-tab');
	$(item).addClass('selected-tab');
	$('.panel').html(
			'<div class="col-md-3">'+
				'<div class="well">'+
					'<ul class="nav nav-list">'+
						'<li class="nav-header">Оборудование</li>'+
						'<li onclick="selectSetpoint(this)">Станция</li>'+
						'<li onclick="selectSetpoint(this)">Двигатель</li>'+
						'<li onclick="selectSetpoint(this)">ТМПН</li>'+
						'<li onclick="selectSetpoint(this)">ЧРП</li>'+
						'<li onclick="selectSetpoint(this)">Тип ТМС</li>'+
					'</ul>'+
					'<ul class="nav nav-list">'+
						'<li class="nav-header">Защиты</li>'+
						'<li class="not-selected">'+
							'<ul class="nav nav-list">'+
								'<li class="nav-header">Защиты по сети</li>'+
								'<li onclick="selectSetpoint(this)">Превышение питания</li>'+
								'<li onclick="selectSetpoint(this)">Снижение питания</li>'+
								'<li onclick="selectSetpoint(this)">Дисбаланс напряжения</li>'+
							'</ul>'+
						'</li>'+
						'<li class="not-selected">'+
							'<ul class="nav nav-list">'+
								'<li class="nav-header">Защиты двигателя</li>'+
								'<li onclick="selectSetpoint(this)">Перегруз</li>'+
								'<li onclick="selectSetpoint(this)">Недогруз</li>'+
								'<li onclick="selectSetpoint(this)">Турбинное вращение</li>'+
							'</ul>'+
						'</li>'+
						'<li class="not-selected">'+
							'<ul class="nav nav-list">'+
								'<li class="nav-header">Защиты по ТМС</li>'+
								'<li onclick="selectSetpoint(this)">Давление на приеме насоса</li>'+
								'<li onclick="selectSetpoint(this)">Перегрев двигателя</li>'+
								'<li onclick="selectSetpoint(this)">Сопротивление изоляции</li>'+
							'</ul>'+
						'</li>'+
						'<li class="not-selected">'+
							'<ul class="nav nav-list">'+
								'<li class="nav-header">Защиты дополнительные</li>'+
								'<li onclick="selectSetpoint(this)">Защита ЧРП</li>'+
							'</ul>'+
						'</li>'+
					'</ul>'+
				'</div>'+
			'</div>'+
			'<div class="col-md-9">'+
		'</div>'
	);
	getContentSize();
}

function archive(item){
	$('.panel').removeClass('information');
	$('.tabs div').removeClass('selected-tab');
	$(item).addClass('selected-tab');
	$('.panel').html("");
	getContentSize();
}

function inf(item){
	$('.panel').removeClass('information');
	$('.tabs div').removeClass('selected-tab');
	$(item).addClass('selected-tab');
	$('.panel').html("");
	getContentSize();
}

function downloads(item){
	$('.panel').removeClass('information');
	$('.tabs div').removeClass('selected-tab');
	$(item).addClass('selected-tab');
	$('.panel').html(
		'<div class="col-md-12 col-sm-12 col-xs-12"><button type="button" class="btn btn-primary btn-md">Запросить архив</button></div>'+
		'<div class="col-md-12 col-sm-12 col-xs-12" style="margin-top: 6px">'+
			'<table class="table table-bordered">'+
				'<tr><td class="leftTd">12.12.2012 13:14:15</td><td>'+
					'<div class="progress">'+
						'<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">'+
							'60%'+
						'</div>'+
					'</div></td>'+
				'</tr>'+
				'<tr><td class="leftTd">10.11.2012 10:11:12</td><td>Загружен</td></tr>'+
				'<tr><td class="leftTd"></td><td></td></tr>'+
				'<tr><td class="leftTd"></td><td></td></tr>'+
				'<tr><td class="leftTd"></td><td></td></tr>'+
			'</table>'+
		'</div>'
	);
	getContentSize();
}

function showOilfieldModal(){
	if($('.selectedOilfieldRow').size())
		$('#oilfield-modal').modal('show');
}

function showWellPadsModal(){
	if($('.selectedWellPadsRow').size())
		$('#wellPads-modal').modal('show');
}

function showWellsModal(){
	if($('.selectedWellsRow').size())
		$('#wells-modal').modal('show');
}

function selectOilfieldRow(item){
	$('tr').removeClass('selectedOilfieldRow');
	$(item).addClass('selectedOilfieldRow');
}

function selectWellPadsRow(item){
	$('tr').removeClass('selectedWellPadsRow');
	$(item).addClass('selectedWellPadsRow');
}

function selectWellsRow(item){
	$('tr').removeClass('selectedWellsRow');
	$(item).addClass('selectedWellsRow');
}

function selectObject(element){
	$('tr').removeClass('selectedElement');
	$(element).addClass('selectedElement');
}

function selectSetpoint(item){
	$('li').removeClass('selectedSetpoint');
	$(item).addClass('selectedSetpoint');
}