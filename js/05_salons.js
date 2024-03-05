const salonsList=[];


// ------------- SHOW LIST OF SALONS --------------------------

const showListSalons=async()=>{
    await loadJson("salons", salonsList, "SALONS");
    const listSalons=document.getElementById("show-info");
    
    const ul=document.createElement('ul');

    for(const salon of salonsList){
        const li=document.createElement('li');
        li.textContent= `
            id: ${salon.id}, student capacity: ${salon.student_capacity}, 
            building: ${salon.building}, floor: ${salon.floor}, identification number: 
            ${salon.identification_number}
            `;
        ul.appendChild(li);
    }
    
    listSalons.innerHTML='';
    listSalons.appendChild(ul);
}