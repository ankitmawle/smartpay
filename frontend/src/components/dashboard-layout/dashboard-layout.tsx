import classNames from 'classnames';
import { Sidebar } from '../sidebar/sidebar';
import styles from './dashboard-layout.module.scss';
import { Icon } from '../icon/icon';
import { useEffect, useState } from 'react';
interface DashboardLayoutProps {
    className?: string;
    children: React.ReactNode;
}


export const DashboardLayout = ({
    children,
    className,
}: DashboardLayoutProps) => {

    const [sidebarDisplay, setSidebarDisplay] = useState("block");

    useEffect(()=>{
        if(screen.width<478){
            setSidebarDisplay("none");
        }
        else{
            
            setSidebarDisplay("block");
        }
    },[]);

    const handleClick = ()=>{
        setSidebarDisplay("block");
    }

    const close = ()=>{
        setSidebarDisplay("none");
    }
    
    return (
        <div className={classNames(styles.root, className)}>
            <div style={{display:sidebarDisplay}}>
                <Sidebar closeFunction={close} className={styles.sidebar} />
            </div>
            <div className={styles.pageContent}>
            <Icon className={styles.menuIcon} style={{float:"right"}} glyph="list" size="large" aria-hidden  onClick={handleClick}/>
                {children}
                </div>
        </div>
    );
};
