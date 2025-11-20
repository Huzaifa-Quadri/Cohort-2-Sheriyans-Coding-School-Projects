import profiles from "./data.js";

const grid = document.querySelector(".cards-grid");

profiles.forEach((profile) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
        <div class="profile-photo-wrapper">
            <img
              src="${profile.imageUrl}"
              alt="Profile"
              class="profile-photo"
            />
          </div>
          <div class="name">${profile.fullName}</div>
          <div class="description">
            ${profile.description}
          </div>
          <div class="location">${profile.city},${profile.country}</div>
          <button class="hire-button">${profile.buttonStatus}</button>
    `;

  grid.appendChild(card);
});
