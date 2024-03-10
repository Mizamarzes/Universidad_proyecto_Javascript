// ------------- LOAD TEXT ENROLLMENT --------------------------

const loadTextFavoriteAsignature = ()=>{
    const textAsignatures = document.getElementById('show-info');
    const mostEnrolledAsignature = findMostEnrolledAsignature(matriculatesList, asignaturesList);
    textAsignatures.innerHTML=`
        <div class="mb-3">
            <h1> Most Enrolled Asignature </h1>
        
            <div class="mb-3">
                <h2> The most enrolled subject is: ${mostEnrolledAsignature}</h2>
            </div>

            <div class="mb-3">
                <button type="button" class="btn btn-danger" onclick="showListAsignatures()">Show List of Asignatures</button>
            </div>
        </div>
    `;
    
}

// ------------- FIND THE MOST ENROLLED ASIGNATURE --------------------------


const findMostEnrolledAsignature = (matriculates, asignatures) => {
    const asignatureCounts = {};
    for (const matriculate of matriculates) {
        const asignatureId = matriculate.asignature_id;
        if (asignatureCounts[asignatureId]) {
            asignatureCounts[asignatureId]++;
        } else {
            asignatureCounts[asignatureId] = 1;
        }
    }
    
    let maxEnrollments = 0;
    let mostEnrolledAsignatureId = null;
    for (const asignatureId in asignatureCounts) {
        if (asignatureCounts[asignatureId] > maxEnrollments) {
            maxEnrollments = asignatureCounts[asignatureId];
            mostEnrolledAsignatureId = asignatureId;
        }
    }
    
    const mostEnrolledAsignature = asignatures.find(asignature => asignature.id === mostEnrolledAsignatureId);
    if (mostEnrolledAsignature) {
        return mostEnrolledAsignature.code;
    } else {
        return "No asignature found";
    }
};

