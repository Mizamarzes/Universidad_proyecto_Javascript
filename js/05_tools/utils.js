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

// ------------- FUNCTION FOR SHOW THE LISTS --------------------------

const fieldsPeriods = ["id", "code", "year", "semester"];
const fieldsPrograms = ["id", "name", "level"];
const fieldsTariffs = ["id", "credit_cost", "period_id", "program_id"];
const fieldsDepartments =["id", "name"];
const fieldsTeachers =[
    "id", "document_type", "document_number", "name", "last_name", 
    "department_id"
];
const fieldsStudents =[
    "id", "name", "last_name", "document_type", "document_number",
    "city_of_residence", "address", "phone_number", "date_born",
    "sex", "program_id"
];
const fieldsCourses =["id", "name", "code", "chair_guide"];
const fieldsSalons =[
    "id", "student_capacity", "building", "floor", "identification_number"
];
const fieldsAsignatures =[
    "id", "course_id", "code", "credits", "teacher_id", "available_quotas", 
    "program_id", "class_schedule"
];
const fieldsMatriculates = [
    "id", "student_id", "asignature_id", "period_id", "price"
];

// without list

const showListInTable = async (url, dataList, tableBodyId, fields) => {
    await loadJson(url, dataList, "LISTA");
    const tableBody = document.getElementById(tableBodyId);
    tableBody.innerHTML = '';

    for (const dataItem of dataList) {
        const tr = document.createElement('tr');
        let rowData = '';
        for (const field of fields) {
            if (field === 'class_schedule') {
                // Procesar el campo class_schedule
                let scheduleStr = '';
                for (const schedule of dataItem[field]) {
                    scheduleStr += `${schedule.day} ${schedule.start_time}-${schedule.end_time} (Salon ${schedule.salon_id})<br>`;
                }
                rowData += `<td>${scheduleStr}</td>`;
            } else {
                rowData += `<td>${dataItem[field]}</td>`;
            }
        }
        tr.innerHTML = rowData;
        tableBody.appendChild(tr);
    }
}

// ------------- SCHEDULE SYSTEM --------------------------

const daysList=[];
const schedulesList=[];

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
            const option = document.createElement('option');
            option.textContent = `Not found ${fieldName}`;
            searchResults.appendChild(option);
            return;
        }

        results.forEach(result => {
            const option = document.createElement('option');
            option.textContent = result.name;
            option.value = result.name;
            searchResults.appendChild(option);
        });
    }

    searchInput.addEventListener('input', function () {
        const inputValue = this.value.toLowerCase();
        const filteredItems = listElements.filter(item => item.name.toLowerCase().includes(inputValue));
        showResults(filteredItems);
    });

    searchResults.addEventListener('change', function () {
        searchInput.value = this.value;
        searchResults.innerHTML = '';
    });
}

