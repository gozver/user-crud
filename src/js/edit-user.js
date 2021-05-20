'use strict';

$(() => {
  goToIndex();
  createUserRequest();
});

function goToIndex() {
  $('#goToIndex').click((e) => { 
    e.preventDefault();
    $('#goToIndex').blur();
    window.location.href = './index.html';
  });
}

function createUserRequest() {
  $('#userForm').submit((e) => { 
    e.preventDefault();
    
    $.ajax({
      url: '/users',
      method: 'POST',
      data: {
        name: $('#name').val(),
        email: $('#email').val(),
      },
      success: (user) => {
        window.location.href = './index.html';
      }
    });

    $('#createUser').blur();
  });
}