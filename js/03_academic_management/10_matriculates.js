const matriculatesList=[];

// price all of matriculates, used in addMatriculate()
let priceAllMatriculates = 0;

// ------------- LOAD FORM OF MATRICULATES --------------------------

const loadFormMatriculates=()=>{
    const formMatriculates = document.getElementById('show-info');
    formMatriculates.innerHTML=`
        <form>
            <div class="mb-3">
                <label for="studentsMatriculatesLabel" class="form-label">Select Student:</label>
                <select id="select-students-results-matriculates">
                    ${generateOptionsForm(studentsList, "id", "name", 1)}
                </select>
            </div>

            <div class="mb-3">
                <label for="asignaturesMatriculatesLabel" class="form-label">Select Asignature:</label>
                <select id="select-asignatures-results-matriculates">
                    ${generateOptionsForm(asignaturesList, "id", "code", 1)}
                </select>
            </div>

            <div class="mb-3">
                <label for="periodsMatriculatesLabel" class="form-label">Select Period:</label>
                <select id="select-periods-results-matriculates">
                    ${generateOptionsForm(periodsList, "id", "code", 1)}
                </select>
            </div>

            <button type="button" class="btn btn-primary" onclick="addMatriculate()">Add Matriculate</button>
            <label for="listMatriculatesLabel" class="form-label">List of Matriculates:</label>
            <ul class="mb-5 mt-3" id="listItemsMatriculates">

            </ul>
            <div class="mb-3" id="totalPriceAllMatriculates">

            </div>


            <button type="button" class="btn btn-primary" onclick="createMatriculate()">Create Matriculate</button>
            <button type="button" class="btn btn-danger" onclick="showListMatriculates()">Show List of Matriculates</button>
        </form>
    `;
}

// ------------- ADD MATRICULATE TO THE LIST OF MATRICULATES --------------------------

const addMatriculate = async (event) => {
    event.preventDefault(); 
    
    const selectStudent =  studentsList[document.getElementById('select-students-results-matriculates').selectedIndex];
    const selectAsignature = asignaturesList[document.getElementById('select-asignatures-results-matriculates').selectedIndex];
    const selectPeriod = periodsList[document.getElementById('select-periods-results-matriculates').selectedIndex];
    
    const listItemsMatriculates = document.getElementById('listItemsMatriculates');

    if(!selectStudent || !selectAsignature || !selectPeriod){
        alert("Please, select");
        return;
    }

    // calculate price of matriculate
    const priceMatriculate = calculatePriceMatriculate(selectAsignature);
    
    // show total price all of matriculates
    const messagePriceAllMatriculates = document.getElementById('totalPriceAllMatriculates')
    priceAllMatriculates += priceMatriculate;
    messagePriceAllMatriculates.textContent = `
        Total Price: ${priceAllMatriculates}
    `;

    // show the list of matriculates
    const li = document.createElement('li');
    li.textContent = `
        Student: ${selectStudent.name} - Asignature: ${selectAsignature.code}
        Period: ${selectPeriod.code} - Price: ${priceMatriculate}
    `;
    listItemsMatriculates.appendChild(li);

    // add the matriculate to json
    const newMatriculate={
        "id": matriculatesList.length + 1,
        "student_id": selectStudent.id,
        "asignature_id": selectAsignature.id,
        "period_id": selectPeriod.id,
        "price": priceMatriculate
    };

    await saveJson("matriculates", newMatriculate, "MATRICULATE");
    await loadJson("matriculates", matriculatesList, "MATRICULATES");

    selectStudent.selectedIndex=-1;
    selectAsignature.selectedIndex=-1;
    selectPeriod.selectedIndex=-1;
}


// ------------- CALCULATE THE PRICE --------------------------

const calculatePriceMatriculate = (asignature)=>{
    const quantifyCredits = asignature.credits;
    const programId = asignature.program_id;
    const tariff = tariffsList.find(tariff => tariff.program_id === programId);

    if(tariff){
        const totalPrice = quantifyCredits * tariff.credit_cost;
        return totalPrice
    } else {
        const message = "No tariff found for the selected program";
        return message
    }
}

// ------------- CREATE MATRICULATE --------------------------

const createMatriculate=()=> {
    alert("Matriculate succesfuly created")
}   

// ------------- SHOW LIST OF MATRICULATES --------------------------

const showListMatriculates=async()=>{
    await loadJson("matriculates", matriculatesList, "MATRICULATES");
    const listMatriculates=document.getElementById("show-info");
    
    const ul=document.createElement('ul');

    for(const matriculate of matriculatesList){
        const li=document.createElement('li');
        li.textContent= `
            id: ${matriculate.id}, student'id: ${matriculate.student_id}, 
            asignature'id: ${matriculate.asignature_id}, period'id: ${matriculate.period_id}, 
            price: ${matriculate.price}
            `;
        ul.appendChild(li);
    }

    listMatriculates.innerHTML='';
    listMatriculates.appendChild(ul);
}