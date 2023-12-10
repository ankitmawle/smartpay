import classNames from 'classnames';
import styles from './credit-card-svg.module.scss';

interface CreditCardSvgProps {
    className?: string;
    logo?: string;
    accountAddress?: string;
    linkedEmail?: string;

}

export const CreditCardSvg = ({
    className,
    logo,
    accountAddress,
    linkedEmail
}: CreditCardSvgProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.creditCard}>
                <svg width="100%" height="100%" viewBox="0 0 320 206">
                    <text fill="currentColor" fontSize="8" fontWeight="500">
                        <tspan x="20" y="164">
                            Account
                        </tspan>
                    </text>
                    <text fill="currentColor" fontSize="16" fontWeight="bold">
                        <tspan x="20" y="35">
                            {logo ? logo : 'Smart Pay'}
                        </tspan>
                    </text>
                    <text fill="currentColor" fontSize="21" fontWeight="500">
                        <tspan x="10" y="116">
                            {accountAddress}
                        </tspan>
                    </text>
                    <text fill="currentColor" fontSize="12" fontWeight="500">
                        <tspan x="20" y="183">
                            {linkedEmail}
                        </tspan>
                    </text>

                </svg>
            </div>
        </div>
    );
};
