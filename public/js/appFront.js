const buttonElement = document.querySelector('.opinion');

buttonElement.addEventListener('click', () => {
    const isOk = confirm('Cette fleur te plait ?');

    if(isOk) {
      alert('Chouette');
    } else {
      alert('Il fallait pas cliquer dessus');
    }
})


