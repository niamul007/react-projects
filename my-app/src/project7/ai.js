    const API_KEY = '653f8950547083fe96d14f04426fe038';
    const lat = "51.5074";
    const lon = "0.1278";
  const fetchData = async (name)=>{
    let ismounted = true;
    try{
        const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
        if(!res.ok){
            throw new Error("Fetch isn't working");
        }
        const data = await res.json();
        console.log(JSON.stringify(data,null,2));
    }
    catch(error){
        console.error(error.message)
    }
    finally{
        console.log("Fetch attempt finished");
    }
    return ()=>{ismounted = false}
  }

  fetchData("london");