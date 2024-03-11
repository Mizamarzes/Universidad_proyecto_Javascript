const tariffsList=[];

// ------------- SHOW LIST OF TARIFFS --------------------------

const loadStructureTariffs=()=>{
    const textTariffs = document.getElementById('show-info');
    textTariffs.innerHTML=`
        <div class="container">
            <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Credit Cost</th>
                        <th>Period'Id</th>
                        <th>Program'Id</th>
                    </tr>
                </thead>
                <tbody id="tariffsTableBody">
                    
                </tbody>
            </table>
        </div>
    `;
    showListInTable("tariffs", tariffsList, "tariffsTableBody", fieldsTariffs);
}