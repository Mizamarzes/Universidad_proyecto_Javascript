const asignaturesList=[];

// ------------- LOAD FORM OF ASIGNATURES --------------------------

const loadFormAsignatures=()=>{
    const formAsignatures = document.getElementById('show-info');
    formAsignatures.innerHTML=`
        <form>
            <div class="mb-3">
                <label for="codeAsignatureInputLabel" class="form-label">Code of Asignature:</label>
                <input type="text" class="form-control" id="codeAsignatureInput">
            </div>

            <div class="mb-3">
                <label for="searchCoursesInputLabel" class="form-label">Select Course:</label>
                <select id="search-courses-results">
                    ${generateOptionsForm(coursesList, "id", "name", 1)}
                </select>
            </div>

            <div class="mb-3">
                <label for="searchTeachersInputLabel" class="form-label">Select Teacher:</label>
                <select id="search-teachers-results">
                    ${generateOptionsForm(teachersList, "id", "name", 1)}
                </select>
            </div>

            <div class="mb-3">
                <label for="searchProgramsInputLabel" class="form-label">Select Program:</label>
                <select id="search-programs-results">
                    ${generateOptionsForm(programsList, "id", "name", 1)}
                </select>
            </div>

            <div class="mb-3">
                <label for="availableQuotasAsignatureInputLabel" class="form-label">Maximum number of spaces available:</label>
                <input type="number" class="form-control" id="availableQuotasAsignatureInput">
            </div>

            <div class="mb-3">
                <label for="creditsAsignatureInputLabel" class="form-label">Quantity of credits:</label>
                <input type="number" class="form-control" id="creditsAsignatureInput">
            </div>

            <div class="mb-3">
                <label for="scheduleAsignatureInputLabel" class="form-label">Schedule:</label>

                <div class="mb-3">
                    <label for="dayScheduleAsignatureInputLabel" class="form-label">Day:</label>
                    <select class="form-select" id="selectedDayScheduleAsignature">
                        ${generateOptionsForm(daysList, "name", "name", 1)}
                    </select>
                </div>

                <div class="mb-3">
                    <label for="hoursScheduleAsignatureInputLabel" class="form-label">Time:</label>
                    <select class="form-select" id="selectedHoursScheduleAsignature">
                        ${generateOptionsForm(schedulesList, "id", "start_time", 2)}
                    </select>
                </div>

                <div class="mb-3">
                    <label for="salonScheduleAsignatureInputLabel" class="form-label">Salon:</label>
                    <select class="form-select" id="selectedSalonScheduleAsignature">
                        ${generateOptionsForm(salonsList, "id", "identification_number", 1)}
                    </select>
                </div>
                
                <button type="button" class="btn btn-primary" onclick="addScheduleAsignatures()">Add Schedule</button>

                <label for="listScheduleAsignatureInputLabel" class="form-label">List of Schedule:</label>
                <ul class="mb-5 mt-3" id="listItemsScheduleAsignature">

                </ul>
            </div>

            <button type="button" class="btn btn-primary" onclick="createAsignature()">Create Asignature</button>
            <button type="button" class="btn btn-danger" onclick="showListAsignatures()">Show List of Asignatures</button>
        </form>

    `;

    // SEARCH ENGINE FOR COURSERS 
    // searchElementsList("search-courses-input", "search-courses-results", coursesList, "Courses");
    // SEARCH ENGINE FOR TEACHERS 
    // searchElementsList("search-teachers-input", "search-teachers-results", teachersList, "Teachers")
    // SEARCH ENGINE FOR PROGRAMS 
    // searchElementsList("search-programs-input", "search-programs-results", programsList, "Programs")
}

// ------------- ADD ITEM, ASIGNATURES --------------------------

// List for saving classes schedules
const listClassesScheduleAsignatures = [];

const addScheduleAsignatures = () => {
    const selectedDay = daysList[document.getElementById('selectedDayScheduleAsignature').selectedIndex];
    const selectHour = schedulesList[document.getElementById('selectedHoursScheduleAsignature').selectedIndex];
    const selectSalon = salonsList[document.getElementById('selectedSalonScheduleAsignature').selectedIndex];

    const listItems = document.getElementById('listItemsScheduleAsignature');

    if (!selectedDay || !selectHour || !selectSalon) {
        alert("Please, select a day, an hour, and a salon");
        return;
    }

    const li = document.createElement('li');
    
    li.textContent = `
        Day: ${selectedDay.name} - Salon: ${selectSalon.identification_number} 
        - Start Time: ${selectHour.start_time} - End Time: ${selectHour.end_time}
    `;
    listItems.appendChild(li);

    // adds each class to the list
    const newClass={
        "day": selectedDay.name,
        "start_time": selectHour.start_time,
        "end_time": selectHour.end_time,
        "salon_id": parseInt(selectSalon.id)
    };

    listClassesScheduleAsignatures.push(newClass);
    console.log(listClassesScheduleAsignatures);

    // Clear selection after adding
    selectedDay.selectedIndex=-1;
    selectHour.selectedIndex=-1;
    selectSalon.selectedIndex=-1;
}

// ------------- CREATE ASIGNATURE --------------------------

const createAsignature = async () => {
    const codeAsignature = document.getElementById('codeAsignatureInput').value;
    const courseAsignatureId = parseInt(document.getElementById('search-courses-results').value);
    const creditsAsignature = parseInt(document.getElementById('creditsAsignatureInput').value);
    const teacherAsignatureId = parseInt(document.getElementById('search-teachers-results').value);
    const availableQuotasAsignature = parseInt(document.getElementById('availableQuotasAsignatureInput').value);
    const programAsignatureId = parseInt(document.getElementById('search-programs-results').value);

    if (!codeAsignature || !courseAsignatureId || !creditsAsignature || !teacherAsignatureId || !availableQuotasAsignature || !programAsignatureId || listClassesScheduleAsignatures.length === 0) {
        alert("Por favor, complete todos los campos requeridos");
        return;
    }

    const newAsignature = {
        "id": asignaturesList.length + 1,
        "course_id": courseAsignatureId,
        "code": codeAsignature,
        "credits": creditsAsignature,
        "teacher_id": teacherAsignatureId,
        "program_id": programAsignatureId,
        "class_schedule": listClassesScheduleAsignatures
    };

    await saveJson("asignatures", newAsignature, "ASIGNATURE");
    await loadJson("asignatures", asignaturesList, "ASIGNATURES");

    document.getElementById('codeAsignatureInput').value = '';
    document.getElementById('search-courses-results').value = '';
    document.getElementById('creditsAsignatureInput').value = '';
    document.getElementById('search-teachers-results').value = '';
    document.getElementById('availableQuotasAsignatureInput').value = '';
    document.getElementById('search-programs-results').value = '';
    listClassesScheduleAsignatures.length = 0;

    alert("Asignatura creada exitosamente");
}


// ------------- SHOW LIST OF ASIGNATURES --------------------------

const showListAsignatures = async () => {
    await loadJson("asignatures", asignaturesList, "ASIGNATURES");
    const listAsignatures = document.getElementById("show-info");

    const ul = document.createElement('ul');

    for (const asignature of asignaturesList) {
        const li = document.createElement('li');
        let classScheduleText = "class schedule: ";
        
        if (asignature.class_schedule.length > 0) {

            const schedules = asignature.class_schedule.map(schedule => {
                return `Day: ${schedule.day}, Start Time: ${schedule.start_time}, End Time: ${schedule.end_time}, Salon ID: ${schedule.salon_id}--------`;
            });
            classScheduleText += schedules.join('; '); // Unir los horarios con un punto y coma
        } else {
            classScheduleText += "No class schedule available";
        }

        li.textContent = `
            id: ${asignature.id}, course'id: ${asignature.course_id}, code: ${asignature.code},
            credits: ${asignature.credits}, teacher'id: ${asignature.teacher_id},
            available quotas: ${asignature.available_quotas}, program'id: ${asignature.program_id},
            ${classScheduleText}
        `;

        ul.appendChild(li);
    }

    listAsignatures.innerHTML = '';
    listAsignatures.appendChild(ul);
}
