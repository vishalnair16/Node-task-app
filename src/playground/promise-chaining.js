
const Task = require('../models/task')
// const User = require('../models/user')
require('../db/mongoose')


// Task.findByIdAndDelete('62d635df3e5371345c2fce9b').then((task)=>{
//     console.log(task)

//     return Task.countDocuments({completed:false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })


// const updateAgeAndCount = async(id,age)=>{
//     const user = await User.findByIdAndUpdate(id,{age})
//     const count = await User.countDocuments({age})
//     return count
// }

// updateAgeAndCount('62da3134190c0815dc964efa',28).then((count)=>{

//     console.log(count)
// }).catch((e)=>{
//     console.log(e)
// })

const deleteTaskAndCount = async(id)=>{
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:false})

    return count
}

deleteTaskAndCount('62d635df3e5371345c2fce9b').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})