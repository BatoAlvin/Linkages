import { clientPromise } from '../../lib/mongodb'


export default async (req, res) => {
    const client = await clientPromise
    const { fieldvalue } = req.query
    const database = client.db('nextjs');
    const userdb = await database.collection('prof')
      .find({ "<field>": `${ fieldvalue }` })
      .project({ "_id": 0 })
      .toArray();
  res.json(userdb)
}
// export default async function handler(req,res){
//     const client = await clientPromise
//     const data = await client.collection('prof').find({}).toArray()
//     console.log(data)
//     res.json(data)
// }