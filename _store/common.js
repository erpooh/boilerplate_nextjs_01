//------------------------------------------------------------------------------- Module
import { makeAutoObservable, toJS, configure } from "mobx";

configure({
    enforceActions: "never",
});

//////////////////////////// makeAutoObservable
class Store {
    test = "Common store test type";

    constructor(store) {
        this.store = store;
        makeAutoObservable(this);
    }

    debug(data) {
        if (process.env.STAGE == "LOCAL" || process.env.STAGE == "DEVELOPMENT" || process.env.STAGE == "STAGING" || process.env.STAGE == "prodtest") {
            console.log(`[Debug:${process.env.STAGE}]`, toJS(data));
        }
    }

    numberFormat(val) {
        return val ? val.toLocaleString() : 0;
    }
}
//////////////////////////// makeAutoObservable

export default Store;
