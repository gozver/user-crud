'use strict';

let tbody = $('tbody');

$(() => {
  getUsers();
  createUser();
  updateUser();
  deleteUser();
});

function getUsers() {
  $.ajax({
    url: '/users',
    success: (users) => {
      tbody.empty();
      users.forEach(user => insertRow(user));
    }
  });
}

function createUser() {
  $('#editUser').click(function (e) { 
    e.preventDefault();
    window.location.href = './edit-user.html'
  });
}

function updateUser() {
  $('table').on('click', '.btn-update', function () {
    $('.btn-update').blur();

    let row = $(this).closest('tr');
    let id = row.find('.id').children().text();
    
    window.location.href = `./edit-user.html?id=${id}`;
  });
}

function deleteUser() {
  $('table').on('click', '.btn-delete', function () {
    $('.btn-delete').blur();

    let row = $(this).closest('tr');
    let id = row.find('.id').children().text();
  });
}

function insertRow(user) {
  tbody.append(`
    <tr>
      <td class="id">
        <p>${user.id}</p>
      </td>
      <td class="name">
        <p>${user.name}</p>
      </td>
      <td class="email">
        <p>${user.email}</p>
      </td>
      <td>
        <button type="submit" class="btn btn-primary btn-update">
          <i class="fa fa-pencil" aria-hidden="true"></i>
        </button>
      
        <button type="button" class="btn btn-danger btn-delete">
          <i class="fa fa-trash" aria-hidden="true"></i>
        </button>
      </td>
    </tr>
  `);
}