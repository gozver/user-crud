import { apiUrl } from '../globals.js';

export function createUser() {
  $('#userForm').submit((e) => { 
    e.preventDefault();
    
    $.ajax({
      url: `${apiUrl}/user`,
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