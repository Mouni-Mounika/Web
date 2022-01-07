import React, {useState} from "react"; 
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import LectureInputComp from './LectureInputComp.js';
import LectureDisplayComp from './LectureDisplayComp';


function App() {
  const [lectureArr, updateLectureArr] = useState([]);
  console.log(lectureArr);
  function addNewLecture (event)
  {
    updateLectureArr([...lectureArr, 
      { id: uuidv4(), lectureName: "",
      lectureState: "EDIT", 
      articleStatus: false, 
      article:{text:"", state: "edit"}}]);
  }
  const onSaveLecture = (lectureObj) =>{
    const lectureArrClone = [...lectureArr];
    let index = lectureArrClone.findIndex(obj => obj.id === lectureObj.id);
    lectureArrClone[index] = lectureObj;
    updateLectureArr(lectureArrClone);
   console.log(lectureArr);
  }

  const onRemoveLecture = (lectureObj) =>{
   const lectureArrClone = [...lectureArr];
   let index = lectureArrClone.findIndex(obj => obj.id === lectureObj.id)
   lectureArrClone.splice(index, 1);
   updateLectureArr(lectureArrClone);
   console.log(lectureArr);
  } 
 
  return (
      <div className ="curriculum" >
        <div className = "addButton" >
        <input type = "button" id = "addNewLecture" onClick={addNewLecture} value = "ADD" ></input>
        </div>
        <div>
        {lectureArr.map((lectureObj, index) =>{
          if(lectureObj.lectureState === "EDIT")
          {
            return (<LectureInputComp key = {lectureObj.id} lectureObj = {lectureObj} lecNum = {index + 1}  
          onSave = {onSaveLecture} onRemoveLec = {onRemoveLecture} />);
          }
          else
          {
            return (<LectureDisplayComp  key = {lectureObj.id} lectureObj = {lectureObj} lecNum = {index + 1} 
           onSave = {onSaveLecture}  onRemoveLec = {onRemoveLecture}/>); 
          }
          })
        }
        </div>
      </div>    
  );
}
export default App;