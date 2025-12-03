const url = "./animals.json";

const fetchData = async () => {
  const timeOutMs = 5000;
  const response = await fetch(url, {
    method: "GET",
    // cors: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    timeout: timeOutMs,
  });
  if (!response.ok) {
    alert(`HTTP error! status: ${response.status}`);
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
};

const articleHTML = `
      <article class="col-sm-12 col-md-6 col-lg-4 col-xxl-3">
        <div class="grid-container">
          <div class="card-grid card p-3">
            <header class="card-header">
              <h2 class="text-center m-0">H2</h2>
            </header>
            <figure>
              <div class="img-container">
                <img
                  src="SRC"
                  alt="ALT"
                >
              </div>
            </figure>
          </div>
        </div>
      </article>
      `;

const sectionHTML = `
      <section>
        <h3 class="text-center">H3</h3>
        <p>P</p>
      </section>
      `;

function createArticle(article) {
  const template = document.createElement("template");
  template.innerHTML = articleHTML;
  const clone = template.content.cloneNode(true);
  clone.querySelector("h2").textContent = article.h2;
  clone.querySelector("img").src = article.img.src;
  clone.querySelector("img").alt = article.img.alt;
  const card = clone.querySelector(".card-grid");
  card.classList.add(article.class);
  Object.values(article.sections).forEach((section) => {
    const sectionTemplate = document.createElement("template");
    sectionTemplate.innerHTML = sectionHTML;
    const sectionClone = sectionTemplate.content.cloneNode(true);
    sectionClone.querySelector("h3").textContent = section.h3;
    sectionClone.querySelector("p").textContent = section.p;
    card.appendChild(sectionClone);
  });
  return clone;
}

async function render() {
  const fragment = document.createDocumentFragment();
  const data = await fetchData();
  const articles = data.articles;
  if (Array.isArray(articles)) {
    articles.forEach((article) => {
      fragment.appendChild(createArticle(article));
    });
  }
  row = document.querySelector(".row");
  row.appendChild(fragment);
}

render();
