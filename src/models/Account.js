export class Account {
  constructor(data) {
    this.id = data.sub.replace('auth0|', '')
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    // TODO add additional properties if needed
  }
}