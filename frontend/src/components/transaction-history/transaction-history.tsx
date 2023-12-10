import Card from '../card/card';
import { TransactionHistoryItem } from './transcation-history-item/transcation-history-item';
import styles from './transaction-history.module.scss';

const transactions = [
    {
        receiver: 'ElectroMen Market',
        type: 'shopping',
        typeLabel: 'Shopping',
        date: 'Jul 13, 2022',
        amount: 250,
        currency: 'USD',
    },
    {
        receiver: 'Fiorgio Restaurant',
        type: 'food',
        typeLabel: 'Food',
        date: 'Jul 7, 2022',
        amount: 19.5,
        currency: 'USD',
    },
    {
        receiver: 'John Mathew Kayne',
        type: 'sport',
        typeLabel: 'Sport',
        date: 'Jun 30, 2022',
        amount: 75.67,
        currency: 'USD',
    },
    {
        receiver: 'Ann Marlin',
        type: 'shopping',
        typeLabel: 'Shopping',
        date: 'Jun 30, 2022',
        amount: 430,
        currency: 'USD',
    },
];

export const TransactionHistory = () => {
    return (
        <Card>
            <Card.Title>Transaction History</Card.Title>
            <Card.Content>
                <div className={styles.legend}>
                    <span className={styles.receiver}>Receiver</span>
                    <span className={styles.type}>Type</span>
                    <span className={styles.date}>Date</span>
                    <span className={styles.amount}>Amount</span>
                </div>
                <ul className={styles.transactionList}>
                    {transactions.map(
                        (
                            {
                                receiver,
                                type,
                                typeLabel,
                                date,
                                amount,
                                currency,
                            },
                            index
                        ) => (
                            <TransactionHistoryItem
                                key={index}
                                receiver={receiver}
                                type={type}
                                typeLabel={typeLabel}
                                date={date}
                                amount={amount}
                                currency={currency}
                            />
                        )
                    )}
                </ul>
            </Card.Content>
        </Card>
    );
};
