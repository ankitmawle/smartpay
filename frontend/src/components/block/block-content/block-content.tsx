import { HTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './block-content.module.scss';

export const BlockContent = ({
    className,
    children,
}: HTMLAttributes<HTMLDivElement>) => {
    return <div className={classNames(styles.root, className)}>{children}</div>;
};
