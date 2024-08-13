import BandSiteApi from './band-site-api.js';

const apiKey = 'c1ec5620-4c84-47aa-8d71-64375e69d9c2';

let bandSiteAPi = new BandSiteApi(apiKey);

let comments = [];

async function render() {
  try {
    comments = await bandSiteAPi.getComments();
    comments.sort((a, b) => new Date(b.date) - new Date(a.date));
    // console.log(comments);
    commentsSection.innerText = '';
    comments.forEach((comment) => displayComment(comment));
  } catch (error) {
    console.error('Error fetching shows', error);
  }
}

render();

// Format date
function formatDate(date) {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'America/St_Johns' };
  const localDate = new Intl.DateTimeFormat('en-CA', options).format(date);
  const [year, month, day] = localDate.split('-');
  return `${month}/${day}/${year}`;
}

const commentsSection = document.getElementById('comments__section');
const commentForm = document.getElementById('form');
const nameInput = document.getElementById('name');
const commentInput = document.getElementById('comment');

function displayComment(comment) {
  const commentItem = document.createElement('div');
  commentItem.classList.add('comments__item');

  const avatar = document.createElement('div');
  avatar.classList.add('comments__grey-avatar');

  const details = document.createElement('div');
  details.classList.add('comments__details');

  const info = document.createElement('div');
  info.classList.add('comments__info');

  const name = document.createElement('p');
  name.classList.add('comments__author');
  name.textContent = comment.name;

  const date = document.createElement('p');
  date.classList.add('comments__date');
  date.textContent = formatDate(comment.timestamp);

  const text = document.createElement('p');
  text.classList.add('comments__response');
  text.textContent = comment.comment;

  info.appendChild(name);
  info.appendChild(date);

  details.appendChild(info);
  details.appendChild(text);

  commentItem.appendChild(avatar);
  commentItem.appendChild(details);
  commentsSection.appendChild(commentItem);
}

function defaultComments() {
  commentsSection.innerHTML = '';
  comments.forEach((comment) => displayComment(comment));
}

commentForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const newComment = {
    name: nameInput.value,
    date: new Date(),
    comment: commentInput.value,
  };

  try {
    await bandSiteAPi.postComment(nameInput.value, commentInput.value);
  } catch (error) {
    console.error('Error posting comment', error);
  }

  comments.unshift(newComment);

  defaultComments();

  event.target.reset();
});
