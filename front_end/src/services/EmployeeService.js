import axios from "axios";

const EMP_BASE_REST_API_URL='http://localhost:8080/api/v1/employees';
class EmployeeService
{
    getAllEMployees()
    {
        return axios.get(EMP_BASE_REST_API_URL)
    }
    createEmployee(employee)
    {
        return axios.post(EMP_BASE_REST_API_URL,employee);
    }
    getEMployeeById(employeeId)
    {
        return axios.get(EMP_BASE_REST_API_URL+'/'+employeeId)
    }
    updateEmployee(employeeId,employee)
    {
        return axios.put(EMP_BASE_REST_API_URL+'/'+employeeId,employee)
    }
    deleteEmployee(employeeId)
    {
        return axios.delete(EMP_BASE_REST_API_URL+'/'+employeeId)
    }
}
export default new EmployeeService();