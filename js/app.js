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
})