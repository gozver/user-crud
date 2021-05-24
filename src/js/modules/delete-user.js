import { apiUrl } from '../globals.js';

export function deleteUser() {
  $('table').on('click', '.btn-delete', function () {
    $('.btn-delete').blur();

    let row = $(this).closest('tr');
    let name = row.find('.name').children().text();

    Swal.fire({
      icon: 'warning',
      text: `Do you want to delete ${name}?`
    }).then((result) => {
      if (result.isConfirmed) {
        let row = $(this).closest('tr');
        let id = row.find('.id').children().text();

        $.ajax({
          url: `${apiUrl}/user/${id}`,
          method: 'DELETE',
          success: (response) => {
            row.remove();
          }
        });
      }
    });
  });
}