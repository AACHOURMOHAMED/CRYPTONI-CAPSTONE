const data = [
  {
    icon: 'assests/Developers/serveur.svg',
    title: 'Cloud',
    titre: 'Suite of APIs and mode infrastructure',
    line: '',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. A perspiciatis quos sit consectetur molestias praesentium',
  },
  {
    icon: 'assests/Developers/online-shopping.svg',
    title: 'Commerce',
    titre: 'Accept crypto payments from customers',
    line: '',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. A perspiciatis quos sit consectetur molestias praesentium ',
  },
  {
    icon: 'assests/Developers/wallet.svg',
    title: 'Wallet SDK',
    titre: 'Link dapps to Coinbase Wallet',
    line: '',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. A perspiciatis quos sit consectetur molestias praesentium ',
  },
  {
    icon: 'assests/Developers/exchange.svg',
    title: 'Exchange & Pro',
    titre: 'Power automated trading',
    line: '',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. A perspiciatis quos sit consectetur molestias praesentium ',
  },
  {
    icon: 'assests/Developers/investment.svg',
    title: 'Coinbase Pay SDK',
    titre: 'Easy, secure fiat-to-crypto solution',
    line: '',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. A perspiciatis quos sit consectetur molestias praesentium ',
  },
  {
    icon: 'assests/Developers/searching.svg',
    title: 'Query & Transact',
    titre: 'Read and write blockchain data',
    line: '',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. A perspiciatis quos sit consectetur molestias praesentium ',
  },
];

const devCards = document.querySelector('.developersCards');

data.forEach((index) => {
  const card = document.createElement('div');
  card.className = 'developersCard';
  devCards.appendChild(card);

  const backIcons = document.createElement('div');
  backIcons.className = 'circleDevelopers';
  card.appendChild(backIcons);

  const icon = document.createElement('img');
  icon.className = 'iconDevelopers';
  icon.src = index.icon;
  icon.alt = 'Developer';
  backIcons.appendChild(icon);

  const content = document.createElement('div');
  content.className = 'developersCardContent';
  card.appendChild(content);

  const title = document.createElement('h2');
  title.className = 'devCardTitle';
  title.innerHTML = index.title;
  content.appendChild(title);

  const titre = document.createElement('p');
  titre.className = 'devCardTitre';
  titre.innerHTML = index.titre;
  content.appendChild(titre);

  const line = document.createElement('div');
  line.className = 'devCardLine';
  content.appendChild(line);

  const description = document.createElement('p');
  description.className = 'devCardDescription';
  description.innerHTML = index.description;
  content.appendChild(description);
});

const moreDevelopers = document.createElement('button');
moreDevelopers.className = 'moreBtn';
moreDevelopers.type = 'button';
moreDevelopers.innerHTML = 'more <i class="fa-solid fa-angles-down"></i>';
devCards.appendChild(moreDevelopers);

const Btn = document.querySelector('.moreBtn');
const developer = Array.from(document.querySelectorAll('.developersCard'));
developer.forEach((card, i) => {
  if (i > 1) {
    card.classList.add('hide');
  }
});

const handleMoreBtn = (developer) => {
  if (developer.classList.contains('hide')) {
    Btn.innerHTML = 'more <i class="fa-solid fa-angles-down"></i>';
  } else {
    Btn.innerHTML = 'less <i class="fa-solid fa-angles-up"></i>';
  }
};

Btn.addEventListener('click', () => {
  developer.forEach((developer, i) => {
    if (i > 1) {
      developer.classList.toggle('hide');
      handleMoreBtn(developer);
    }
  });
});
