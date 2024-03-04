const periodsList=[];

const showListPeriods=async()=>{
    await loadJson("periods", periodsList, "PROGRAMS");
    const listPeriods=document.getElementById("show-info");
    
    const ul=document.createElement('ul');

    for(const period of periodsList){
        const li=document.createElement('li');
        li.textContent= `
            id: ${period.id}, code: ${period.code}, year: ${period.year}, 
            semester: ${period.semester}
            `;
        ul.appendChild(li);
    }

    listPeriods.innerHTML='';
    listPeriods.appendChild(ul);
}
