const tariffsList=[];

// ------------- SHOW LIST OF TARIFFS --------------------------

const showListTariffs=async()=>{
    await loadJson("tariffs", tariffsList, "TARIFFS");
    const listTariffs=document.getElementById("show-info");
    
    const ul=document.createElement('ul');

    for(const tariffs of tariffsList){
        const li=document.createElement('li');
        li.textContent= `
            id: ${tariffs.id}, credit cost: ${tariffs.credit_cost}, 
            period'id: ${tariffs.period_id}, program'id: ${tariffs.program_id}
            `;
        ul.appendChild(li);
    }
    
    listTariffs.innerHTML='';
    listTariffs.appendChild(ul);
}