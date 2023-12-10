import classNames from 'classnames';
import { Icon } from '../icon/icon';
import styles from './get-loan-banner.module.scss';

interface GetLoanBannerProps {
    className?: string;
}

export const GetLoanBanner = ({ className }: GetLoanBannerProps) => {
    return (
        <a href="#0" className={classNames(styles.root, className)}>
            <div>
                Get Great Loan!
                <Icon className={styles.icon} glyph="chevronRight" />
            </div>
        </a>
    );
};
