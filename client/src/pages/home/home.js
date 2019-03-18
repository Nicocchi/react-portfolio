import React, {Component} from 'react';
import Gallery from "../../components/Gallery/Gallery";

class Home extends Component {
    state = {
    };

    render() {
        return (
            <div className={""}>
                <Gallery name="Projects" clickHandler={""} list={[{name: "Cras justo odio"}, {name: "Dapibus ac facilisis in"}, {name: "Morbi leo risus"}, {name: "Porta ac consectetur ac"}, {name: "Vestibulum at eros"}]}/>
            </div>
        );
    }
}

export default Home;