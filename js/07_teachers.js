const teachersList=[];

// ------------- SHOW LIST OF ASIGNATURES --------------------------

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
