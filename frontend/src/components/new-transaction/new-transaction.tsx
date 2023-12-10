import Card from '../card/card';
import { Avatar } from '../avatar/avatar';
import { IconButton } from '../icon-button/icon-button';
import styles from './new-transaction.module.scss';

const profileAnn =
    'https://static.wixstatic.com/media/610b66_79bec0b5ca3f4925aefb242ff99ffeab~mv2.jpg'; // ann.jpg (80x80)
const profileMonica =
    'https://static.wixstatic.com/media/610b66_32c64d1ffccd41a485817811fecca5e8~mv2.jpg'; // monica.jpg (80x80)
const profileJohn =
    'https://static.wixstatic.com/media/610b66_53f3f8e1960d4721b3f00429c8f4d653~mv2.jpg'; // john.jpg (80x80)
const profileMike =
    'https://static.wixstatic.com/media/610b66_beb8a3a3d55d46cb927d1a6661b89935~mv2.jpg'; // mike.jpg (80x80)

export const NewTransaction = () => {
    const users = [
        {
            userName: 'Ann',
            profilePic: profileAnn,
        },
        {
            userName: 'Monica',
            profilePic: profileMonica,
        },
        {
            userName: 'John',
            profilePic: profileJohn,
        },
        {
            userName: 'Mike',
            profilePic: profileMike,
        },
    ];
    return (
        <Card>
            <Card.Title>New Transaction</Card.Title>
            <Card.Content className={styles.destinations}>
                {users.map(({ userName, profilePic }, index) => (
                    <div className={styles.user} key={index}>
                        <Avatar
                            className={styles.profilePic}
                            profilePic={profilePic}
                            userName={userName}
                        />
                        <span className={styles.userName}>{userName}</span>
                    </div>
                ))}
                <div className={styles.addUser}>
                    <IconButton
                        className={styles.addButton}
                        glyph="add"
                        size="small"
                        onClick={() =>
                            alert('Placeholder: New transaction flow')
                        }
                    />
                    <span className={styles.userName}>Add</span>
                </div>
            </Card.Content>
        </Card>
    );
};
