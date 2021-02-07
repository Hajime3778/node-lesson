const DomainModel = require('./DomainModel');
class User extends DomainModel{
  constructor (id, name, email, description, createdAt = null, updatedAt = null) {
    super(createdAt, updatedAt);
    this.id = id;
    this.name = name;
    this.email = email;
    this.description = description;
  }

  toObject() {
    const user = {
      id: this.id,
      name: this.name,
      email: this.email,
      description: this.description,
    };
    return Object.assign(user, super.toObject());
  }
}

module.exports = User;