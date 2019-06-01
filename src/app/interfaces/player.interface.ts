import { ITeam } from './team.interface';

export interface IPlayer {
    guid: string;
    isActive: boolean;
    picture: string;
    age: number;
    yellowCards: number;
    redCards: number;
    goals: number;
    appearances: number;
    name: string;
    gender: string;
    team: ITeam;
}
