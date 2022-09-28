import SeatsinPriorityOrder from "./individual_seat.mjs";
import { jsPDF } from "jspdf";


console.table(SeatsinPriorityOrder[0]);


const doc = new jsPDF();


    // lines properties and length
    let lineStartHorizontal = 5;
    let lineLengthHorizontal = 200;


    doc.setLineWidth(0.5)



    let start = 5
    let index = 0


    let initialLine = 0

    let row = 0


    SeatsinPriorityOrder.forEach((obj) => {
        start = start + 5

        initialLine += 5
        // index = index +1
        index++
        // doc.line(20, 20, 60, 20); // horizontal line
        doc.line(lineStartHorizontal, initialLine, lineLengthHorizontal, initialLine); // horizontal line
        doc.text(String(index), 10, start,)
        doc.text(String(obj.room_name), 25, start)
        doc.text(obj.name, 85, start,)
        doc.text(String(obj.courseCode), 170, start,)
        // doc.text(String(obj.courseCode), 160, start,)

        // doc.text(String(""),140,start+30)


        // doc.text(String(obj.),90,start)
        row++

        if(row==58){
            row=0
            doc.addPage();
             start = 5
        
            //  doc.line(5, 5, 5, initialLine + 5) // First Line Vertical line
            //  doc.line(20, 5, 20, initialLine + 5) // Line after index no vertical line
            //  doc.line(90, 5, 90, initialLine + 5)
        
            initialLine = 0

        }


    })

    doc.line(lineStartHorizontal, initialLine + 5, lineLengthHorizontal, initialLine + 5); // horizontal line

    // doc.line(5, 5, 5, initialLine + 5) // First Line Vertical line
    // doc.line(20, 5, 20, initialLine + 5) // Line after index no vertical line
    // doc.line(90, 5, 90, initialLine + 5) // Line after username vertical line
    // // doc.line(135, 5, 135, initialLine + 5) // Line after username vertical line
    // doc.line(155, 5, 155, initialLine + 5) // Line after benchID vertical line
    // doc.line(180, 5, 180, initialLine + 5) // End Line Vertical line




    // doc.text("Hello world!", 10, 10);
    doc.save(`total_students.pdf`);