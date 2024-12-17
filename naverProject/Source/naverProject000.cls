
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
	
	// 2. 더보기 버튼 초기 상태 설정: shortcut_group은 숨기기
	this.shortcut_group.element.style.display = 'none';


	
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
	
	// 3. 뉴스 롤링 시작
    this.startNewsRolling();

};

function naverProject000*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

// 상태를 저장할 변수 (창이 열렸는지 여부 확인)
let isMoreOptionsOpen = true;

// 2. 더보기 버튼 클릭 시 
function naverProject000*onMoreButtonClick(comp, info, e)
{
	console.log("isMoreOptionsOpen : "+isMoreOptionsOpen);
	const moreButton = e.target;
	
	if (isMoreOptionsOpen) {
        // 창이 열려있는 상태에서 클릭하면 창을 닫고 이미지 변경
    	this.shortcut_group.element.style.display = 'block'; // shortcut_group 보이기
    } else {
        // 창이 닫혀있는 상태에서 클릭하면 창을 열고 이미지 변경
    	this.shortcut_group.element.style.display = 'none'; // shortcut_group 숨기기
    }
	
	// 상태를 반전시킴
    isMoreOptionsOpen = !isMoreOptionsOpen;
};

// 3. 위로 자동 무한(5개)
function naverProject000*startNewsRolling() {
    const newsBox = this.news_box.element; // 뉴스 박스 컨테이너
    const newsItems = Array.from(newsBox.children); // 라벨들 배열
    const itemHeight = 26; // 라벨 하나의 높이
    let currentIndex = 0; // 현재 보여줄 라벨의 인덱스

    // 라벨 롤링 실행
    setInterval(() => {
        const currentItem = newsItems[currentIndex]; // 현재 라벨
        const nextIndex = (currentIndex + 1) % newsItems.length; // 다음 라벨 인덱스
        const nextItem = newsItems[nextIndex]; // 다음 라벨

        // 1. 다음 라벨을 translateY(26px)로 화면 아래 위치 설정
        nextItem.style.transition = "none"; // 처음에는 애니메이션 없이 설정
        nextItem.style.transform = `translateY(${itemHeight}px)`; // 다음 라벨을 화면 아래로 위치시킴

        // 2. 0.1초 후, 현재 라벨과 다음 라벨을 동시에 애니메이션 시작
        setTimeout(() => {
            currentItem.style.transition = "transform 0.5s ease"; // 애니메이션 적용
            currentItem.style.transform = `translateY(-${itemHeight}px)`; // 현재 라벨을 위로 올리기

            nextItem.style.transition = "transform 0.5s ease"; // 애니메이션 적용
            nextItem.style.transform = `translateY(0px)`; // 다음 라벨을 화면 위로 올리기
        }, 300); // 0.6초 지연 후, 애니메이션 시작

        // 3. 0.5초 후 현재 라벨을 맨 뒤로 이동
        setTimeout(() => {
            currentItem.style.transition = "none"; // 애니메이션 제거
            currentItem.style.transform = "translateY(0)"; // 원래 위치로 되돌리기
            newsBox.appendChild(currentItem); // 라벨을 맨 뒤로 이동

            // 애니메이션 다시 적용
            setTimeout(() => {
                currentItem.style.transition = "transform 0.5s ease";
            }, 50); // transition 제거 후 다시 적용
        }, 500); // 애니메이션 시간과 동일

        // 다음 라벨 인덱스 설정
        currentIndex = nextIndex;
    }, 3000); // 3초마다 실행
}



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

