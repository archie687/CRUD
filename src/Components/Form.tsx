import React, { useId, useRef } from "react";
import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';
import type { Dayjs } from 'dayjs';
export default function App() {
    const inputRef = useRef<HTMLInputElement>(null);
    const ageInputId = useId();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //   alert('A name was submitted: ' + inputRef.current.value);
      event.preventDefault();
    };
    
    const onChange: DatePickerProps<Dayjs[]>['onChange'] = (date: any, dateString: any) => {
        console.log(date, dateString);
      };

    return (
      <form onSubmit={handleSubmit} className="m-[20px]">
        <label className="flex flex-col mt-[5px] ">
          Name:
          <input type="text" ref={inputRef}  className="w-[20%]"/>
          Age: 
          <input id={ageInputId} name="age" type="number" className="w-[20%]"/>
          Gender:
          <label>
          <input type="radio" name="myRadio" value="option1" />
          Female
        </label>
        <label>
          <input type="radio" name="myRadio" value="option2" />
          Male
        </label>
        <label>
          <input type="radio" name="myRadio" value="option3" />
          Other
        </label>
        <label htmlFor="" className="mt-[5px]">
        Nationality:
        <input type="text" ref={inputRef}  />
        </label>
        <label htmlFor="">
            Berth Preference: <input type="checkbox" name="myCheckbox" />

        </label>
        Date: 
        <DatePicker className="w-[10%]" onChange={onChange} needConfirm />
        </label>
        <button type="submit" className="block mt-[10px] outline pl-[0.5rem] pr-[0.5rem]" >
          Submit
        </button>
      </form>
    );
  }
  