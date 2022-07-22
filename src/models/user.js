const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User',{
    name:{
        type: String,
        required: true,
        trim:true
    }, 
    email:{
        type:String,
        required: true,
        trim: true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('email is invalid')
            }
        }
    },

    age:{
        type: Number,
        default:0,
        validate(value){
            if(value<0){
                throw new Error('age must be positive number')
            }
        }
    },
    password:{
        type:String,
        required:true,
        minlength:7,
        trim: true,
        validate(value){
            if(value.toLowerCase().includes('password')){
               throw new Error(chalk.green.bgRed('Error password invalid'))
            }
        }
    }
   
})
// const me = new User({
//     name:'  Mickey  ',
//     email:'WIZNAIR@gmail.com',
//     password:'hello123456',
//     age:24
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log('Error',error)
// })

module.exports = User