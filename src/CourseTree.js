import React from "react";
import "./CourseTree.scss";
import { classes } from "./utils";

const formatConditional = (name) => (name === 'or' ? 'one of' : 'all of');

const Tree = ({ data }) => {

  if (data.length !== 0) {
    if (Array.isArray(data)) {
      return (
        <ul className={"prereq-tree"}>
          <li className={"branch"}>
            <div className={classes("node", "conditional")}>
              {formatConditional(data[0])}
            </div>
            <ul className={"prereq-tree"}>
              {data.slice(1).map((item, index) => {
                return (
                  <li key={index} className={"branch"}>
                    <Tree data={item} />
                  </li>
                );
              })}
            </ul>
          </li>
        </ul> 
      );
    } else {
        return (
          <div className={classes("node", "prereq-node")}>
            {data["id"]}
          </div>
        );
    }
  } else {
    return (
      <div className={classes("node", "prereq-node")}>
        No prereqs
      </div>
    )
  }
}

export const CourseTree = ({ course, prereqData, postreqData }) => {
  return (
    <>
      <div className={"container"}>
        {postreqData && (
          postreqData.length > 0 ? (
            <>
              <ul className={"prereq-tree"}>
                {postreqData.map((postreq) => (
                  <li key={postreq} className={classes("branch", "prereq-branch")}>
                    <div className={classes("node", "postreq-node")}>{postreq}</div>
                  </li>
                ))
          }
              </ul>
              <div className={classes("node", "conditional")}>needs</div>
            </>
          ) : (
            <ul className={"prereq-tree"}>
              <li className={classes("branch", "prereq-branch")}>
                <div className={classes("node", "postreq-node")}>No postreqs</div>
              </li>
            </ul>
          )
        )}
        <ul className={classes("tree", "root")}>
          <li className={"branch"}>
            <div className={classes("node", "course-node")}>
              {course}
            </div> 
            {prereqData && (<Tree data={prereqData} />)}
          </li>
        </ul>
      </div>
    </>
  );
};