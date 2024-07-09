function toUrl(url: string): URL | null {
  try {
    return new URL(url);
  } catch (e) {
    return null;
  }
}

document$.subscribe(function () {
  const table = document.querySelector(".sortable table");
  if (!table) return;

  const linkCells = document.querySelectorAll("tbody tr td:last-of-type");
  linkCells.forEach((cell) => {
    const url = toUrl(cell.textContent);
    if (url) {
      const a = document.createElement("a");
      a.href = cell.textContent;
      a.innerHTML = url.hostname;
      a.target = "__blank";
      cell.textContent = "";
      cell.appendChild(a);
    }
    if (cell.innerHTML === "nan") {
      cell.innerHTML = "";
    }
  });

  new Tablesort(table);
});
