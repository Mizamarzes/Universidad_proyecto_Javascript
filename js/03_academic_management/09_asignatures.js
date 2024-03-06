const asignaturesList=[];



// ------------- SHOW LIST OF ASIGNATURES --------------------------

const showListAsignatures=async()=>{
    await loadJson("asignatures", asignaturesList, "ASIGNATURES");
    const listAsignatures=document.getElementById("show-info");
    
    const ul=document.createElement('ul');

    for(const asignature of asignaturesList){
        const li=document.createElement('li');
        li.textContent= `
            id: ${asignature.id}, course'id: ${asignature.course_id}, code: ${asignature.code},
            credits: ${asignature.credits}, teacher'id: ${asignature.teacher_id},
            available quotas: ${asignature.available_quotas}, program'id: ${asignature.program_id},
            class schedule: "NOT FINISH NEED TO IMPROVES"
            `;
        ul.appendChild(li);
    }

    listAsignatures.innerHTML='';
    listAsignatures.appendChild(ul);
}