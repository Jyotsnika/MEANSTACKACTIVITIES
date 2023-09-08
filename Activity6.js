const {MongoClient}=require('mongodb');

const client=new MongoClient('mongodb://127.0.0.1:27017')

async function main()
{
    await client.connect();
    console.log('server connected');

    const db=client.db("makeskilled");
    console.log('database selected');

    const collection=db.collection('teamdetails');
    console.log('collection selected');

    const result=await collection.updateMany({"Name":"Jyotsnika"},{$set:{"Grade":"S"}});
    console.log(result);
    
    
    return 'done';
}
main()
  .then(console.log)
  .catch(console.error)
  .finally(()=>client.close())