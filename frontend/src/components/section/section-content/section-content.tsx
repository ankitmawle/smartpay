import { HTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './section-content.module.scss';

export const SectionContent = ({
    className,
    children,
}: HTMLAttributes<HTMLDivElement>) => {
    return <div className={classNames(styles.root, className)}>{children}</div>;
};
