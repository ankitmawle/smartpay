import { LiHTMLAttributes } from 'react';
import { Icon, Glyph } from '../../icon/icon';
import styles from './transaction-history-item.module.scss';

interface TransactionHistoryItemProps extends LiHTMLAttributes<HTMLLIElement> {
    receiver: string;
    type: string;
    typeLabel: string;
    date: string;
    amount: number;
    currency: string;
}

export const TransactionHistoryItem = ({
    receiver,
    type,
    typeLabel,
    date,
    amount,
    currency,
}: TransactionHistoryItemProps) => {
    const formattedAmount = new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: currency,
    }).format(amount);

    const glyphMap: { [key: string]: Glyph } = {
        shopping: 'shoppingCart',
        food: 'restaurant',
    };

    const defaultGlyph: Glyph = 'creditCard';
    const glyph = glyphMap.hasOwnProperty(type) ? glyphMap[type] : defaultGlyph;

    return (
        <li className={styles.root}>
            <span className={styles.receiver}>
                <Icon glyph={glyph} size="custom" className={styles.icon} />
                <span>{receiver}</span>
            </span>
            <span className={styles.type}>{typeLabel}</span>
            <span className={styles.date}>{date}</span>
            <span className={styles.amount}>{formattedAmount}</span>
        </li>
    );
};
