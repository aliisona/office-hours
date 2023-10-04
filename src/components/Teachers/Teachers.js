
import TeacherComp from "./TeacherComp";

function Teachers() {


return (
    <div className = 'h-screen flex flex-col justify-center items-center'>
      
      <TeacherComp name="Michael Liva" info="Physics teacher for engineering students." likes = "20" dislikes = "5" id = "1" times = {["9:00 AM", "12:00 PM", "3:00 PM"]}/>
      <TeacherComp name="William Mendelohn" info="IB Language and Literature" likes = "34" dislikes = "8" id = "2" times = {["9:00 AM", "12:00 PM", "3:00 PM"]}/>
      <TeacherComp name="Emily Pagano" info="AP Government. Yearbook mentor." likes = "23" dislikes = "1" id = "3" times = {["9:00 AM", "12:00 PM", "3:00 PM"]}/>
      <TeacherComp name="Igor Zubov" info="Physics teacher" likes = "15" dislikes = "2" id = "4" times = {["9:00 AM", "12:00 PM", "3:00 PM"]}/>
      <TeacherComp name="Luke Miller" info="Government and lacrosse." likes = "28" dislikes = "3" id = "5" times = {["9:00 AM", "12:00 PM", "3:00 PM"]}/>

    </div>
  )
}
export default Teachers;