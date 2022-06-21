const speakerSection = document.querySelector('.speaker');
const section = document.createElement('div');
speakerSection.appendChild(section);

const speaker = [
  {
    name: 'Yochai Benkler',
    title: 'Event Organizer',
    image: 'images/member1.png',
    description:
      'Lorem ipsum, consectetur adipisicing elit.Perferendis asperiores, quo distinctio, atque, quasi nobis.',
  },
  {
    name: 'kilnan chon',
    title: 'Event host',
    image: 'images/member2.png',
    description:
      'Lorem ipsum, consectetur adipisicing elit.Perferendis asperiores, quo distinctio, atque, quasi nobis.',
  },
  {
    name: 'Albert Noah',
    title: 'Event Organizer',
    image: 'images/member3.png',
    description:
      'Lorem ipsum, consectetur adipisicing elit.Perferendis asperiores, quo distinctio, atque, quasi nobis.',
  },
  {
    name: 'soh Yeong Noh',
    title: 'Organizer',
    image: 'images/member4.png',
    description:
      'Lorem ipsum, consectetur adipisicing elit.Perferendis asperiores, quo distinctio, atque, quasi nobis.',
  },
  {
    name: 'Julia Jeda',
    title: 'Organizer',
    image: 'images/member5.png',
    description:
      'Lorem ipsum, consectetur adipisicing elit.Perferendis asperiores, quo distinctio, atque, quasi nobis.',
  },
  {
    name: 'Lila Tretikan',
    title: 'Event Organizer',
    image: 'images/member6.png',
    description:
      'Lorem ipsum, consectetur adipisicing elit.Perferendis asperiores, quo distinctio, atque, quasi nobis.',
  },
];

section.className = 'speaker-row-dynamic';
function addSpeaker(n) {
  section.innerHTML += `
  <div class="speaker-row">
        <div class="organizer1">
          <div class="image">
            <img src="${speaker[n].image}" alt="" />
          </div>
          <div class="descr-title">
            <h2>${speaker[n].name}</h2>
            <h3>${speaker[n].title}</h3>
            <p>
            ${speaker[n].description}
            </p>
          </div>
        </div>
    </div>
  `;
}

for (let i = 0; i < speaker.length; i += 1) {
  addSpeaker(i);
}
