document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.fa-bars').addEventListener('click', function() {
        const dropdownContent = document.querySelector('.dropdown-content');
        if (dropdownContent.style.display === 'flex') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'flex';
        }
    });
});


