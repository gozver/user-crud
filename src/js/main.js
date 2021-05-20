'use strict';

let tbody = $('tbody');

$(() => {
  getUsersRequest();
  goToEditUser();
  
  $('table').on('click', '.btn-update', function () {
    $('.btn-update').blur();

    let row = $(this).closest('tr');
    let id = row.find('.id').children().text();
    
    window.location.href = `./edit-user.html?id=${id}`;
  });

  $('table').on('click', '.btn-delete', function () {
    $('.btn-delete').blur();

    let row = $(this).closest('tr');
    let id = row.find('.id').children().text();
  });
});

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

function insertRow(user) {
  tbody.append(`
    <tr>
      <td class="id">
        <p>${user.id}</p>
      </td>
      <td class="name">
        <p>${formatString(user.name)}</p>
      </td>
      <td class="email">
        <p>${user.email.toLowerCase()}</p>
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

function goToEditUser() {
  $('#editUser').click(function (e) { 
    e.preventDefault();
    window.location.href = './edit-user.html'
  });
}

function formatString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}