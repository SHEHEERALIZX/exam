
import studentList from "./csv_to_json.mjs";
import exam_col_name_list from "./exam_col_name_list.mjs";

const colList = exam_col_name_list


var BreakException = {};


export default function (todayExamList) {


        // let indexCounter = 0

        // let counter = 0

        // todayExamList = [4151, 4022]

        // console.log(todayExamList);

        let todayExamsExtractedCodeWise = []


        todayExamList.forEach(courseCode => {

                let SingleCourseCode = []

                studentList.forEach((obj) => {

                        try {

                                Object.keys(obj).forEach((key) => {
                                        // counter++
                                        if (obj[key] == courseCode) {
                                                let studObj = {
                                                        name: obj.name,
                                                        regno: parseInt(obj.regno),
                                                        // customIndex: indexCounter++,
                                                        courseCode: parseInt(courseCode),
                                                        type: obj.type,
                                                        semester: parseInt(obj.sem)
                                                }

                                                SingleCourseCode.push(studObj)

                                                throw BreakException

                                        }
                                })

                        } catch (e) {
                                if (e !== BreakException) throw e;

                        }

                })



                SingleCourseCode.sort((a, b) => parseFloat(a.regno) - parseFloat(b.regno));
                todayExamsExtractedCodeWise.push(SingleCourseCode)




        });



        // console.table(todayExamsExtractedCodeWise[0]);
        // console.table(todayExamsExtractedCodeWise[1]);

        // console.log(counter);

        return todayExamsExtractedCodeWise




}








// Sort in Ascending Order Function 
// totalStudents.sort((a, b) => parseFloat(a.regno) - parseFloat(b.regno));



