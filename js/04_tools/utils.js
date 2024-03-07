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

// ------------- SCHEDULE SYSTEM --------------------------

const daysList=[];
const scheduleList=[];

const generateOptionsForm = (itemsList, value, valueMessage, type) => {
    let options = '';
    if (type === 1) {
        for (const item of itemsList) {
            options += `<option value="${item[value]}">${item[valueMessage]}</option>`;
        }
    } else if (type === 2) {
        for (const item of itemsList) {
            options += `<option value="${item[value]}">${item[valueMessage]} to ${item.end_time}</option>`;
        }
    }
    return options;
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

// ------------- SEARCH FOR ITEMS IN A LIST --------------------------

function searchElementsList(searchInputId, searchResultsId, listElements, fieldName) {
    const searchInput = document.getElementById(searchInputId);
    const searchResults = document.getElementById(searchResultsId);

    function showResults(results) {
        searchResults.innerHTML = '';

        if (results.length === 0) {
            const li = document.createElement('li');
            li.textContent = `Not found ${fieldName}`;
            searchResults.appendChild(li);
            return;
        }

        results.forEach(result => {
            const li = document.createElement('li');
            li.textContent = result.name;
            li.addEventListener('click', function () {
                searchInput.value = result.name;
                searchResults.innerHTML = '';
            });
            searchResults.appendChild(li);
        });
    }

    searchInput.addEventListener('input', function () {
        const inputValue = this.value.toLowerCase();
        const filteredItems = listElements.filter(item => item.name.toLowerCase().includes(inputValue));
        showResults(filteredItems);
    });
}
