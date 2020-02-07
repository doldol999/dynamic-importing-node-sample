import('./modules/module.mjs').then((mod) => {
    console.log(mod.message); //exported variable

    console.log(mod.showMessage()) //exported function

    const myModule = new mod.default; // exported Class ( default )
    myModule.printMessage();

    const secondModule = new mod.SecondModule; // exported Class
    secondModule.printSecondMessage();
})