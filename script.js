const names = ['Dagim Jalleta', 'Adryan Bartolome', 'Carson Comar', 'Antensil Asgedom'];
const occupations = ['Software Engineer', 'Web Dev', 'Software Engineer', 'Software Engineer'];
const startingPrices = [20, 21, 22, 23];

const freelancers = [
  { name: 'Alice Smith', occupation: 'Web Developer', startingPrice: 50 },
  { name: 'Bob Johnson', occupation: 'Graphic Designer', startingPrice: 40 },
  { name: 'Carol Williams', occupation: 'SEO Specialist', startingPrice: 35 }
];

const maxSize = 7;


function calculateAverage() {
  const averageStartingPriceText = document.getElementById('average-starting-price-text');
  const average = freelancers.reduce((sum , freelancer) => sum + freelancer.startingPrice, 0)/freelancers.length;
  averageStartingPriceText.innerHTML = `<p>The averge starting price is $${average.toFixed(2)} </p>`;

}

function render() {
  const freelancersTable = document.getElementById('freelancers-list');
  freelancersTable.innerHTML = `
    <tr>
      <th>Name</th>
      <th>Occupation</th>
      <th>Starting Price</th>
    </tr>
  `;

  freelancers.forEach(freelancer => {
    const row = freelancersTable.insertRow(-1);
    const nameCell = row.insertCell(0);
    const occupationCell = row.insertCell(1);
    const startingPriceCell = row.insertCell(2);

    nameCell.textContent = freelancer.name;
    occupationCell.textContent = freelancer.occupation;
    startingPriceCell.textContent = `$${freelancer.startingPrice}`;
  });

  calculateAverage();
}


function addfreelancers() {

  if (freelancers.length >= maxSize - 1) {
    clearInterval(addfreelancersIntervalID);
  }

  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
  const randomStartingPrice = startingPrices[Math.floor(Math.random() * startingPrices.length)];

  freelancers.push({ name: randomName, occupation: randomOccupation, startingPrice: randomStartingPrice });

  render();
}


const addfreelancersIntervalID = setInterval(addfreelancers, 3000);




render();
