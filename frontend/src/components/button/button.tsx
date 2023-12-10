import { ButtonHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
}

export const Button = ({ className, children, ...props }: ButtonProps) => {
    return (
        <button className={classNames(styles.root, className)} {...props}>
            {children}
        </button>
    );
};
