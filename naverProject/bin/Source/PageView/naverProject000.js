
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

// 12. up(top)버튼 클릭 시 
naverProject000.prototype.onAButton1Click = function(comp, info, e)
{

	//TODO:edit here
	// 스크롤을 맨 위로 이동
    window.scrollTo({
        top: 0, // 페이지의 맨 위로 이동
        behavior: 'smooth' // 부드럽게 스크롤
    });

    console.log("맨 위로 이동");

};

// 7. 시간 새로고침 버튼 클릭 시 
naverProject000.prototype.onAButton2Click = function(comp, info, e)
{

	//TODO:edit here
	// 현재 시간 가져오기
    const now = new Date();

    // 날짜와 시간 포맷팅
    const formattedDateTime = 
        `${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')}. ` +
        `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    // timeRefresh 라벨의 텍스트를 업데이트
    this.timeRefresh.setText(formattedDateTime);

    console.log(`현재 시간: ${formattedDateTime}`);

};
