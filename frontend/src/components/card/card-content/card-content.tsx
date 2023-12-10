import { HTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './card-content.module.scss';

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
}

export const CardContent = ({ className, children }: CardContentProps) => {
    return <div className={classNames(styles.root, className)}>{children}</div>;
};
