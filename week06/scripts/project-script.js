const destinations = [
  { name: "Lagos", description: "Bustling city with beaches and nightlife." },
  { name: "Abuja", description: "Capital city with modern architecture." },
  { name: "Calabar", description: "Cultural hub with festivals and history." }
];

const container = document.getElementById("destinations");

if (container) {
  destinations.forEach(dest => {
    const card = document.createElement("div");
    card.innerHTML = `<h3>${dest.name}</h3><p>${dest.description}</p>`;
    container.appendChild(card);
  });
}
