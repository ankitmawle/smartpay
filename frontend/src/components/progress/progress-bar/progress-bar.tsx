import classNames from 'classnames';
import styles from './progress-bar.module.scss';

interface ProgressBarProps {
    className?: string;
    customFillClassName?: string;
    progress: number;
}

export const ProgressBar = ({
    className,
    customFillClassName,
    progress,
}: ProgressBarProps) => {
    const fill = { width: `${progress}%` } as React.CSSProperties;
    return (
        <div className={classNames(styles.root, className)}>
            <div
                className={classNames(styles.fill, customFillClassName)}
                style={fill}
            />
        </div>
    );
};
