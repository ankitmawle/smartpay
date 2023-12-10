import { IconButton } from '../icon-button/icon-button';
import { GoalItem } from './goal-item/goal-item';
import styles from './goals.module.scss';

const holidaysImageUrl =
    'https://static.wixstatic.com/shapes/610b66_71524cee9a8c43de91e86b0ecc9f9cab.svg'; // mountain.svg (36x36)
const renovationImageUrl =
    'https://static.wixstatic.com/shapes/610b66_0d486933d56942b48bfed545eba3f3e2.svg'; // brush.svg (36x36)
const xboxImageUrl =
    'https://static.wixstatic.com/shapes/610b66_ca99e04d140f4b8a9633dd902d2cb1b8.svg'; // controller.svg (37x36)

export const Goals = () => {
    const goals = [
        {
            title: 'Holidays',
            imageUrl: holidaysImageUrl,
            date: 'Aug 7, 2022',
            amount: 550,
            currency: 'USD',
        },
        {
            title: 'Renovation',
            imageUrl: renovationImageUrl,
            date: 'Sep 15, 2022',
            amount: 200,
            currency: 'USD',
        },
        {
            title: 'Xbox',
            imageUrl: xboxImageUrl,
            date: 'Jan 1, 2023',
            amount: 820,
            currency: 'USD',
        },
    ];
    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <h2 className={styles.title}>Goals</h2>
                <IconButton
                    glyph="add"
                    size="small"
                    onClick={() => alert('Placeholder: Add goals flow')}
                />
            </div>
            <ul className={styles.goals}>
                {goals.map(
                    ({ title, imageUrl, date, amount, currency }, index) => (
                        <GoalItem
                            key={index}
                            title={title}
                            imageUrl={imageUrl}
                            date={date}
                            amount={amount}
                            currency={currency}
                        />
                    )
                )}
            </ul>
        </div>
    );
};
