// Create two constants that gets the elements in the html: the generateButton and the memeImage
// MR CARLOS 11th December: Create two constants , and use the document.getElementById("htmlid")

// Fetch a random meme using Meme API
async function fetchMeme() {
    try {
        /* Create a constant to store data / = await fetch("https://meme-api.com/gimme");
        /*Create a conditional statement for checking the data from the API, like if !response.ok */
            throw new Error(`HTTP error! status: ${response.status}`);
        //
        const data = await response.json();

        // Display the meme
        memeImage.src = data.url;
        memeImage.alt = data.title;
        memeImage.style.display = "block";
    } catch (error) {
        console.error("Error fetching meme:", error);
        alert("An error occurred while fetching the meme.");
    }
}

// Event listener for the generate button
generateButton.addEventListener("click", fetchMeme);
