const shows = [
  {
    date: '2024-09-09',
    weekDay: 'Monday',
    venue: 'Ronald Lane',
    location: 'San Francisco, CA',
  },
  {
    date: '2024-09-17',
    weekDay: 'Tuesday',
    venue: 'Pier 3 East',
    location: 'San Francisco, CA',
  },
  {
    date: '2024-10-12',
    weekDay: 'Saturday',
    venue: 'View Lounge',
    location: 'San Francisco, CA',
  },
  {
    date: '2024-11-16',
    weekDay: 'Saturday',
    venue: 'Hyatt Agency',
    location: 'San Francisco, CA',
  },
  {
    date: '2024-11-29',
    weekDay: 'Friday',
    venue: 'Moscow Center',
    location: 'San Francisco, CA',
  },
  {
    date: '2024-12-18',
    weekDay: 'Wednesday',
    venue: 'Press Club',
    location: 'San Francisco, CA',
  },
];

console.log('here')

function createDiv(className, text = '') {
  const div = document.createElement('div');
  div.className = className;
  div.innerText = text;
  return div;
}

const showsList = document.getElementById('shows__list');

function displayShow(show) {
  const showEl = createDiv('shows__card');

  const dateContainer = createDiv('shows__sub-container');
  const dateTitleEl = createDiv('shows__subtitle', 'DATE');
  const dateEl = createDiv('shows__date', show.date);

  const venueContainer = createDiv('shows__sub-container');
  const venueTitleEl = createDiv('shows__subtitle', 'VENUE');
  const venueEl = createDiv('shows__venue', show.venue);

  const locationContainer = createDiv('shows__sub-container');
  const locationTitleEl = createDiv('shows__subtitle', 'LOCATION');
  const locationEl = createDiv('shows__location', show.location);

  const buttonEl = document.createElement('button');
  buttonEl.innerHTML = 'BUY TICKETS';

  showsList.append(showEl);

  dateContainer.append(dateTitleEl);
  dateContainer.append(dateEl);
  showEl.append(dateContainer);

  venueContainer.append(venueTitleEl);
  venueContainer.append(venueEl);
  showEl.append(venueContainer);

  locationContainer.append(locationTitleEl);
  locationContainer.append(locationEl);
  showEl.append(locationContainer);

  showEl.append(buttonEl);
}

function render() {
  showsList.innerHTML = '';
  shows.forEach(displayShow);
}

render();

