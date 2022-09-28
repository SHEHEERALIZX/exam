
import totalStudents from "./csv_to_json.mjs";

import exam_col_name_list from "./exam_col_name_list.mjs";


const examsList = exam_col_name_list;




export default function Hello() {


    console.log(totalStudents);


    totalStudents.sort((a, b) => parseFloat(a.regno) - parseFloat(b.regno));

    console.table(totalStudents);


    totalStudents.forEach(()=>{
        
    })





}


Hello()

