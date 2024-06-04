import { HousingLocationComponent } from "./housing-location/housing-location.component";

export interface HousingLocation {
    id: number; // # eg 1
    name: string; //"John Doe", 'John Doe'
    city: string;
    state: string;
    photo: string; //url of house photo
    availableUnits: number; //1, 4.5
    wifi: boolean;
    laundry: boolean; //false or true
  }
