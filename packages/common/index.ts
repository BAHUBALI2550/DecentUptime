export interface SignupIncomingMessage {
    ip: string;
    publicKey: string;
    signedMessage: string;
    callbackId: string;
}

export interface ValidateIncomingMessage {
    callbackId: string;
    signedMessage: string;
    status: 'Good' | 'Bad';
    latency: number;
    websiteId: string;
    validatorId: string;
}

export interface SignupOutgoingMessage {   // validator -> hub      after executing the request
    validatorId: string;
    callbackId: string;
}

export interface ValidateOutgoingMessage {  // hub -> validator      url of website send to check its uptime
    url: string,
    callbackId: string,
    websiteId: string;
}

// incoming messages to the websocket server
export type IncomingMessage = {
    type: 'signup'               // initial signup message which validator sends to hub that he is ready now and ready to receive messages to execute
    data: SignupIncomingMessage
} | {
    type: 'validate'             // message the validator sends to the hub after executing a request from hub (the latency of the website and whether the site id up or down)
    data: ValidateIncomingMessage
}

// outgoing messages to the websocket server
export type OutgoingMessage = {
    type: 'signup'
    data: SignupOutgoingMessage
} | {
    type: 'validate'
    data: ValidateOutgoingMessage
}