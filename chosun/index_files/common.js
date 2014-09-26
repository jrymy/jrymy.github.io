var userAgent = navigator.userAgent.toLowerCase();

jQuery(function(){

	/* app_link */
	if(userAgent.match('ipad') || userAgent.match('ipod') || userAgent.match('iphone')) {
		jQuery('body').addClass('s');
		if (userAgent.match('ipad')){
			jQuery('.flink a:eq(2)').attr('href','https://itunes.apple.com/kr/app/joseon-ilbo-for-ipad/id422051980?mt=8');
		} else {
			jQuery('.flink a:eq(2)').attr('href','http://itunes.apple.com/us/app/id360677289?mt=8');
		}
	}

	/* input icon */
	$('.tinp').each(function(index, obj){
		var $form = $(this).parent(".tbox");
		$(this).focus(function(){
			$form.addClass("on");
		}).blur(function(){
			if(!$.trim($(this).val())) {
				$form.removeClass("on");
			}
		}).trigger('blur');
	});

	$('.btn_top').click(function(event){
		event.preventDefault();
		jQuery('html, body').animate({scrollTop: 0}, 0);
		return false;
	});

	$('.ico_del').click(function(){
		$(this).parent(".tbox").removeClass('on').find('input,textarea').val('');
		return false;
	});

	$('.btn_right_search').click(function(){
		$(".search_form").show();
		return false;
	});
	
	$('.search_close').click(function(){
		$(".search_form").hide();
	});

});

/* aside setting */
var alink = [{ 
			dep_link : "http://m.chosun.com/svc/list.html",
			dep_tit : "뉴스",
			dep_list : [{link: "http://m.chosun.com/svc/list.html", link_name: "속보"},
						{link: "http://m.chosun.com/svc/list.html?catid=2", link_name: "정치"},
						{link: "http://m.chosun.com/svc/list.html?catid=3", link_name: "사회"},
						{link: "http://m.chosun.com/svc/list.html?catid=4", link_name: "국제"},
						{link: "http://m.chosun.com/svc/list.html?catid=5", link_name: "문화"}
			]},{
			dep_link : "http://m.chosun.com/eco.html",
			dep_tit : "경제",
			dep_list : [{link: "http://m.chosun.com/svc/list.html?sname=biz&catid=1", link_name: "속보"},
						{link: "http://m.chosun.com/svc/list.html?sname=biz&catid=2", link_name: "마켓"},
						{link: "http://m.chosun.com/svc/list.html?sname=biz&catid=3", link_name: "부동산"},
						{link: "http://m.chosun.com/svc/list.html?sname=biz&catid=B", link_name: "자동차"},
						{link: "http://m.chosun.com/svc/list.html?sname=biz&catid=8", link_name: "Weekly Biz"}
			]},{
			dep_link : "http://m.chosun.com/premium.html?sname=premium",
			dep_tit : "프리미엄",
			dep_list : [{link: "http://m.chosun.com/premium.html?sname=premium&opt=latest&catid=inside", link_name: "뉴스인사이드"},
						{link: "http://m.chosun.com/premium.html?sname=premium&opt=latest&catid=4", link_name: "머니&amp;컴퍼니"},
						{link: "http://m.chosun.com/premium.html?sname=premium&opt=latest&catid=7", link_name: "100세 시대"},
						{link: "http://m.chosun.com/premium.html?sname=premium&opt=latest&catid=8", link_name: "교육ㆍ입시"},
						{link: "http://m.chosun.com/premium.html?sname=premium&opt=latest&catid=B", link_name: "글로벌"},
						{link: "http://m.chosun.com/premium.html?sname=premium&opt=latest&catid=5", link_name: "컬쳐"},
						{link: "http://m.chosun.com/premium.html?sname=premium&opt=latest&catid=1", link_name: "오피니언"}
			]},{
			dep_link : "http://m.chosun.com/sports.html",
			dep_tit : "스포츠",
			dep_list : [{link: "http://m.chosun.com/svc/list.html?catid=G11", link_name: "야구"},
						{link: "http://m.chosun.com/svc/list.html?catid=G12", link_name: "축구"},
						{link: "http://m.chosun.com/svc/list.html?catid=G1J", link_name: "골프"},
						{link: "http://m.chosun.com/svc/list.html?catid=G1H", link_name: "농구"},
						{link: "http://m.chosun.com/svc/list.html?catid=G1I", link_name: "배구"},
						{link: "http://m.chosun.com/svc/list.html?catid=G13", link_name: "종합"}
			]},{
			dep_link : "http://m.chosun.com/entertainment.html",
			dep_tit : "연예",
			dep_list : [{link: "http://m.chosun.com/svc/list.html?catid=G211", link_name: "연예뉴스"},
						{link: "http://m.chosun.com/svc/list.html?catid=G22", link_name: "영화"},
						{link: "http://m.chosun.com/svc/list.html?catid=G27", link_name: "TV방송"},
						{link: "http://m.chosun.com/svc/list.html?catid=G216", link_name: "음악"}
			]},{
			dep_link : "http://m.chosun.com/photo.html",
			dep_tit : "포토"
			},{
			dep_link : "http://premium.chosun.com/P_csvideo/index.html?pmser",
			dep_tit : "비디오"
			},{
			dep_link : "http://qna.premium.chosun.com/qna/mobile/index.do?mchosun=true",
			dep_tit : "기자Q&amp;A"
			},{
			dep_link : "http://m.chosun.com/living.html",
			dep_tit : "리빙포인트"
			},{
			dep_link : "http://m.chosun.com/svc/ranking.html",
			dep_tit : " 많이 본 뉴스"
			}
];

var aside_data = '<aside class="aside"><ul class="aside_lst">';
jQuery.each(alink,function(i) {
	aside_data += '<li><a href="'+this.dep_link+'">' +this.dep_tit + ' <\/a>';
	if (this.dep_list){
		aside_data += '<ul class="aside_lst aside_dep2">'
		jQuery.each(this.dep_list,function(j) {
			aside_data += '<li><a href="'+this.link+'">' +this.link_name + ' <\/a><\/li>\n';
		});
		aside_data += '</ul>'
	}
	aside_data += '<\/li>\n';
});
aside_data += '</ul></aside><div id="layer_bg" class="layer_bg"><a href="#" class="btn_close"><span class="blind">닫기</span></a></div>';
jQuery(window).load( function(){
	jQuery('.wrap').append(aside_data);
	$('.aside_lst > li > a').each(function(){
		if(($(this).next('.aside_dep2')).length > 0){
			$(this).addClass('dep1');
		}
	});

	/* aside */
	var aside_h = $('.aside').height();
	$('.btn_left_reveal').click(function(){
		$('.aside').show();
		var doc_w = 200; // document.documentElement.clientWidth - 200;
		var doc_h = document.documentElement.clientHeight;
		$('.aside').addClass('aside_show');
		if (aside_h > doc_h){
			$('.layer_bg').css("height",aside_h);
		} else {
			$('.layer_bg,.wrap,.aside').css("height",doc_h);
		}
		$('.aside').css({
			"-webkit-transform" : 'translateX('+doc_w+'px) translateY(0px)'
		});
	});

	$('.layer_bg, .btn_close').click(function(){
		$('.aside').hide();
		$('.wrap').css("height","auto");
		$('.aside').css({
			"-webkit-transform" : 'translateX(0px) translateY(0px)',
		});
		$('.layer_bg').css("height","0");
		$('.aside').removeClass('aside_show');
	});

	$(window).resize(function () {
		aside_resize();
	});

	function aside_resize(){
		var doc_h = document.documentElement.clientHeight;
		aside_h = $('.aside_show > .aside_lst').height();
		if ($('.aside').hasClass('aside_show')){
			if (aside_h > doc_h){
				$('.layer_bg,.wrap,.aside').css("height",aside_h);
			} else {
				$('.layer_bg,.wrap,.aside').css("height",doc_h);
			}
		}
	}

	$('.dep1').click(function(){
		if($(this).hasClass('open')){
			$(this).next('.aside_dep2').hide();
			$(this).removeClass('open');
		} else {
			$(this).next('.aside_dep2').show();
			$(this).addClass('open');
		}
		aside_resize();
		return false;
	});

});