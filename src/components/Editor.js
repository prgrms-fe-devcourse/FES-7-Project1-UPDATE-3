export function Editor() {
  const section = document.createElement("section");
  section.innerText = "섹션"  //check

  const title = document.createElement("div");
  title.id = "title";
  const contents = document.createElement("div");
  contents.id = "contents";
  title.innerText = "title입니다";
  contents.innerText = "content입니다";

  section.appendChild(title);
  section.appendChild(contents);

  return section;
}
