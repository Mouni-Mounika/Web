import React, {useState, useEffect} from "react"; 

function LectureInputComp(props) {
  const [lectureObj, updateLecture] = useState(props.lectureObj);
  useEffect(()=> {
    if(lectureObj.lectureState === "DISPLAY")
    {
      props.onSave(lectureObj);
    }
  });
  function updateLectureName(event){
    const lecture = {...lectureObj,...{lectureName:event.target.value}};
    updateLecture(lecture);
  }
  const handleOnRemoveLec = (event) =>{
    props.onRemoveLec(lectureObj);
  }
  const handleOnSaveLec = (event) =>{
    const lecture = {...lectureObj,...{lectureState:"DISPLAY"}};
    lectureObj.lectureState="DISPLAY";
    updateLecture(lecture);
  }
    return (
      <div id="addNewLecture">
            <label>Lecture {props.lecNum}: </label>
            <input type = "text" onChange={updateLectureName} maxLength = {80} 
            placeholder = "Enter Lecture name" value = {lectureObj.lectureName} />
            <br></br>
            <button onClick = {handleOnRemoveLec}>Remove</button>
            <button onClick ={handleOnSaveLec}>Save Lecture</button>
      </div> 
    );
  }
  
  export default LectureInputComp;