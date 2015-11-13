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
    var LIL_B_QUOTE = "Words to the wise, you should fear the competition\nBecause I\'m the only vet that\'s a Based God spittin\nAnd you ain\'t in the game until you make a thousand songs\nAnd you dyin\' for this rap, because it\'s the only thing you love\nBirth of Rap"
    description.textContent = "as Lil B THE BASEDGOD once said in Birth of Rap:"
    var q = document.createElement('pre')
    q.textContent = LIL_B_QUOTE
    imgs.appendChild(q)
    imgs.appendChild(document.createElement('br'))
    imgs.appendChild(document.createElement('br'))
    imgs.appendChild(document.createElement('br'))
    imgs.appendChild(document.createElement('br'))
    imgs.appendChild(document.createElement('br'))
    imgs.appendChild(document.createElement('br'))
    var s = document.createElement('h3')
    s.textContent = 'BUT WHAT IS TRUE FOR THE RAP GAME DOES NOT NECESSARILY APPLY TO THE BOTMAKING COMMUNITY. you need not have made a hundred bots or ten or even a single bot to be a part of the botmaking community. you need not publish or share or take credit for every bot you make. you need not feel discouraged when you see others making cool things, for those same people will be there to encourage you when you decide to release yr cool thing! believe me! a year ago today I was feeling seriously down and out cuz i felt like none of the twitter bots I was making were any good and nobody followed me back and everyone else seemed to be churning out these amazing projects. i was bummed, and so i stopped making art, and so i couldn\'t develop my artistic practice either. I dont recall why exactly i started making things again, maybe it was all that pent up emotions inside me that I needed to turn into a series of javascript canvas apps, but i did start making things again and I did find other people who were making cool things that encouraged me and i feel infinitely indebted to them for their support and kind faves and RTs. don\'t fear the competition because there is none! this is not a race/game/content! this is just a bunch of people earnestly sharing their passions with each other 140 characters at a time and with emoji. make stuff cuz you like making it and share it cuz other people will probably like it too and also be sure to always drop hella faves and RTs and also emoji reacts when other people post links to their stuff or pictures of their cats. ~(=^-.-^=) Cole '
    imgs.appendChild(s)


    embedded.src = 'https://www.youtube.com/embed/2HQaBWziYvY' + '?autoplay=1'
  }
})


