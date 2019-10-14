//找出1级分类的数据
var listMain = category.filter(function(item) {
	return item.fid === 0
});
//记录数据中的id，下面都会用到。
var activeId = 0;
// var activeId = listMain[0].id;
// var htmlStr = '';
listMain.forEach(function(item, i) {
	// htmlStr += `<li><span>${item.name}</span></li>`;
	$(`<li data-id = '${item.id}'><span>${item.name}</span></li>`).on('click', function() {
		// if(item.id === activeId) return;//如果已经激活什么都做
		// $(this).addClass('active').siblings().removeClass('active');
		// class='${i === 0 ? "active" : ""}'和addClass('类名')一个效果
		// activeId = item.id;
		toggle(item.id);
	}).appendTo('ul.list-main');

	//也可以使用addClass的方式给每个添加class类名，使用.addClass(i === 0 ? "active" : "")的方式
})

toggle(listMain[0].id);
// $('ul.list-main').html(htmlStr);

function toggle(id) {
	if (id === activeId) return;
	//左边的切换,通过选择器来获取当前选择的那个id
	$(`li[data-id = ${ id }]`).addClass('active').siblings().removeClass('active');

	//右上图片变换
	var path = listMain.find(function(item) {
		return item.id === id;
	}).avatar;

	$('img.avatar').attr('src', path);
	activeId = id;
}
