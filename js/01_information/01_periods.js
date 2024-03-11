const periodsList=[];

// ------------- CREATE STRUCTURE PERIODS --------------------------

const loadStructurePeriods=()=>{
    const textPeriods = document.getElementById('show-info');
    textPeriods.innerHTML=`
        <div class="container">
            <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Code</th>
                        <th>Year</th>
                        <th>Semester</th>
                    </tr>
                </thead>
                <tbody id="periodTableBody">
                    
                </tbody>
            </table>
        </div>
    `;
    showListInTable("periods", periodsList, "periodTableBody", fieldsPeriods);
}



