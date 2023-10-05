
import TeacherComp from "./TeacherComp";

function Teachers() {


return (
    <div className = 'h-screen flex flex-col justify-center items-center'>
      
      <TeacherComp 
        name="Michael Liva" 
        info="Physics teacher for engineering students." 
        likes = "20" 
        dislikes = "5" 
        id = "1" 
      />

      <TeacherComp 
        name="William Mendelsohn" 
        info="IB Language and Literature" 
        likes = "34" dislikes = "8" id = "2" 
      />

      <TeacherComp 
        name="Emily Pagano" 
        info="AP Government. Yearbook mentor." 
        likes = "23" 
        dislikes = "1" 
        id = "3" 
      />

      <TeacherComp 
        name="Igor Zubov" 
        info="Physics teacher" 
        likes = "15" 
        dislikes = "2" 
        id = "4" 
      />

      <TeacherComp 
        name="Luke Miller" 
        info="Government and lacrosse." 
        likes = "28" 
        dislikes = "3" 
        id = "5" 
      />

    </div>
  )
}
export default Teachers;