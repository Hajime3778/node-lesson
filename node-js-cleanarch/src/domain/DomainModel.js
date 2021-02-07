class DomainModel {
  constructor (createdAt = null, updatedAt = null) {
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  toObject() {
    const obj = {};

    if(this.createdAt != null) {
      obj.created_at = this.createdAt;
    }
    if(this.updatedAt != null) {
      obj.updated_at = this.updatedAt;
    }

    return obj;
  }

  static deleteObjectCommonColumn(obj){
    delete obj.created_at;
    delete obj.updated_at;

    return obj;
  }
}

module.exports = DomainModel;