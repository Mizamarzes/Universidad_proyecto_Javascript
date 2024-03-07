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
                <div class="mb-3">
                    <input type="text" class="form-control" id="search-courses-input" placeholder="Search Courses...">
                </div>
                <div class="mb-3">
                    <select id="search-courses-results">

                    </select>
                </div>    
            </div>

            <div class="mb-3">
                <label for="searchTeachersInputLabel" class="form-label">Select Teacher:</label>
                <input type="text" class="form-control" id="search-teachers-input" placeholder="Search Teachers...">
                <select id="search-teachers-results">
                
                </select>
            </div>

            <div class="mb-3">
                <label for="searchProgramsInputLabel" class="form-label">Select Program:</label>
                <input type="text" class="form-control" id="search-programs-input" placeholder="Search Programs...">
                <select id="search-programs-results">
                
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
                <div class="mb-5 mt-3" id="listItemsScheduleAsignature">
                </div>
            </div>

            <button type="button" class="btn btn-primary" onclick="createAsignature()">Create Asignature</button>
            <button type="button" class="btn btn-danger" onclick="showListAsignatures()">Show List of Asignatures</button>
        </form>

    `;

    // SEARCH ENGINE FOR COURSERS 
    searchElementsList("search-courses-input", "search-courses-results", coursesList, "Courses");
    // SEARCH ENGINE FOR TEACHERS 
    searchElementsList("search-teachers-input", "search-teachers-results", teachersList, "Teachers")
    // SEARCH ENGINE FOR PROGRAMS 
    searchElementsList("search-programs-input", "search-programs-results", programsList, "Programs")
}

// ------------- ADD ITEM, ASIGNATURES --------------------------

const addScheduleAsignatures = () => {
    const daySelect = document.getElementById('selectedDayScheduleAsignature').value;
    const hourSelect = document.getElementById('selectedHoursScheduleAsignature').value;
    const salonSelect = document.getElementById('selectedSalonScheduleAsignature').value;

    const listItems = document.getElementById('listItemsScheduleAsignature');

    if (!daySelect || !hourSelect || !salonSelect) {
        alert("Please, select a day, an hour, and a salon");
        return;
    }

    const selectedSalon = salonsList.find(salon => salon.id === salonSelect);
    const nameSalonSchedule = selectedSalon.identification_number;

    // looking for start and end time of the schedule
    const selectedSchedule = schedulesList.find(schedule => schedule.id === parseInt(hourSelect));
    const startTimeSchedule = selectedSchedule.start_time;
    const endTimeSchedule = selectedSchedule.end_time;

    const li = document.createElement('li');
    li.textContent = `
        Day: ${daySelect} - Salon: ${nameSalonSchedule} - Start Time: ${startTimeSchedule} - End Time: ${endTimeSchedule}
    `;
    listItems.appendChild(li);

    document.getElementById('selectedDayScheduleAsignature').value = "";
    document.getElementById('selectedHoursScheduleAsignature').value = "";
    document.getElementById('selectedSalonScheduleAsignature').value = "";
}

// ------------- CREATE ASIGNATURE --------------------------

const createAsignature=()=>{
    
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
