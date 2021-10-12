const connection = require('../database/connection.js')

module.exports ={
  async create(request,response){
    const {codigo,
           description,
           address} = request.body
           
    const [id] = await connection('produtos').insert({
      codigo,
      description,
      address
    })
    return response.json({id})
  },
  
  async search(request,response){
    const {codigo,description}=request.body
    const address = await connection("produtos").where('codigo','like',`%${codigo}%`).select('address')
    return response.json(address)
  },
  
  async index(request,response){
    const index = await connection("produtos").select('*')
    return response.json(index)
  },
  
  async delete(request,response){
    const {codigo}=request.body
    
    try {
      const codigoProd = await connection('produtos')
      .where('codigo',codigo)
      .select('codigo')
      .first()
   
    await connection("produtos")
    .where('codigo',codigoProd.codigo)
    .delete()
    
    return response.json(codigoProd.codigo)
    
    } catch (e) {
      return response.status(401).json({erro:"product not found"})
      
    }
  
  },
  
  async update(request,response){
    const {codigo} = request.body
    const {description,address}=request.body
    
    try {
      const codigoProd = await connection('produtos')
      .where('codigo',codigo)
      .select('codigo','description','address')
      .first()
      
   if(!codigoProd){
    return response.status(491).json({err:`o codigo:${codigo} not found`})
     
   }
    const updateProd= await connection("produtos")
    .where('codigo',codigo)
    .update({
      description,
      address})
    
    return response.json(codigoProd)
    
    } catch (e) {
      return response.status(401).json({erro:"product not found"})
      
    }
  
  },
  

}