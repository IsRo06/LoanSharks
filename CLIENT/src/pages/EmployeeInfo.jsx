import React from "react";
import { useState, useContext, useEffect } from "react";
import styles from "./EmployeeInfo.module.css"
import { locationContext } from "../App";
import Header from '../components/Header/Header';
import AccountInfoBox from "../components/AccountInfoBox/AccountInfoBox";
import Footer from "../components/Footer/Footer";

export default function EmployeeInfo() {
    const [location, setLocation] = useContext(locationContext);

    const [allEmployees, setAllEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState([]);

    const employeeInfo = ["First Name", "Last Name", "Place of Employment", "Email"];
    const allInfo = ["First Name", "Last Name", "Place of Employment", "Email", "Password"];

    useEffect(() => {
        setAllEmployees(e => e = [
            {firstName: "Joe",
                lastName: "Brown",
                placeOfEmployment: "Gainesville",
                email: "joebrown@lse.com"
            },
            {firstName: "Molly",
                lastName: "Smith",
                placeOfEmployment: "Gainesville",
                email: "mollysmith@lse.com"
            },
            {firstName: "Carter",
                lastName: "McKnight",
                placeOfEmployment: "Gainesville",
                email: "cartermcknight@lse.com"
            },
            {firstName: "Riya",
                lastName: "Nicholas",
                placeOfEmployment: "Gainesville",
                email: "riyanicholas@lse.com"
            },
            {firstName: "Tom",
                lastName: "Nelson",
                placeOfEmployment: "Gainesville",
                email: "tomnelson@lse.com"
            },
            {firstName: "Patty",
                lastName: "Clair",
                placeOfEmployment: "Gainesville",
                email: "pattyclair@lse.com"
            },
            {firstName: "Brenda",
                lastName: "Williams",
                placeOfEmployment: "Gainesville",
                email: "brendawillams@lse.com"
            }
        ])
    }, []);

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
                {selectedEmployee.length === 0 ? <AccountInfoBox infoCategories={allInfo} information={getEmployeeInformation()} disabledFields={[]} use="Create New"/>
                : <AccountInfoBox infoCategories={employeeInfo} information={getEmployeeInformation()} disabledFields={["First Name", "Last Name", "Email"]}/>
                }
            </div>
            <Footer/>
        </>
    );
}
