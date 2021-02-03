import Vue from "vue";
import Vuex from "vuex";
//then you use Vuex
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        employees: []
    },
    getters: {
        // Fetch the employees
        getEmployee: state => {
            return state.employees;
        }
    },
    mutations: {
        LOAD_EMPLOYEES(state) {
            // Check if the employee_data exists
            if (localStorage.getItem('employee_data')) {
                let employeeList = JSON.parse(localStorage.getItem('employee_data'));
                // Replace the state object with the stored item
                state.employees = employeeList;
            }
        },
        DELETE_EMPLOYEE(state, empId) {
            let employeeData = state.employees;
            for (let i = 0; i < employeeData.length; i++) {
                if (employeeData[i].id == empId) {
                    employeeData.splice(i, 1);
                    localStorage.setItem(
                        "employee_data",
                        JSON.stringify(employeeData)
                    );
                }
            }
        },
        ADD_EMPLOYEE(state, employeeData) {
            //check storage
            let employeeDataArr;
            if (localStorage.getItem("employee_data")) {
                employeeDataArr = state.employees;
            } else {
                employeeDataArr = new Array();
            }
            employeeDataArr.unshift(employeeData);
            // save to local storage
            localStorage.setItem("employee_data", JSON.stringify(employeeDataArr));
        },
        UPDATE_EMPLOYEE(state, newData) {
            let employeeDataArr = state.employees;
            let employeeId = newData.id;
            for (let i = 0; i < employeeDataArr.length; i++) {
                if (employeeDataArr[i].id == employeeId) {
                    employeeDataArr.splice(i, 1, newData);
                    localStorage.setItem(
                        "employee_data",
                        JSON.stringify(employeeDataArr)
                    );
                }
            }
        },
    },
    actions: {
        REMOVE_EMPLOYEE({ commit }, employeeId) {
            commit('DELETE_EMPLOYEE', employeeId)
        },
        SAVE_EMPLOYEE({ commit }, employeeData) {
            commit('ADD_EMPLOYEE', employeeData)
        },
        EDIT_EMPLOYEE({ commit }, newData) {
            commit('UPDATE_EMPLOYEE', newData)
        },
    }
});