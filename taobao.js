/*siteNav*/
var onClickId;
var itemId;
var tagClassName;

function getMenu(id){
	onClickId = id;
	tagClassName=document.getElementById(id).className;
	document.getElementById(id).className=tagClassName+" "+"siteNav_tag";
	itemId=document.getElementById(id).getElementsByTagName("span")[1].id;
	document.getElementById(itemId).style.visibility= "visible";
}
function lostMenu(id){
	document.getElementById(onClickId).className=tagClassName;
	document.getElementById(itemId).style.visibility= "hidden";
}

/*step*/
function stepLeft() {
	var Things = document.getElementById("user_privilege_ico").getElementsByTagName("a");
	for (var i = 0; i < Things.length; i++) {
	document.getElementById("user_privilege_ico").getElementsByTagName("a")[i].style.left="-200px";
	};
}

function stepRight() {
	var Things = document.getElementById("user_privilege_ico").getElementsByTagName("a");
	for (var i = 0; i < Things.length; i++) {
		document.getElementById("user_privilege_ico").getElementsByTagName("a")[i].style.left="0px"
	};
	//document.getElementById("user_privilege_ico").style.left="0px";
}

/*搜索框*/
function inputOnfocus(){
	document.getElementById("search_p").style.visibility= "hidden"; 
}
function inputOnblur(){
	document.getElementById("search_p").style.visibility= "visible"; 
}

/*搜索tab*/
var lastTab="search_tag_commodity";
function searchTab(id) {
	if (id != lastTab) {
		document.getElementById(id).className="search_tag search_tag_normal";
		document.getElementById(lastTab).className="search_tag";
		lastTab=id;
	};
}

/*notice*/
var noticeTab = {
	init: function() {
		var self = this;
		this.postNoticeTabs = document.getElementById("notice_tab_nav").getElementsByTagName("li");
		this.currentNoticeTab = 0;
		this.doClick = function(e) {
			self.noticeTabMoveIn(this.getAttribute('data-id'));
			// return false;
		};
		for (var i = this.postNoticeTabs.length - 1; i >= 0; i--) {
			this.postNoticeTabs[i].setAttribute('data-id', i);
			this.postNoticeTabs[i].addEventListener('click',this.doClick);
			// addEvent(this.postNoticeTabs[i], "click", this.doClick, true);
		};
	},
	noticeTabMoveIn: function(id) {
			this.removeClassName(this.postNoticeTabs[this.currentNoticeTab]);
			this.currentNoticeTab = id;
			this.addClassName(this.postNoticeTabs[this.currentNoticeTab]);
			//this.postNoticeTabs[id].removeEventListener('click', this.doClick);
	},
	removeClassName: function(el) {
		el.className = el.className.replace('notice_tab_nav_hover', '');
	},
	addClassName: function(el) {
		el.className = el.className + ' notice_tab_nav_hover';
	}
};
window.addEventListener('DOMContentLoaded', function() {
	noticeTab.init();
	convenienceTabNav.init();
});
var convenienceTabNav = {
	init: function() {
		var self = this;
		this.postTabs = document.getElementById("convenience_tab_nav").getElementsByTagName("li");
		this.currentTab=0;
		this.doMove = function(e) {
			self.moveInTab(this.getAttribute('data-id'));
			// return false;
		};
		for (var i = this.postTabs.length - 1; i >= 0; i--) {
			this.postTabs[i].setAttribute('data-id', i);
			this.postTabs[i].addEventListener('mouseover',this.doMove);
		};
	},
	moveInTab:function(id){
		this.removeClassName(this.postTabs[this.currentTab]);
		this.currentTab = id;
		this.addClassName(this.postTabs[this.currentTab]);
	},
	addClassName:function(e){
		e.className = e.className + "convenience_tab_nav_hover";
	},
	removeClassName:function(e){
		e.className = e.className.replace("convenience_tab_nav_hover","");
	}
};


// 
// function addEvent(obj, event, fn, capute) {
// 	capute = capute || false;
// 	if (document.addEventListener) {
// 		obj.addEventListener(event, fn, capute);
// 	} else {
// 		obj.attachEvent('on' + event, fn, capute);
// 	}
// }