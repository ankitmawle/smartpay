import { ButtonHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import { Icon, Glyph } from '../icon/icon';
import styles from './icon-button.module.scss';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: ReactNode;
    glyph: Glyph;
    size?: 'small' | 'medium';
}

export const IconButton = ({
    className,
    children,
    glyph,
    size = 'medium',
    ...props
}: IconButtonProps) => {
    return (
        <button
            className={classNames(
                styles.root,
                { [styles[size]]: size },
                className
            )}
            {...props}
        >
            <Icon size={size} glyph={glyph} />
            {/* Add visually hidden label as children */}
        </button>
    );
};
