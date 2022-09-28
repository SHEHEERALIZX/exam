let seats = [
 { bench_id: 'A1', room_name: '104', regno: null, priority: 'P1' },
  { bench_id: 'A2', room_name: '104', regno: null, priority: 'P4' },
  { bench_id: 'A3', room_name: '104', regno: null, priority: 'P1' },
  { bench_id: 'A4', room_name: '104', regno: null, priority: 'P4' },
  { bench_id: 'A5', room_name: '104', regno: null, priority: 'P3' },

 
]


let student = [

  { name: 'ADARSH R G', regno: '123445' },
  { name: 'SHEHEER', regno: '566156' },
  { name: 'Afsal', regno: '5656666' },
  { name: 'Rahul', regno: '1323233' },
  { name: 'Prajith', regno: '2266666' },

]


seats[0].name = student[0].name
seats[0].regno = student[0].regno



console.log(seats);

student.forEach((ele,index)=>{
    seats[index].name = ele.name
    seats[index].regno = ele.regno

})


console.log(seats);



