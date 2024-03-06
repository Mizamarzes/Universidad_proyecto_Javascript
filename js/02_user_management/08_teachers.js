const teachersList=[];

// ------------- LOAD FORM OF TEACHERS --------------------------

const loadFormTeachers=()=>{
    const formTeachers = document.getElementById('show-info');
    formTeachers.innerHTML=`
        <form>
            <div class="mb-3">
                <label for="nameTeacherInput" class="form-label">Name</label>
                <input type="text" class="form-control" id="nameTeacherInput">
            </div>

            <div class="mb-3">
                <label for="lastNameTeacherInput" class="form-label">Last name</label>
                <input type="text" class="form-control" id="lastNameTeacherInput">
            </div>

            <label for="textCheckDocumentTypeTeacher" class="form-label">Document type</label>
            <div class="mb-3">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="documentTypeOptionsTeacher" id="ccDocumentTypeTeacherInput" value="C.C">
                    <label class="form-check-label" for="ccDocumentTypeTeacherInput">C.C</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="documentTypeOptionsTeacher" id="tiDocumentTypeTeacherInput" value="T.I">
                    <label class="form-check-label" for="tiDocumentTypeTeacherInput">T.I</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="documentTypeOptionsTeacher" id="ceDocumentTypeTeacherInput" value="C.E">
                    <label class="form-check-label" for="ceDocumentTypeTeacherInput">C.E</label>
                </div>
            </div>

            <div class="mb-3">
                <label for="documentNumberTeacherInput" class="form-label">Document number</label>
                <input type="number" class="form-control" id="documentNumberTeacherInput">
            </div>

            <button type="button" class="btn btn-primary" onclick="createTeacher()">Create Teacher</button>
            <button type="button" class="btn btn-danger" onclick="showListTeachers()">Show List of Teachers</button>
        </form>
    `;
}

// ------------- CREATE TEACHER --------------------------

const createTeacher=async()=>{
    const nameTeacherInput=document.getElementById('nameTeacherInput').value;
    const lastNameTeacherInput=document.getElementById('lastNameTeacherInput').value;
    const documentNumberTeacherInput=document.getElementById('documentNumberTeacherInput').value;
    
    // get the value about checkbox - document type
    const optionsDocumentTypeTeacher=document.getElementsByName('documentTypeOptionsTeacher');
    const documentTypeTeacherInput= getCheckboxSelected(optionsDocumentTypeTeacher);

    const newTeacher={
        id: teachersList.length+1,
        document_type: documentTypeTeacherInput,
        document_number: documentNumberTeacherInput,
        name: nameTeacherInput,
        last_name: lastNameTeacherInput,
        department_id: 1
    }

    await saveJson("teachers", newTeacher, "TEACHER");
    await loadJson("teachers", teachersList, "TEACHERS");

    documentTypeTeacherInput.value='';
    documentNumberTeacherInput.value='';
    nameTeacherInput.value='';
    lastNameTeacherInput.value='';

    alert("Teacher succesfuly created");

    return newTeacher
}


// ------------- SHOW LIST OF TEACHERS --------------------------

const showListTeachers=async()=>{
    await loadJson("teachers", teachersList, "TEACHERS");
    const listTeachers=document.getElementById("show-info");
    
    const ul=document.createElement('ul');

    for(const teacher of teachersList){
        const li=document.createElement('li');
        li.textContent= `
            id: ${teacher.id}, document type: ${teacher.document_type}, 
            document number: ${teacher.document_number}, name: ${teacher.name}, 
            last name: ${teacher.last_name}, department'id: ${teacher.department_id}
            `;
        ul.appendChild(li);
    }

    listTeachers.innerHTML='';
    listTeachers.appendChild(ul);
}
