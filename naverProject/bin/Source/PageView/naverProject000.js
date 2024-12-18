
/**
Constructor
Do not call Function in Constructor.
*/
function naverProject000()
{
	AView.call(this);
}
afc.extendsClass(naverProject000, AView);


naverProject000.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	// 1. 페이지 로드 시 검색창에 포커스를 설정
    this.search_input.setFocus();
	
	// 2. 더보기 버튼 초기 상태 설정: shortcut_group은 숨기기
	this.shortcut_group.element.style.display = 'none';
	this.media_area_list.element.style.display = 'none';
	
	// 9. 피드 초기 상태 설정
	// feed_more 클래스를 가진 모든 요소를 숨기기
	const feedMoreElements = document.querySelectorAll('.feed_more');
	feedMoreElements.forEach(element => {
		element.style.display = 'none';
	});

	// 11. 스크롤 - 검색창 초기 상태 설정
	this.search_area_top.element.style.display = 'none';

	
};

naverProject000.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	this.tabview.addTab('쇼핑', 'Source/SubView/shoppingTab.lay', 'shoppingTab');
	this.tabview.addTab('맨즈', 'Source/SubView/mansTab.lay', 'mansTab');
	this.tabview.addTab('원쁠딜', 'Source/SubView/onePlusTab.lay', 'onePlusTab');
	this.tabview.addTab('쇼핑라이브', 'Source/SubView/shoppingLiveTab.lay', 'shoppingLiveTab');
	
	this.tabview.selectTabById('shoppingTab');
	console.log("브라우저 실행");
	
	
	// 페이지 로드 시에도 현재 시간 설정
    this.onRefreshBtnClick();  // onRefreshBtnClick 함수 호출하여 시간을 설정
	
	// 3. 뉴스 롤링 시작(5개)
    this.startNewsRolling();
	
	// 8. 배너 롤링 시작(3개)
	this.startBannerRolling();
	
	// 11. 스크롤 이벤트 추가
	/* 1. 오류 상황
	스크롤 이벤트 리스너는 window 객체에 등록되기 때문에 this가 window 객체를 가리킨다. 
	따라서  this.search_area_top.element에서 this가 제대로 참조되지 않아서 오류가 발생
	window.addEventListener('scroll', this.onScroll);
	*/
	/* 해결방법 1
	this를 다른 변수에 저장 - this를 미리 다른 변수에 저장해두고, 그 변수로 this를 참조하는 방법
	self 변수에 this를 저장하고, 이벤트 핸들러에서 self를 사용하여 클래스 인스턴스를 참조하도록 한다
	const self = this;
	window.addEventListener('scroll', function() {
		self.onScroll();  // self는 this를 올바르게 참조함
	});*/
	window.addEventListener('scroll', (event) => {
		this.onScroll(event);  // 화살표 함수를 사용하면 this가 클래스 인스턴스를 가리킴
	});
};

naverProject000.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);
};

// 2. 더보기 버튼 클릭 시 
// 상태를 저장할 변수 (창이 열렸는지 여부 확인)
let isMoreOptionsOpen = true;
naverProject000.prototype.onServiceMoreBtnClick = function(comp, info, e)
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
naverProject000.prototype.startNewsRolling = function() {
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

        // 2. 현재 라벨과 다음 라벨 애니메이션 시작
        setTimeout(() => { // 현재 라벨 올리기
            currentItem.style.transition = "transform 0.5s ease"; // 애니메이션 적용
            currentItem.style.transform = `translateY(-${itemHeight}px)`; // 현재 라벨을 위로 올리기
        }, 300); // 0.3초 후, 애니메이션 시작
		setTimeout(() => { // 다음 라벨 올라오기
            nextItem.style.transition = "transform 0.5s ease"; // 애니메이션 적용
            nextItem.style.transform = `translateY(0px)`; // 다음 라벨을 화면 위로 올리기
        }, 400); // 0.4초 후, 애니메이션 시작

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
};

// 5. 화면변화(표현방법 자유) - 리스트/목록 버튼
naverProject000.prototype.onBtnClick = function(comp, info, e) {
    const button = e.target;
    console.log("e.target : " + e.target);    
    console.log("e.target.tagName : " + e.target.tagName);

    // 버튼 클릭 시, 버튼이 IMG가 아니면 내부에 있는 IMG를 찾음
    let imgElement = button.tagName === "IMG" ? button : button.querySelector("img");

    if (imgElement && imgElement.src) {  // 이미지 요소가 있고 src 속성이 존재할 때
        if (imgElement.src.includes("list")) {  // 리스트 버튼이 클릭된 경우
            // 리스트 버튼 이미지 변경
            imgElement.src = 'Assets/section/newsStand/list3.png';  // 이미지 경로 변경
            this.thumbBtn.setImage('Assets/section/newsStand/thumb1.png');
            this.thumbBtn.setIconSize('auto 18px');
            this.media_area_thumb.element.style.display = 'none';
            this.media_area_list.element.style.display = 'flex';
			this.media_name.setText('종합/경제 언론사 뉴스');
			this.media_page.setText('82');
        } else if (imgElement.src.includes("thumb")) {  // 썸네일 버튼이 클릭된 경우
            // 썸네일 버튼 이미지 변경
            imgElement.src = 'Assets/section/newsStand/thumb3.png';  // 이미지 경로 변경
            this.listBtn.setImage('Assets/section/newsStand/list1.png');
            this.listBtn.setIconSize('auto 20px');
            this.media_area_list.element.style.display = 'none';
            this.media_area_thumb.element.style.display = 'flex';
			this.media_name.setText('언론사');
			this.media_page.setText('4');
        }
    } else {
        console.error('이미지 요소를 찾을 수 없습니다.');
    }
}

// 6. tabview 사용
naverProject000.prototype.onALabelTabClick = function(comp, info, e) {
    // 클릭된 라벨의 아이디를 가져옴
    const labelId = e.target.id;
	console.log("labelId : "+labelId);
	
    // tabId를 정의하고, if-else로 선택
    let tabId = '';

    if (labelId === '_1--shoppingTab') {
        tabId = 'shoppingTab';
		this.tab_page.setText('/ 13');
		this.tab_pagination.element.style.display = 'block';
    } else if (labelId === '_1--mansTab') {
        tabId = 'mansTab';
		this.tab_page.setText('/ 7');
		this.tab_pagination.element.style.display = 'block';
    } else if (labelId === '_1--onePlusTab') {
        tabId = 'onePlusTab';
		this.tab_pagination.element.style.display = 'none';
    } else if (labelId === '_1--shoppingLiveTab') {
        tabId = 'shoppingLiveTab';
		this.tab_pagination.element.style.display = 'none';
    } else {
        console.log("알 수 없는 라벨 아이디");
        return;
    }

    // 해당 tabId에 맞는 탭을 선택
    this.tabview.selectTabById(tabId);
    console.log(`${labelId} 탭 실행`);
	
	// 모든 탭의 라벨을 가져와서 클래스 갱신
    const allTabLabels = document.querySelectorAll('.tab-label'); // 탭 라벨의 클래스는 'tab-label'로 가정

	const clickedLabel = document.getElementById(labelId); // 클릭된 라벨의 요소
    if (clickedLabel) {
        // 모든 라벨에서 select-tab 스타일 클래스를 제거하고, normal-tab 스타일 클래스를 추가
        allTabLabels.forEach(label => {
            if (label === clickedLabel) {
                label.classList.remove('normal-tab');
                label.classList.add('select-tab');
            } else {
                label.classList.remove('select-tab');
                label.classList.add('normal-tab');
            }
        });
    }
};

// 7. 시간 새로고침 버튼 클릭 시 
naverProject000.prototype.onRefreshBtnClick = function(comp, info, e)
{
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

// 8. 왼쪽, 닷 무한 자동(3개)
naverProject000.prototype.startBannerRolling = function() {
	const bannerBox = this.banner_items.element // 배너 박스 컨테이너
	const bannerItems = Array.from(document.querySelectorAll('.banner_item')); // 배너 아이템 배열
	const bannerIndicator = this.banner_indicator.element;
	const indicatorImages = [
		"Assets/aside/sideBanner4/icon1.jpg",
        "Assets/aside/sideBanner4/icon2.jpg",
        "Assets/aside/sideBanner4/icon3.jpg",
	]; // 인디케이터 이미지 경로 배열
	
	const itemWidth = 352; // 배너 하나의 너비
	let currentIndex = 0; // 현재 배너 인덱스
	
	// 배너 롤링 실행
	setInterval( () => {
		const currentItem = bannerItems[currentIndex]; // 현재 배너
        const nextIndex = (currentIndex + 1) % bannerItems.length; // 다음 배너 인덱스
        const nextItem = bannerItems[nextIndex]; // 다음 배너
	
        // 1. 다음 배너를 화면 오른쪽에 배치
        nextItem.style.transition = "none"; // 초기화
        nextItem.style.transform = `translateX(${itemWidth}px)`; // 다음 배너를 오른쪽으로 이동

        // 2. 애니메이션 시작
        setTimeout(() => {
            currentItem.style.transition = "transform 0.5s ease"; // 애니메이션 설정
            currentItem.style.transform = `translateX(-${itemWidth}px)`; // 현재 배너를 왼쪽으로 이동

            nextItem.style.transition = "transform 0.5s ease"; // 애니메이션 설정
            nextItem.style.transform = `translateX(0)`; // 다음 배너를 화면 중앙으로 이동
					
			// 2-1. 인디케이터 이미지 변경
			bannerIndicator.style.backgroundImage = `url(${indicatorImages[nextIndex]})`;
        }, 300); // 0.3초 후, 애니메이션 시작

        // 3. 애니메이션이 끝난 후 현재 배너를 맨 뒤로 이동
        setTimeout(() => {
            currentItem.style.transition = "none"; // 애니메이션 제거
            currentItem.style.transform = "translateX(0)"; // 초기화
            bannerBox.appendChild(currentItem); // 현재 배너를 맨 뒤로 이동
        }, 300); // 0.3s 애니메이션 후

		
        currentIndex = nextIndex; // 인덱스 업데이트
    }, 3000); // 3초마다 실행
}

// 9. 더보기
let buttonClickCount = 0;	// 버튼 클릭 횟수 추적
naverProject000.prototype.onRecommendMoreBtnClick = function(comp, info, e)
{
	const myButton = this.content_more_area.element;
	buttonClickCount++; // 클릭 횟수 증가
	
    if (buttonClickCount === 2) { // 클릭 횟수가 2번일 때
        myButton.style.display = 'none'; // 버튼 숨기기
    }
	
	let startIndex = 4 + (buttonClickCount - 1) * 2; // 4부터 시작, 두 번째 클릭 시 6, 세 번째 클릭 시 8로 변경
    let endIndex = startIndex + 1; // 두 항목씩 표시

    // feed_box4~7을 클릭 횟수에 맞게 표시
    for (let i = startIndex; i <= endIndex; i++) {
        if (this[`feed_box${i}`]) {
            this[`feed_box${i}`].element.style.display = 'block'; // 해당 feed_box 표시
        }
    }
};

// 11. 스크롤
naverProject000.prototype.onScroll = function() {
    const scrollPosition = window.scrollY;  // 현재 스크롤 위치
	const searchArea = this.search_area_top.element;
    
	// 스크롤 위치가 200px 이상일 때 검색창을 보이게 설정
    if (scrollPosition >= 200) {
        searchArea.style.display = 'block';  // 검색창 보이기
		this.search_input_top.setFocus();
    } else {
        searchArea.style.display = 'none';  // 검색창 숨기기
		this.search_input.setFocus();
	}
};

naverProject000.prototype.Search_input_Focus = function(comp, info, e)
{
	this.search_input_top.setPlaceholder("검색어를 입력해 주세요.");
	this.search_input.setPlaceholder("검색어를 입력해 주세요.");
};

naverProject000.prototype.Search_input_Blur = function(comp, info, e)
{
	this.search_input_top.setPlaceholder("");
	this.search_input.setPlaceholder("");
};

// 12. up(top)버튼 클릭 시 
naverProject000.prototype.onTopBtnClick = function(comp, info, e)
{
	// 스크롤을 맨 위로 이동
    window.scrollTo({
        top: 0, // 페이지의 맨 위로 이동
        behavior: 'smooth' // 부드럽게 스크롤
    });

    console.log("맨 위로 이동");

};
