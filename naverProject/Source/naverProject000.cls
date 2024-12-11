
/**
Constructor
Do not call Function in Constructor.
*/
class naverProject000()
{
	super();

	//TODO:edit here

}
extends AView;


function naverProject000*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function naverProject000*onInitDone()
{
	super.onInitDone();

	//TODO:edit here
	this.tabview.addTab('쇼핑', 'Source/SubView/shopingTab.lay', 'shopingTab');
	this.tabview.addTab('맨즈', 'Source/SubView/mansTab.lay', 'mansTab');
	this.tabview.addTab('원쁠딜', 'Source/SubView/onePlusTab.lay', 'onePlusTab');
	this.tabview.addTab('쇼핑라이브', 'Source/SubView/shopingLiveTab.lay', 'shopingLiveTab');
	
	this.tabview.selectTabById('shopingTab');
	console.log("브라우저 실행");

};

function naverProject000*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function naverProject000*onALabel1Click(comp, info, e)
{
	
	//TODO:edit here
	this.tabview.selectTabById('shopingTab');
	console.log("쇼핑 탭 실행");

};

function naverProject000*onALabel2Click(comp, info, e)
{

	//TODO:edit here
	this.tabview.selectTabById('mansTab');
	console.log("mans 실행");
};

function naverProject000*onALabel3Click(comp, info, e)
{

	//TODO:edit here
	this.tabview.selectTabById('onePlusTab');
	console.log("원쁠딜 실행");
};

function naverProject000*onALabel4Click(comp, info, e)
{

	//TODO:edit here
	this.tabview.selectTabById('shopingLiveTab');
	console.log("쇼핑라이브 실행");

};
