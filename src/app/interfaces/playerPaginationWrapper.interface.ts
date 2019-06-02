import { IPlayer } from './player.interface';

export interface PlayerPaginationWrapper {
    size: string;
    players: IPlayer[];
}