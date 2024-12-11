
/**
Constructor
Do not call Function in Constructor.
*/
function naverProject000()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(naverProject000, AView);


naverProject000.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

naverProject000.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here
	this.tabview.addTab('쇼핑', 'Source/SubView/shopingTab.lay', 'shopingTab');
	this.tabview.addTab('맨즈', 'Source/SubView/mansTab.lay', 'mansTab');
	this.tabview.addTab('원쁠딜', 'Source/SubView/onePlusTab.lay', 'onePlusTab');
	this.tabview.addTab('쇼핑라이브', 'Source/SubView/shopingLiveTab.lay', 'shopingLiveTab');
	
	this.tabview.selectTabById('shopingTab');
	console.log("브라우저 실행");

};

naverProject000.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

naverProject000.prototype.onALabel1Click = function(comp, info, e)
{
	
	//TODO:edit here
	this.tabview.selectTabById('shopingTab');
	console.log("쇼핑 탭 실행");

};

naverProject000.prototype.onALabel2Click = function(comp, info, e)
{

	//TODO:edit here
	this.tabview.selectTabById('mansTab');
	console.log("mans 실행");
};

naverProject000.prototype.onALabel3Click = function(comp, info, e)
{

	//TODO:edit here
	this.tabview.selectTabById('onePlusTab');
	console.log("원쁠딜 실행");
};

naverProject000.prototype.onALabel4Click = function(comp, info, e)
{

	//TODO:edit here
	this.tabview.selectTabById('shopingLiveTab');
	console.log("쇼핑라이브 실행");

};
