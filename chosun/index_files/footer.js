var slink = [
		{ link: "http://m.chosun.com/index.html", link_name: "홈" },
		{ link: "http://m.chosun.com/svc/ranking.html", link_name: "많이 본 뉴스" },
		{ link: "http://qna.premium.chosun.com/qna/mobile/index.do?mchosun=true", link_name: "기자Q&amp;A" },
		{ link: "http://m.chosun.com/photo.html", link_name: "포토" },
		{ link: "http://m.chosun.com/living.html", link_name: "리빙포인트" },
		{ link: "http://m.chosun.com/premium.html?sname=premium", link_name: "프리미엄" }
	];
var slink_data = '<div class="slink"><ul>';
jQuery.each(slink,function(i) {
	slink[i].link = this.link;
	slink[i].link_name = this.link_name;
	slink_data += '<li><a href="'+slink[i].link+'">' +slink[i].link_name + ' <\/a><\/li>\n';
});
slink_data += '</ul></div>';
jQuery('.wrap').append(slink_data);

function leadingZeros(n, digits) {
  var zero = '';
  n = n.toString();
  
  if (n.length < digits) {
   for (i = 0; i < digits - n.length; i++)
    zero += '0';
  }
  return zero + n;
}

function loginCK () {
	var isKey = GetAuthCookie('login_keep_check');
	var isKey2 = GetAuthCookie('dz_last_login');
	var d = new Date();
	var today = leadingZeros(d.getFullYear(), 4) + '' + leadingZeros(d.getMonth() + 1, 2) + '' + leadingZeros(d.getDate(), 2) + '' ;

	if(GetAuthCookie('dz_info') && (isKey !=null && isKey=='1') && (isKey2 ==null || (isKey2 !=null && isKey2!=today))) { 
		var f = document.connect_actor;
		f.action = 'https://sso1.chosun.com/cert.genics';
		f.c.value = '1004';
		f.target_url.value = unescape(document.location.href);
		f.action_type.value = 'XX';
		f.sso_token.value = '';
		f.login_keep.value = 'Y';
		f.target = "ifrm";
		f.submit();
	}
}

document.write(" \
<form name='connect_actor' method='post' style='margin:0px;display:inline;'> \
	<input type='hidden' name='a' value='SsoActionApp'> \
	<input type='hidden' name='c' value = ''> \
	<input type='hidden' name='sso_token' value=''> \
	<input type='hidden' name='target_url' value=''> \
	<input type='hidden' name='action_url' value='https://membership.chosun.com/genics/client_action.jsp'> \
	<input type='hidden' name='action_type' value=''> \
	<input type='hidden' name='sso_id' value=''> \
	<input type='hidden' name='agent_type' value='S'> \
	<input type='hidden' name='login_keep' value=''> \
	<input type='hidden' name='log' value='Y'> \
	<input type='hidden' name='local_ip' value=''> \
</form> \
<iframe name='ifrm' width='0' height='0' frameborder='0' style='display:none'> \
</iframe> \
");

function GetAuthCookie(name) {
	var cookies = document.cookie;
	var value  = "";
	if(cookies.indexOf(name) != -1) {
		var start = cookies.indexOf(name) + name.length + 1;
		var end   = cookies.indexOf(";",start);

		if(end == -1) end = cookies.length;

		value = cookies.substring(start,end);
		value = unescape(value);
	}

	return value;
}


function goPCview(){
		document.cookie = "rsMobile=" + escape("false") + "; path=/; domain=chosun.com;";
		location.href = "http://www.chosun.com/?rsMobile=false";
}

function footer(){
	var returl = document.location; 
	if (returl == null || returl == ""){
		returl = "http://m.chosun.com";
	}
	returl = escape(returl);

	var str = '<div class="footer"><footer id="footer"><p class="flink">';
	if(!loginCheck())
		//str += '<a href="http://m.chosun.com/login.html?pos=bottom&returl=' + returl + '" class="fot_a" id="login">로그인</a>';
		str += '<a href="https://membership.chosun.com/join/regist/mobileN/login_m.jsp?pos=bottom&returl=' + returl + '" class="fot_a" id="login">로그인</a>';
	else
		str += '<a href="https://membership.chosun.com/login/logout.jsp?returl=' + returl + '" class="fot_a" id="login">로그아웃</a>';
	str += '<a href="javascript:goPCview()" class="fot_a">PC버전</a>'
		+ '<a href="http://itunes.apple.com/us/app/id360677289?mt=8" target="_blank" class="fot_a">iOS App</a>'
		+ '<a href="market://details?id=com.chosunmedia.android" target="_blank" class="fot_a">Android App</a>'
		+ '</p>'
		+ '<p class="copyr">'
		+ '<a href="#" class="fot_copy">ⓒ chosun.com</a>'
		+ '</p></footer></div>';
	str += "<div style='display:none;'> " +loginCK()+ " </div>";
	jQuery('.wrap').append(str);
}

function loginCheck () {
	//로그인여부 - 쿠키값 확인
	if (GetAuthCookie('SMSESSION')=="" || GetAuthCookie('SMSESSION') == "LOGGEDOFF" || GetAuthCookie('SM_USER') ==""
		|| GetAuthCookie('dz_nm')=="" || GetAuthCookie('dz_info')=="") {
		return false;
	} else {
		return true;
	}
}

footer();
