const studentsList=[];

// ------------- LOAD FORM OF STUDENTS --------------------------

const loadFormStudents=()=>{
    const formClients = document.getElementById('show-info');
    formClients.innerHTML=`
        <form>
            <div class="mb-3">
                <label for="nameStudentInput" class="form-label">Name</label>
                <input type="text" class="form-control" id="nameStudentInput" required>
            </div>

            <div class="mb-3">
                <label for="lastNameStudentInput" class="form-label">Last name</label>
                <input type="text" class="form-control" id="lastNameStudentInput" required>
            </div>

            <label for="textCheckDocumentTypeStudent" class="form-label">Document type</label>
            <div class="mb-3">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="documentTypeOptionsStudent" id="ccDocumentTypeStudentInput" value="CC">
                    <label class="form-check-label" for="ccDocumentTypeStudentInput">C.C</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="documentTypeOptionsStudent" id="tiDocumentTypeStudentInput" value="TI">
                    <label class="form-check-label" for="tiDocumentTypeStudentInput">T.I</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="documentTypeOptionsStudent" id="ceDocumentTypeStudentInput" value="CE">
                    <label class="form-check-label" for="ceDocumentTypeStudentInput">C.E</label>
                </div>
            </div>

            <div class="mb-3">
                <label for="documentNumberStudentInput" class="form-label">Document number</label>
                <input type="number" class="form-control" id="documentNumberStudentInput" required>
            </div>

            <div class="mb-3">
                <label for="cityResidenceStudentInput" class="form-label">City of residence</label>
                <input type="text" class="form-control" id="cityResidenceStudentInput" required>
            </div>

            <div class="mb-3">
                <label for="addressStudentInput" class="form-label">Address</label>
                <input type="text" class="form-control" id="addressStudentInput" required>
            </div>
            
            <div class="mb-3">
                <label for="phoneNumberStudentInput" class="form-label">Phone number</label>
                <input type="number" class="form-control" id="phoneNumberStudentInput" required>
            </div>

            <div class="mb-3">
                <label for="dateBornStudentInput" class="form-label">Date born</label>
                <input type="date" class="form-control" id="dateBornStudentInput" required>
            </div>

            <label for="textCheckSex" class="form-label">Sex</label>
            <div class="mb-3">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="sexOptions" id="maleSexStudentInput" value="male">
                    <label class="form-check-label" for="maleSexStudentInput">Male</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="sexOptions" id="femaleSexStudentInput" value="female">
                    <label class="form-check-label" for="femaleSexStudentInput">Female</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="sexOptions" id="idkSexStudentInput" value="idk">
                    <label class="form-check-label" for="idkSexStudentInput">Idk</label>
                </div>
            </div>

            <button type="button" class="btn btn-primary" onclick="createStudent()">Create Student</button>
            <button type="button" class="btn btn-danger" onclick="showListStudents()">Show List of Students</button>
        </form>
    `;
}

// ------------- CREATE STUDENT --------------------------

const createStudent=async()=>{
    
    const nameStudentInput=document.getElementById('nameStudentInput').value;
    const lastNameStudentInput=document.getElementById('lastNameStudentInput').value;
    const documentNumberStudentInput=document.getElementById('documentNumberStudentInput').value;
    const cityResidenceStudentInput=document.getElementById('cityResidenceStudentInput').value;
    const addressStudentInput=document.getElementById('addressStudentInput').value;
    const phoneNumberStudentInput=document.getElementById('phoneNumberStudentInput').value;
    const dateBornStudentInput=document.getElementById('dateBornStudentInput').value;

    // get the value about checkbox - document type
    const optionsDocumentTypeStudent=document.getElementsByName('documentTypeOptionsStudent');
    const documentTypeStudentInput= getCheckboxSelected(optionsDocumentTypeStudent);

    // get the value about checkbox - sex 
    const optionsSex=document.getElementsByName('sexOptions');
    const sexStudentInput= getCheckboxSelected(optionsSex);

    const newStudent={
        id: studentsList.length+1,
        name: nameStudentInput,
        last_name: lastNameStudentInput,
        document_type: documentTypeStudentInput,
        document_number: documentNumberStudentInput,
        city_of_residence: cityResidenceStudentInput,
        address: addressStudentInput,
        phone_number: phoneNumberStudentInput,
        date_born: dateBornStudentInput,
        sex: sexStudentInput,
        program_id: 1,
    }

    await saveJson("students", newStudent, "STUDENT");
    await loadJson("students", studentsList, "STUDENTS");
    
    nameStudentInput.value='';
    lastNameStudentInput.value='';
    documentTypeStudentInput.value='';
    documentNumberStudentInput.value='';
    cityResidenceStudentInput.value='';
    addressStudentInput.value='';
    phoneNumberStudentInput.value='';
    dateBornStudentInput.value='';
    sexStudentInput.value='';
    
    alert("Student succesfuly created");

}

// ------------- SHOW LIST OF STUDENTS --------------------------

const showListStudents=async()=>{
    await loadJson("students", studentsList, "STUDENTS");
    const listStudents=document.getElementById("show-info");
    
    const ul=document.createElement('ul');

    for(const student of studentsList){
        const li=document.createElement('li');
        li.textContent= `
            id: ${student.id}, name: ${student.name}, last name: ${student.last_name}, 
            document type: ${student.document_type}, document number: ${student.document_number},
            city of residence: ${student.city_of_residence}, address: ${student.address}, 
            phone_number: ${student.phone_number}, date born: ${student.date_born}, 
            sex: ${student.sex}, program'id: ${student.program_id}
            `;
        ul.appendChild(li);
    }

    listStudents.innerHTML='';
    listStudents.appendChild(ul);
}