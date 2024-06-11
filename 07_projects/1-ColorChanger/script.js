const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        // console.log(e.target.id);

        // using if else

        // if (e.target.id === 'grey') {
        //     body.style.backgroundColor = e.target.id;
        // }
        // if (e.target.id === 'red') {
        //     body.style.backgroundColor = e.target.id;
        // }
        // if (e.target.id === 'blue') {
        //     body.style.backgroundColor = e.target.id;
        // }
        // if (e.target.id === 'yellow') {
        //     body.style.backgroundColor = e.target.id;
        // }

        // using switch case

        switch (e.target.id) {
            case 'grey':
                body.style.backgroundColor = e.target.id;
                break;
            case 'red':
                body.style.backgroundColor = e.target.id;
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id;
                break;
            case 'yellow':
                body.style.backgroundColor = e.target.id;
                break;
            default:
                break;
        }
    })
})