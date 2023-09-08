const {MongoClient} = require('mongodb');
const client=new MongoClient('mongodb://127.0.0.1:27017');
async function main()
{
    await client.connect();
    console.log('server connected');
    const db=client.db("makeskilled");
    console.log('database selected');
    const collection=db.collection('teamdetails');
    console.log('collection selected')
    const result1=await collection.updateMany({"Name":"Jyotsnika"},{$set:{"Grade":"S"}});
    const result=await collection.find({}).toArray();
    console.log(result);

    return result;

}

module.exports={
    main
}