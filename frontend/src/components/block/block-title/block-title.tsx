import { HTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './block-title.module.scss';

export const BlockTitle = ({
    className,
    children,
}: HTMLAttributes<HTMLHeadingElement>) => {
    return <h2 className={classNames(styles.root, className)}>{children}</h2>;
};
