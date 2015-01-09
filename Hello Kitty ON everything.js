load_script('//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js', function() {
	load_script('//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js', function() {});
});

wwidth = $(window).width();
wheight = $(window).height();
enabledeffects = '';
var chrid = chrome.i18n.getMessage("@@extension_id");

$(document).ready(function() {	
	chrome.storage.sync.get('firstrun',function(data){
		if (typeof(data.firstrun) == 'undefined' || data.firstrun == true){
			chrome.storage.sync.set({firstrun:'false',allowextension:'yes','allowadonbutton':'yes','enabledeffects':'flying,colorchange,circles,umgedreht,memes,virus,payment,hellokitty,hahaha','onlyonspecialdays':'all',whitelist:'nickw.de'}, function() {});
		}
		chrome.storage.sync.get('allowextension',function(data){
			if (data.allowextension == 'yes'){
				chrome.storage.sync.get('onlyonspecialdays',function(data){
					allow = false;
					var currentDate = new Date()
					var day = currentDate.getDate()
					var month = currentDate.getMonth() + 1
					var weekday = currentDate.getDay();
					switch (data.onlyonspecialdays){
						case 'all': 
							allow = true;
						break;
						case 'firstapril':
							if (day == 1 && month == 4) allow = true;	
						break;
						case 'weekend':
							if (weekday == 6 || weekday == 0) allow = true;
						break;
						case 'inweek':
							if (weekday != 6 && weekday != 0) allow = true;
						break;
					}
					
					if (allow){
						chrome.storage.sync.get('enabledeffects',function(data){
							enabeff = data.enabledeffects;
							chrome.storage.sync.get('whitelist',function(data){
								inittroll(enabeff,data.whitelist);	
							});
						});
					}
				});
				
			}
		});
	});
});

function inittroll(effects){
	troll = new trolling();
	troll._init(effects);	
}

trolling = function(){
	this.adddomobj = function(){
		$('head').append('<link href=https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,400" rel="stylesheet" type="text/css">');
	}	
	this._init = function(effects,whitelist){
		self = this;
		this.adddomobj();
		console.log(whitelist);
		if (window.location.hostname != 'nickw.de'){ //Oder ist einer der Whitelist Hostname drauf?
			allowedeffects = effects.split(',');
			hallo = allowedeffects[Math.floor(Math.random() * (allowedeffects.length - 0)) + 0];
			effect = new window[hallo];
			console.log(effect);
			effect.init();
			chrome.storage.sync.get('allowadonbutton',function(data){
				if (data.allowadonbutton == 'yes') $('body').append('<div id="youaretrolled"><a href="http://nickw.de/troll-extension"><img src="chrome-extension://'+chrid+'/troll-small.png" width="64"/></a></div>');			
			});
		}		
	}
	this.toggletrolledby = function(){
		$('#youaretrolled').toggle();
	}
}

flying = function(){
	this.init = function(){
		self = this;
		$('*').each(function(){
			$(this).css('position','fixed');
		});
		self.start();
	}
	this.start = function(){
		self = this;
		$('*').each(function(){
			$(this).animate({
				top:  Math.round(Math.random() * wheight)+ 'px',
				left: Math.round(Math.random() * wwidth) + 'px'
			}, 400);
		});
		setTimeout(function(){self.start()},500);
	}
}

colorchange = function(){
	this.colors = 'indianred,mediumseagreen,royalblue,mediumvioletred,dimgray,cornflowerblue,peru,gold,navajowhite'.split(',');
	this.init = function(){
		self = this;
		$('*').each(function(){	
			$(this).css('background',self.colors[Math.floor((Math.random()*self.colors.length)+1)]);
		});
		setTimeout(function(){self.init()},1500);
	}
}

circles = function(){
	this.init = function(){
		newzeichnen('kreis');
	}
}

umgedreht = function(){
	this.init = function(){
		$('*').addClass('flip');
	}
}

memes = function(){
	this.init = function(){
		srcmemes = new Array();
		srcmemes[0] = 'chrome-extension://'+chrid+'/hello-kitty.jpg';
		srcmemes[1] = 'chrome-extension://'+chrid+'/angry-no.png';
		srcmemes[2] = 'chrome-extension://'+chrid+'/misc-jackie-chan.png';
		srcmemes[3] = 'chrome-extension://'+chrid+'/happy-cuteness-overload.png';
		srcmemes[4] = 'chrome-extension://'+chrid+'/laughing-lol-crazy.png';
		srcmemes[5] = 'chrome-extension://'+chrid+'/angry-desk-flip.png';
		$('img').each(function(){
			random = Math.floor((Math.random()*5));
			$(this).attr('src',srcmemes[random]);
		});
	}
}

virus = function(){
	this.init = function(){
		$('body').append('<div class="hundertprozentwidth"><div class="virusohmygod"><h1>Warning a Virus!</h1><span class="alerticon"><img src="chrome-extension://'+chrid+'/images/error.png" alt="error" /></span><p>OhOhOh, there\'s a Virus on your system, which tries to get all your internet data. :o <br/> <a href="http://http://www.nickw.de/troll-extension/"> Troll Extension </a></p></div></div>');
		$('.hundertprozentwidth').css('top',(wheight/2)-$('.hundertprozentwidth').height());
	}
}

payment = function(){
	this.init = function(){
		self = this;
		$('body').append('<div class="hundertprozentwidth"><div class="virusohmygod payment"><h1>Payment</h1><span class="alerticon"><img src="chrome-extension://'+chrid+'/images/check.png" alt="confirm" /></span><p>Press "OK" to confirm your payment to '+window.location.host+'! With pressing the "OK" button, you automaticly confirm the the general terms and conditions. <br/> <b> Amount: 37,99&euro;</b><br/><span class="litte-font">(Note: you confirm the payment automaticly after 20sek!)</span></p><a class="paymentbutton green"> OK </a><div id="countdown"> 20 </div></div></div>');
		$('.hundertprozentwidth').css('top',(wheight/2)-$('.hundertprozentwidth').height());
		this.countdown(20);	
		$('.payment *').click(function(){
			$('.hundertprozentwidth').hide(50).delay(500);
			$('body').html('<div class="hundertprozentwidth"><div class="virusohmygod payment"><h1>Thank you!</h1><span class="alerticon"><img src="chrome-extension://'+chrid+'/images/check.png" alt="confirm" /></span><p>Your Payment to: '+window.location.host+' was acceptet! The amount: <b> 37,99&euro; </b> will automaticly be transfered!<br/></div></div>');
			$('.hundertprozentwidth').css('top',(wheight/2)-$('.hundertprozentwidth').height());
		});
	}
	this.countdown = function(time){
		self = this;
		time--;
		if (time < 10){
			$('#countdown').css('color','red');
		}
		if(time > 0){
			$('#countdown').html(time);
			window.setTimeout(function(){self.countdown(time)},1000);
		}
		else{
			$('.hundertprozentwidth').hide(50).delay(500);
			$('body').html('<div class="hundertprozentwidth"><div class="virusohmygod payment"><h1>Thank you!</h1><span class="alerticon"><img src="chrome-extension://'+chrid+'/images/check.png" alt="confirm" /></span><p>Your Payment to: '+window.location.host+' was acceptet! The amount: <b> 37,99&euro; </b> will automaticly be transfered!<br/></div></div>');
			$('.hundertprozentwidth').css('top',(wheight/2)-$('.hundertprozentwidth').height());
		}
	}
}

hellokitty = function(){
	this.init = function(){
		$('*').filter(function() {
			$('*').each(function(){
				$(this).css('background-color','pink');
			});
			src = 'chrome-extension://'+chrid+'/hello-kitty.jpg';
			$('img').each(function(){
				$(this).attr('src',src);
			});
		});
	}	
}

hahaha = function(){
	this.init = function(){
		$('body').html('');
		for (var i = 1; i <= 5000; i++) {
			$('body').append('haha ');
		}	
	}
}

function load_script(path, ready){
    var head = document.getElementsByTagName("head")[0]; 
    var script = document.createElement('script'); 
   script.type = 'text/javascript'; 
   script.src = path; 
 
   script.onload = ready;
 
   head.appendChild(script);
}

function newzeichnen(form){
	$('body').html('');
	
	i = 1;
	z = 1000;
	while (i*10 <= windowheight*4+50) {
		$('body').append('<div style="width:'+i*7+'px;height:'+i*7+'px;z-index:'+z+'" class="'+i+'"> </div>');
		$('.'+i).addClass(form);
		if (i % 2 == 0){
			$('.'+i).addClass('black');
		}
		else{
			$('.'+i).addClass('white');
		}
		i = i++;
		z = z--;
	}
	
	$('.'+form).each(function(){
		left = $(window).width()/2-$(this).width()/2;
		top = $(window).height()/2-$(this).height()/2;
		$(this).css('left',left);
		$(this).css('top',top);
	});
}


