var ExpDate = new Date();
var minutes =60; 
function Lumi_Create_LOG_mbad(code,kind)
{
//	alert(code)
	var dt = new Date();
	var dtt = dt.getTime();
	//alert(dtt);
	_img = new Image();
	_img.src = "http://121.78.147.177/logs.html?code="+code+"&dtt="+dtt+"&kind="+kind;
	
}

function Lumi_Create_LOG(code,kind)
{
	var dt = new Date();
	var dtt = dt.getTime();
	
	_img = new Image();
	_img.src = "http://121.78.147.240/logs.html?code="+code+"&dtt="+dtt+"&kind="+kind;
}

function Lumi_Create_LOG_mp(code,kind)
{
	var dt = new Date();
	var dtt = dt.getTime();
	
	_img = new Image();
	_img.src = "http://121.78.147.240/logs.html?code="+code+"&dtt="+dtt+"&kind="+kind;
//	document.write(_img.src)
}
function Lumi_New_Ad(code,kimd)
{
	var dt = new Date();
	var dtt = dt.getTime();
	
	_img = new Image();
	_img.src = "http://121.78.147.240/logs_new.html?code="+code+"&dtt="+dtt+"&kind="+kind;

}
function clk_new(od,cod)
{
	Lumi_New_Ad(cod,'clk');
	od.onclick;
	return true;
}

function clk_mbad(od,cod)
{
	Lumi_Create_LOG_mbad(cod,'clk');
	od.onclick;
	return true;
}
function clk_mp(od,cod)
{
	Lumi_Create_LOG_mp(cod,'clk');
	od.onclick;
	return true;
}

function clk(od,cod)
{
	Lumi_Create_LOG(cod,'clk');
	od.onclick;
	return true;
}

function onloadiong(code,kind)
{
	var dt2 = new Date();
	var dtt2 = dt2.getTime();
	_img = new Image();
	_img.src = "http://121.78.147.240/logs_lumi.html?code="+code+"&dtt="+dtt2+"&kind="+kind;

}

function logo_clk(code,kind)
{
	var dt3 = new Date();
	var dtt3 = dt3.getTime();
	_img = new Image();
	_img.src = "http://121.78.147.240/logo_pvclk.php?code="+code+"&dtt="+dtt3+"&kind="+kind;

}
function Lumi_Create_LOG_slider_m2(code,kind)
{
	var dt = new Date();
	var dtt = dt.getTime();
	//alert(dtt);
	_img = new Image();
	_img.src = "http://121.78.147.240/logs_slider.php?code="+code+"&dtt="+dtt+"&kind="+kind;
	ExpDate.setTime(ExpDate.getTime() + (minutes * 60 * 1000));

		
	if(kind=="clk")
	{
		if($.cookie('Codes')==code)
		{
		}
		else
		{
			$.cookie('Codes', code, { expires: ExpDate, path: '/'}); 
			Lumi_Create_LOG_slider_t(code,'clk');	 
		}
		/*
		if(GetCookie('Codes')==code) {
		}
		else
		 {
			SetCookieVal('Codes',code);		
		 }
		 */
	}
	
	
}

function Lumi_Create_LOG_slider(code,kind)
{
	var dt = new Date();
	var dtt = dt.getTime();
	//alert(dtt);
	_img = new Image();
	_img.src = "http://121.78.147.240/logs_slider.php?code="+code+"&dtt="+dtt+"&kind="+kind;
	ExpDate.setTime(ExpDate.getTime() + (minutes * 60 * 1000));

		
	if(kind=="clk")
	{
		_img2 = new Image();
		_img2.src = "http://121.78.147.240/log_cookie_t.php?code="+code+"&dtt="+dtt+"&kind="+kind;
		
	}	
	
}
function Lumi_Create_LOG_slider_dd(code,kind)
{
	var dt = new Date();
	var dtt = dt.getTime();
	
//	alert(code);
	_img = new Image();
	_img.src = "http://121.78.147.240/logs_slider_dv.php?code="+code+"&dtt="+dtt+"&kind="+kind;
	//minutes
	/*
	if(kind=="clk")
	{
		_img2 = new Image();
		_img2.src = "http://121.78.147.240/log_cookie_t_dv.php?code="+code+"&dtt="+dtt+"&kind="+kind;
		
	}	
	*/
	
}

function Lumi_Create_LOG_slider_dv(code,kind)
{
	var dt = new Date();
	var dtt = dt.getTime();
	
//	alert(code);
	_img = new Image();
	_img.src = "http://121.78.147.240/logs_slider.php?code="+code+"&dtt="+dtt+"&kind="+kind;
	//minutes
	if(kind=="clk")
	{
		_img2 = new Image();
		_img2.src = "http://121.78.147.240/log_cookie_t.php?code="+code+"&dtt="+dtt+"&kind="+kind;
		
	}	
	
}

function Lumi_Create_LOG_slider_dv22(code,kind)
{
	var dt = new Date();
	var dtt = dt.getTime();
	
	//alert(dtt);
//	_img = new Image();
//	_img.src = "http://121.78.147.240/logs_slider.php?code="+code+"&dtt="+dtt+"&kind="+kind;
	//minutes
	if(kind=="clk")
	{
		_img2 = new Image();
		_img2.src = "http://121.78.147.240/log_cookie.php?code="+code+"&dtt="+dtt+"&kind="+kind;
		
	}	
	
}


function Lumi_Create_LOG_slider_hang(code,kind)
{
	var dt = new Date();
	var dtt = dt.getTime();
	//alert(dtt);
	_img = new Image();
	_img.src = "http://121.78.147.240/logs_slider.php?code="+code+"&dtt="+dtt+"&kind="+kind;
	ExpDate.setTime(ExpDate.getTime() + (minutes * 60 * 1000));

		
	if(kind=="clk")
	{
		
		if(GetCookie('Codes')==code) {
		}
		else
		 {
			SetCookieVal('Codes',code);		
		 }
	}
	
	
}
function clk_slider(od,cod)
{
//	slidelink_t('Codes',code2);
	Lumi_Create_LOG_slider(cod,'clk');
	od.onclick;
	return true;
}
function Lumi_Create_LOG_slider_t(code,kind)
{
	var dt = new Date();
	var dtt = dt.getTime();
	_img = new Image();
	_img.src = "http://121.78.147.240/logs_slider_real.php?code="+code+"&dtt="+dtt+"&kind="+kind;
	
}
function getCookieVal (offset) {
   var endstr = document.cookie.indexOf (";", offset);
   if (endstr == -1) endstr = document.cookie.length;
   return unescape(document.cookie.substring(offset, endstr));
}

function GetCookie (name) {
   var arg = name + "=";
   var alen = arg.length;
   var clen = document.cookie.length;
   var i = 0;
   while (i < clen) { //while open
      var j = i + alen;
      if (document.cookie.substring(i, j) == arg)
         return getCookieVal (j);
      i = document.cookie.indexOf(" ", i) + 1;
      if (i == 0) break; 
   } //while close
	return null;
}


function SetCookie (name, value) {
   var argv = SetCookie.arguments;
   var argc = SetCookie.arguments.length;
   var expires = (2 < argc) ? argv[2] : null;
   var path = (3 < argc) ? argv[3] : null;
   var domain = (4 < argc) ? argv[4] : null;
   var secure = (5 < argc) ? argv[5] : false;
   document.cookie = name + "=" + escape (value) +
      ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
      ((path == null) ? "" : ("; path=" + path)) +
      ((domain == null) ? "" : ("; domain=" + domain)) +
      ((secure == true) ? "; secure" : "");
}
function SetCookieVal (cName,cValue) {
	pathname = location.pathname;
	var myDomain = pathname.substring(0, pathname.lastIndexOf('/')) +'/';
	ExpDate.setTime(ExpDate.getTime() + 1000*60*60);
	Lumi_Create_LOG_slider_t(cValue,'clk');	 
	SetCookie('Codes', cValue, ExpDate, myDomain);
}

function code_test(code)
{
	alert(code);
}
