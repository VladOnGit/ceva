document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.fa-bars');
    const dropdownContent = document.querySelector('.dropdown-content');


    menuIcon.addEventListener('click', function(e) {
        dropdownContent.style.display = dropdownContent.style.display === 'flex' ? 'none' : 'flex';
        e.stopPropagation();
    });



    dropdownContent.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            dropdownContent.style.display = 'none';
        });
    });
});


