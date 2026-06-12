const hero = document.getElementById('hero')
const reveal = document.getElementById('fireReveal')

let mouseX = 0, mouseY = 0
let x = 0, y = 0
let visible = false

function animate() {
  x += (mouseX - x) * 0.05
  y += (mouseY - y) * 0.05

  reveal.style.setProperty('--x', `${x}px`)
  reveal.style.setProperty('--y', `${y}px`)

  requestAnimationFrame(animate)
}

animate()

hero.addEventListener('mousemove', (e) => {
  const rect = hero.getBoundingClientRect()
  mouseX = e.clientX - rect.left
  mouseY = e.clientY - rect.top

  if (!visible) {
    visible = true
    reveal.classList.add('active')
  }
})

hero.addEventListener('mouseleave', () => {
  visible = false
  reveal.classList.remove('active')
})