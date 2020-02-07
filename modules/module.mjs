export const message = 'This is a message';
export const showMessage = () => {
    return 'Message: '+message;
}
export default class MyModule {
    printMessage(){
        console.log('Printing',message);
    }
}

export class SecondModule {
    printSecondMessage(){
        console.log('Printing',message);
    }
}