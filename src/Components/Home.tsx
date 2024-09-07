import { useState } from "react";
import "./styles.css";
import {  IEmployee } from "./Employee.type";
import EmployeeList from "./EmployeeList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Navigate, useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom"; 

const Home = () => {
  const [employeeList, setEmployeeList] = useState([]);

  const navigate = useNavigate();

  const handleIconClick = () => {
    navigate("/form");
  };
  return (
    <>
      <article className="bg-black h-[3rem] flex justify-center items-center">
        <header className="">
          <h1 className="text-white">
            Add Passenger Details
          </h1>
        </header>
      </article>

      <section className="ml-[10%] mr-[10%] mt-[15px]">
        <div className="flex gap-[1rem] p-[1rem]">
          <div>Add Passenger</div>

          <div onClick={handleIconClick}>
            <FontAwesomeIcon icon={faPlus} style={{ color: "#4da1ac" }} />
          </div>
        </div>

        <EmployeeList list={employeeList}/>
      </section>
    </>
  );
};

export default Home;
