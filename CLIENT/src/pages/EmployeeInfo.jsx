import React from "react";
import { useState, useContext, useEffect } from "react";
import styles from "./EmployeeInfo.module.css"
import { userContext, locationContext } from "../App";
import Header from '../components/Header/Header';
import AccountInfoBox from "../components/AccountInfoBox/AccountInfoBox";
import Footer from "../components/Footer/Footer";

export default function EmployeeInfo() {
    const [userType, setUserType] = useContext(userContext);
    const [location, setLocation] = useContext(locationContext);

    const [allEmployees, setAllEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState([]);

    const defaultInfo = ["First Name", "Last Name", "Email", "Password", "Verify Password"];
    const employeeInfo = ["First Name", "Last Name", "Place of Employment", "Email"];

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

    function handleSelectedEmployee(email) {
        console.log(email);
        for (var i = 0; i < allEmployees.length; i++) {
            if (allEmployees[i].email === email) {
                setSelectedEmployee(e => e = allEmployees[i]);
                break;
            }
        }
    }

    function getEmployeeInformation() {
        let employeeInfo = [];
        for (var key in selectedEmployee) {
            employeeInfo.push(selectedEmployee[key]);
        }

        return employeeInfo;
    }

    return(
        <>
            <Header/>
            <div id={styles.content}>
                <div id={styles.sideBar}>
                    <div id={styles.label}>Employees || {location}, FL</div>
                    {getAllEmployees().map((employee) => (
                        <div key={employee.firstName} className={styles.employeeTabs} onClick={() => handleSelectedEmployee(employee.email)}> 
                            {employee.firstName} {employee.lastName}
                        </div>
                    ))}
                </div>
                <AccountInfoBox infoCategories={userType === "None"? defaultInfo : employeeInfo} information={getEmployeeInformation()}/>
            </div>
            <Footer/>
        </>
    );
}
