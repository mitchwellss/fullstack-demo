const db = require('./client')



//get all candy

async function getAllCandy(){
    const {rows} = await db.query('SELECT * FROM candy')
    
    return rows
}


module.exports = {getAllCandy}