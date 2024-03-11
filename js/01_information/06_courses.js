const coursesList=[];

// ------------- SHOW LIST OF COURSES --------------------------

const loadStructureCourses=()=>{
    const textCourses = document.getElementById('show-info');
    textCourses.innerHTML=`
        <div class="container">
            <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Code</th>
                        <th>Chair guide</th>
                    </tr>
                </thead>
                <tbody id="coursesTableBody">
                    
                </tbody>
            </table>
        </div>
    `;
    showListInTable("courses", coursesList, "coursesTableBody", fieldsCourses);
}
