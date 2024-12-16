
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

	
	// 1. 페이지 로드 시 검색창에 포커스를 설정
    this.search_input.setFocus();
	this.search_input.setPlaceholder("검색어를 입력해 주세요.");
};

naverProject000.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here
	this.tabview.addTab('쇼핑', 'Source/SubView/shoppingTab.lay', 'shoppingTab');
	this.tabview.addTab('맨즈', 'Source/SubView/mansTab.lay', 'mansTab');
	this.tabview.addTab('원쁠딜', 'Source/SubView/onePlusTab.lay', 'onePlusTab');
	this.tabview.addTab('쇼핑라이브', 'Source/SubView/shoppingLiveTab.lay', 'shoppingLiveTab');
	
	this.tabview.selectTabById('shoppingTab');
	console.log("브라우저 실행");
	
	
	// 페이지 로드 시에도 현재 시간 설정
    this.onAButton2Click();  // onAButton2Click 함수 호출하여 시간을 설정

};

naverProject000.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};


// 6. tabview 사용
naverProject000.prototype.onALabelTabClick = function(comp, info, e) {
    // 클릭된 라벨의 아이디를 가져옴
    const labelId = e.target.id;
	console.log("labelId : "+labelId);
	
    // tabId를 정의하고, if-else로 선택
    let tabId = '';

    if (labelId === '_1--shoppingTab') {
        tabId = 'shoppingTab';
    } else if (labelId === '_1--mansTab') {
        tabId = 'mansTab';
    } else if (labelId === '_1--onePlusTab') {
        tabId = 'onePlusTab';
    } else if (labelId === '_1--shoppingLiveTab') {
        tabId = 'shoppingLiveTab';
    } else {
        console.log("알 수 없는 라벨 아이디");
        return;
    }

    // 해당 tabId에 맞는 탭을 선택
    this.tabview.selectTabById(tabId);
    console.log(`${labelId} 탭 실행`);
}

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