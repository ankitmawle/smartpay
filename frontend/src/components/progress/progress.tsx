import classNames from 'classnames';
import { ProgressBar } from './progress-bar/progress-bar';
import styles from './progress.module.scss';

interface ProgressProps {
    className?: string;
    customFillClassName?: string;
    value: number;
    max?: number;
    label?: string;
}

export const Progress = ({
    className,
    customFillClassName,
    value,
    max = 100,
    label,
}: ProgressProps) => {
    const progressValue = calculateProgress(value, max);

    return (
        <div className={classNames(styles.root, className)}>
            <ProgressBar
                className={styles.bar}
                customFillClassName={customFillClassName}
                progress={progressValue}
            />
            <span className={styles.label}>{label && label}</span>
            <span className={styles.value}>{progressValue}%</span>
        </div>
    );
};

const calculateProgress = (value: number, max: number) => {
    const maxValue = max > 0 ? max : 100;

    if (value < 0) {
        return 0;
    }

    if (value > maxValue) {
        return 100;
    }

    return (value / maxValue) * 100;
};
