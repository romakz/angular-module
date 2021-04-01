export class Group {
  public id: number;
  public name: string;
  public userIds: number[];


  constructor(id: number, name: string, userIds: number[]) {
    this.id = id;
    this.name = name;
    this.userIds = userIds;
  }
}
