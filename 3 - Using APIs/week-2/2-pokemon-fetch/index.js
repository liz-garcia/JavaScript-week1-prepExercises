"use strict";

const VALID_URL = "https://pokeapi.co/api/v2/pokemon/?limit=5";
const INVALID_URL = "https://pokeapi.co/api/v2/pokemons/?limit=5";

async function fetchJSON(url) {
  const fetchedData = await fetch(url);

  if (!fetchedData.ok) {
    return Promise.reject(new Error(`Failed to fetch data from ${url}`));
  }

  if (fetchedData.ok) {
    const JSONdata = await fetchedData.json();
    return Promise.resolve(JSONdata);
  }
}

function renderResults(pokemons) {
  const errorElement = document.querySelector("#error");
  errorElement.innerText = "";

  const pokemonsElement = document.querySelector("#json");
  pokemonsElement.innerText = JSON.stringify(pokemons, null, 2);
}

function renderError(err) {
  const pokemonsElement = document.querySelector("#json");
  pokemonsElement.innerText = "";

  const errorElement = document.querySelector("#error");
  errorElement.innerText = err.message;
}

function main() {
  const button = document.querySelector("#button");
  button.addEventListener("click", async () => {
    const option = document.querySelector("#option");
    const url = option.checked ? INVALID_URL : VALID_URL;

    try {
      const pokemons = await fetchJSON(url);
      renderResults(pokemons);
    } catch (error) {
      renderError(error);
    }
  });
}

window.addEventListener("load", main);


// Q: - If you look at the `index.html` you can see our error rendering is put into a regular `div` element, but our pokemon json is put into a `pre` element. Why is that?

//A: The The <pre> element is used to define preformatted text. It will preserve both spaces and line breaks exactly as they appear in the HTML source code from our specified url. Unlike <pre>, <div> doesn't preserve spaces or line breaks. In our context, <div> works better for styling and customizing error messages; while <pre> ensures that the formatting of JSON data is maintained correctly, making it easier to read and work with.

//

// Q: - The comments say to handle the error in the main function. What do you think the advantages are of doing it this way? What about if you would do the error handling in the `fetchJSON` function?

// A: Error handling in the main function separates the concerns of fetching and processing data (in fetchJSON) from the concern of handling errors and rendering data (in main).

//

// Q: - Some students ask us why not just put `try/catch` blocks around the main function and have that as the place to catch all errors. Why do you think we do not suggest doing this?

// A: We avoid this approach to maintain a well-defined separation of concerns and ensure the code remains maintainable.The `main` function is primarily responsible for overseeing the user interface and coordinate different parts of the application. It's not focused on specific data processing or fetching.