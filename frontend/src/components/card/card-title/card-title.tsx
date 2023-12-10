import { HTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './card-title.module.scss';

interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}

export const CardTitle = ({ className, children }: CardTitleProps) => {
    return <h2 className={classNames(styles.root, className)}>{children}</h2>;
};
