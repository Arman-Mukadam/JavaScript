const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const weight = parseInt(document.getElementById('weight').value);
    const height = parseInt(document.getElementById('height').value);
    const results = document.getElementById('results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.textContent = `please give a valid ${height}`;
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.textContent = `please give a valid ${weight}`;
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.textContent = bmi
    }
})