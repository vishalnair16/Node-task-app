//CRUD Operation

// const mongodb= require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID


const { MongoClient,ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName ='task-manager'

const id = new ObjectID()
console.log(id.s)


MongoClient.connect(connectionURL,{    useNewUrlParser:true
},(error,client)=>{
    if(error){
        return console.log('Unable to connect to database')
    }
    //console.log('Connected correctly')
    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name:'Vishal',
    //     age:24
    // },(error,result)=>{
    //     if(error){
    //         return console.log('unable to insert user')
    //     }console.log(result)
    // })

    //INSERTION

    // db.collection('users').insertMany([
    //     {
    //     name:'ben',
    //     age:21
    //     },{
    //         name:'gunther',
    //         age:26
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         console.log('notdone')
    //     }console.log('Done'+result.ops)

    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description:"clean room",
    //         completed:true
    //     },
    //     {
    //         description:"Renew inspection",
    //         completed:false
    //     },{
    //         description:"plants",
    //         completed:true
    //     }
    // ]),(error,result)=>{
    //     if(error){
    //         return console.log('Eroor');
    //     }
    //     console.log(result.ops)
    // }

    //Read Data

    // db.collection('users').findOne({
    //     _id: new ObjectID("62d5291ddbe2ed1c64fc7729")
    // },(error,result)=>{
    //     if(error){
    //         return console.log('Unable to find')
    //     }console.log(result)
    // })

    // db.collection('users').find({ age:21}).toArray((error,result)=>{
    //     console.log(result)
    // })
    // db.collection('users').find({ age:21}).count((error,result)=>{
    //     console.log(result)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID("62d52f36a008cb2f706a20ae")},
    // (error,task)=>{
    //     console.log(task)
    // })
    // db.collection('tasks').find({completed:true}).toArray((error,task)=>{
    //     console.log(task)
    // })


    //Updating Data

    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID('62d5291ddbe2ed1c64fc7729')
    // },{
    //     $inc:{
    //         age:1
    //     }
    // })

    // updatePromise.then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })


    //Update Many

    // db.collection('tasks').updateMany({
    //      completed: true
    //     },{
    //         $set:{

    //             completed:false
    //         }
    //     }).then((result)=>{
    //         console.log(result.modifiedCount)
    //     }).catch((error)=>{
    //         console.log(error)
    //     })


    //Delete ManyOption

    // db.collection('users').deleteMany({
    //     age:25
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })
    

    db.collection('tasks').deleteOne({
        description:"clean room"
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
})
