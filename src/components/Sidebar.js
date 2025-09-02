const Sidebar = (documents) => {
  const $documentList = document.querySelector("#document-list");

  $documentList.innerHTML = "";

  const renderDocuments = (parentEl, docs) => {
    const ul = document.createElement("ul");

    docs.forEach((doc) => {
      const li = document.createElement("li");
      li.textContent = doc.title;

      if (doc.documents && doc.documents.length > 0) {
        // 재귀호출
        renderDocuments(li, doc.documents);
      }
      ul.appendChild(li);
    });

    parentEl.appendChild(ul);
  };

  renderDocuments($documentList, documents);
};

export default Sidebar;
