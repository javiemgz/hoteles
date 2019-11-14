import { Hotel, Type } from './Hotel';

export class GenerateHotelsList {



    static getHotels() {
        const types = [new Type("Doble Economica", 2500), new Type("Simple", 2100), new Type("Cuadruple", 5000),]
        const types4s = [new Type("Doble de lujo", 5000), new Type("Doble", 4000), new Type("Doble VIP", 10000),]
        const typesLH = [new Type("sarasa", 1000), new Type("barat", 2100), new Type("carelli", 5000),]
        const types2 = [new Type("sarasa", 2500), new Type("barat", 2250), new Type("carelli", 5000),]
        const types3 = [new Type("sarasa", 2500), new Type("barat", 1900), new Type("carelli", 5000),]

        const extraServices = [new Type("Almuerzo", 400), new Type("Cena", 500), new Type("Cochera", 700), new Type("Lavanderia", 700)]

        const allHotelsAvailables = [
            new Hotel(1, "Four seasons", 5, "Recoleta", "https://cdn.bestday.net/_lib/vimages/Buenos-Aires-Argentina/Hotels/Four-Seasons-Buenos-Aires-Hotel/fachada_g.jpg", types4s, extraServices),
            new Hotel(2, "Las Hayas Resort", 5, "Usuahia", "https://cdn.bestday.net/_lib/vimages/Ushuaia-Argentina/Hotels/Las-Hayas-Resort-Hotel/fachada_g.jpg", typesLH, extraServices),
            new Hotel(3, "Ñandubay", 3, "Arapey, Uruguay", "https://www.viatermal.com/sites/default/files/styles/small/public/listings/113402491.jpg?itok=0Gv40W7y", types3, extraServices),
            new Hotel(4, "Hosteria La Caldera", 4, "Salta", "https://q-xx.bstatic.com/xdata/images/hotel/max500/10150270.jpg?k=2f7ca75d2677038eb55fb54e8d76593f492fe6ad28b7d628da57b21d1c3b6a1b&o=", types, extraServices),
            new Hotel(5, "Tierra Colorada", 2, "Puerto Iguazu", "https://media-cdn.tripadvisor.com/media/photo-s/03/2f/3d/c9/hotel-tierra-colorada.jpg", types2, extraServices),
            new Hotel(6, "Barcelo", 4, "Arapey, Uruguay", "https://i0.bookcdn.com/data/Photos/Big/3200/320068/320068741/Barcelo-Arapey-Oasis-photos-Exterior.JPEG", types, extraServices),
            new Hotel(7, "Winter Suites", 5, "Bariloche", "https://x.cdrst.com/foto/hotel-sf/80d1/granderesp/winter-suites-exterior-e69ad8.jpg", types, extraServices),
        ]
        return allHotelsAvailables
    }
}