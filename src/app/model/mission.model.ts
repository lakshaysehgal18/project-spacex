export class Mission{

    constructor(public flight_number:number,
                public mission_name:string,
                public mission_id:number[],
                public launch_year:string,
                public launch_success:boolean,
                public mission_patch_small:string){
        
    }
}