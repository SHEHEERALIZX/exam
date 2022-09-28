import newRooms from "./rooms_property.cjs";
import { jsPDF } from "jspdf";



const doc = new jsPDF();


    // lines properties and length
    let lineStartHorizontal = 5;
    let lineLengthHorizontal = 90;


    doc.setLineWidth(0.5)



    let start = 5
    let index = 0


    let initialLine = 0


    newRooms.forEach((obj) => {
        start = start + 5

        initialLine += 5
        // index = index +1
        index++
        // doc.line(20, 20, 60, 20); // horizontal line
        doc.line(lineStartHorizontal, initialLine, lineLengthHorizontal, initialLine); // horizontal line
        doc.text(String(index), 10, start,)
        doc.text(String(obj.room_name), 25, start)
        // doc.text(obj.room_id, 65, start,)
        // doc.text(String(obj.bench_id), 140, start,)
        // doc.text(String(obj.courseCode), 160, start,)

        // doc.text(String(""),140,start+30)


        // doc.text(String(obj.),90,start)


    })

    doc.line(lineStartHorizontal, initialLine + 5, lineLengthHorizontal, initialLine + 5); // horizontal line

    doc.line(5, 5, 5, initialLine + 5) // First Line Vertical line
    doc.line(20, 5, 20, initialLine + 5) // Line after index no vertical line
    doc.line(90, 5, 90, initialLine + 5) // Line after username vertical line
    // doc.line(135, 5, 135, initialLine + 5) // Line after username vertical line
    // doc.line(155, 5, 155, initialLine + 5) // Line after benchID vertical line
    // doc.line(180, 5, 180, initialLine + 5) // End Line Vertical line




    // doc.text("Hello world!", 10, 10);
    doc.save(`room.pdf`);