const periodsList=[];
const url_period="students"

const loadJson=async(url,list)=>{
    try{
        list.length=0;
        const response=await fetch("http://localhost:3000/"+url);

        if(!response.ok){
            throw new Error(`Error loading, status: ${response.status}`);
        }
        const listJSON=await response.json();
        list.push(...listJSON);
    }catch(error){
        console.error(`Error loading products, ${error.message}`);
    }
}

loadJson(url_period, periodsList);
console.log(periodsList)

