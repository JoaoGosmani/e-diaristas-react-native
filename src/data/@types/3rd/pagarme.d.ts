declare module "pagarme" {
    export default Pagarme;

    export interface CardInterface {
        card_number: string;
        card_holder_name: string;
        card_expiration_date: string;
        card_cvv: string;
    }

    export interface CardValidateInterface {
        card_number: boolean;
        card_holder_name: boolean;
        card_expiration_date: boolean;
        card_cvv: boolean;
        band: string;
    }
}

declare const Pagarme: PagarmeInterface;

interface PagarmeInterface {
    validate: ({ card: CardInterface }) => { card: CardValidateInterface };
    client: PagarmeClientInterface; 
}

interface PagarmeClientInterface {
    connect: ({ encryption_key: string }) => Promise<PagarmeClientInterface>;
    security: {
        encrypt: (card: CardInterface) => Promise<string>
    }
}
