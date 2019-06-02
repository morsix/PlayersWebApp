import { IPlayer } from './player.interface';

export interface PlayerPaginationWrapper {
    totalPages: number;
    players: IPlayer[];
}