import { useEffect, useState } from "react";
// import data from "../data";
import Counsellor from "./Counsellor";
import BookAppt from "./BookAppt";
import Axios from "axios";

export default function CounsellorList() {
  // function handleClick() {
  //   console.log("bitch");
  // }
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("http://127.0.0.1:8000/api/appointment/counsellor")
      .then((res) => {
        console.log("Getting from ::::", res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // const cards = data.map((data) => {
  //   return <PostCard key={data.pid} {...data} />;
  // });

  const [isOpen, setIsOpen] = useState(false);
  const [newPost, setNewPost] = useState([]);
  const [display, setDisplay] = useState([]);

  function togglePopup(
    name,
    address,
    languages,
    description,
    image,
    counsellorID
  ) {
    setIsOpen(!isOpen);
    setNewPost([]);
    setDisplay({
      name: name,
      address: address,
      languages: languages,
      description: description,
      image: image,
      counsellorID: counsellorID,
    });
  }
  // const togglePopup = () => {
  //   setIsOpen(!isOpen);
  //   setNewPost([]);
  // };

  const dataElements = data.map((data) => (
    <Counsellor {...data} handleClick={togglePopup} />
  ));
  return (
    <div className="counsellor-list">
      {dataElements}
      {isOpen && <BookAppt handleClose={togglePopup} display={display} />}
    </div>
  );
}
