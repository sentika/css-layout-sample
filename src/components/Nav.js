import React, {Component} from 'react';
import './nav.scss';

export class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="box box-scroll navmenu general__navmenu">
                <div className="navmenu__header box-scroll__header box__header">header</div>

                <nav className="navmenu__body box-scroll__body menu">
                    <ul className="menu__list">
                        <li className="menu__item">
                            <a className="menu-link" href="">
                                <i className="menu-link__before icon icon-analytics"></i>
                                <span className="menu-link__text">Dashboard</span>
                            </a>
                        </li>
                        <li className="menu__item">
                            <a className="menu-link menu-link--active" href="">
                                <i className="menu-link__before icon icon-analytics"></i>
                                <span className="menu-link__text">Tradeview</span>
                                <span className="menu-link__after badge">12</span>
                            </a>
                        </li>
                        <li className="menu__item">
                            <a className="menu-link" href="">
                                <i className="menu-link__before icon icon-analytics"></i>
                                <span className="menu-link__text">Dashboard</span>
                            </a>
                        </li>
                        <li className="menu__item">
                            <a className="menu-link" href="">
                                <i className="menu-link__before icon icon-analytics"></i>
                                <span className="menu-link__text">Dashboard</span>
                            </a>
                        </li>
                        <li className="menu__item">
                            <a className="menu-link" href="">
                                <i className="menu-link__before icon icon-analytics"></i>
                                <span className="menu-link__text">Dashboard</span>
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="navmenu__footer box-scroll__footer box__footer">
                    <a className="menu-link" href="">
                        <i className="menu-link__before icon icon-analytics"></i>
                        <span className="menu-link__text">Logout</span>
                    </a>
                </div>
            </div>
        );
    }
}
