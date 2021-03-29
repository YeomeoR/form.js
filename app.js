// grabbing the elements
const form = document.querySelector('.form');
const button = document.querySelector('.btn');
const small = document.getElementById('small');
const holding = document.querySelector('.holding');
const title = document.querySelector('.title');
// const btnDiv = document.querySelector('.button-area');

// handlers
button.addEventListener('click', (e) => {
  e.preventDefault();
  // creating elements
  const para1 = document.createElement('p');
  const para2 = document.createElement('p');
  const para3 = document.createElement('p');
//   const newBtn = document.createElement('button');

  // changing the banner text
  document.querySelector('.title').innerHTML =
    'This is the information and message that you provided';

  // using the information grabbed
  const infoName = document.createTextNode(form.name.value);
  const infoEmail = document.createTextNode(form.email.value);
  const infoMessage = document.createTextNode(form.message.value);
  // const btnAction = document.

  //add a class to the button
//   newBtn.classList.add('emailUs');
//   newBtnTxt = document.querySelector('.emailUs').innerHTML = 'Email';

  // appending the new elements
  para1.appendChild(infoName);
  para2.appendChild(infoEmail);
  para3.appendChild(infoMessage);
//   newBtn.appendChild(newBtnTxt);

  // inserting the new elements
  holding.insertBefore(para1, small);
  holding.insertBefore(para2, small);
  holding.insertBefore(para3, small);
//   btnDiv.insertBefore(newBtn, button);

  // removing the old elements
  const smallGone = document.getElementById('small');
  smallGone.parentNode.removeChild(smallGone);

  form.parentNode.removeChild(form);
  button.parentNode.removeChild(button);

  // email the content AND change the innerHTMl of the button so that it reads 'email this information' Use redirect? and mailto:?
  //   mailto:rob@rob.com?subject=important!&body=message

  console.log('The button was clicked');
});
