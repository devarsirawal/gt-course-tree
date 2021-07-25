import React, { useState, useEffect } from "react";
import { getData } from "./hooks";
import { CourseTree } from './CourseTree';
import Select from 'react-select';

import "./ReqContainer.css"


const prereqFilePath = "data/prereqs.json";
const postreqFilePath = "data/postreqs.json";


export const ReqContainer = () => {
  const [prereqs, setPrereqs] = useState([]);
  const [postreqs, setPostreqs] = useState([]);
  const [selectData, setSelectData] = useState([]);
  const [course, setCourse] = useState("");

  const selectDataWrapper = (data) => {
    setSelectData(Object.keys(data).map((val) => (
      {
        value: val,
        label: val
      }
    )));
  };

  useEffect(() => {
    getData(prereqFilePath, setPrereqs);
    getData(postreqFilePath, setPostreqs);
    getData(prereqFilePath, selectDataWrapper);
  }, []);

  return (
    <div className={"content"}>
      <Select className="react-select-container" classNamePrefix="react-select" options={selectData} onChange={(val, _) => setCourse(val["value"])}/>
      <div className={"visualization"}>
        {
          course ? (
            <CourseTree course={course} prereqData={prereqs[course]} postreqData={postreqs[course]} />
          ) : (
            <p className={"welcome-msg"}>Welcome! Choose a class to view its course tree!</p>
          )
        }
      </div>
    </div>
  );
};