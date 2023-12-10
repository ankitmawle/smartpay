import { HTMLAttributes } from 'react';
import { CardTitle } from './card-title/card-title';
import { CardSubtitle } from './card-subtitle/card-subtitle';
import { CardContent } from './card-content/card-content';
import classNames from 'classnames';
import styles from './card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    Title?: typeof CardTitle;
    Subtitle?: typeof CardSubtitle;
    Content?: typeof CardContent;
    children?: React.ReactNode;
}

const Card = ({ className, children }: CardProps) => {
    return <div className={classNames(styles.root, className)}>{children}</div>;
};

Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Content = CardContent;

export default Card;
