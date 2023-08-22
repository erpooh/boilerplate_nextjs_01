import Store from "../_store/store";
const store = new Store();

import View from "../_view/index.v";

const Home = () => {
    return (
        <>
            <View store={store} />
        </>
    );
};

export default Home;
