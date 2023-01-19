export default function changeBackground() {
  const {pathname} = window.location
  const homeColor = document.querySelector('a:nth-child(2)')
  const universeColor = document.querySelector('a:nth-child(3)')
  const explorationColor = document.querySelector('a:nth-child(4)')
  const backgroundPages = {
   bgHome: 'url(./assets/background-home.png)',
   bgUniverse: 'url(./assets/background-universe.png)',
   bgExploration: 'url(./assets/background-exploration.png)'
  }

  switch(pathname) {
    case '/home':
      document.body.style.backgroundImage = backgroundPages.bgHome
      homeColor.style.color = '#fff';
      universeColor.style.color = '';
      explorationColor.style.color = '';
      break;
    case '/universe':
      document.body.style.backgroundImage = backgroundPages.bgUniverse
      homeColor.style.color = '';
      universeColor.style.color = '#fff';
      explorationColor.style.color = '';
      break;
    case '/exploration':
      document.body.style.backgroundImage = backgroundPages.bgExploration
      homeColor.style.color = '';
      universeColor.style.color = '';
      explorationColor.style.color = '#fff';
      break;
      default:
      document.body.style.backgroundImage = backgroundPages.bgHome
      homeColor.style.color = '#fff';
      universeColor.style.color = '';
      explorationColor.style.color = '';
  }
}


