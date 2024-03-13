const db = require('./client')

async function dropTables(){ 

  await db.query(`DROP TABLE IF EXISTS candy`)

}

async function createTables(){ 
  await db.query(`
    CREATE TABLE candy (
      id SERIAL PRIMARY KEY,
      name TEXT,
      description TEXT,
      "imageUrl" TEXT,
      price DECIMAL
    )

  `)
}



async function addCandy(){ 
  await db.query(`INSERT INTO candy(name, description, "imageUrl", price)
  VALUES ( 'Mars Bar','The original', 'https://upload.wikimedia.org/wikipedia/commons/d/de/Mars.png',  2.00),
  ( 'Twix','Double Chocolate bar!', 'https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/358088/358088',  1.50),
  ( 'Reeses','Peanut Butter Candy!', 'https://m.media-amazon.com/images/I/81wVHnihnmL._AC_UF894,1000_QL80_.jpg',  2.20)
  `)
}


async function runSeed() {

  try {
    db.connect() // connects the client to the database

    console.log('Running seed')
    await dropTables()
    console.log('Dropped Tables')

    await createTables()
    console.log('Created tables')

    await addCandy()
    console.log('Added Candy')

  } catch(err) {
    console.error(err)
  } finally {
    db.end() // close the database connection
  }
}

runSeed()