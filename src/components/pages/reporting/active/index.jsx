import { useActiveReporting } from "@/components/pages/reporting/active/useActiveReportingLIst";
import { useNoOfArray } from "@/components/pages/reporting/active/useNoOfArray";
import { NeutralButton } from "@/components/UI/atoms/button/neutral-button";
import { Container } from "@/components/UI/atoms/container";
import { Grid } from "@/components/UI/atoms/grid";
import { SearchAndSortBar } from "@/components/UI/molecules/search-and-sort";
import { ActiveReportingCard } from "@/components/UI/organisms/reporting/ActiveReportingCard";
import { ActiveReportingEmptyState } from "@/components/UI/organisms/reporting/ActiveReportingEmptyState";
import Link from "next/link";

export const ReportingActivePage = () => {
  const { activeReportings } = useActiveReporting();
  const { show } = useNoOfArray();

  if (!activeReportings || !show) {
    return <>loading...</>;
  }

  const isEmpty = show !== "false";

  return (
    <Container className={"pt-16 pb-36"}>
      {isEmpty ? (
        <ActiveReportingEmptyState />
      ) : (
        <ActiveReportingCards activeReportings={activeReportings} />
      )}
    </Container>
  );
};

const ActiveReportingCards = ({ activeReportings }) => (
  <>
    <div className="flex justify-end">
      <SearchAndSortBar />
    </div>
    <Grid className="mt-14 mb-24">
      {activeReportings.map((activeReporting) => (
        <Link
          href={`/reporting/${activeReporting.key}/vote`}
          key={activeReporting.name}
        >
          <a className="rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-4e7dd9">
            <ActiveReportingCard
              key={activeReporting.id}
              details={activeReporting}
            />
          </a>
        </Link>
      ))}
    </Grid>
    <NeutralButton className={"rounded-lg"}>Show More</NeutralButton>
  </>
);
