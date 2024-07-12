export class Employee {
  _id: string;
  firstName: string;
  lastName: string;
  relationship: string;
  dob: string;
  ssn: number;
  memberid: number;
  status: string;

  constructor(_id,firstName,lastName,relationship,dob,ssn,memeberid,status){
    this._id=_id;
    this.firstName=firstName;
    this.lastName=lastName;
    this.relationship=relationship;
    this.dob=dob;
    this.ssn=ssn;
    this.memberid=memeberid;
    this.status= status
  }
}
