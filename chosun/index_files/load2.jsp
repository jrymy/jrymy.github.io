var ADLIBr_UDID = {
	wider: "",
	udid : "",
	s4:function()
	{
	  return Math.floor((1 + Math.random()) * 0x10000)
	             .toString(16)
	             .substring(1);	
	},	
	setCookie:function(cName, cValue, cDay){
	
		var wh = window.location.hostname;
		var n = wh.lastIndexOf(".");
		n--;
		n = wh.lastIndexOf(".",n);		
		wh = wh.substring(n);

	  var expire = new Date();
	  expire.setDate(expire.getDate() + cDay);
	  cookies = cName + '=' + escape(cValue) + '; path=/ ';
	  if(typeof cDay != 'undefined') cookies += ';expires=' + expire.toGMTString() + ';';
	  cookies += " domain="+wh+";";	  
	  document.cookie = cookies;	
	},
	getCookie:function(cName)
	{
	  cName = cName + '=';
	  var cookieData = document.cookie;
	  var start = cookieData.indexOf(cName);
	  var cValue = '';
	  if(start != -1){
	       start += cName.length;
	       var end = cookieData.indexOf(';', start);
	       if(end == -1)end = cookieData.length;
	       cValue = cookieData.substring(start, end);
	  }
	  return unescape(cValue);	
	},
	loadScript:function(url, func)
	{
		var script = document.createElement('script');
		script.onload = function() {
			if(func != null)
				func();
		};
		script.src = url;
		document.body.appendChild(script);
	},
	wname : "awudid",
	wname_wider : "ADLIBr_UDID_wider",	
	init:function()
	{
		{
			var v = this.getCookie(ADLIBr_UDID.wname);
			if( v==null || v=="")
			{
				this.loadScript("http://ad.adlibr.com/smartad/mweb/udid.jsp",function(){
					var OAID = getADLIBrUDID();
					ADLIBr_UDID.setCookie(ADLIBr_UDID.wname,OAID,365*2);
					ADLIBr_UDID.udid = OAID;
				});
			}
			else
				ADLIBr_UDID.udid = v;		
		}

		// wider
		{
			var v = this.getCookie(ADLIBr_UDID.wname_wider);
			if( v==null || v=="")
			{
				this.loadScript("http://astg.widerplanet.com/delivery/lookup_oaid.php",function(){
					var OAID = WP_getOAID();
					ADLIBr_UDID.setCookie(ADLIBr_UDID.wname_wider,OAID,365*2);
					ADLIBr_UDID.wider = OAID;
				});
			}
			else
				ADLIBr_UDID.wider = v;		
		}		
	},
	udid : ""
}
ADLIBr_UDID.init();

var ADLIBr523141bee4b0e1d7f074245f = {
	landing: "",
	shuffle: function(array){
		var currentIndex = array.length
		, temporaryValue
		, randomIndex
		;
		
		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
		
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		
		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
		}
		
		return array;	
	},
	banner2: null,
	sch: '{ "banner2" : "5231a044e4b0e1d7f074263b" , "maxi" : [ { "aid" : 7 , "w" : 1}] , "ran" : "Y" , "setting" : [ { "aid" : -1 , "sec" : 20}]}',
	rsch: null,
	rarr: null,
	nidx: 0,
	view: null,
	info: null,
	rb: false,
	rbflag:0,
	rbtm:180,
	showing: -1,
	ratio:false,
	init: function() {
		this.info = adlib_vars;
	},
	start: function() {
	
		this.adview();

		var rsch = JSON.parse( this.sch );
		this.rsch = rsch;		


		this.rarr = [{aid:7,sec:this.rbtm}];


		ADLIBr523141bee4b0e1d7f074245f.loadnow(this.lastidx++);		
		ADLIBr523141bee4b0e1d7f074245fTemplate.loadScript("http://ad.adlibr.com/smartad/mweb/req.jsp?id=523141bee4b0e1d7f074245f&udid="+ADLIBr_UDID.udid);
	},
	lastflag:-1,
	loadrb:function()
	{
		this.loadp( 7 );
		// 응답받고 다음 플랫폼 노출.. succrb, failedrb
	},
	direct:false,
	loadnow:function(flag)
	{
	/*
		if(this.rbloaded)
			return;
	*/

		if(flag < this.lastflag)
		{
			return;
		}

		var len = this.rarr.length;
				
		var n = this.nidx;
		if(len <= n)
			n = 0;

		var i=0;
		for(i=0;i<len;i++)
		{


			// load..
			var b = this.loadp( this.rarr[n].aid );

			// 2 항상 성공, 1,0실패 피드백.. , -1 바로실패, - 홀드
			if(b == 2)
			{
				// 바로 노출시작
				this.next(this.rarr[n].sec);
				n++;
				break;
			}
			else if(b >= 0)
			{
				// hold
				this.next(this.rarr[n].sec);				
				n++;				
				break;
			}

			n++;
			if(len <= n)
				n = 0;
		}

		this.nidx = n;
		this.lastflag = flag;
	},
	lastidx:0,
	nextnow:function()
	{
		if(this.direct)
			return;


		// 바로 시작..
		setTimeout("ADLIBr523141bee4b0e1d7f074245f.loadnow("+ (this.lastidx++) +")",1);
	},
	next:function(sec)
	{
		if(this.ratio)
			setTimeout("ADLIBr523141bee4b0e1d7f074245f.loadnow("+ (this.lastidx++) +")",1000*180);
		else
			setTimeout("ADLIBr523141bee4b0e1d7f074245f.loadnow("+ (this.lastidx++) +")",1000*sec);
	},
	suf: null,
	thish: 50,
	forcehide:false,
	ty:"pc",
	os:"",	
	adview: function() {
		this.view = document.getElementById('banner_adlibr');
		
		// 뷰를 생성한다.
		if(this.view == null)
		{
			this.view = document.createElement("div");
			this.view.setAttribute("id", 'banner_adlibr');
			document.body.appendChild(this.view);        
		}
		
		this.view = document.getElementById('banner_adlibr');
		this.view.style.padding = "0";		
		this.view.style.margin = "0";		



		this.suf = ADLIBr_UDID.s4();
	},
	pname: function(p)
	{
		return p+this.suf;
	},
	load:function(r)
	{
		var doc = null;
		
		// remove
		this.view.innerHTML="";
		
		if(r=="google")
		{
			if(eval('adlib_vars.google_ad_client') == null || eval('adlib_vars.google_ad_client') == undefined)
				return -1;
			if(eval('adlib_vars.google_ad_slot') == null || eval('adlib_vars.google_ad_slot') == undefined)
				return -1;
		}
		else if(r=="custom" || r=="rb" || r=="mezzo" || r=="tad" || r=="uplus")
		{
			// ok
		}
		else
		{
			if(eval('adlib_vars.'+r) == null || eval('adlib_vars.'+r) == undefined)
				return -1;
		}
		
		
		if(r == "custom")
		{
			this.thish = 50;

			var v;
			v = document.createElement("iframe");
			v.setAttribute("frameborder", "0");
			v.setAttribute("style", "width:100%;height:"+this.thish+"px;border-image-width:0;");
			v.setAttribute("id", this.pname(r));

			this.view.style.height=this.thish;

			this.view.appendChild(v);

			var iframe = document.getElementById(this.pname(r));
		
			var f = eval('ADLIBr523141bee4b0e1d7f074245fTemplate.load_custom');
			return f(iframe,this.banner2);
		}
		
		
		if(r == "rb")
		{
			this.thish = 50;
					
			var sub;
			sub = document.createElement("div");
			sub.setAttribute("style", "width:100%;height:"+this.thish+"px;position:relative;");
			this.view.appendChild(sub);

			var im = '<a target="_blank" id="rbframe523141bee4b0e1d7f074245f"><img style="width:100%;height:'+this.thish+'px;position:absolute;z-index:99;left:0;top:0;border:0" src="http://ad.adlibr.com/smartad/custom/imp.png"/></a>';
			sub.innerHTML = im;


			var v;
						
			v = document.createElement("iframe");
			v.setAttribute("frameborder", "0");
			v.setAttribute("scrolling", "no");			
			v.setAttribute("style", "width:100%;height:"+this.thish+"px;border-image-width:0;");
			v.setAttribute("id", this.pname(r));
									
			sub.appendChild(v);

			this.view.style.height=this.thish;

			var iframe = document.getElementById(this.pname(r));
			var f = eval('ADLIBr523141bee4b0e1d7f074245fTemplate.load_rb');
			return f(iframe);
		}
		else if(r == "naver")
		{
			var v;
			
			this.thish = 50;
	
			v = document.createElement("div");
			v.setAttribute("id", this.pname(r));			
			this.view.appendChild(v);
			
			this.view.style.height=this.thish;			
			
		}
		
		

		else if(r == "tad")
		{
			var v;
			
			this.thish = 50;

			v = document.createElement("div");
			v.setAttribute("id", this.pname(r));			
			this.view.appendChild(v);
			
			this.view.style.height=this.thish;			
			
		}
		else if(r == "mezzo")
		{
			this.thish = 48;
			this.view.style.height=this.thish;
			
			var v;	
	
			v = document.createElement("iframe");
			v.setAttribute("frameborder", "0");
			v.setAttribute("scrolling", "no");
			v.setAttribute("style", "width:100%;height:"+this.thish+";border:none;overflow:hidden;margin 0 auto;display:block;");
			v.setAttribute("id", this.pname(r));
			this.view.appendChild(v);
			
			doc = document.getElementById(this.pname(r)).contentWindow.document;
			
			this.view.style.height=this.thish;			
		}		
		else if(r == "cauly" || r == "adam")
		{
			var v;
			
			this.thish = 48;
	
			v = document.createElement("iframe");
			v.setAttribute("frameborder", "0");
			v.setAttribute("style", "width:100%;height:"+this.thish+"px;border-image-width:0;");
			v.setAttribute("id", this.pname(r));
			this.view.appendChild(v);

			this.view.style.height=this.thish;
			
			doc = document.getElementById(this.pname(r)).contentWindow.document;					
		}
		else
		{
			var v;
			
			this.thish = 50;			
	
			v = document.createElement("iframe");
			v.setAttribute("frameborder", "0");
			v.setAttribute("style", "width:100%;height:"+this.thish+"px;border-image-width:0;");
			v.setAttribute("id", this.pname(r));
			this.view.appendChild(v);

			this.view.style.height=this.thish;
			
			doc = document.getElementById(this.pname(r)).contentWindow.document;
		}

		var f = eval('ADLIBr523141bee4b0e1d7f074245fTemplate.load_'+r);
		return f(doc);
	},	
	loaddirect:function(v)
	{
		if(v=="uplus")
		{
			window.ios_slotID = adlib_vars.uplus_ios;
			window.and_slotID = adlib_vars.uplus_android;
			document.write("<div style='width:100%;text-align:center;'><scri"+"pt src='http://uplus.kr/common/m_js/mobile_html_web4.js'></script></div>");		
			return;
		}
		else if(v=="mezzo")
		{
			if(adlib_vars.mezzo_banner == undefined || adlib_vars.mezzo_banner == null)
				adlib_vars.mezzo_banner = "banner_web";
		
			document.write('<script language="javascript" src="http://mtag.mman.kr/js.mezzo/'+adlib_vars.mezzo_media+'/'+adlib_vars.mezzo_section+'/'+adlib_vars.mezzo_banner+'"></script>');
			return;
		}
		else if(v=="naver")
		{
			var func = function(){
			    new NBP_MOBILEAD({
			        cid: adlib_vars.naver, 
			        test: false,
			        div_id: "banner_adlibr"
			    });
			};
			ADLIBr523141bee4b0e1d7f074245fTemplate.loadScript("http://adimg3.search.naver.net/mobilejs/mobilead_min.js",func);			
			return;
		}
		else if(v=="google")
		{
			window.google_ad_client = adlib_vars.google_ad_client;
			window.google_ad_slot = adlib_vars.google_ad_slot;
			window.google_ad_width = 320;
			window.google_ad_height = 50;

			document.write("<scri"+"pt src='http://pagead2.googlesyndication.com/pagead/show_ads.js'></script>");	
		}
		else if(v=="adam")
		{
			window.daum_adam_vars = {
				client : adlib_vars.adam,
				position : 'MIDDLE',
				bannerDivId : 'banner'
			};
			document.write("<scri"+"pt src='http://m.adtc.daum.net/js/mobilead.js'></script>");	
		}
		else if(v=="tad")
		{
			window.tad_conf = {
			targetId : 'banner_adlibr',
			clientId : adlib_vars.tad,
			slotNo : 2,
			errorCallback : function(errCode) {
			}
			};			
			document.write("<scri"+"pt src='http://adddn.adotsolution.com/contents/sdk/js/tad.min.js'></script>");	
		}
		else if(v=="custom")
		{
			this.view.innerHTML='<iframe frameborder="0" style="width:100%;height:50px;" src="http://ad.adlibr.com/smartad/custom/main.jsp?banner=5231a044e4b0e1d7f074263b"></iframe>';
		}
	},
	loadp:function(r)
	{
		var v = "";
		if(r==7)
			v = "rb";		
		else if(r==0)
			v = "adam";
		else if(r==4)
			v = "tad";
		else if(r==50)
			v = "mezzo";			
		else if(r==19)
			v = "google";
		else if(r==9)
			v = "naver";			
		else if(r==6)
			v = "inmobi";
		else if(r==3)
			v = "cauly";
		else if(r==-1)
			v = "custom";			
		else if(r==29)
			v = "uplus";
		if(v == "")
			return -1;

		if(this.direct)			
			return this.loaddirect(v);
		else
			return this.load(v);		
	},
	failed:function(p)
	{
		this.nextnow();
	},
	succ:function(p)
	{
	},
	lastrbfailed: 0,
	failedrbcount : 0,
	failedrb:function(p)
	{

		tad_conf.targetId = this.pname("tad");
		this.load("tad");



		try
		{
			adlib_loadfailed();
		}
		catch(ex)
		{
		}		
	},	
	rbloaded:false,
	succrb:function(p,url)
	{
		this.rbf=0;
		
		document.getElementById("rbframe523141bee4b0e1d7f074245f").setAttribute("href", ADLIBr523141bee4b0e1d7f074245f.landing);	
		document.getElementById(this.pname("rb")).src = url;
		
		this.rbloaded=true;
		try
		{
			adlib_loadsucc();
		}
		catch(ex)
		{
		}		
	}
}
ADLIBr523141bee4b0e1d7f074245f.init();

var tad_conf = {
targetId : '',
clientId : '',
slotNo : 2,
errorCallback : function(errCode) {
if(errCode == 0) {
ADLIBr523141bee4b0e1d7f074245f.failed("tad");
}
}
};

var ADLIBr523141bee4b0e1d7f074245fTemplate = {

failedfromif:function(f)
{
	parent.ADLIBr523141bee4b0e1d7f074245f.failed(f);
},
loadScript:function(url, func)
{
	var script = document.createElement('script');
	script.onload = function() {
		if(func != null)
			func();
	};
	script.src = url;
	ADLIBr523141bee4b0e1d7f074245f.view.appendChild(script);
},
load_rb:function(iframe)
{
	var url = "http://ad.adlibr.com/smartad/mweb/req_rb.jsp?id=523141bee4b0e1d7f074245f&udid="+ADLIBr_UDID.udid+"&wudid="+ADLIBr_UDID.wider;
	ADLIBr523141bee4b0e1d7f074245fTemplate.loadScript(url);
	
	return 0;
},
load_tad:function(doc)
{
		tad_conf.targetId = ADLIBr523141bee4b0e1d7f074245f.pname("tad");


		tad_conf.clientId = "MX0004405";
		this.load("tad");

	
	var url = "http://adddn.adotsolution.com/contents/sdk/js/tad.min.js";
	ADLIBr523141bee4b0e1d7f074245fTemplate.loadScript(url, null);

	return 1;
},
load_naver:function(doc)
{
	var url = "http://adimg3.search.naver.net/mobilejs/mobilead_min.js";
	ADLIBr523141bee4b0e1d7f074245fTemplate.loadScript(url, ADLIBr523141bee4b0e1d7f074245fTemplate.load_naver2);
	
	return 2;
},
load_naver2:function()
{
	new NBP_MOBILEAD({
	    cid: adlib_vars.naver,
	    test: false,
	    div_id: ADLIBr523141bee4b0e1d7f074245f.pname("naver")
	}); 
},
res_mezzo:function(img,bg,clk)
{
	var o = ADLIBr523141bee4b0e1d7f074245f;	
	var idx = "adlibr_mezzo";

	var v = '<div id="mz_wrap" style="background-color:'+bg+'"><article id="mz_article"><img id="mz_first" src="'+img+'" height="48"></article></div>';
	v += '<link href="http://advimg.ad-mapps.com/ad_images/r_main.css" rel="stylesheet" type="text/css" />';

	o.view.innerHTML = v;
	
	document.getElementById("mz_wrap").addEventListener("click", function(ev){ window.open(clk); });
},
load_mezzo:function(doc)
{
	if(adlib_vars.mezzo_banner == undefined || adlib_vars.mezzo_banner == null)
		adlib_vars.mezzo_banner = "banner_web";

	doc.write("<head><meta charset='utf-8'><meta name='viewport' content='width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0'><scri"+"pt language='javascript' src='http://mtag.mman.kr/js.mezzo/"+adlib_vars.mezzo_media+"/"+adlib_vars.mezzo_section+"/"+adlib_vars.mezzo_banner+"'></script>");
	doc.write("<style>div{margin:0;padding:0;}article{margin:0;padding:0;}body{margin:0;padding:0;}</style>");
	doc.write("<script"+">setTimeout(function(){ if(document.getElementById('contents').innerHTML=='')parent.ADLIBr523141bee4b0e1d7f074245fTemplate.failedfromif('mezzo');},1000);<"+"/script></head><body id='contents'></body>");

	return 1;
},
load_adam:function(doc)
{	
	var x = "var daum_adam_vars = {";
	x+="client : '"+adlib_vars.adam+"',";
	x+="position : 'TOP',";
	x+="bannerDivId : 'banner',";
	x+="test : false";
	x+="};";

	var func = "";
	func+="function daum_ad_prepared_empty(){";
	func+="parent.ADLIBr523141bee4b0e1d7f074245f.failed('adam');";
	func+="}";

	doc.write("<div id='banner'></div>");
	doc.write("<style>body{margin:0;padding:0;text-align:"+adlib_vars.AD_ALIGN+"}</style>");

	doc.write("<scri"+"pt>"+x+"</script>");
	doc.write("<scri"+"pt>"+func+"</script>");	
	doc.write("<scri"+"pt src='http://m.adtc.daum.net/js/mobilead.js'></script>");
	
	return 1;
},
load_inmobi:function(doc)
{
	var x = "";
	x += 'var inmobi_conf = {';
	x += 'siteid : "'+adlib_vars.inmobi+'",';
	x += 'slot : "15",';
	x += 'test: false,';
	x += 'autoRefresh: 60,';
	x += 'onError : function(code) {';
	x += 'if(code == "nfr") {';
	x += 'parent.ADLIBr523141bee4b0e1d7f074245f.failed("inmobi");';
	x += '}}};';

	doc.write("<style>body{margin:0;padding:0;text-align:"+adlib_vars.AD_ALIGN+"}</style>");
	doc.write("<scri"+"pt>"+x+"</script>");
	doc.write("<scri"+"pt src='http://cf.cdn.inmobi.com/ad/inmobi.js'></script>");
	
	return 1;
},
dw:null,
tgdw:null,
proxydw:function(pname)
{
	ADLIBr523141bee4b0e1d7f074245fTemplate.dw = document.write;
	ADLIBr523141bee4b0e1d7f074245fTemplate.tgdw = document.getElementById( ADLIBr523141bee4b0e1d7f074245f.pname(pname) );
	document.write = ADLIBr523141bee4b0e1d7f074245fTemplate.docwrite;
},
proxydw2:function()
{
	document.write = ADLIBr523141bee4b0e1d7f074245fTemplate.dw;
	ADLIBr523141bee4b0e1d7f074245fTemplate.tgdw = null;
	ADLIBr523141bee4b0e1d7f074245fTemplate.dw = null;
},
docwrite:function(w)
{
	if( ADLIBr523141bee4b0e1d7f074245fTemplate.tgdw != null )
	{
		ADLIBr523141bee4b0e1d7f074245fTemplate.tgdw.innerHTML = w;
	}
},
load_google:function(doc)
{

	
	var x = "";
	x += "google_ad_client = '"+adlib_vars.google_ad_client+"';";
	x += "google_ad_slot = '"+adlib_vars.google_ad_slot+"';";
	x += "google_ad_width = 320;";
	x += "google_ad_height = 50;";

	doc.write("<style>body{margin:0;padding:0;text-align:"+adlib_vars.AD_ALIGN+"}</style>");

	doc.write("<scri"+"pt>"+x+"</script>");
	doc.write("<div id='adsense_template'><scri"+"pt src='http://pagead2.googlesyndication.com/pagead/show_ads.js'></script></div>");
	
	return 2;	
	
},
load_google2:function()
{
	ADLIBr523141bee4b0e1d7f074245fTemplate.proxydw2();
},
load_uplus:function(doc)
{
	var x = "";
	x += "ios_slotID = '"+adlib_vars.uplus_ios+"';";
	x += "and_slotID = '"+adlib_vars.uplus_android+"';";

	doc.write("<style>body{margin:0;padding:0;text-align:"+adlib_vars.AD_ALIGN+"}</style>");

	doc.write("<scri"+"pt>"+x+"</script>");
	doc.write("<div id='uplus_template'><scri"+"pt src='http://uplus.kr/common/m_js/mobile_html_web4.js'></script></div>");
	
	return 2;
},
load_cauly:function(doc)
{
	var func = "";
	func += "function success_callback( info ) { parent.ADLIBr523141bee4b0e1d7f074245f.succ('cauly'); } ";
	func += "function nofill_callback( retcode ) { parent.ADLIBr523141bee4b0e1d7f074245f.failed('cauly');return false; } ";
	func += "var caulyad = {";
	func += "appcode : '"+adlib_vars.cauly+"',";
	func += "displayid : 'banner',";
	func += "nofill_callback : nofill_callback,";
	func += "success_callback : success_callback}";

	doc.write("<style>body{margin:0;padding:0;text-align:"+adlib_vars.AD_ALIGN+"}</style>");
	doc.write("<div id='banner'></div>");
	doc.write("<scri"+"pt>"+func+"</script>");
	doc.write("<scri"+"pt src='http://image.cauly.co.kr:15151/websdk/caulyad.min.js?2013062016'></script>");
	
	return 0;
},
load_custom:function(iframe,banner)
{
	iframe.src="http://ad.adlibr.com/smartad/custom/main.jsp?banner=5231a044e4b0e1d7f074263b";

	return 2;
},
load_custom2:function()
{
	var url = "http://ad.adlibr.com/smartad/custom/mainf.jsp?banner=5231a044e4b0e1d7f074263b";
	ADLIBr523141bee4b0e1d7f074245fTemplate.loadScript(url, function(res){


		var img=adlib_custom2[0];
		var imp=adlib_custom2[1];
		var banner=adlib_custom2[2];
		var clr=adlib_custom2[3];
		var landing=adlib_custom2[4];
				
		var l = document.getElementById(ADLIBr523141bee4b0e1d7f074245f.pname("custom"));
		l.setAttribute("style", "background:"+clr+";width:100%;text-decoration:none; margin:0 auto; padding:0;text-align:center;");

		l.innerHTML = "<img src='"+img+"' style='position:relative; overflow:hidden;width:320px;height:50px; margin:0 auto'><img src='"+imp+"' style='position:absolute;'>";		
		l.onclick=function(){ parent.location.href=landing; };

	});
	
	return 2;
}

};

ADLIBr523141bee4b0e1d7f074245f.start();