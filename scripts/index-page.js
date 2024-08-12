const comments = [
  {
    name: 'Victor Pinto',
    date: new Date('11/02/2023'),
    text: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',
  },
  {
    name: 'Christina Cabrera',
    date: new Date('10/28/2023'),
    text: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.',
  },
  {
    name: 'Isaac Tadesse',
    date: new Date('10/20/2023'),
    text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

function getDate(date) {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'America/St_Johns' };
  const localDate = new Intl.DateTimeFormat('en-CA', options).format(date);
  const [year, month, day] = localDate.split('-');
  return `${day}-${month}-${year}`;
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
  date.textContent = getDate(comment.date);

  const text = document.createElement('p');
  text.classList.add('comments__response');
  text.textContent = comment.text;

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

defaultComments();

commentForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const newComment = {
    name: nameInput.value,
    date: new Date(),
    text: commentInput.value,
  };

  comments.unshift(newComment);

  defaultComments();

  event.target.reset();
});
