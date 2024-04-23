import React from "react";
import { useState, useContext, useEffect } from "react";
import styles from "./EmployeeInfo.module.css"
import {locationContext } from "../App";
import Header from '../components/Header/Header';
import AccountInfoBox2 from "../components/AccountInfoBox2/AccountInfoBox2";
import Footer from "../components/Footer/Footer";
import { gql, useQuery } from '@apollo/client';

const FETCH_EMPLOYEE_QUERY= gql`
query {
    getEmployees {
        id
        firstName
        lastName
        email
        password
        type
        location
    }
  }
`

export default function EmployeeInfo() {
    const {loading, error, data, refetch} = useQuery(FETCH_EMPLOYEE_QUERY);    
    //const {loading, error, data} = useQuery(FETCH_USERS_QUERY);
    const [location, setLocation] = useContext(locationContext);
    const [allEmployees, setAllEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState([]);

    const employeeInfo = ["First Name", "Last Name", "Place of Employment", "Email"];
    const allInfo = ["First Name", "Last Name", "Place of Employment", "Email", "Password"];
    
    function reload(truth){
        if(truth === false){
            refetch();
        }
            
    }
    useEffect(() => {
        const tempEmployees = [];
        refetch();
            if(data && data.getEmployees){
                for (let i = 0; i < data.getEmployees.length; i++) {
                    if (data.getEmployees[i].location === location){
                        tempEmployees.push({
                            firstName: data.getEmployees[i].firstName,
                            lastName: data.getEmployees[i].lastName,
                            placeOfEmployment: data.getEmployees[i].location,
                            email: data.getEmployees[i].email
                        });
                    }
                    
                }
            }
        // Update the state of allEmployees with the accumulated employees
        setAllEmployees(tempEmployees);
    }, [data]);

    function getAllEmployees() {
        return allEmployees;
    }

    function handleSelectedEmployee(index) {
        setSelectedEmployee(e => e = allEmployees[index]);
    }

    function getEmployeeInformation() {
        if (selectedEmployee.length === 0){
            return ["", "", location, ""];
        }
        else {
            let employeeInfo = [];
            for (var key in selectedEmployee) {
                employeeInfo.push(selectedEmployee[key]);
            }
            return employeeInfo;
        }
    }

    function emptyInfoBox() {
        setSelectedEmployee(e => e = []);
    }

    return(
        <>
            <Header/>
            <div id={styles.content}>
                <div id={styles.sideBar}>
                    <div id={styles.label} onClick={emptyInfoBox}>Employees || {location}, FL</div>
                    {getAllEmployees().map((employee, index) => (
                        <div key={index} className={styles.employeeTabs} onClick={() => handleSelectedEmployee(index)}> 
                            {employee.firstName} {employee.lastName}
                        </div>
                    ))}
                </div>
                {selectedEmployee.length === 0 ? <AccountInfoBox2 infoCategories={allInfo} information={getEmployeeInformation()} disabledFields={[]} use="Create New" reload={reload}/>
                : <AccountInfoBox2 infoCategories={employeeInfo} information={getEmployeeInformation()} disabledFields={["First Name", "Last Name", "Email"]} reload={reload}/>
                }
            </div>
            <Footer/>
        </>
    );
}