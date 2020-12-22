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

  get(id) {
    const sql = 'select * from users where ?';
    return new Promise((resolve, reject) => {
      this.connection.query(sql, {id: id}, (err, results) => {
        return err ? reject(err.message) : resolve(results[0]);
      });
    });
  }

  create(user) {
    const userObj = user.toObject();
    const sql = 'insert into users ?';
    return new Promise((resolve, reject) => {
      this.connection.query(sql, userObj, (err, result) => {
        return err ? reject(err.message) : resolve(result.id);
      });
    });
  }

  update(user) {
    console.log(user);
    // const userObj = user.toObject();
    // const sql = 'insert into users ?';
    // return new Promise((resolve, reject) => {
    //   this.connection.query(sql, userObj, (err, result) => {
    //     return err ? reject(err.message) : resolve(result.id);
    //   });
    // });
  }

  delete(id) {
    const sql = 'delete from users where ?';
    return new Promise((resolve, reject) => {
      this.connection.query(sql, {id: id}, (err, results) => {
        return err ? reject(err.message) : resolve(results);
      });
    });
  }
}

module.exports = UserRepository;
