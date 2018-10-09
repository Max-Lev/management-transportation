export default class EmployeeRegistrationService {

    // persistant user state between routes
    
    stateModel = {
        name: '',
        employeeSelectedStatus: []
    };

    setState({ ...state }) {
        this.stateModel = { ...state }
    };

};