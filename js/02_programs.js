const programsList=[];

const showListPrograms=async()=>{
    await loadJson("programs", programsList, "PROGRAMS");
    const listPrograms=document.getElementById("show-info");
    
    const ul=document.createElement('ul');

    for(const program of programsList){
        const li=document.createElement('li');
        li.textContent= `
            id: ${program.id}, name of program: ${program.name}, 
            year: ${program.level}
            `;
        ul.appendChild(li);
    }

    listPrograms.innerHTML='';
    listPrograms.appendChild(ul);
}