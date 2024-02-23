document.addEventListener("DOMContentLoaded", function() {
    fetch('https://api.npoint.io/7bbd3a59c401f616bb89')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const citiesContainer = document.getElementById('citiesContainer');

        // Iterate over each city in the data
        data.places.forEach(city => {
          const cityElement = document.createElement('div');
          cityElement.classList.add('city');
          cityElement.innerHTML = `
            <h2>${city.name}</h2>
            <img src="${city.image}" alt="${city.name}">
            <p>${city.info}</p>
          `;
          citiesContainer.appendChild(cityElement);
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        const citiesContainer = document.getElementById('citiesContainer');
        citiesContainer.innerHTML = '<p>Error fetching data. Please try again later.</p>';
      });
  });