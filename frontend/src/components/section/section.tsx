import { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { SectionContent } from './section-content/section-content';
import styles from './section.module.scss';

interface SectionProps extends HTMLAttributes<HTMLElement> {
    Content?: typeof SectionContent;
    children?: React.ReactNode;
}

export const Section = ({ className, children }: SectionProps) => {
    return (
        <section className={classNames(styles.root, className)}>
            {children}
        </section>
    );
};

Section.Content = SectionContent;
