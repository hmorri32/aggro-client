const fs = require("fs");
const Nightmare = require("nightmare");
const nightmare = Nightmare({
  openDevTools: {
    mode: "detach"
  },
  show: true
});

nightmare
  .viewport(1500, 1500)
  .goto("http://beachgrit.com")
  .wait(200)
  .evaluate(() => {
    let articles = document.querySelectorAll("article.digest.middle-line.flex");
    let list = [].slice.call(articles);

    const hrefs = list.map(article => {
      images = article.children["0"].children["0"].children["0"].dataset.src;
      return article.children["0"].href
        .concat(article.children["0"].innerText)
        .concat(images)
        .split("\n");
    });
    return hrefs.map(element => element.filter(n => n != ""));
  })
  .end()
  .then(result => fs.writeFileSync("beachGritData.js", JSON.stringify(result)))
  .catch(e => console.log(e));
