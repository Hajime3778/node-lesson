class DomainModel {
  constructor (createdAt = null, updatedAt = null) {
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  toObject() {
    return {
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}

module.exports = DomainModel;