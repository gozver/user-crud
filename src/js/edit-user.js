'use strict';

let edit;
let id = null;

$(() => {
  edit = isEditing();
  
  if (!edit) {
    createUser();
  } else {
    $('#button').empty().append('<i class="fa fa-pencil" aria-hidden="true"></i>');

    getUser();
    updateUser();
  }
    
  goToIndex();
});

function isEditing() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  id = urlParams.get('id')

  return (typeof id === 'string');
}

function createUser() {
  $('#userForm').submit((e) => { 
    e.preventDefault();
    
    $.ajax({
      url: '/user',
      method: 'POST',
      data: {
        name: $('#name').val(),
        email: $('#email').val(),
      },
      success: (response) => {
        window.location.href = './index.html';
      }
    });
  });
}

function getUser() {
  $.ajax({
    url: `/user/${id}`,
    method: 'GET',
    success: (response) => {
      $('#name').val(response.name);
      $('#email').val(response.email);
    }
  });
}

function updateUser() {
  $('#userForm').submit((e) => { 
    e.preventDefault();
    
    $.ajax({
      url: `/user/${id}`,
      method: 'PUT',
      data: {
        name: $('#name').val(),
        email: $('#email').val(),
      },
      success: (response) => {
        window.location.href = './index.html';
      }
    });
  });
}


function goToIndex() {
  $('#goToIndex').click((e) => { 
    e.preventDefault();
    $('#goToIndex').blur();
    window.location.href = './index.html';
  });
}