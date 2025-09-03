import "./style.css";

// 테스트를 위한 더미 데이터
const TEST_DOCUMENTS = [
  {
    id: 1,
    title: "최상위 페이지",
    documents: [
      {
        id: 2,
        title: "하위 페이지 1",
        documents: [내용입니다],
      },
    ],
  },
  {
    id: 4,
    title: "최상위 페이지 2",
    documents: [],
  },
];

export function Editor() {
  /* editor 기본 구조 생성 */
  const section = document.createElement("section");
  // title과 contents를 각각의 div로 구성
  const title = document.createElement("div");
  const contents = document.createElement("div");
  title.id = "title";
  title.textContent = "새 페이지";
  contents.id = "contents";
  title.textContent = "내용을 입력하세요";

  section.appendChild(title);
  section.appendChild(contents);

  /* url 에서 id 가져오기 */
  const id = window.location.pathname.split("/")[2];

  // main 안에 들어갈 section을 만들고, 그 안에 에디터 요소를 만들어 최종 반환
  return section;
}
