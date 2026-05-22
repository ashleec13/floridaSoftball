// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function() {
    // Variables for HTML elements
    const grid = document.getElementById("rosterList");
    const searchInput = document.getElementById("playerSearch");
    const posFilter = document.getElementById("posFilter");
    const classFilter = document.getElementById("classFilter");
    const homeFilter = document.getElementById("homeFilter");

    // Function to render the player cards
    function render(list) {
        // Clear current grid content
        grid.innerHTML = "";

        if (list.length === 0) {
            grid.innerHTML = `
                <div class="col-12 text-center py-5">
                    <p class="text-muted fs-5">No players match that search or filter. Try a different filter or search term.</p>
                </div>
            `;
            return;
        }

        // Iterate through the player objects
        list.forEach(function(player) {
            // Create the column div
            const col = document.createElement("div");
            col.className = "col-sm-6 col-md-4 col-lg-3";

            // Set the inner HTML for each card
            col.innerHTML = `
                <div class="card h-100 shadow-sm border-uf-orange">
                    <img src="${player.photo}" class="card-img-top" alt="${player.firstName}">
                    <div class="card-body text-center">
                        <div>
                            <h5 class="card-title uf-blue-text">#${player.number} ${player.firstName} ${player.lastName}</h5>
                            <p class="card-text mb-1"><strong>${player.position}</strong></p>
                            <p class="text-muted small">${player.class} | ${player.hometown}</p>
                        </div>
                        <button class="btn btn-uf-blue mt-2 more-info" data-id="${player.number}">View Bio</button>
                    </div>
                </div>
            `;

            // Functionality for the "More Info" button
            const infoBtn = col.querySelector(".more-info");
            infoBtn.addEventListener("click", function() {
                showModal(player);
            });

            grid.appendChild(col);
        });
    }

    // Function to handle the detailed bio modal
    function showModal(player) {
        const modalName = document.getElementById("modalName");
        const modalBody = document.getElementById("modalContent");
        
        modalName.textContent = player.firstName + " " + player.lastName + " (#" + player.number + ")";
        modalBody.innerHTML = `
            <img src="${player.photo}" class="img-fluid rounded mb-3" style="max-height: 300px;">
            <p><strong>Major:</strong> ${player.major}</p>
            <p class="px-3 text-start">${player.bio}</p>
        `;

        const playerModal = new bootstrap.Modal(document.getElementById('playerModal'));
        playerModal.show();
    }

    // Filter function
    function applyFilters() {
        const searchTerm = searchInput.value.toLowerCase();
        const posValue = posFilter.value;
        const classValue = classFilter.value;
        const homeValue = homeFilter.value;

        const filteredList = players.filter(function(p) {
            // Check Search
            const nameMatch = (p.firstName + " " + p.lastName).toLowerCase().includes(searchTerm);
            
            // Check Position logic
            let posMatch = true;
            if (posValue === "Infield") posMatch = p.position.includes("INF") || p.position.includes("1B") || p.position.includes("SS");
            else if (posValue === "Outfield") posMatch = p.position.includes("OF");
            else if (posValue === "Pitcher/Catcher") posMatch = p.position.includes("RHP") || p.position.includes("LHP") || p.position.includes("C");
            else if (posValue === "Utility") posMatch = p.position.includes("UTL");

            // Check Class logic
            const classMatch = (classValue === "All" || p.class.includes(classValue));

            // Check Hometown/Region logic
            let homeMatch = true;
            if (homeValue === "West") homeMatch = p.hometown.includes("Cali") || p.hometown.includes("Arizona");
            else if (homeValue === "Midwest") homeMatch = p.hometown.includes("Ind") || p.hometown.includes("Kansas");
            else if (homeValue === "Southeast") homeMatch = p.hometown.includes("Fla") || p.hometown.includes("Ga") || p.hometown.includes("Alabama") || p.hometown.includes("Texas");
            else if (homeValue === "Northeast") homeMatch = p.hometown.includes("New York");

            return nameMatch && posMatch && classMatch && homeMatch;
        });

        grid.classList.toggle("no-results", filteredList.length === 0);  // AI HELPED FIX IT WAS NOT WORKING
        
        render(filteredList);
    }

    // Event Listeners for filters
    searchInput.addEventListener("input", applyFilters);
    posFilter.addEventListener("change", applyFilters);
    classFilter.addEventListener("change", applyFilters);
    homeFilter.addEventListener("change", applyFilters);

    // Initial render call
    render(players);
});