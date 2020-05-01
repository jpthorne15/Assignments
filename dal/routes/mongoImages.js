//CREATE
const imagesDataAccess = require('../DataAccess/CustomersDataAccess')
const callCreate = async () => {
 const newImage = {
 residence: "Thorne",
 conditionBeforeModification: "Yes",
 Modified: "No",
 Image: "",
 imageDescription: "090801-4 Appx Looking E from SW Prop Corner",
 }
 try {
 const createdCustomer = await customersDataAccess.createNewCustomer(newCustomer)
 console.log(createdCustomer)
 } catch (err) {
 console.log(err)
 }
}
callCreate()



//READ
router.get('/',async (req,res)=>{
    const allImages = await imagesDataAccess.getAllImages()
    res.send(allImages)
})

//SPECIFIC ITEMS
//READ
router.get('/',async (req,res)=>{
    const id=req.params.id
    const foundImage = await imagesDataAccess.getImage(id)

    res.send (foundImage)
})

//UPDATE
router.put('/:id', (req,res)=>{
    const updatedImage=req.body

    const imageIndex = customers.reduce((targetIndex, customer, currentIndex)=>{
        return image.id === updatedImage.id ? currentIndex : targetIndex
    }, -1)

    if (imageIndex=== -1) {
        res.sendStatus (404)
    }
     images [imageIndex]=updatedImage
     res.sendStatus (204)
})
//PATCH
router.patch('/:id',(req,res)=>res.send('Updated single image by id via PATCH'))

//DELETE
router.delete('/id', (req,res) =>res.send ('Delete single customer by id'))

module.exports = router