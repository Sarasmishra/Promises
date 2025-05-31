// Simulate data fetching with 50% success/failure chance
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Generating a number b/w 0 to 1
      const randomNumber = Math.random();

      if (randomNumber > 0.5) {
        // 50% chance to resolve successfully
        resolve("Data fetched successfully!");
      } else {
        // 50% chance to reject with an error
        reject(new Error("Failed to fetch data"));
      }
    }, 1000); 
  });
}

// Async function to handle fetchData with try...catch
async function fetchDataHandler() {
  try {
    const result = await fetchData();
    console.log("Fetched data successfully!");
    console.log(result);
  } catch (error) {
    console.log("Error fetching data:", error.message);
  }
}

// Call the handler function to simulate workflow
fetchDataHandler();
