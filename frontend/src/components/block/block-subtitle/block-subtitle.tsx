import { HTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './block-subtitle.module.scss';

export const BlockSubtitle = ({
    className,
    children,
}: HTMLAttributes<HTMLDivElement>) => {
    return <div className={classNames(styles.root, className)}>{children}</div>;
};
