async function fetchData() {
    try
    {
        let data = await fetch('https://api.programiz.pro/api/Demo/javascript/movies');
        //await pauses as long as it takes fo the data to fetch
        let text = await data.text();
    
        console.log(text)

        let example = await fetch('https://example.com/');
        let toPrint = await example.text()
        
        console.log(toPrint);
    }
    catch(error)
    {
        console.log('Error!');
    }
  }
  
  fetchData()