import React, {Component} from 'react';
import {Lorem} from './Lorem';

export class Main extends Component {
    render() {
        return (
            <div className="box main main--chat general__main">
                <div className="sidebar box-scroll main__sidebar">
                    <div className="box-scroll__header">
                        <input type="text"/>
                    </div>
                    <div className="box-scroll__body">
                        <Lorem/>
                        <Lorem/>
                        <Lorem/>
                        <Lorem/>
                    </div>
                </div>

                <div className="box-scroll content main__content">
                    <div className="box-scroll__body">
                        <div className="message">
                            <div className="message__header">
                                <div className="user-avatar">
                                    <img className="user-avatar__image" src="http://placekitten.com/32/32" width="32"
                                         height="32" alt="avatar"/>
                                    <div className="user-avatar__status user-status"></div>
                                </div>
                                <h3 className="username">Alexey Uzlov</h3>
                                <time dateTime="2018--11-14 12:00">10:24</time>
                            </div>
                            <Lorem className="message__text"/>
                        </div>

                        <div className="message message--from">
                            <div className="message-header message-header--from message__header">
                                <div className="message-header__avatar user-avatar">
                                    <img className="user-avatar__image" src="http://placekitten.com/32/32" width="32"
                                         height="32" alt="avatar"/>
                                    <div className="user-avatar__status user-status"></div>
                                </div>

                                <h3 className="message-header__username username">Alexey Uzlov</h3>
                                <time dateTime="2018--11-14 12:00">10:24</time>
                            </div>
                            <Lorem className="message__text"/>
                        </div>

                        <div className="message">
                            <div className="message__header">
                                <div className="user-avatar">
                                    <img className="user-avatar__image" src="http://placekitten.com/32/32" width="32"
                                         height="32" alt="avatar"/>
                                    <div className="user-avatar__status user-status"></div>
                                </div>

                                <h3 className="username">Alexey Uzlov</h3>
                                <time dateTime="2018--11-14 12:00">10:24</time>
                            </div>
                            <Lorem className="message__text"/>
                        </div>

                        <div className="message">
                            <div className="message__header">
                                <div className="user-avatar">
                                    <img className="user-avatar__image" src="http://placekitten.com/32/32" width="32"
                                         height="32" alt="avatar"/>
                                    <div className="user-avatar__status user-status"></div>
                                </div>

                                <h3 className="username">Alexey Uzlov</h3>
                                <time dateTime="2018--11-14 12:00">10:24</time>
                            </div>
                            <Lorem className="message__text"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
