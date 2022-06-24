export interface Coin {
    CoinIcon: React.ReactElement;
    CoinName: string;
    CoinAmt: string;
    CoinValue: string
}

export interface InstructionComponenet {
    title: string;
    isDone?: boolean;
}