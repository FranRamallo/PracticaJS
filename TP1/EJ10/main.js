document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains('color-div')) {
        alert('En esa posición ya existe un elemento');
    } else {
        let newDiv = document.createElement('div');
        newDiv.classList.add('color-div');
        newDiv.style.left = `${event.clientX - 25}px`;
        newDiv.style.top = `${event.clientY - 25}px`;  
        document.body.appendChild(newDiv);
    }
});
