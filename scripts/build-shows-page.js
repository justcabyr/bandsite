import BandSiteApi from './band-site-api.js';

const apiKey = 'c1ec5620-4c84-47aa-8d71-64375e69d9c2';

let bandSiteAPi = new BandSiteApi(apiKey);

async function render() {
  try {
    const shows = await bandSiteAPi.getShows();
    showsList.innerText = '';
    shows.forEach(displayShow);
  } catch (error) {
    console.error('Error fetching shows', error);
  }
}

render();

function createDiv(className, text = '') {
  const div = document.createElement('div');
  div.className = className;
  div.innerText = text;
  return div;
}

// Format date
function formatDate(date) {
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    timeZone: 'America/St_Johns',
  };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
  const [weekday, month, day, year] = formattedDate.replace(/,/g, '').split(' ');
  return `${weekday} ${month} ${day} ${year}`;
}

const showsList = document.getElementById('shows__list');

function displayShow(show) {
  const showEl = createDiv('shows__card');

  const dateContainer = createDiv('shows__sub-container');
  const dateTitleEl = createDiv('shows__subtitle', '');
  const dateEl = createDiv('shows__date', formatDate(show.date));

  const venueContainer = createDiv('shows__sub-container');
  const venueTitleEl = createDiv('shows__subtitle', '');
  const venueEl = createDiv('shows__venue', show.place);

  const locationContainer = createDiv('shows__sub-container');
  const locationTitleEl = createDiv('shows__subtitle', '');
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
