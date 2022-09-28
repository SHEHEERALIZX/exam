import  newRooms from "./rooms_property.cjs";

import todayExamsStudentList from './today_exams.mjs'



const activeRooms = newRooms.filter((ele,index)=>{

   return ele.active

})




let examsList = [4022,4032,4151,4212]

let totalCapactity = 0

let individualSeatID = []

activeRooms.forEach((ele)=>{


    ele.benches.forEach((item)=>{
        item['room_name'] = ele.room_name

        totalCapactity = totalCapactity + item.capacity

        for(let i=1;i<=item.capacity;i++){

            let priorityID 

           if(item.bench_id==='A' || item.bench_id =='C' ){

                if(i%2===0){
                    priorityID = 'P4'
                } else {
                    priorityID = 'P1'
                }

           } else {

                if(i%2===0){
                    priorityID = 'P2'
                } else {
                    priorityID = 'P3'
                }

           }

            individualSeatID.push({
                bench_id : item.bench_id+i,
                room_name:item.room_name,
                regno:null,
                priority:priorityID


            })
        }



    })

        
})

console.log("Total Capacity of all classes : "+totalCapactity);

// console.table(typeof(individualSeatID));


const studentList = todayExamsStudentList(examsList)

let allStudents = []

studentList.forEach((course)=>{
    allStudents.push(...course)
})

// console.table(allStudents);



// export default individualSeatID




let priority = ['P1','P2','P3','P4']


let SeatsinPriorityOrder = []


priority.forEach((id)=>{


    let newArray = individualSeatID.filter((ele)=>{

        return ele.priority === id

    })


    SeatsinPriorityOrder.push(...newArray)

})




// individualSeatID = []







// totalStudents.sort((a, b) => parseFloat(a.regno) - parseFloat(b.regno));

// // console.table(totalStudents);

let flag = false

if(SeatsinPriorityOrder.length<allStudents.length){
    console.log("Insufficient ClassRooms");
} else {

    flag = true

    allStudents.forEach((ele,index)=>{
        SeatsinPriorityOrder[index].regno = ele.regno,
        SeatsinPriorityOrder[index].name = ele.name,
        SeatsinPriorityOrder[index].semester = ele.semester,
        SeatsinPriorityOrder[index].type = ele.type,
        SeatsinPriorityOrder[index].courseCode = ele.courseCode
    })
}

// console.table(individualSeatID);


if(flag===true){
     SeatsinPriorityOrder = SeatsinPriorityOrder.filter((ele)=>{
        return ele.regno!==null
    })

    
    // console.table(newArray);

}

export default SeatsinPriorityOrder






