var bots = require('shuffle-array')(require('./bots'))
var counter = 1
var main = document.getElementById('main')
var title = document.getElementById('title')
var description = document.getElementById('description')
var imgs = document.getElementById('imgs')
var embedded = document.getElementById('embedded')

document.addEventListener('click', function () {
  var bot = bots.pop()
  embedded.src = ""
  if (bot) {
    var after = (bot.count > 1) ? '-' + (counter + bot.count - 1) : ''
    title.innerHTML = counter + after + '. <a href="' + bot.url + '">' + bot.name + '</a>'
    description.textContent = bot.description
    imgs.innerHTML = ''
    embedded.innerHTML = ''
    bot.imgs.length == 1
    bot.imgs.forEach(function (imgSrc) {
      var imgTag = document.createElement('img')
      imgTag.src = 'imgs/' + imgSrc
      if (bot.imgs.length == 1) {
        imgTag.style.width = '100%'
      } else {
        imgTag.style.width = '50%'
      }
      imgs.appendChild(imgTag)
    })
    if (bot.embed) {
      var ifr = document.createElement('iframe')
      ifr.src = bot.embed + '?autoplay=1'
      embedded.appendChild(ifr)
    }
    counter += bot.count
  } else {
    imgs.innerHTML = ''
    embedded.innerHTML = ''
    title.innerHTML = "THE END (for more fun projects visit <a href='http://www.colewillsea.com'>my web app</a>"

    embedded.src = 'https://www.youtube.com/embed/2HQaBWziYvY' + '?autoplay=1'
  }
})


