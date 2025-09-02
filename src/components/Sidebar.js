const Sidebar = (documents) => {
  const $documentList = document.querySelector("#document-list");

  $documentList.innerHTML = "";

  const renderDocuments = (parentEl, docs) => {
    const ul = document.createElement("ul");
    ul.className = "document-list";

    docs.forEach((doc) => {
      // 문서 영역
      const li = document.createElement("li");
      li.className = "document-item";

      const pageInfo = document.createElement("div");
      pageInfo.className = "page-info";

      const pageTitle = document.createElement("span");
      pageTitle.textContent = doc.title;

      const toggleIconArea = document.createElement("span");
      toggleIconArea.className = "toggle-icon-area";

      // 문서 트리 접기/펼치기
      const toggleButton = document.createElement("span");
      toggleButton.className = "toggle-button";
      toggleButton.textContent = "▶";

      toggleIconArea.appendChild(toggleButton);

      toggleButton.addEventListener("click", (e) => {
        e.stopPropagation();
        const childUl = li.querySelector("ul");
        if (childUl) {
          childUl.classList.toggle("hidden");
          toggleButton.textContent = childUl.classList.contains("hidden") ? "▶" : "▼";
        }
      });

      pageInfo.appendChild(toggleIconArea);
      pageInfo.appendChild(pageTitle);

      li.appendChild(pageInfo);

      // 재귀 호출, 하위 문서 있으면 렌더링
      if (doc.documents && doc.documents.length > 0) {
        renderDocuments(li, doc.documents);
        li.querySelector("ul").classList.add("hidden"); // 초기 상태 숨김으로 설정
      }

      ul.appendChild(li);
    });

    parentEl.appendChild(ul);
  };

  renderDocuments($documentList, documents);
};

export default Sidebar;
