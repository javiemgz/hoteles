import { Hotel, Type } from './Hotel';

export class HotelRepository {
    //singleton
    private static instance: HotelRepository
    private constructor() { }
    public static getInstance() {
        return this.instance || (this.instance = new this())
    }
    hotelsAvailables: Hotel[] = [
        new Hotel(1, "Four seasons", 5, "Recoleta, Argentina", "https://cdn.bestday.net/_lib/vimages/Buenos-Aires-Argentina/Hotels/Four-Seasons-Buenos-Aires-Hotel/fachada_g.jpg", fourSeasonTypes, extraServices),
        new Hotel(3, "Ñandubay", 3, "Arapey, Uruguay", "https://www.viatermal.com/sites/default/files/styles/small/public/listings/113402491.jpg?itok=0Gv40W7y", nadubayTypes, extraServices),
        new Hotel(7, "Winter Suites", 5, "Bariloche, Argentina", "https://x.cdrst.com/foto/hotel-sf/80d1/granderesp/winter-suites-exterior-e69ad8.jpg", winterSuitesTypes, extraServices),
        new Hotel(5, "Tierra Colorada", 2, "Puerto Iguazu, Argentina", "https://media-cdn.tripadvisor.com/media/photo-s/03/2f/3d/c9/hotel-tierra-colorada.jpg", tierraColoradaTypes, extraServices),
        new Hotel(2, "Las Hayas Resort", 5, "Usuahia, Argentina", "https://cdn.bestday.net/_lib/vimages/Ushuaia-Argentina/Hotels/Las-Hayas-Resort-Hotel/fachada_g.jpg", lasHayasTypes, extraServices),
        new Hotel(6, "Barcelo", 4, "Arapey, Uruguay", "https://i0.bookcdn.com/data/Photos/Big/3200/320068/320068741/Barcelo-Arapey-Oasis-photos-Exterior.JPEG", barceloTypes, extraServices),
        new Hotel(4, "Hosteria La Caldera", 4, "Salta, Argentina", "https://q-xx.bstatic.com/xdata/images/hotel/max500/10150270.jpg?k=2f7ca75d2677038eb55fb54e8d76593f492fe6ad28b7d628da57b21d1c3b6a1b&o=", laCarderaTypes, extraServices),
    ]

    getHotels() {
        return this.hotelsAvailables
    }

    getHotelById(id:number){
        return this.hotelsAvailables.find(hotel=> hotel.id==id)
    }
}





//types of rooms 
const winterSuitesTypes = [new Type("Doble", 3800), new Type("Triple", 4150), new Type("Cuadruple", 5000), new Type("Cuadruple VIP", 7000),]
const fourSeasonTypes = [new Type("Doble STD", 5000), new Type("Simple Deluxe", 5800), new Type("Doble Deluxe", 8000),]
const lasHayasTypes = [new Type("Doble Economica", 3000), new Type("Doble Estandar", 4000), new Type("Triple Economica", 5000),]
const tierraColoradaTypes = [new Type("Familiar", 3800), new Type("simple", 2250),]
const nadubayTypes = [new Type("Bungalow doble", 3500), new Type("Bungalow triple", 4300), new Type("Bungalow cuadruple", 5000),]
const barceloTypes = [new Type("Doble", 6000), new Type("Doble Con jacuzzi", 7000), new Type("Suite presidencial", 10000),]
const laCarderaTypes = [new Type("Doble Economica", 2800), new Type("Doble Estandar", 3300), new Type("Triple Economica", 4000),]
//extra services
const extraServices = [new Type("Almuerzo", 400), new Type("Cena", 500), new Type("Cochera", 700), new Type("Lavanderia", 700)]