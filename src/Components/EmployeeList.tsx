import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { IEmployee } from "./Employee.type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  list: IEmployee[];
};

const EmployeeList = (props: Props) => {
  const { list } = props;
  return (
    <div>
      <table className="border border-black border-2 w-[100%] ">
        <tr>
          <th className="border border-black border-2 ">Name</th>
          <th className="border border-black border-2">Age</th>
          <th className="border border-black border-2 ">Gender</th>
          <th className="border border-black border-2 ">Nationality</th>
          <th className="border border-black border-2 ">Berth Preference</th>
          <th className="border border-black border-2 ">Edit</th>
          <th className="border border-black border-2 ">Delete</th>
        </tr>

        {list.map((employee) => {
          console.log(employee);
          return (
            <tr key={employee.id} className="">
              <td className="border border-black border-2 ">{`${employee.firstName} ${employee.lastName}`}</td>
              <td className="border border-black border-2 ">{`${employee.age}`}</td>
              <td className="border border-black border-2 ">{`${employee.gender}`}</td>
              <td className="border border-black border-2 ">{`${employee.nationality}`}</td>
              <td className="border border-black border-2 ">{`${employee.berth_preference}`}</td>
              <td className="border border-black border-2 ">
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  style={{ color: "#4da1ac" }}
                />
              </td>
              <td className="border border-black border-2 ">
                <FontAwesomeIcon
                  icon={faTrashCan}
                  style={{ color: "#4da1ac" }}
                />
              </td>
            </tr>
          );
        })}

        {/* <tr>
          <td className="border border-black border-2 ">
            Centro comercial Moctezuma
          </td>
          <td className="border border-black border-2 ">Francisco Chang</td>
          <td className="border border-black border-2 ">Mexico</td>
        </tr> */}
      </table>
    </div>
  );
};

export default EmployeeList;
