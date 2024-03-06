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
        console.log(`${messageSecurity} created: ${itemCreated}`);

    }catch(error){
        console.error(`Error loading a ${messageSecurity}, ${error.message}`);
    }
}

// ------------- DIFFERENTS FUNCTION UTILS --------------------------

// ------------- GET THE CHECKBOX SELECTED --------------------------

function getCheckboxSelected(nameCheckbox){
    let selectedValue=null;

    for (let i = 0; i < nameCheckbox.length; i++) {
        if (nameCheckbox[i].checked) {
            selectedValue = nameCheckbox[i].value;
            break; 
        }
    }

    return selectedValue
}