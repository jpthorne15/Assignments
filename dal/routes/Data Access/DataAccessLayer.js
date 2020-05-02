  
const { MongoClient, ObjectId } = require('mongodb');
const uri = process.env.MONGO_URL;

const getConnectedClient = async () => {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    return await client.connect()
}

const getAllImages =async () =>{
    const client = await getConnectedClient()
    const collection = client.db("Landscape").collection("ThornePG")
    const data = await collection.find().toArray()
    console.log ('getAllImages',getAllImages)
    await client.close();
    return data
}

const getImage =async (imageId) =>{
    const client = await getConnectedClient()
    const collection = client.db("Landscape").collection("ThornePG")
    const foundImageArray = await collection.find({_id: ObjecctId(imageId)}).toArray()
    const foundImage = foundImageArray[0]
    console.log ('foundImage',foundImage)
    client.close();
    return foundImage
}

const createNewImage = async (imageToCreate)=>{
    const images =  client.db("Landscape").collection("ThornePG")
    await images.insertOne (imageToCreate)
    console.log ('createNewImage')
    client.close();
    return imageToCreate
}




