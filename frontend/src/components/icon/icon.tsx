import classNames from 'classnames';
import { ComponentProps } from 'react';
import { AddGlyph } from './glyphs/add';
import { ChevronRightGlyph } from './glyphs/chevron-right';
import { CreditCardGlyph } from './glyphs/credit-card';
import { DraftGlyph } from './glyphs/draft';
import { HikingGlyph } from './glyphs/hiking';
import { InsightsGlyph } from './glyphs/insights';
import { ListGlyph } from './glyphs/list';
import { LocalShippingGlyph } from './glyphs/local-shipping';
import { MailGlyph } from './glyphs/mail';
import { NotificationsGlyph } from './glyphs/notifications';
import { PersonGlyph } from './glyphs/person';
import { RestaurantGlyph } from './glyphs/restaurant';
import { SettingsGlyph } from './glyphs/settings';
import { ShoppingCartGlyph } from './glyphs/shopping-cart';
import { VerifiedGlyph } from './glyphs/verified';
import styles from './icon.module.scss';

const glyphs = {
    add: <AddGlyph />,
    chevronRight: <ChevronRightGlyph />,
    creditCard: <CreditCardGlyph />,
    draft: <DraftGlyph />,
    hiking: <HikingGlyph />,
    insights: <InsightsGlyph />,
    list: <ListGlyph />,
    localShipping: <LocalShippingGlyph />,
    mail: <MailGlyph />,
    notifications: <NotificationsGlyph />,
    person: <PersonGlyph />,
    restaurant: <RestaurantGlyph />,
    settings: <SettingsGlyph />,
    shoppingCart: <ShoppingCartGlyph />,
    verified: <VerifiedGlyph />,
};

export type Glyph = keyof typeof glyphs;
export interface IconProps extends ComponentProps<'svg'> {
    className?: string;
    size?: 'small' | 'medium' | 'large' | 'huge' | 'custom';
    glyph: Glyph;
}

export const Icon = ({
    className,
    size = 'medium',
    glyph,
    ...props
}: IconProps) => {
    const glyphPlaceholder = glyphs[glyph];

    return (
        <svg
            className={classNames(
                styles.root,
                { [styles[size]]: size !== 'custom' },
                className
            )}
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            width="100%"
            viewBox="0 0 24 24"
            {...props}
        >
            {glyphPlaceholder}
        </svg>
    );
};
