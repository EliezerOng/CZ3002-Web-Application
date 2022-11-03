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

  function togglePopup(name, address, languages, description, image) {
    setIsOpen(!isOpen);
    setNewPost([]);
    setDisplay({
      name: name,
      address: address,
      languages: languages,
      description: description,
      image: image,
    });
  }
  // const togglePopup = () => {
  //   setIsOpen(!isOpen);
  //   setNewPost([]);
  // };

  // to update title
  function handleNewPost(event) {
    const { name, value } = event.target;
    // var coords = geocode(name);
    setNewPost((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(newPost);
  }

  const dataElements = data.map((data) => (
    <Counsellor {...data} handleClick={togglePopup} />
  ));
  return (
    <div className="counsellor-list">
      {dataElements}
      {isOpen && (
        <BookAppt
          className="createPost"
          info={newPost}
          handleClose={togglePopup}
          handleChange={handleNewPost}
          display={display}
        />
      )}
    </div>
  );
}
