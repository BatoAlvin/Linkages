import dbConnect from '../../lib/mongodb'
dbConnect()

export default async (req,res)=>{
    res.json({test: 'it has worked'})
}