import classNames from 'classnames';
import { PageSubtitle, PageSubtitleProps } from './page-subtitle/page-subtitle';
import { PageTitle, PageTitleProps } from './page-title/page-title';
import { StatusBadgeIconButton } from '../status-badge-icon-button/status-badge-icon-button';
import styles from './page-header.module.scss';

interface PageHeaderSubcomponets {
    Title?: PageTitleProps;
    Subtitle?: PageSubtitleProps;
}

interface PageHeaderProps extends PageHeaderSubcomponets {
    className?: string;
    children: React.ReactNode;
}

const PageHeader = ({ className, children }: PageHeaderProps) => {
    return (
        <header className={classNames(styles.root, className)}>
            <div>{children}</div>
            <div className={styles.utilities}>
                <div className={styles.actionsSection}>
                    <StatusBadgeIconButton
                        glyph="mail"
                        label="Messages"
                        onClick={() => alert('Placeholder: Display messages')}
                    />
                    <StatusBadgeIconButton
                        glyph="notifications"
                        label="Notifications"
                        hasUpdates
                        onClick={() =>
                            alert('Placeholder: Display notifications')
                        }
                    />
                </div>
                <div className={styles.userSection}>
                    <div className={styles.avatar} />
                    <div className={styles.userDetails}>
                        <span>Andrew</span>
                        <span className={styles.userAccountType}>
                            Admin account
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

const Title = (props: PageTitleProps) => <PageTitle {...props} />;
PageHeader.Title = Title;

const Subtitle = (props: PageSubtitleProps) => <PageSubtitle {...props} />;
PageHeader.Subtitle = Subtitle;

export default PageHeader;
