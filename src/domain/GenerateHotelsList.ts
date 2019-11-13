import { Hotel } from './Hotel';

export class GenerateHotelsList{

    static allHotelsAvailables=[
        new Hotel("Four seasons",5,"Fuerte Apache"),
        new Hotel("Las Hayas Resort",2,"Usuahia"),
        new Hotel("Elpol vaso",1,"Fuerte Apache"),
        new Hotel("El pepo3",4,"Fuerte Apache"),
        new Hotel("El pepo4",1,"Fuerte Apache"),
        new Hotel("El pepo5",4,"Fuerte Apache"),
        new Hotel("El pepo6",3,"Fuerte Apache"),
    ]

    static getHotels(){
        return this.allHotelsAvailables
    }
}