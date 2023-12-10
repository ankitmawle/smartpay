import { Cards } from '@/components/cards/cards';
import { DashboardLayout } from '@/components/dashboard-layout/dashboard-layout';
import { Goals } from '@/components/goals/goals';
import { OutcomeStatistics } from '@/components/outcome-statistics/outcome-statistics';
import { Section } from '@/components/section/section';
import { TransactionHistory } from '@/components/transaction-history/transaction-history';
import PageHeader from '@/components/page-header/page-header';
import { NewTransaction } from '@/components/new-transaction/new-transaction';
import { GetLoanBanner } from '@/components/get-loan-banner/get-loan-banner';
import styles from '@/styles/app.module.scss';

function App() {
    return (
        <div className={styles.root}>
            <DashboardLayout>
                <Section>
                    <Section.Content>
                        <PageHeader className={styles.header}>
                            <PageHeader.Title>Pay Safely </PageHeader.Title>
                            <PageHeader.Subtitle>
                                With your simple yet secure and smart Payment Manager
                            </PageHeader.Subtitle>
                        </PageHeader>
                    </Section.Content>
                </Section>

                <Section>
                    <Section.Content className={styles.dashboardGrid}>
                        <div className={styles.mainColumn}>
                            <Cards />
                            <TransactionHistory />
                        </div>
                    </Section.Content>
                </Section>
            </DashboardLayout>
        </div>
    );
}

export default App;
