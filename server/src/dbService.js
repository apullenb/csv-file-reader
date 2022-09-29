const services = {
    
    insertData(knex, newData) {
        return knex
          .insert(newData)
          .into('data')
          .returning('*')
          .then(rows => {
            return rows;
          });
      },

}

module.exports = services;