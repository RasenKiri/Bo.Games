console.log("Strona główna załadowana.");
const games = [
    {
      title: "Osadnicy z Catanu",
      date: "1995-04-01",
      wantToPlay: 5,
      played: 10,
      rating: 4.5,
    },
    {
      title: "Carcassonne",
      date: "2000-03-15",
      wantToPlay: 8,
      played: 14,
      rating: 4.8,
    },
    {
      title: "Terraformacja Marsa",
      date: "2016-09-20",
      wantToPlay: 12,
      played: 20,
      rating: 4.9,
    },
    {
      title: "Azul",
      date: "2017-10-01",
      wantToPlay: 6,
      played: 11,
      rating: 4.4,
    },
    {
      title: "7 Cudów Świata",
      date: "2010-11-10",
      wantToPlay: 10,
      played: 18,
      rating: 4.7,
    }
  ];
  
  let filteredGames = [...games];
  
  function renderGames(list) {
    const container = document.getElementById("gamesContainer");
    container.innerHTML = "";
  
    list.forEach((game, index) => {
      const card = document.createElement("div");
      card.className = "game-card";
      card.innerHTML = `
        <h3>${game.title}</h3>
        <p><strong>Data publikacji:</strong> ${game.date}</p>
        <p><strong>Ocena:</strong> ${game.rating}</p>
        <p><strong>Chcę zagrać:</strong> <span id="want-${index}">${game.wantToPlay}</span></p>
        <p><strong>Grałem:</strong> <span id="played-${index}">${game.played}</span></p>
        <div class="actions">
          <button onclick="increase('wantToPlay', ${index})">Chcę zagrać</button>
          <button onclick="increase('played', ${index})">Grałem</button>
        </div>
      `;
      container.appendChild(card);
    });
  }
  
  function increase(type, index) {
    games[index][type]++;
    filteredGames = [...games]; // odśwież aktualne dane
    renderGames(filteredGames);
  }
  
  document.getElementById("sortSelect").addEventListener("change", function () {
    const value = this.value;
    filteredGames.sort((a, b) => {
      if (value === "date") {
        return new Date(b.date) - new Date(a.date);
      } else {
        return b[value] - a[value];
      }
    });
    renderGames(filteredGames);
  });
  
  document.getElementById("searchInput").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    filteredGames = games.filter((game) =>
      game.title.toLowerCase().includes(query)
    );
    renderGames(filteredGames);
  });
  
  // Initial render
  renderGames(filteredGames);