export class Event {
    public type: string;
    public origin: string;
    public amount: number;
    public destination: string;

    constructor(props) {
        this.type = props.type;
        this.origin = props.origin;
        this.amount = props.amount;
        this.destination = props.destination;
    }
}