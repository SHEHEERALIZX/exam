import totalStudents from "./csv_to_json.mjs";
const examsList = ['s1','s2','s3','s4','s5','s6','s7','s8','s9','s10']



let codesArray = []




totalStudents.forEach((item)=>{

    let count = 0 ;

    let TotalCount = 0;


    examsList.forEach((val)=>{

        

        if(item[val]!=''){
            count++
            codesArray.push(item[val])
    
        }

        if(item[val]===''){
            item[val] = null
        }

    })

    item['totalcount'] = count;

})


codesArray = [...new Set(codesArray)];




// console.table(totalStudents);


// console.table(codesArray.sort());


let aboveSixthousand = codesArray.filter((ele)=>{
    return ele>=4000 && ele<5000
})


console.table(aboveSixthousand.sort());



