$(".header").html('<h1><a href="http://m.chosun.com/index.html"><img src="http://m.chosun.com/img/logo_chosun.png" alt="조선일보" /></a></h1> \
	<a href="#" class="btn_left_reveal"><img src="http://m.chosun.com/img/btn_left_reveal.png" alt="메뉴보기" /></a> \
	<a href="#" class="btn_right_search"><img src="http://m.chosun.com/img/btn_search.png" alt="검색" /></a> \
');

$(".search_form").html('<form name="search" method="get" action="http://m.chosun.com/svc/search.html" onsubmit="return goSearch()">\
		<fieldset>\
			<legend class="blind">통합 검색 입력</legend>\
			<div class="tbox"><input type="search" id="query" name="query" class="tinp" value="" maxlength="255" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" title="검색어 입력" placeholder="검색어를 입력해주세요."><button type="button" class="ico_del"><span class="blind">검색어 지우기</span></button></div> \
			<button type="button" class="search_btn" onclick="goSearch()" style="cursor:pointer">검색</button> \
			<button type="button" class="search_btn search_close" style="cursor:pointer">취소</button> \
		</fieldset> \
	</form> \
');

function goSearch() {
             var f = document.forms.search;

             if(f.query.value == ""){
                          alert("검색어를 입력하세요.");
                          f.query.focus();
                          return false;
             }

             f.submit();
}


$("#nav").html('<ul class="nav_u"> \
		<li id="topcat_news" style="width:14%"><a href="http://m.chosun.com/svc/list.html">뉴스</a></li> \
		<li id="topcat_biz" style="width:14%"><a href="http://m.chosun.com/eco.html">경제</a></li> \
		<li id="topcat_sports" style="width:18%"><a href="http://m.chosun.com/sports.html">스포츠</a></li> \
		<li id="topcat_ent" style="width:14%"><a href="http://m.chosun.com/entertainment.html">연예</a></li> \
		<li id="topcat_premium" style="width:20%"><a href="http://m.chosun.com/premium.html">프리미엄</a></li> \
		<li id="topcat_ranking" style="width:20%"><a href="http://m.chosun.com/svc/ranking.html">인기뉴스</a></li> \
		</ul>');

function selectCategoryTab(sname, catid){
	if(sname == null || sname.trim().length < 2) sname = "news";

if (sname == "premium"){
$("#subcat_area").html('<a href="#" id="btn_prev" class="prev"><span>이전</span></a><div id="nflick" class="flick-view">\
			<div class="flick-container">\
				<div class="flick-ct premium" id="premium1" style="display:none">\
					<ul class="lnbsp">\
					<li id="lnbsp_inside"><a href="http://m.chosun.com/premium.html?sname=premium&opt=latest&catid=inside">뉴스 인사이드</a></li> \
					<li id="lnbsp_4"><a href="http://m.chosun.com/premium.html?sname=premium&opt=latest&catid=4">머니&컴퍼니</a></li>\
					<li id="lnbsp_7"><a href="http://m.chosun.com/premium.html?sname=premium&opt=latest&catid=7">100세 시대</a></li>\
					</ul>\
				</div>\
				<div class="flick-ct premium" id="premium2" style="display:none">\
					<ul class="lnbsp">\
					<li id="lnbsp_8"><a href="http://m.chosun.com/premium.html?sname=premium&opt=latest&catid=8">교육ㆍ입시</a></li> \
					<li id="lnbsp_B"><a href="http://m.chosun.com/premium.html?sname=premium&opt=latest&catid=B">글로벌</a></li>\
					<li id="lnbsp_5"><a href="http://premium.chosun.com/P_csvideo/index.html?pmser">비디오</a></li>\
				    <li id="lnbsp_1"><a href="http://m.chosun.com/premium.html?sname=premium&opt=latest&catid=1">오피니언</a></li>\
					</ul>\
				</div>\
			</div>\
		</div><a href="#" id="btn_next" class="next"><span>다음</span></a>');
} else if (sname == "photo"){
	$("#subcat_area").html('<h2>포토</h2>');
} else if (sname == "living"){
	$("#subcat_area").html('<h2>리빙포인트</h2>');
} else if (sname == "health"){
	$("#subcat_area").html('<h2>헬스</h2>');
} else if (sname == "boomup"){
	$("#subcat_area").html('<h2>여행</h2>');
} else if (sname == "ranking"){
	$("#subcat_area").hide();
} else if (sname == "search"){
	$("#subcat_area").hide();
} else{
$("#subcat_area").html('<div class="flick-view">\
			<div class="flick-container">\
				<div class="flick-ct" id="news">\
					<ul class="lnbs11" style="display:none">\
					<li id="lnbs11_0"><a href="http://m.chosun.com/svc/list.html">속보</a></li> \
					<li id="lnbs11_2"><a href="http://m.chosun.com/svc/list.html?catid=2">정치</a></li>\
					<li id="lnbs11_3"><a href="http://m.chosun.com/svc/list.html?catid=3">사회</a></li>\
					<li id="lnbs11_4"><a href="http://m.chosun.com/svc/list.html?catid=4">국제</a></li>\
					<li id="lnbs11_5"><a href="http://m.chosun.com/svc/list.html?catid=5">문화</a></li>\
					<li id="lnbs11_photo"><a href="http://m.chosun.com/photo.html">포토</a></li>\
					</ul>\
					<ul class="lnbs21" style="display:none">\
					<li id="lnbs21_1"><a href="http://m.chosun.com/svc/list.html?sname=biz&catid=1">속보</a></li> \
					<li id="lnbs21_2"><a href="http://m.chosun.com/svc/list.html?sname=biz&catid=2">마켓</a></li>\
					<li id="lnbs21_4"><a href="http://m.chosun.com/svc/list.html?sname=biz&catid=4">부동산</a></li>\
					<li id="lnbs21_B"><a href="http://m.chosun.com/svc/list.html?sname=biz&catid=B">자동차</a></li>\
					<li id="lnbs21_8"><a href="http://m.chosun.com/svc/list.html?sname=biz&catid=8">Weekly Biz</a></li>\
					</ul>\
					<ul class="lnbs31" style="display:none">\
					<li id="lnbs31_G11"><a href="http://m.chosun.com/svc/list.html?catid=G11">야구</a></li> \
					<li id="lnbs31_G12"><a href="http://m.chosun.com/svc/list.html?catid=G12">축구</a></li>\
					<li id="lnbs31_G1J"><a href="http://m.chosun.com/svc/list.html?catid=G1J">골프</a></li>\
					<li id="lnbs31_G1H"><a href="http://m.chosun.com/svc/list.html?catid=G1H">농구</a></li>\
					<li id="lnbs31_G1I"><a href="http://m.chosun.com/svc/list.html?catid=G1I">배구</a></li>\
					<li id="lnbs31_G13"><a href="http://m.chosun.com/svc/list.html?catid=G13">종합</a></li>\
					</ul>\
					<ul class="lnbs41" style="display:none">\
					<li id="lnbs41_G211"><a href="http://m.chosun.com/svc/list.html?catid=G211">연예뉴스</a></li> \
					<li id="lnbs41_G22"><a href="http://m.chosun.com/svc/list.html?catid=G22">영화</a></li>\
					<li id="lnbs41_G27"><a href="http://m.chosun.com/svc/list.html?catid=G27">TV방송</a></li>\
					<li id="lnbs41_G216"><a href="http://m.chosun.com/svc/list.html?catid=G216">음악</a></li>\
					</ul>\
				</div>\
			</div>\
		</div>');
}

	sName = sname;

	var cat_li = "topcat_news";
	var sub_ul = "lnbs11";
	var sub_li = "lnbs11_0";

	var cat_sub = "";
	if(sname == "news"){
		if(catid != null && catid.trim().length > 0){
			var cat_1st = catid.substr(0, 1);
			if(cat_1st == "2" || cat_1st == "3" || cat_1st == "4" || cat_1st == "5" || cat_1st == "6"){
				topCatID = "0";

				if (catid == "2B"){
					cat_li = "topcat_0604";
					cat_sub = "2B";
//					sub_ul = "lnbs11";
					$('.lnbs').hide();
				} else {
					cat_li = "topcat_news";
					sub_ul = "lnbs11";
					cat_sub = cat_1st;
				}
			}else if("G"){
				var cat_2nd = catid.substr(0, 2);
				if(cat_2nd == "G1"){
					topCatID = "G1";

					cat_li = "topcat_sports";
					sub_ul = "lnbs31";
					if(catid.length > 2) cat_sub = catid.substr(0, 3);
				}else if(cat_2nd == "G2"){
					topCatID = "G2";

					cat_li = "topcat_ent";
					sub_ul = "lnbs41";
					var chk_sub = false;
					if(catid.length > 2){
						var tmp_subcat =  catid.substr(0, 3);
						if(tmp_subcat == "G22" || tmp_subcat == "G27"){ cat_sub = tmp_subcat; chk_sub = true; }
						if(!chk_sub && catid.length > 3){
							tmp_subcat = catid.substr(0, 4);
							if(tmp_subcat == "G211" || tmp_subcat == "G216"){ cat_sub = tmp_subcat; chk_sub = true; }
						}
					}
				}
			}
			sub_li = sub_ul + "_" + cat_sub;

			$("#premium1").hide();
			$("#news").show();
		}
	}else if(sname == "biz"){
		topCatID = "0";

		cat_li = "topcat_biz";
		sub_ul = "lnbs21";
		if(catid != null && catid.length > 0)
			cat_sub = catid.substr(0, 1);
		sub_li = sub_ul + "_" + cat_sub;

		$("#premium1").hide();
		$("#news").show();
	}else if(sname == "premium"){
		topCatID = "0";

		cat_li = "topcat_premium";
		sub_ul = "lnbsp";
		if(catid != null && catid.length > 0)
			cat_sub = catid.substr(0, 1);
		sub_li = sub_ul + "_" + cat_sub;
		$("#news").hide();
		$(".premium").show();
	}else if(sname == "life"){
		topCatID = "0";

		cat_li = "topcat_life";
		sub_ul = "lnbs51";
		sub_li = sub_ul + "_6";

		$("#premium1").hide();
		$("#news").show();
	}else if(sname == "boomup"){
		topCatID = "0";

		cat_li = "topcat_life";
		sub_ul = "lnbs51";
		sub_li = sub_ul + "_6";
	}else if(sname == "health"){
		cat_li = "topcat_health";
	}else if(sname == "living"){
		cat_li = "topcat_living";
	}else if(sname == "photo"){
		cat_li = "topcat_photo";
	}else if(sname == "boomup"){
		cat_li = "topcat_boomup";
	}else if(sname == "ranking"){
		cat_li = "topcat_ranking";
	}else if(sname == "search"){
		cat_li = "topcat_search";
	}
	$("#" + cat_li).attr("class", "on");
	$("." + sub_ul).css("display", "block");
	$("#" + sub_li).attr("class", "selected");
}