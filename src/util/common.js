const aa = {
	name: "789654123",
	age: "ss"
}

/**
 * 
 * @param {string} methods get/post
 * @param {object} data {}
 */
function getAxios(methods,data){
	
}

/**
 * 
 * @param {*} doc 
 * @param {*} win 
 */
function setRem (doc, win) {  
	let docEl = doc.documentElement;  //考虑以及兼容了 屏幕旋转的事件
	let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';  
	let recalc = function () { 
	   var clientWidth = docEl.clientWidth;          
	   if (!clientWidth) return;           
	   if (clientWidth >= 750) {
				   docEl.style.fontSize = '100px';
		} else {
				   docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
			  }
		};   if (!doc.addEventListener) return;
	  win.addEventListener(resizeEvt, recalc, false);     // 屏幕大小以及旋转变化自适应
	  doc.addEventListener('DOMContentLoaded', recalc, false);     // 页面初次打开自适应
	  recalc();
  };
export default {
	aa,
	getAxios,
	setRem
}