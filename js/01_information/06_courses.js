const coursesList=[];

// ------------- SHOW LIST OF COURSES --------------------------

const showListCourses=async()=>{
    await loadJson("courses", coursesList, "COURSES");
    const listCourses=document.getElementById("show-info");
    
    const ul=document.createElement('ul');

    for(const course of coursesList){
        const li=document.createElement('li');
        li.textContent= `
            id: ${course.id}, name: ${course.name}, code: ${course.code},
            chair guide: ${course.chair_guide}
            `;
        ul.appendChild(li);
    }
    
    listCourses.innerHTML='';
    listCourses.appendChild(ul);
}