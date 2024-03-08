const matriculatesList=[];

// ------------- LOAD FORM OF MATRICULATES --------------------------

const loadFormMatriculates=()=>{
    const formMatriculates = document.getElementById('show-info');
    formMatriculates.innerHTML=`
        <form>
            <div class="mb-3">
                <label for="studentsMatriculatesLabel" class="form-label">Select Student:</label>
                <select id="select-students-results">
                    ${generateOptionsForm(studentsList, "id", "name", 1)}
                </select>
            </div>

            <div class="mb-3">
                <label for="asignaturesMatriculatesLabel" class="form-label">Select Asignature:</label>
                <select id="select-asignatures-results">
                    ${generateOptionsForm(asignaturesList, "id", "code", 1)}
                </select>
            </div>

            <div class="mb-3">
                <label for="periodsMatriculatesLabel" class="form-label">Select Period:</label>
                <select id="select-periods-results">
                    ${generateOptionsForm(periodsList, "id", "code", 1)}
                </select>
            </div>

            <button type="button" class="btn btn-primary" onclick="createMatriculate()">Create Matriculate</button>
        </form>
    `;
}

// ------------- CREATE MATRICULATE --------------------------

const createMatriculate=async()=>{
    console.log("monda")
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