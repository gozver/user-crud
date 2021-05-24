import { apiUrl } from '../globals.js';

export function updateUser(id) {
  $('#userForm').submit((e) => { 
    e.preventDefault();
    
    $.ajax({
      url: `${apiUrl}/user/${id}`,
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