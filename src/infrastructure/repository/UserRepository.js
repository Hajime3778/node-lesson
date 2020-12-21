class UserRepository{
  constructor(connection) {
    this.connection = connection;
  }
  
  getAll() {
    const sql = 'select * from users';
    return new Promise((resolve, reject) => {
      this.connection.query(sql, (err, results) => {
        return err ? reject(err.message) : resolve(results);
      });
    });
  }
  
}

module.exports = UserRepository;
