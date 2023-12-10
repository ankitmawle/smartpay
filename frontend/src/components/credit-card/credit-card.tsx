import classNames from 'classnames';
import styles from './credit-card.module.scss';

interface CreditCardProps {
    className?: string;
    logo?: string;
    cardNumberStartsWith: string;
    cardNumberEndsWith: string;
    cardHolderName: string;
    expireDateMonth: string;
    expireDateYear: string;
}

export const CreditCard = ({
    className,
    logo,
    cardNumberStartsWith,
    cardNumberEndsWith,
    cardHolderName,
    expireDateMonth,
    expireDateYear,
}: CreditCardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.cardLogo}>{logo ? logo : 'Cloudcash'}</div>
            <div
                className={styles.cardNumber}
            >{`${cardNumberStartsWith} •••• •••• ${cardNumberEndsWith}`}</div>
            <div className={styles.cardHolder}>
                <div className={styles.cardFooterItemLabel}>Card holder</div>
                <div className={styles.cardFooterItemValue}>
                    {cardHolderName}
                </div>
            </div>
            <div className={styles.expireDate}>
                <div className={styles.cardFooterItemLabel}>Expire date</div>
                <div className={styles.cardFooterItemValue}>
                    {expireDateMonth}/{expireDateYear}
                </div>
            </div>
        </div>
    );
};
