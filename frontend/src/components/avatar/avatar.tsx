import classNames from 'classnames';
import { Icon } from '../icon/icon';
import styles from './avatar.module.scss';

interface AvatarProps {
    className?: string;
    profilePic?: string | null;
    userName?: string | null;
}

export const Avatar = ({ className, profilePic, userName }: AvatarProps) => {
    const showInitials = !profilePic && typeof userName === 'string';
    const initials = showInitials && getInitials(userName);
    const showDefaultUserPic = !profilePic && !showInitials;
    return (
        <div
            className={classNames(
                styles.root,
                {
                    [styles.profilePic]: profilePic,
                },
                className
            )}
            style={
                typeof profilePic === 'string'
                    ? { backgroundImage: `url("${profilePic}")` }
                    : undefined
            }
        >
            {showInitials && (
                <span className={styles.initials}>{initials}</span>
            )}
            {showDefaultUserPic && <Icon glyph="person" size="small" />}
        </div>
    );
};

const getInitials = (userName: string) => {
    const names = userName.trim().split(' ');
    const firstInitial = names[0][0];
    const lastInitial = names.at(-1)?.[0];

    if (names.length > 1 && lastInitial) {
        return `${firstInitial}${lastInitial}`;
    }

    return firstInitial;
};
