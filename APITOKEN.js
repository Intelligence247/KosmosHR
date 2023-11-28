export let DataFromAdminLogin = [];
const AdminDataFunction2 = () => {
  const AdminDataString = localStorage.getItem("AdminData");
  if (AdminDataString) {
    const AdminData = JSON.parse(AdminDataString);
    DataFromAdminLogin = AdminData;
    return AdminData;
  }
};

export let DataFromEmployeeLogin = [];
export const EmployeeDataFunction = () => {
  const EmployeeLoginDataString = localStorage.getItem("EmployeeLoginData");
  if (EmployeeLoginDataString != undefined) {
    const EmployeeLoginData = JSON.parse(EmployeeLoginDataString);
    DataFromEmployeeLogin = EmployeeLoginData;
    return EmployeeLoginData;
  }
};

EmployeeDataFunction();
AdminDataFunction2();
