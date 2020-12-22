const User = require('../../domain/User');

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
    const userObj = User.deleteObjectCommonColumn(user.toObject());
    const sql = 'insert into users set ?';
    return new Promise((resolve, reject) => {
      this.connection.query(sql, userObj, (err, result) => {
        return err ? reject(err.message) : resolve(result.id);
      });
    });
  }

  update(user) {
    const userObj = User.deleteObjectCommonColumn(user.toObject());
    delete userObj.id;

    const sql = 'update users set ? where ?';
    return new Promise((resolve, reject) => {
      this.connection.query(sql, [userObj, {id: user.id}], (err, result) => {
        return err ? reject(err.message) : resolve(result);
      });
    });
  }

  delete(id) {
    const sql = 'delete from users where ?';
    return new Promise((resolve, reject) => {
      this.connection.query(sql, {id: id}, (err, result) => {
        return err ? reject(err.message) : resolve(result);
      });
    });
  }
}

module.exports = UserRepository;
