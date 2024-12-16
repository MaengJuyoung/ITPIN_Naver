
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

	
	// 1. 페이지 로드 시 검색창에 포커스를 설정
    this.search_input.setFocus();
	this.search_input.setPlaceholder("검색어를 입력해 주세요.");
	
	// 초기 상태 설정: shortcutArea는 보이고 shortcut_group은 숨기기
	this.shortcut_group.element.style.display = 'none';  // shortcutArea 숨기기
    this.shortcutArea.element.style.display = 'block'; // shortcutArea 보이기

	console.log("this.shortcut_group.element.style.display: "+this.shortcut_group.element.style.display);  // this.shortcutArea가 실제로 어떤 값인지 확인
    console.log("this.shortcutArea.element.style.display: "+this.shortcutArea.element.style.display);  // this.shortcutArea.$ele가 실제로 어떤 값인지 확인



	
};

function naverProject000*onInitDone()
{
	super.onInitDone();

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

function naverProject000*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

// 상태를 저장할 변수 (창이 열렸는지 여부 확인)
let isMoreOptionsOpen = false;

// 2. 더보기 버튼 클릭 시 
function naverProject000*onMoreButtonClick(comp, info, e)
{
	if (isMoreOptionsOpen) {
        // 창이 열려있는 상태에서 클릭하면 창을 닫고 이미지 변경
        this.shortcutArea.element.style.display = 'none';  // shortcutArea 숨기기
    	this.shortcut_group.element.style.display = 'block'; // shortcutArea 보이기
    } else {
        // 창이 닫혀있는 상태에서 클릭하면 창을 열고 이미지 변경
		this.shortcut_group.element.style.display = 'none';  // shortcutArea 숨기기
    	this.shortcutArea.element.style.display = 'block'; // shortcutArea 보이기
    }
	
	// 상태를 반전시킴
    isMoreOptionsOpen = !isMoreOptionsOpen;
};

// 6. tabview 사용
function naverProject000*onALabelTabClick(comp, info, e) {
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
function naverProject000*onAButton2Click(comp, info, e)
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
function naverProject000*onAButton1Click(comp, info, e)
{

	//TODO:edit here
	// 스크롤을 맨 위로 이동
    window.scrollTo({
        top: 0, // 페이지의 맨 위로 이동
        behavior: 'smooth' // 부드럽게 스크롤
    });

    console.log("맨 위로 이동");

};

