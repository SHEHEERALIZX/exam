
import { jsPDF } from "jspdf";


var doc = new jsPDF();


let lineStartHorizontal = 5;
let lineLengthHorizontal = 180;


doc.setLineWidth(0.5);

doc.line(lineStartHorizontal, 20, lineLengthHorizontal, 20); // horizontal line
doc.line(lineStartHorizontal, 25, lineLengthHorizontal, 25); // horizontal line
doc.line(lineStartHorizontal, 30, lineLengthHorizontal, 30); // horizontal line
doc.line(lineStartHorizontal, 35, lineLengthHorizontal, 35); // horizontal line

doc.line(5, 20, 5, 35)
doc.line(120, 20, 120, 35)

// doc.line(180, 20, 5, 35)
doc.line(180, 20, 180, 35)







doc.save('Test.pdf');


