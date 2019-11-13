import { Hotel } from './Hotel';

export class GenerateHotelsList{

    static allHotelsAvailables=[
        new Hotel("El pepo",3,"Fuerte Apache"),
        new Hotel("El pepo1",5,"Fuerte Apache"),
        new Hotel("El pepo2",2,"Fuerte Apache"),
        new Hotel("El pepo3",4,"Fuerte Apache"),
        new Hotel("El pepo4",1,"Fuerte Apache"),
        new Hotel("El pepo5",4,"Fuerte Apache"),
        new Hotel("El pepo6",3,"Fuerte Apache"),
    ]

    static getHotels(){
        return this.allHotelsAvailables
    }
}