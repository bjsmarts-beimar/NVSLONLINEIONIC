
export interface INews {
    Id: number;    
    title: string;
    description: string;
    IsHidden: boolean;
    created: string;
}

export interface ISchedule {
    Id: number;
    SeasonId: number;
    Season: ISeason;
    DivisionId: number;
    Division: IDivision;
    VenueId: number;
    Venue: IVenue;
    Status: string;
    DateTime: string;
    HomeTeamId: number;
    HomeTeam: ITeam;
    AwayTeamId: number;
    AwayTeam: ITeam;
    IsHidden: boolean;
    GoalsHomeTeam: number;
    GoalsAwayTeam: number;
}

export interface IVenue {
    Id : number;
    VenueName: string;    
    IsHidden: boolean;
}

export interface ISeason {
    Id : number;
    SeasonName: string;
    Active: boolean;
    IsHidden: boolean;
    SeasonStart: string;
    SeasonEnd: string;
}

export interface ITeam {
    Id : number;
    TeamName : string;
    IsHidden : boolean;
    DivisionId : number;
    Division : IDivision;
    SeasonId : number;
    Season: ISeason;    
}

export interface IDivision {
    Id : number;
    DivisionName: string;    
    IsHidden: boolean;
}
