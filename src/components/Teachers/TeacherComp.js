import anon from '../Images/anon.png'; 
import axios from "axios";
import React, {useState} from "react";

const cardStyles = {
    container: {
      backgroundColor: "#B79D94",
      padding: 50,
      margin: 20,
      display: "flex",
      height: 170,
      width: 600,
      boxShadow: "0 0 3px 2px #cec7c759",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 20,
    },
    profilePicture: {
  
      height: 170,
      width: 370,
      borderRadius: "20%",
      padding: 20,
    },
    bio: {
      margin: 20,
      height: 100,
      width: 400,
    },
    userName: {
      fontWeight: "bold",
    },
    buttonS: {
      padding: 10,
      backgroundColor: "#4f46e5",
      borderRadius: 3,
      background: "#4f46e5",
      color: "white"
    },
    avail: {
      margin: 20,
      height: 30,
      width: 50,
    }
    
};


export default function TeacherComp(props) {
  
  const setTeacherID = async () => {
    try {
      let data = JSON.stringify({
          "id" : props.id
      });
      
      console.log("update teacher ID called")
      console.log(props.id)
      console.log(data)

          let result = await axios.post(`http://localhost:3001/api/teacherID/${props.id}`, data, {headers:{"Content-Type" : "application/json"}});
          console.log("POST request sent")

      } catch (error) {
          console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
      }
  }

    return (
        <div style = {cardStyles.container}> 

          <div>
          <img style = {cardStyles.profilePicture}
              src={anon}
              alt={props.name}
            />        
          </div>
            
          <div style={cardStyles.bio}>
            <p style={cardStyles.userName}>{props.name}</p>
            <p>♥ {props.likes}  ✖ {props.dislikes}</p>
            <p>{props.info}</p> 
          </div>

          <div>
            <a href = "http://localhost:3000/Calendar"> 
            <button style={cardStyles.buttonS} onClick={ () => {
              setTeacherID();              
            }}>
              Schedule meeting
            </button>
            </a>
          </div>

      </div>
      
    );
  }