// ------------- JSON LOAD FUNCTION --------------------------

const loadJson=async(url, list, messageSecurity)=>{
    try{
        list.length=0;
        const response=await fetch(`http://localhost:3000/${url}`);

        if(!response.ok){
            throw new Error(`Error loading ${messageSecurity}, status: ${response.status}`);
        }
        const listJSON=await response.json();
        list.push(...listJSON);
        console.log(list)
    }catch(error){
        console.error(`Error loading ${messageSecurity}, ${error.message}`);
    }
    
}

// ------------- JSON SAVE FUNCTION --------------------------

const saveJson= async(url, newItem, messageSecurity)=>{
    try{
        const response=await fetch(`http://localhost:3000/${url}`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(newItem),
        });

        if(!response.ok){
            throw new Error(`Error creating a ${messageSecurity}, status: ${response.status}`);
        }
        const itemCreated= await response.json();
        console.log(`Invoice created: ${itemCreated}`);

    }catch(error){
        console.error(`Error loading a ${messageSecurity}, ${error.message}`);
    }
}
