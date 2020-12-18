const container = document.querySelector('.container')
const content = document.querySelector('.content')
const card = document.querySelector('.card')
const open = document.getElementById('open')
const close = document.getElementById('close')
const img = document.getElementById('img')
const title = document.querySelector('.title')
const paragraph = document.querySelector('.paragraph')
const purchase = document.querySelector('.purchase')
const sizes = document.querySelector('.size')

open.addEventListener('click', () => {
  container.classList.add('show-nav')
})

close.addEventListener('click', () => {
  container.classList.remove('show-nav')
})

if (window.innerWidth > 1024) {
  content.addEventListener('mousemove', e => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25
    card.style.transform = `rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`
  })

  content.addEventListener('mouseenter', () => {
    card.style.transition = 'all 0.1s ease'
    title.style.transform = 'translateZ(150px)'
    img.style.transform = 'translateZ(200px) rotateZ(-45deg)'
    paragraph.style.transform = 'translateZ(125px)'
    sizes.style.transform = 'translateZ(100px)'
    purchase.style.transform = 'translateZ(75px)'
  })

  content.addEventListener('mouseleave', () => {
    card.style.transition = 'all 0.5s ease'
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    title.style.transform = 'translateZ(0px)'
    img.style.transform = 'translateZ(0px) rotateZ(0deg)'
    paragraph.style.transform = 'translateZ(0px)'
    sizes.style.transform = 'translateZ(0px)'
    purchase.style.transform = 'translateZ(0px)'
  })
}
