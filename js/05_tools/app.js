document.addEventListener('DOMContentLoaded',async()=>{
    
    // PERIODS
    await loadJson("periods", periodsList, "PERIODS");
    
    // PROGRAMS
    await loadJson("programs", programsList, "PROGRAMS");

    // TARIFFS
    await loadJson("tariffs", tariffsList, "TARIFFS");
    
    // DEPARTMENTS
    await loadJson("departments", departmentsList, "DEPARTMENTS");

    // SALONS
    await loadJson("salons", salonsList, "SALONS");

    // COURSES
    await loadJson("courses", coursesList, "COURSES");

    // STUDENTS
    await loadJson("students", studentsList, "STUDENTS");
    
    // TEACHERS
    await loadJson("teachers", teachersList, "TEACHERS");

    // ASIGNATURES
    await loadJson("asignatures", asignaturesList, "ASIGNATURES");

    // MATRICULATES
    await loadJson("matriculates", matriculatesList, "MATRICULATES");



    //------ SCHEDULE ZONE---------

    // days
    await loadJson("days", daysList, "DAYS");

    // schedules
    await loadJson("schedules", schedulesList, "SCHEDULES");

    //------ HOME DESIGN ---------

    loadHome();
    

})