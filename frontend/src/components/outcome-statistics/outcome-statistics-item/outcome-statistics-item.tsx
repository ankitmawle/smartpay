import { LiHTMLAttributes } from 'react';
import classNames from 'classnames';
import { Icon, Glyph } from '../../icon/icon';
import { Progress } from '../../progress/progress';
import styles from './outcome-statistics-item.module.scss';

type OutcomeStatisticsItemType = 'shopping' | 'electronics' | 'travel';

interface OutcomeStatisticsItemProps extends LiHTMLAttributes<HTMLLIElement> {
    label: string;
    progress: number;
    type: OutcomeStatisticsItemType;
}

export const OutcomeStatisticsItem = ({
    label,
    progress,
    type,
}: OutcomeStatisticsItemProps) => {
    const glyphMap: { [key in OutcomeStatisticsItemType]: Glyph } = {
        shopping: 'shoppingCart',
        electronics: 'localShipping',
        travel: 'hiking',
    };

    return (
        <li className={styles.root}>
            <div className={classNames(styles.illustration, styles[type])}>
                <Icon glyph={glyphMap[type]} />
            </div>
            <Progress
                value={progress}
                customFillClassName={styles[`${type}ProgressFill`]}
                label={label}
            />
        </li>
    );
};
