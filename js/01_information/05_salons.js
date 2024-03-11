const salonsList=[];

// ------------- SHOW LIST OF SALONS --------------------------

const loadStructureSalons=()=>{
    const textSalons = document.getElementById('show-info');
    textSalons.innerHTML=`
        <div class="container">
            <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Student Capacity</th>
                        <th>Building</th>
                        <th>Floor</th>
                        <th>Identification Number</th>
                    </tr>
                </thead>
                <tbody id="salonsTableBody">
                    
                </tbody>
            </table>
        </div>
    `;
    showListInTable("salons", salonsList, "salonsTableBody", fieldsSalons);
}