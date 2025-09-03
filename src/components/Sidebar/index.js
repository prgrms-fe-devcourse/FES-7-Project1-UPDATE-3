import "./style.css";
import apiDocs from "../../api/documents";

const createAddPageButton = () => {
  const addPageButtonArea = document.createElement("div");
  addPageButtonArea.className = "bottom-add-page-area";
  const addPageButton = document.createElement("span");
  addPageButton.className = "bottom-add-page-button";
  addPageButton.textContent = "+";
  const addPageText = document.createElement("span");
  addPageText.className = "bottom-add-page-text";
  addPageText.textContent = "새 페이지 추가";

  addPageButtonArea.appendChild(addPageButton);
  addPageButtonArea.appendChild(addPageText);

  return addPageButtonArea;
};

const Sidebar = async () => {
  /* 사이드바 기본 구조 생성 */
  // 사이드바 전체를 감싸는 aside 생성
  const sidebarEl = document.createElement("aside");
  sidebarEl.id = "sidebar";

  // 사이드바 헤더 영역
  const sidebarHeader = document.createElement("div");
  sidebarHeader.className = "sidebar-header";

  // 문서 목록을 담을 네비게이션 영역
  const documentListNav = document.createElement("nav");
  documentListNav.id = "document-list";

  /* 문서 트리 렌더링 */
  const renderDocuments = (parent, docs) => {
    const ul = document.createElement("ul");
    ul.className = "document-list";

    docs.forEach((doc) => {
      // 문서DOM 구조 생성
      const li = document.createElement("li");
      li.className = "document-item";

      const pageInfo = document.createElement("div");
      pageInfo.className = "page-info";

      // 문서 제목 영역
      const pageTitleArea = document.createElement("div");
      pageTitleArea.className = "page-title-area";

      // 좌측, 우측 토글 아이콘 영역
      const leftToggleArea = document.createElement("div");
      leftToggleArea.className = "left-toggle-area";

      const rightToggleArea = document.createElement("div");
      rightToggleArea.className = "right-toggle-area";

      // 문서 제목
      const pageTitle = document.createElement("span");
      pageTitle.className = "page-title";
      pageTitle.textContent = doc.title;
      pageTitleArea.appendChild(pageTitle);

      // 접기/펴기
      const toggleButton = document.createElement("span");
      toggleButton.className = "toggle-button";
      toggleButton.textContent = "▶";
      leftToggleArea.appendChild(toggleButton);

      // 새 문서 추가
      const addButton = document.createElement("span");
      addButton.className = "add-child-button";
      addButton.textContent = "+";
      rightToggleArea.appendChild(addButton);

      // 휴지통
      const deleteButton = document.createElement("span");
      deleteButton.className = "delete-button";
      deleteButton.textContent = "🗑️";
      rightToggleArea.appendChild(deleteButton);

      // <div>
      pageInfo.appendChild(leftToggleArea);
      pageInfo.appendChild(pageTitle);
      pageInfo.appendChild(rightToggleArea);

      // <div>
      li.appendChild(pageInfo);

      // 하위 문서 있으면 기본으로 닫음 상태로 전환
      if (doc.documents && doc.documents.length > 0) {
        renderDocuments(li, doc.documents);
        li.querySelector("ul").classList.add("hidden");
      }

      // <li>
      ul.appendChild(li);
    });

    // <ul>
    parent.appendChild(ul);
  };

  const documents = await apiDocs.getList();
  renderDocuments(documentListNav, documents); // 재귀 호출, 하위 문서 있으면 렌더링

  // 모든 문서 최하단에 [새 페이지 추가] 버튼
  const BottomAddPageButton = createAddPageButton();
  documentListNav.appendChild(BottomAddPageButton);

  /* 렌더링 결과물 추가 */
  sidebarEl.appendChild(sidebarHeader);
  sidebarEl.appendChild(documentListNav);

  // 이벤트리스너(이벤트 위임) sidebarEl에 붙힘
  sidebarEl.addEventListener("click", (e) => {
    const target = e.target;
    // 접기/펴기 토글 버튼
    if (target.classList.contains("toggle-button")) {
      const parentLi = target.closest(".document-item");
      const childDocs = parentLi.querySelector("ul");

      if (childDocs) {
        childDocs.classList.toggle("hidden");
        target.textContent = childDocs.classList.contains("hidden") ? "▶" : "▼";
      } else {
        // 하위 페이지가 없는 경우 처리 (토글 시 '하위 페이지 없음' 텍스트)
        const noPagesText = parentLi.querySelector(".no-pages-text");
        if (noPagesText) {
          parentLi.removeChild(noPagesText);
          target.textContent = "▶";
        } else {
          const newNoPagesText = document.createElement("span");
          newNoPagesText.className = "no-pages-text";
          newNoPagesText.textContent = "하위 페이지 없음";
          parentLi.appendChild(newNoPagesText);
          target.textContent = "▼";
        }
      }
    } else if (target.classList.contains("add-child-button")) {
      // '+' 버튼 클릭
      const parentLi = target.closest(".document-item");
      const parentId = parentLi ? parentLi.dataset.id : null;
      console.log("추가");
    } else if (target.classList.contains("delete-button")) {
      // '휴지통' 버튼 클릭
      const parentLi = target.closest(".document-item");
      const documentId = parentLi ? parentLi.dataset.id : null;
      console.log("삭제");
    }
  });

  // 생성된 aside 요소를 반환
  return sidebarEl;
};

export default Sidebar;
