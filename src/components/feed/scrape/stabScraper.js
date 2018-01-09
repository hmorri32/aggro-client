const fs = require("fs");
const Nightmare = require("nightmare");
const nightmare = Nightmare({
  // openDevTools: {
  //   mode: "detach"
  // },
  // show: true
});

nightmare
  .viewport(1500, 1500)
  .goto("http://stabmag.com")
  .wait(200)
  .evaluate(() => {
    let articles = document.querySelectorAll("div.grid-layout");
    let list = [].slice.call(articles);

    const yungData = list.map(article => {
      const href = article.children["0"].children["0"].href;
      const imgSrc = article.children["0"].children["0"].children["0"].src;
      const title = article.children["0"].children["0"].children["0"].alt;

      return href.concat(";;" + imgSrc + ";;").concat(title).split(";;");
    });
    return yungData.map(element => element.filter(n => n != ""));
  })
  .end()
  .then(result => fs.writeFileSync("stabData.js", `export const stabData = ${JSON.stringify(result)}`))
  .catch(e => console.log(e));
