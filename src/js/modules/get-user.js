import { apiUrl } from '../globals.js';

export function getUser(id) {
  $.ajax({
    url: `${apiUrl}/user/${id}`,
    method: 'GET',
    success: (response) => {
      $('#name').val(response.name);
      $('#email').val(response.email);
    }
  });
}