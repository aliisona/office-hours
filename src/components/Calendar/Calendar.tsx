import {FC, useEffect, useState} from 'react' 
import ReactCalendar from 'react-calendar'
import React from 'react'
import './Calendar.css'
import axios from "axios";


interface indexProps {}

interface DateType{
    justDate: Date | null
    dateTime: Date | null
}

export const EARLIEST_TIME = 9
export const LATEST_TIME = 17
export const INTERVAL = 30

const Calendar: FC<indexProps> = ({}) => {
    
    const [date, setDate] = useState<DateType>( {
        justDate: null,
        dateTime: null,
    })

    const [teacherID, setTeacherID] = useState('0');
    const getTeacherID = async () => {
        const {data} = await axios.get(`http://localhost:3001/api/teacherID/`);
        setTeacherID(data)
    }

    getTeacherID()

    const [teacherName, setTeacherName] = useState("");

    const getTeacherName = async () => {
      const {data} = await axios.get(`http://localhost:3001/api/teacherName/${teacherID}`);    
      setTeacherName(data)
      
    }
    getTeacherName()

    const [times, setTeacherAvail] = useState([]);

    const getTeacherAvail = async () => {
        const {data} = await axios.get(`http://localhost:3001/api/teacherAvail/${teacherID}`);    
        setTeacherAvail(data)

    }


    //send created times list to backend, send back in forth

    const book = async (time: String) => {
        try {
            let data = JSON.stringify({
                time: time
            });
            
            console.log("send times called");
            await axios.post(`http://localhost:3001/api/book/${teacherID}/${time}`, data, {headers:{"Content-Type" : "application/json"}});
            console.log("POST request for times sent");
        } catch (error) {
            console.log("error found");
            console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
        }
    
    }

    getTeacherAvail()
    

    return (<div className = 'h-screen flex flex-col justify-center items-center'> 
        <div className = 'p-6 flex flex-col justify-center items-center'> 
        <h1 className = 'font-semibold'> Selecting meeting times for {teacherName}: </h1>
        <p> If you do not see a name, please go to the teacher's tab and select a teacher. </p>
        </div>
        { date.justDate ? 
            <div className = 'flex gap-4'> 
                {times.map((time, i) => (
                    <div key={`time-${i}`} className = 'rounded-sm bg-gray-100 p-2'> 
                        <button className = 'p5 flex flex-col' type='button'  
                            onClick ={ 
                                () => { 
                                    book(time)
                                    console.log(times)  
                                }
                                }> 
                            {
                            <p> {time} </p>
                            }
                        </button>
                    </div>
                    
            
                ))}
                
            </div> 
            
            : 
            
            (<ReactCalendar 
            minDate= {new Date()} 
            className = 'REACT-CALENDAR p-2' 
            view='month' 
            onClickDay={
                (date) => setDate((prev) => ({...prev, justDate:date}))

            }
            />)
        }
        
    </div>)
}

export default Calendar