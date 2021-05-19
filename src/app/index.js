'use strict';

let tbody = $('tbody');

$(() => {
  getUsersRequest();
  createUserRequest();
});

// get users
function getUsersRequest() {
  $.ajax({
    url: '/users',
    success: (users) => {
      getUsers(users)
    }
  });
}

function getUsers(users) {
  tbody.empty();

  users.forEach(user => {
    insertRow(user);
  });
}

// create user
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
        insertRow(user);
      }
    });

    $('#createUser').blur();
  });
}

// general functions
export function insertRow(user) {
  tbody.append(`
    <tr>
      <td id="id">
        <p>${user.id}</p>
      </td>
      <td id="name">
        <p>${formatString(user.name)}</p>
      </td>
      <td id="email">
        <p>${user.email.toLowerCase()}</p>
      </td>
      <td>
        <button id="update" class="btn btn-primary">
          <i class="fa fa-pencil" aria-hidden="true"></i>
        </button>

        <button id="delete" class="btn btn-danger">
          <i class="fa fa-trash" aria-hidden="true"></i>
        </button>
      </td>
    </tr>
  `);
}

function formatString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

// <input class="name" value="${user.name}" />