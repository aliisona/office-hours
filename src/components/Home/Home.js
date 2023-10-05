import axios from "axios";
import React, {useEffect, useState} from "react";

export default function Home() {

  const [meetings, setMeetings] = useState([])

  const getScheduledMeetings = async () => {
    const {data} = await axios.get(`http://localhost:3001/api/meetings/`);
    setMeetings(data)
  }

  const clearMeetings = async (time) => {
    try {
        console.log("CLEARING MEETINGS (post request");
        await axios.post(`http://localhost:3001/api/clearMeetings/`, "", {headers:{"Content-Type" : "application/json"}});

    } catch (error) {
        console.log("error found");
        console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
    }

}

useEffect(() => { //get requested once
  getScheduledMeetings()
}, []); 


  return (
  <div className = 'h-screen flex flex-col items-center'> 
      <h1 className = 'p-6 font-semibold'> Your schedule </h1>
      <div>       
        <p>  To schedule a meeting, go to the teacher's tab and select a teacher. Then, go to the calendar tab to view their schedule. </p>
        <button className = 'p5 flex flex-col rounded-sm bg-gray-100 p-2' type='button' 
                            onClick ={ 
                                () => { 
                                  clearMeetings()
                                  getScheduledMeetings()
                                  window.location.reload(true);
                                }
                                }> 
                            {
                            <p> CLEAR MEETINGS </p>
                            }
                      </button>
      </div>
      <div>  
        {/* show meetings by sending request*/}
        {meetings.map((meet, i) => (
                    <div key={`meeting-${i}`} className = 'rounded-sm bg-gray-100 p-2'> 
                        <button className = 'p5 flex flex-col' type='button'  
                            onClick ={ 
                                () => { 
                                    window.open('https://us05web.zoom.us/j/6569129000?pwd=aJ8Ml986RcXEso6kn4GYoXWsRzd05l.1')
                                    console.log(meet)  
                                }
                                }> 
                            {
                            <p> {meet} </p>
                            }
                        </button>
                    </div>
            
        ))}
      </div>
      
  </div>
  )
}