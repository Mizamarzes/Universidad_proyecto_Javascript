const matriculatesList=[];


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