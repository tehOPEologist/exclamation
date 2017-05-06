import React, { Component } from 'react';
import moment from 'moment';
import styles from './styles.css';

export default class Plus extends Component {
    constructor(props) {
        super(props);
        this.state = { events: null };
    }

    getEvents = () => {
        fetch(`//api.woot.com/2/events.json?site=${this.props.category == null ? `www` : this.props.category}.woot.com&eventType=WootPlus&key=f467c46a3ee443e39cfd77e4141b8912`)
        .then(response => response.json())
        .then(json => {
            this.setState({ events: json.slice(0, 3) });
        })
        .catch(err => {
            console.log(err);
        });
    };

    renderEvents = () => {
        const events = [];

        this.state.events && this.state.events.forEach((event, i) => {
            events.push(<li key={ i } className={ styles.listItem }>
                <img className={ styles.img } src={ event.Photos[1].Url } alt={ event.Title } />
                <div className={ styles.textWrapper }>
                    <p className={ `${styles.p} ${styles.title}` }>{ event.Title }</p>
                    <p className={ `${styles.p} ${styles.ends}` }>Ends { moment(Date.parse(event.EndDate)).fromNow() }&#33;</p>
                </div>
            </li>);
        });

        return events;
    };

    componentDidMount = () => {
        this.getEvents();
    };

    render = () => <section>
        <header>
            <h1 className={ styles.h }>Current Events</h1>
        </header>
        <ul>
            { this.renderEvents() }
        </ul>
    </section>;
};
