export interface GeoCoordinateDTO {
  latitude: number
  longitude: number
}

export interface ConferenceDTO {
  id: string
  title: string
  date: string
  address: string
  country: string
  geoCoordinate: GeoCoordinateDTO
}

export interface IConference {

  get id(): string

  set id(address: string)

  get title(): string

  set title(address: string)

  get address(): string

  set address(address: string)

  get country(): string

  set country(country: string)

  get date(): Date

  set date(address: Date)

  get geoCoordinate(): GeoCoordinateDTO

  set geoCoordinate(geoCoordinateDTO: GeoCoordinateDTO)

  pullDataFromConferenceDTO(conferenceDTO: ConferenceDTO): void

  generateConferenceDTO(): ConferenceDTO

}

export class Conference implements IConference {
  _id ?: string
  _title ?: string
  _date ?: Date
  _address ?: string
  _country ?: string
  _geoCoordinate ?: GeoCoordinateDTO

  constructor() {


  }

  get country(): string {
    return this._country ? this._country : ""
  }

  set country(country: string) {
    this._country = country
  }

  get geoCoordinate(): GeoCoordinateDTO {
    return this._geoCoordinate ? this._geoCoordinate : {latitude: 6, longitude: 6}
  }

  set geoCoordinate(geoCoordinateDTO: GeoCoordinateDTO) {
    this._geoCoordinate = geoCoordinateDTO
  }


  get id(): string {

    return this._id ? this._id : "";
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

  set id(address) {
    this._id = address
  }

  set title(title) {
    this._title = title
  }

  set date(date) {
    this._date = date
  }

  set address(address) {
    this._address = address
  }

  generateConferenceDTO(): ConferenceDTO {
    return {
      id: this.id
      , title: this.title
      , address: this.address
      , date: this.date.toDateString()
      , geoCoordinate: this.geoCoordinate
      , country: this.country
    };
  }


  pullDataFromConferenceDTO(conferenceDTO: ConferenceDTO): void {
    this.id = conferenceDTO.id
    this.title = conferenceDTO.title
    this.address = conferenceDTO.address
    this.date = new Date(conferenceDTO.date)
    this.country = conferenceDTO.country
    this.geoCoordinate = conferenceDTO.geoCoordinate
  }

}


