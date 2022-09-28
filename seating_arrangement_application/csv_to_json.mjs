const csvFilePath = 'list.csv'
import csv from 'csvtojson'



const totalStudents = await csv().fromFile(csvFilePath)

const modifiedData = totalStudents.filter((obj, index) => {
    delete obj.inst
    return obj.type !== 'S'
})


// console.log(modifiedData);

// module.exports = totalStudents;

export default totalStudents;