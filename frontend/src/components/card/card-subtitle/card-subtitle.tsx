import { HTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './card-subtitle.module.scss';

interface CardSubtitleProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const CardSubtitle = ({ className, children }: CardSubtitleProps) => {
    return <div className={classNames(styles.root, className)}>{children}</div>;
};
