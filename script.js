

function scale() {
    const dropElement = document.querySelector('.display-button');
    const element = document.querySelector('.secondary');
    const first = document.querySelector('.first2');
    const middle = document.querySelector('.middle');
    const last = document.querySelector('.last');

    dropElement.addEventListener('click', ()=> {
        if (element.style.display !== 'block') {
            element.classList.add('scale');
            element.style.display = 'block';
            /* first.style.display = 'none';
            middle.style.transform = 'rotate(45deg)';
            last.style.transform = 'rotate(-45deg)'; */

        } else {
            element.style.display = 'none';
            /* first.style.display = 'block';
            middle.style.transform = 'rotate(0)';
            last.style.transform = 'rotate(0)'; */
        }
    })

    
    window.onclick = (event)=> {
        if(!event.target.matches('.display-button')) {
            if(element.style.display === 'block') {
                element.style.display = 'none';
            }
        }
    }
}



scale();







function interchange() {
    const professions = ["Web Developer", "Health Specialist", "Programmer", "Graphics Designer", "Web Developer"] ;

    let current = 1;

    const changeElement = document.querySelector('.profession');
    setInterval(()=> {
        changeElement.innerHTML = professions[current];
        current ++;
        if (current == professions.length) {
            current = 1;
        }
    }, 3000)
}

interchange();