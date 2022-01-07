import React, {useState, useEffect} from "react"; 

function LectureDisplayComp(props) 
{
  const [lectureObj, updateLecture] = useState(props.lectureObj);
  useEffect(()=> {
    if(lectureObj.lectureState === "EDIT")
    {
      props.onSave(lectureObj);
    }
    });
    const updateLectureName = (event) =>{
    const lecture = {...lectureObj,...{lectureState: "EDIT"}};
    updateLecture(lecture);
  }
  const handleOnRemoveLec = (event) =>{
    props.onRemoveLec(lectureObj);
  }
    return (
        <div className = "lecture">
        <label>Lecture{props.lecNum}: </label> 
        <label>{lectureObj.lectureName}</label>
        <br></br>
        <button onClick = {updateLectureName}>Edit</button>
        <button onClick = {handleOnRemoveLec}>Remove</button>
        </div> 
    );
  }
  
  export default LectureDisplayComp;