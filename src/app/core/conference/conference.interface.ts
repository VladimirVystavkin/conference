export interface ConferenceDTO{
  id : string
  title : string
  date : string
  address : string
}
export interface IConference{

  get id() : string
  set id(address : string)

  get title() : string
  set title(address : string)

  get address() : string
  set address(address : string)

  get date() : Date
  set date(address : Date)
  pullDataFromConferenceDTO(conferenceDTO : ConferenceDTO) : void
  generateConferenceDTO() : ConferenceDTO

}

export class Conference implements IConference{
  _id ?: string
  _title ?: string
  _date ?: Date
  _address ?: string

  constructor() {


  }


  get id(): string {
    return "";
  }

  get address(): string {
    return this._address ? this._address : "";
  }

  get date(): Date {
    return this._date ? this._date : new Date();
  }

  get title(): string {
    return this._title ? this._title : "";
  }

  set id(address ){
    this._id = address
  }

  set title(title){
    this._title = title
  }

  set date(date){
    this._date = date
  }

  set address(address){
    this._address = address
  }

  generateConferenceDTO(): ConferenceDTO {
    return {
      id : this.id
      ,title : this.title
      , address : this.address
      ,date : this.date.toDateString()
    };
  }



  pullDataFromConferenceDTO(conferenceDTO: ConferenceDTO): void {
    this.id = conferenceDTO.id
    this.title = conferenceDTO.title
    this.address = conferenceDTO.address
    this.date = new Date(conferenceDTO.date)
  }

}


