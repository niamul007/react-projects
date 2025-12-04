import EMPLOYEE_DATA from "./singleData.js";


let active = true;
const generateEngineeringAlphaAverage = (data) => {
    
    // --- Your chained solution goes here ---
    // Start with the filters:
    const alphaEngineers = data;
    const department = alphaEngineers.filter(item=> item.department === "Engineering")
    // console.log(department)
        // Filter 2: Activity
    const activeWorker = alphaEngineers.filter(item => item.isActive === active);
    console.log(activeWorker)
        // Filter 3: Project (Nesting)
        const alpha = data.filter(item => item.projects.includes("Alpha"))
        console.log(alpha)
        // Map: Isolate Salary
        
        // Reduce: Sum the salaries

    // Calculate the final average here (Sum / Count)
    
    return;
};
generateEngineeringAlphaAverage(EMPLOYEE_DATA)