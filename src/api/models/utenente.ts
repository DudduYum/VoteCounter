export default class Utenente {
  constructor(
    private _name: String,
    private _surName: String,
    private _nickname: String,
    private _email: String,
    private _password: String,
  ) {
  }

  get password(): String {
    return this._password;
  }

  set password(value: String) {
    this._password = value;
  }

  get email(): String {
    return this._email;
  }

  set email(value: String) {
    this._email = value;
  }

  get nickname(): String {
    return this._nickname;
  }

  set nickname(value: String) {
    this._nickname = value;
  }

  get surName(): String {
    return this._surName;
  }

  set surName(value: String) {
    this._surName = value;
  }

  get name(): String {
    return this._name;
  }

  set name(value: String) {
    this._name = value;
  }

}
