import { getUsers } from './modules/list-users.js';
import { deleteUser } from './modules/delete-user.js'

$(() => {
  getUsers();
  createUser();
  updateUser();
  deleteUser();
});

function createUser() {
  $('#editUser').click(function (e) { 
    e.preventDefault();
    window.location.href = './edit-view.html'
  });
}

function updateUser() {
  $('table').on('click', '.btn-update', function () {
    $('.btn-update').blur();

    let row = $(this).closest('tr');
    let id = row.find('.id').children().text();
    
    window.location.href = `./edit-view.html?id=${id}`;
  });
}



