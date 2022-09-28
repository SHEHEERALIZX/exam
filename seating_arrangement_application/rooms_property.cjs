const rooms =[
    {
        room_id:1,
        room_name:"101",
        active:true,
        priority:null,
        benches:[
            {
                bench_id:'A',
                capacity:6,
            },
            {
                bench_id:'B',
                capacity:6,
            },
            {
                bench_id:'C',
                capacity:6,
            },
            {
                bench_id:'D',
                capacity:6,
            },

        ]
    },
    {
        room_id:2,
        room_name:"102",
        active:true,
        priority:null,
        benches:[
            {
                bench_id:'A',
                capacity:6,
            },
            {
                bench_id:'B',
                capacity:6,
            },
            {
                bench_id:'C',
                capacity:6,
            },
            {
                bench_id:'D',
                capacity:6,
            },

        ]
        
        
    
    },


    {
        room_id:3,
        room_name:"103",
        active:true,
        priority:null,
        benches:[
            {
                bench_id:'A',
                capacity:6,
            },
            {
                bench_id:'B',
                capacity:6,
            },
            {
                bench_id:'C',
                capacity:6,
            },
            {
                bench_id:'D',
                capacity:6,
            },

        ]
    },
     {
        room_id:3,
        room_name:"104",
        active:true,
        priority:null,
        benches:[
            {
                bench_id:'A',
                capacity:6,
            },
            {
                bench_id:'B',
                capacity:6,
            },
            {
                bench_id:'C',
                capacity:6,
            },
            {
                bench_id:'D',
                capacity:6,
            },

        ]

    }, 
    {
        room_id:4,
        room_name:"105",
        active:true,
        priority:null,
        benches:[
            {
                bench_id:'A',
                capacity:6,
            },
            {
                bench_id:'B',
                capacity:6,
            },
            {
                bench_id:'C',
                capacity:6,
            },
            {
                bench_id:'D',
                capacity:6,
            },

        ]

    }, 
    {
        room_id:5,
        room_name:"106",
        active:true,
        priority:null,
        benches:[
            {
                bench_id:'A',
                capacity:6,
            },
            {
                bench_id:'B',
                capacity:6,
            },
            {
                bench_id:'C',
                capacity:6,
            },
            {
                bench_id:'D',
                capacity:6,
            },

        ]

        
    },
     {
        room_id:6,
        room_name:"107",
        active:true,
        priority:null,
        benches:[
            {
                bench_id:'A',
                capacity:6,
            },
            {
                bench_id:'B',
                capacity:6,
            },
            {
                bench_id:'C',
                capacity:6,
            },
            {
                bench_id:'D',
                capacity:6,
            },

        ]

    },
    {
        room_id:7,
        room_name:"CHE NEW",
        active:true,
        priority:null,
        benches:[
            {
                bench_id:'A',
                capacity:6,
            },
            {
                bench_id:'B',
                capacity:6,
            },
            {
                bench_id:'C',
                capacity:6,
            },
            {
                bench_id:'D',
                capacity:6,
            },

        ]

    },
    {
        room_id:8,
        room_name:"NEW LIBRARY",
        active:true,
        priority:null,
        benches:[
            {
                bench_id:'A',
                capacity:10,
            },
            {
                bench_id:'B',
                capacity:10,
            },
            {
                bench_id:'C',
                capacity:10,
            },
            {
                bench_id:'D',
                capacity:10,
            },
            {
                bench_id:'E',
                capacity:10,
            },
            {
                bench_id:'F',
                capacity:10,
            },

        ]

    },
    {
        room_id:9,
        room_name:"805",
        active:true,
        priority:null,
        benches:[
            {
                bench_id:'A',
                capacity:6,
            },
            {
                bench_id:'B',
                capacity:6,
            },
            {
                bench_id:'C',
                capacity:6,
            },
            {
                bench_id:'D',
                capacity:6,
            },
           
        ]

    },
    {
        room_id:10,
        room_name:"MECHANICAL ROOM",
        active:true,
        priority:null,
        benches:[
            {
                bench_id:'A',
                capacity:6,
            },
            {
                bench_id:'B',
                capacity:6,
            },
            {
                bench_id:'C',
                capacity:6,
            },
            {
                bench_id:'D',
                capacity:6,
            },
           
        ]

    },
    {
        room_id:11,
        room_name:"CF LAB ROOM",
        active:true,
        priority:null,
        benches:[
            {
                bench_id:'A',
                capacity:6,
            },
            {
                bench_id:'B',
                capacity:6,
            },
            {
                bench_id:'C',
                capacity:6,
            },
            {
                bench_id:'D',
                capacity:6,
            },
           
        ]

    },
   





]


// let counter = 0

// const newRooms = rooms.filter((element,index)=>{
//     if(element.active){
//         counter++
//         element.priority = counter 
//         return element.active!==false
//     } 
// })



console.table(rooms);


module.exports = rooms;