const departmentsList=[];

// ------------- SHOW LIST OF DEPARTMENTS --------------------------

const loadStructureDepartments=()=>{
    const textDepartments = document.getElementById('show-info');
    textDepartments.innerHTML=`
        <div class="container">
            <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody id="departmentsTableBody">
                    
                </tbody>
            </table>
        </div>
    `;
    showListInTable("departments", departmentsList, "departmentsTableBody", fieldsDepartments);
}
