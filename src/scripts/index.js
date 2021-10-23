document.addEventListener('DOMContentLoaded', () => {
  header.init()
})

const header = {
  navMobile: '.header__navMobile',
  mobileMenu: '.mobileMenu'
}

header.init = () => {
  header.openMenu()
  header.switchingMenu()
}

header.openMenu = () => {
  const body = document.querySelector('body')
  const nav = document.querySelector(header.navMobile)
  const mobileMenu = document.querySelector(header.mobileMenu)
  let setTim = null;

  nav.addEventListener('click', () => {

    if (nav.classList.contains('active')) {
      nav.classList.remove('active')
      mobileMenu.classList.remove('visible')

      setTim = setTimeout(() => {
        mobileMenu.classList.remove('active')
        body.classList.remove('activeMobileMenu')
      }, 250)

    } else {
      clearTimeout(setTim)
      nav.classList.add('active')
      mobileMenu.classList.add('active')

      setTimeout(() => {
        mobileMenu.classList.add('visible')
        body.classList.add('activeMobileMenu')
        window.scrollTo(0, 0);
      }, 1)
    }
  })
}

header.switchingMenu = () => {
  const butt = document.querySelectorAll('.mobileMenu__menu-box > .mobileMenu__menu-butt')
  const subbutt = document.querySelectorAll('.mobileMenu__menu-list > li > .mobileMenu__menu-butt')

  butt.forEach(element => {
    element.addEventListener('click', event => {
      const th = event.target
      if (th.classList.contains('active')) {
        th.classList.remove('active')
        th.nextSibling.classList.remove('active')
      } else {
        th.classList.add('active')
        th.nextSibling.classList.add('active')
      }
    })
  })

  subbutt.forEach(element => {
    element.addEventListener('click', event => {
      const th = event.target
      if (th.classList.contains('active')) {
        th.classList.remove('active')
        th.nextSibling.classList.remove('active')
      } else {
        th.classList.add('active')
        th.nextSibling.classList.add('active')
      }
    })
  })
}
