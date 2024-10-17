document.addEventListener("click", el => {
    const element = el.target;
    const tag = element.tagName.toLowerCase();
    if (tag === "a") el.preventDefault(), loadPage(element);
});

async function loadPage(element) {

    try {
        const href = element.getAttribute("href");
        const response = await fetch(href);
        if (response.status !== 200) throw new Error("Not found");
        const html = await response.text();
        loadResult(html);
    }
    catch(error) { console.log(error) };
}

function loadResult(response) {
    const result = document.querySelector(".resultado");
    result.innerHTML = response;
}
