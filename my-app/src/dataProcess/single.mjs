import EMPLOYEE_DATA from "./singleData.js";


// let active = true;
// const generateEngineeringAlphaAverage = (data) => {
    
//     // --- Your chained solution goes here ---
//     // Start with the filters:
//     const alphaEngineers = data;
//     const department = alphaEngineers.filter(item=> item.department === "Engineering")
//     // console.log(department)
//         // Filter 2: Activity
//     const activeWorker = alphaEngineers.filter(item => item.isActive === active);
//     console.log(activeWorker)
//         // Filter 3: Project (Nesting)
//         const alpha = activeWorker.filter(item => item.projects.includes("Alpha"))
//         console.log(alpha)
//         // Map: Isolate Salary
//         const salery = department.map(item=> item.salary).reduce((acc,curr)=>{
//             return acc+=curr;
//         },0);
//         // Reduce: Sum the salaries
//         console.log(`Total avg salary of active worker employe : ${salery/activeWorker.length} `)

//     // Calculate the final average here (Sum / Count)
    
//     return;
// };
// generateEngineeringAlphaAverage(EMPLOYEE_DATA);

// const EMPLOYEE_DATA = [
//   // ... your full data set ...
// ];

/**
 * Calculates the average salary of employees based on flexible filtering criteria.
 * @param {Array} data - The list of employee objects.
 * @param {string} targetDept - The department to filter by (e.g., "Engineering").
 * @param {string} targetProject - The project to filter by (e.g., "Alpha").
 * @param {boolean} isActiveStatus - The active status to filter by (true or false).
 * @returns {number} The calculated average salary.
 */
const calculateAverageSalary = (
    data, 
    targetDept, 
    targetProject, 
    isActiveStatus
) => {
    
    // The filter criteria are now passed in, making the logic highly reusable!
    const targetSalaries = data
        
        // 1. FILTER: Department (using targetDept parameter)
        .filter(item => item.department === targetDept)
        
        // 2. FILTER: Activity (using isActiveStatus parameter)
        .filter(item => item.isActive === isActiveStatus)
        
        // 3. FILTER: Project (using targetProject parameter)
        .filter(item => item.projects.includes(targetProject)) 
        
        // 4. MAP: Isolate the salary for the final calculation
        .map(item => item.salary);
        
    const count = targetSalaries.length; 
    
    const totalSalarySum = targetSalaries.reduce((acc, salary) => {
        return acc + salary;
    }, 0);

    const finalAverage = count > 0 ? totalSalarySum / count : 0;
    
    // Log the result with dynamic titles
    console.log("------------------------------------------------------------------");
    console.log(`Report for: ${targetDept} / Project ${targetProject} / Active: ${isActiveStatus}`);
    console.log(`Employees Found: ${count}`);
    console.log(`Average Salary: $${finalAverage.toFixed(2).toLocaleString()}`);
    console.log("------------------------------------------------------------------");
    
    return finalAverage;
};

// --- Execution Examples ---

// 1. Your original goal: Active Engineers on Alpha project
console.log(calculateAverageSalary(EMPLOYEE_DATA, "Engineering", "Alpha", true)); 
// Expected: 127,500.00

// 2. New Goal: Average salary of INACTIVE Engineers on Alpha (Carlos Reyes only)
calculateAverageSalary(EMPLOYEE_DATA, "Engineering", "Alpha", false); 
// Expected: 95,000.00

// 3. New Goal: Active Sales team members on the Delta project (Fiona Chen only)
calculateAverageSalary(EMPLOYEE_DATA, "Sales", "Delta", true); 
// Expected: 90,000.00
