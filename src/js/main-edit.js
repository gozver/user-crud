import { createUser } from './modules/create-user.js';
import { getUser } from './modules/get-user.js';
import { updateUser } from './modules/update-user.js';

let id = null;

$(() => {
  let edit = isEditing();
  
  if (!edit) {
    createUser();
  } else {
    $('#button').empty().append('<i class="fa fa-pencil" aria-hidden="true"></i>');

    getUser(id);
    updateUser(id);
  }
    
  goToIndex();
});

function isEditing() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  id = urlParams.get('id')

  return (typeof id === 'string');
}

function goToIndex() {
  $('#goToIndex').click((e) => { 
    e.preventDefault();
    $('#goToIndex').blur();
    window.location.href = './index.html';
  });
}