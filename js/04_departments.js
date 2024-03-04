const departmentsList=[];

const showListDepartments=async()=>{
    await loadJson("departments", departmentsList, "DEPARTMENTS");
    const listDepartments=document.getElementById("show-info");
    
    const ul=document.createElement('ul');

    for(const deparment of departmentsList){
        const li=document.createElement('li');
        li.textContent= `
            id: ${deparment.id}, name of deparment: ${deparment.name}
            `;
        ul.appendChild(li);
    }
    
    listDepartments.innerHTML='';
    listDepartments.appendChild(ul);
}