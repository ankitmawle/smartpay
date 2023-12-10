import classNames from 'classnames';
import styles from './nav-item.module.scss';

export interface NavItemProps {
    className?: string;
    children?: React.ReactNode;
    selected?: boolean | undefined;
}

export const NavItem = ({ className, children, selected }: NavItemProps) => {
    return (
        <div
            tabIndex={selected ? -1 : undefined}
            aria-current={selected ? true : undefined}
            className={classNames(
                styles.root,
                { [styles.selected]: selected },
                className
            )}
        >
            {children}
        </div>
    );
};
