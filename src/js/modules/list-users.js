import { apiUrl } from '../globals.js';

export function getUsers() {
  $.ajax({
    url: `${apiUrl}/users`,
    success: (users) => {
      $('tbody').empty();
      users.forEach(user => insertRow(user));
    }
  });
}

function insertRow(user) {
  $('tbody').append(`
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