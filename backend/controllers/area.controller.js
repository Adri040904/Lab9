import Area from '../models/Area.js';

export const createArea = async(req,res)=>{
    const newArea = new Area(req.body)
    await newArea.save();
    res.json({"message":"Save Area successfully"})
}
export const getAreas =async (req,res)=>{
    const area = await Area.find()
    res.json(area)
}

export const getArea = async (req,res)=>{
    const area = await Area.findById(req.params._id)
    console.log(req.params._id)
    res.json(area)
}

export const deleteArea = async(req,res)=>{
    await Area.findByIdAndDelete(req.params._id)
    res.json({"Message":"Deleted Area Successfully"})
}

export const updateArea = async (req,res)=>{
    await Area.findByIdAndUpdate(req.params._id,req.body)
    res.send({"Message":"Update Area Successfully"})
}