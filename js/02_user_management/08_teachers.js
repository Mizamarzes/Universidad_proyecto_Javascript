const teachersList=[];

// ------------- LOAD FORM OF TEACHERS --------------------------

const loadFormTeachers=()=>{
    const formTeachers = document.getElementById('show-info');
    formTeachers.innerHTML=`
        <form>
            <div class="mb-3">
                <label for="nameTeacherInput" class="form-label">Name</label>
                <input type="text" class="form-control" id="nameTeacherInput" required>
            </div>

            <div class="mb-3">
                <label for="lastNameTeacherInput" class="form-label">Last name</label>
                <input type="text" class="form-control" id="lastNameTeacherInput" required>
            </div>

            <label for="textCheckDocumentTypeTeacher" class="form-label">Document type</label>
            <div class="mb-3">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="documentTypeOptionsTeacher" id="ccDocumentTypeTeacherInput" value="CC">
                    <label class="form-check-label" for="ccDocumentTypeTeacherInput">C.C</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="documentTypeOptionsTeacher" id="tiDocumentTypeTeacherInput" value="TI">
                    <label class="form-check-label" for="tiDocumentTypeTeacherInput">T.I</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="documentTypeOptionsTeacher" id="ceDocumentTypeTeacherInput" value="CE">
                    <label class="form-check-label" for="ceDocumentTypeTeacherInput">C.E</label>
                </div>
            </div>

            <div class="mb-3">
                <label for="documentNumberTeacherInput" class="form-label">Document number</label>
                <input type="number" class="form-control" id="documentNumberTeacherInput" required>
            </div>

            <div class="mb-3">
                <label for="departmentTeacherLabel" class="form-label">Department:</label>
                <select class="form-select" id="selectedDepartmentTeacher">
                    ${generateOptionsForm(departmentsList, "id", "name", 1)}
                </select>
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
    const departmentTeacher = document.getElementById('selectedDepartmentTeacher').value;
    
    // get the value about checkbox - document type
    const optionsDocumentTypeTeacher=document.getElementsByName('documentTypeOptionsTeacher');
    const documentTypeTeacherInput= getCheckboxSelected(optionsDocumentTypeTeacher);

    const newTeacher={
        id: teachersList.length+1,
        document_type: documentTypeTeacherInput,
        document_number: documentNumberTeacherInput,
        name: nameTeacherInput,
        last_name: lastNameTeacherInput,
        department_id: parseInt(departmentTeacher)
    }

    await saveJson("teachers", newTeacher, "TEACHER");
    await loadJson("teachers", teachersList, "TEACHERS");

    documentTypeTeacherInput.value='';
    documentNumberTeacherInput.value='';
    nameTeacherInput.value='';
    lastNameTeacherInput.value='';
    departmentTeacher.value = '';

    alert("Teacher succesfuly created");
}

// ------------- SHOW LIST OF TEACHERS --------------------------

const showListTeachers=async()=>{
    const textTeachers = document.getElementById('show-info');
    textTeachers.innerHTML=`
        <div class="container">
            <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Document Type</th>
                        <th>Document Number</th>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Department'id</th>
                    </tr>
                </thead>
                <tbody id="teachersTableBody">
                    
                </tbody>
            </table>
        </div>
    `;
    showListInTable("teachers", teachersList, "teachersTableBody", fieldsTeachers);
}
