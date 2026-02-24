const pets = document.querySelectorAll(".pets");

pets.forEach(pet => {
    // waits for image to be clicked
    pet.addEventListener("click", function () {
        // variables to display about chosen pet (name, fact, and image link)
        const chosenPet = this.dataset.animal; // assigns the value of data-animal clicked
        let fact = ""; // fact tbd
        let imageLink = "";


        // adds accompanying text & image link
        if (chosenPet == "dog") {
            fact = "An average dog is as intelligent as a two year old child!";
            imageLink = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnKxlMG-_4dwgl0bHr0K_u4t8z1z-7Isa0qA&s";
        } else {
            fact = "A cat has seven lives!";
            imageLink = "https://gcdn.thunderstore.io/live/repository/icons/TheGumsuckers-GumsuckerModpack-1.1.0.png.256x256_q95.jpg"
        }
        // displays final text
        document.getElementById("result").textContent = `You chose a ${chosenPet}!\n${fact} `;

        // displays final image
        document.getElementById("result-image").src = imageLink;
    })
})