
// 初始化结构--歌词
export function initSong(selector,songData){
	var box = $(selector);
	// 创建歌词p元素
	$.each(songData,function(index,item){
		item == '' ? box.append($('<p>.<p>')) : box.append($('<p>'+item+'<p>'));
	});
	box.find('p').css({
		'color': '#fff',
		'font-size': '.3rem'
	})
	box.find('p').each(function(index,item){
		
		item.innerHTML == '' && $(this).remove();
	}.bind(this))
}

/*
格式化并设置歌曲结束的时间

*/
function setSongTime(duration){
	var duration = Math.round(duration);
	var minute = parseInt(duration / 60);
	minute = minute >= 10 ? minute : '0'+ minute;
	// 秒
	var second = parseInt(duration % 60 );
	second = second >= 10 ? second : '0'+ second;

	return{minute, second};
}

/*
将歌词时间格式化为秒
*/

export function timeMaker(str){
	var min = /\[(\d+)\:/.exec(str)[1];
	var sec =/\:(\S+)\]/.exec(str)[1];
	return min * 60 + Math.round(sec);
}
