import classNames from 'classnames';
import styles from './cards-detail.module.scss';

interface CardsDetailProps {
    className?: string;
    label?: string;
    trend?: string;
    emphasized?:boolean;
}

export const CardsDetail = ({
    label,
    trend = 'neutral',
    emphasized = false,
    className,
}: CardsDetailProps) => {

    return (
        <div className={classNames(styles.root, className)}>
            <h6 className={styles.label}>{label}</h6>
            <span
                className={classNames(styles.amount, styles[trend], {
                    [styles.emphasized]: emphasized,
                })}
            >
            </span>
        </div>
    );
};
