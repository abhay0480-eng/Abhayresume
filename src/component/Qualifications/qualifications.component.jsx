import React from 'react';
import './qualifications.styles.css';
import Head from '../HeadingComponent/heading.component';
import Content from '../ContentComponent/content.component';

function Qualification(){
    return(
        <div>
        <Head heading="Qualifications"/>
        <Content content="Bachelor Of Technology (B.tech) in Computer Science from Modi Institute of Technology, Kota affiliated to  Rajasthan Technical University, Kota. (2014-2018 Batch)."/>
   <div className="table">
       <table className="qualiTable">
           <tr>
               <th>Degree/Exam</th>
               <th>Board/University</th>
               <th>Institute/School</th>
               <th>Score</th>
           </tr>
           <tr>
               <td>B.tech</td>
               <td>RTU</td>
               <td>Modi Institute Of Technology</td>
               <td>71%</td>
           </tr>
           <tr>
               <td>12th</td>
               <td>CBSE</td>
               <td>Zakir Hussain Model Sr. Sec. School</td>
               <td>59%</td>
           </tr>

           <tr>
               <td>10th</td>
               <td>CBSE</td>
               <td>Heritage International School</td>
               <td>65%</td>
           </tr>
       </table>
   </div>
   </div>

    )
}

export default Qualification;