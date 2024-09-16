function fetchError() {
    return new Promise((resolve, reject) => {
      reject('Something went wrong');
    });
  }
  
  fetchError()
    .catch((error) => {
      console.log(error);
    });
    


const fetchData = fetch('https://api.programiz.pro/api/Demo/javascript/movies');
 
fetchData
    .then((response) => response.text())
    .then((data) => console.log(data))
    .catch((error) => console.log("Response not found", error))
    // always runs
    .finally(() => {
        console.log('Operation complete.');
    });
