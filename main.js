function header() {
  const header = document.getElementById("myHeader");
  const sticky = header.offsetTop;
  let headerName = document.getElementById("")
  window.onscroll = function() {
    headerScroll();
};


function headerScroll() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
}

header();

const poemData = {
  url: "http://poetrydb.org/author,title/Shakespeare;Sonnet",
  number: function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min + 1)) + min);
  }
}

const apiUrl = `${poemData.url}${"%20"}${poemData.number(1, 154).toString()}`

fetch (apiUrl)
  .then( (data) => (data.json())
  .then( (sonnet) => (generateHTML(sonnet)) 
)
  );

const generateHTML = (data) => {
  console.log(data[0]);
  const html = `
    <div class="title">${data[0].title}</div>
    <br>
    <div class="author">${data[0].author}</div>
    `

  const ul = document.createElement('ul');
  ul.style.cssText = "list-style-type: none";
  document.getElementById("sonnetLines").appendChild(ul);
  
  data[0].lines.forEach(function (line) {
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML += line;
  });


const poemDiv = document.querySelector("#randomPoem");
poemDiv.innerHTML = html;
};
