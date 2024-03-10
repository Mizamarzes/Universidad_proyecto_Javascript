// ------------- LOAD TEXT ENROLLMENT --------------------------

const loadTextMaxMatriculates = ()=>{
    const textMatriculates = document.getElementById('show-info');
    const totalRevenue = calculateTotalRevenue(matriculatesList)
    textMatriculates.innerHTML=`
        <div class="mb-3">
            <h1> Total Enrollment </h1>
        
            <div class="mb-3">
                <h2> Total Revenue: $${totalRevenue}</h2>
            </div>

            <div class="mb-3">
                <button type="button" class="btn btn-danger" onclick="showListMatriculates()">Show List of Matriculates</button>
            </div>
        </div>
    `;
    
}

// ------------- CALCULATE TOTAL REVENUE --------------------------

const calculateTotalRevenue = (matriculates) => {
    let totalRevenue = 0;
    for (const matriculate of matriculates) {
        totalRevenue += matriculate.price;
    }
    return totalRevenue;
};

