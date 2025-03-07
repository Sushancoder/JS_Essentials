let xhr = new XMLHttpRequest();
let url = "latestnews.json";

xhr.open("GET", url, true)
xhr.responseType = "json";

xhr.onload = () => {
    let news = xhr.response.news;
    let newsDiv = document.getElementById('news')

    news.forEach(function (newd) {

        let newdiv = document.createElement("div")
        newdiv.classList.add('news');

        let title = document.createElement('h2');
        title.textContent = newd.title;

        let description = document.createElement('p');
        description.textContent = newd.description;

        let link = document.createElement('a');
        link.classList.add('news-link');
        link.href = newd.url;
        link.textContent = 'Read More';
        link.target = '_blank';
        
        newsDiv.appendChild(title);
        newsDiv.appendChild(description);
        newsDiv.appendChild(link);
    })
}

xhr.send();