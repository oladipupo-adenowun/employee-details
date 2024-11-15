const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    //... More employee records can be added here
  ];

  function displayEmployees(){
    //using string template literal
    const totalEmployeeHTML = employees.map((employee,index)=>`<p>${employee.id}: ${employee.name} - ${employee.age} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployeeHTML;
  }

  function calculateTotalSalaries(){
    const totalSalaries = employees.reduce((total,employee)=>total+employee.salary, 0);
    document.getElementById('employeesDetails').innerHTML = `<p><strong>Total Salaries:</strong> $${totalSalaries}</p>`;
  }

  function displayHREmployees(){
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeeHTML = hrEmployees.map((employee,index)=>`<p>${employee.id}: ${employee.name} - ${employee.age} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeeHTML;
  }

  function findEmployeeById(employeeId){
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if(foundEmployee){
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.age} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }else{
        document.getElementById('employeesDetails').innerHTML = `No employee with id ${employeeId}`;
    }
  }