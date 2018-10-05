export default class EmployeeRegistrationService {

    constructor() {

    };

    stateModel = {
        name: '',
        employeeSelectedStatus: []
    };

    setState({ ...state }) {
        this.stateModel = { ...state }
    };

};