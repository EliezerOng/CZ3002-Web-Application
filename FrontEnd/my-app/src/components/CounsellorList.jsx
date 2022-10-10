import React from "react";

import data from "../data";
import Counsellor from "./Counsellor";

export default function CounsellorList() {
  const dataElements = data.map((data) => <Counsellor {...data} />);
  return <div className="counsellor-list">{dataElements}</div>;
}
