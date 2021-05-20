'use strict';

let tbody = $('tbody');

$(() => {
  getUsersRequest();
  goToEditUser();
  
  $('table').on('click', '.update-btn', function() {
    let row = $(this).closest('tr');
    let id = row.find('.id').text();
    console.log('id: ' + id);
  });

  $('table').on('click', '.delete-btn', function() {
    let row = $(this).closest('tr');
    let id = row.find('.id').text();
    console.log('id: ' + id);
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
      <td class="id">${user.id}</td>
      <td class="name">${formatString(user.name)}</td>
      <td class="email">${user.email.toLowerCase()}</td>
      <td>
        <button type="submit" class="btn btn-primary update-btn">
          <i class="fa fa-pencil" aria-hidden="true"></i>
        </button>

        <button type="button" class="btn btn-danger delete-btn">
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