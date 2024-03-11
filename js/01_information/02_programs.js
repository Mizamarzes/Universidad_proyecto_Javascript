const programsList=[];

// ------------- CREATE STRUCTURE PROGRAMS --------------------------

const loadStructurePrograms=()=>{
    const textPrograms = document.getElementById('show-info');
    textPrograms.innerHTML=`
        <div class="container">
            <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name of Program</th>
                        <th>Level</th>
                    </tr>
                </thead>
                <tbody id="programTableBody">
                    
                </tbody>
            </table>
        </div>
    `;
    showListInTable("programs", programsList, "programTableBody", fieldsPrograms)
}

