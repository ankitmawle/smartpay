import classNames from 'classnames';
import Nav from '../nav/nav';
import { Icon } from '../icon/icon';
import { Button } from '../button/button';
import styles from './sidebar.module.scss';
import { MouseEventHandler } from 'react';
import ConnectButton from '../common/connect-btn';

const logo =
    '/images/logo1.png'; // logo.svg (135x34)

interface SidebarProps {
    className?: string;
    closeFunction?: MouseEventHandler;
}

export const Sidebar = ({ className, closeFunction }: SidebarProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <a onClick={closeFunction}><b>X close</b></a>
            <img src={logo} alt="Cloudcash logo" />
            <div style={{background:"black", borderRadius:"10px"}}><ConnectButton /></div>
            
            <Nav className={styles.nav}>
                <Nav.Item selected>
                    <Icon glyph="insights" aria-hidden />
                    Overview
                </Nav.Item>

                <Nav.Item>
                    <Icon glyph="creditCard" aria-hidden />
                    Pay
                </Nav.Item>

                <Nav.Item>
                    <Icon glyph="list" aria-hidden />
                    Transactions
                </Nav.Item>


                <Nav.Item>
                    <Icon glyph="draft" aria-hidden />
                    Collect Payments
                </Nav.Item>

            </Nav>

        </div>
    );
};
