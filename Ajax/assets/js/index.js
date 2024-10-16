const request = object => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(object.method, object.url, true);
        xhr.send();
        xhr.addEventListener("load", () => {
            if(xhr.status >= 200 && xhr.status < 300) resolve(xhr.responseText);
            else reject(xhr.statusText);
        });
    })
}

document.addEventListener("click", el => {
    const element = el.target;
    const tag = element.tagName.toLowerCase();

    if (tag === "a") el.preventDefault(), loadPage(element);
});

async function loadPage (element) {
    const href = element.getAttribute("href");
    const response = await request({ method: "GET", url: href });
    loadResult(response);
}

function loadResult(response) {
    const result = document.querySelector(".resultado");
    result.innerHTML = response;
}
