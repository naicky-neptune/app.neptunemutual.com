import Link from "next/link";

import { Container } from "@/components/UI/atoms/container";
import { Grid } from "@/components/UI/atoms/grid";
import { CoverActionCard } from "@/components/UI/organisms/cover/action-card";
import { actions as coverActions } from "@/src/config/cover/actions";
import { OutlinedCard } from "@/components/UI/molecules/outlined-card";
import { useState } from "react";
import { AcceptRulesForm } from "@/components/UI/organisms/accept-rules-form";
import { useCoverInfo } from "@/components/pages/cover/useCoverInfo";
import { CoverHero } from "@/components/UI/organisms/cover/hero";
import { CoverForm } from "@/components/UI/organisms/cover-form";
import { CoverActionsFooter } from "@/components/UI/organisms/cover/actions-footer";
import { CoverPurchaseResolutionSources } from "@/components/UI/organisms/cover/purchase/resolution-sources";

export const CoverPurchaseCheckoutPage = () => {
  const { coverInfo } = useCoverInfo();

  if (!coverInfo) {
    return <>loading...</>;
  }

  const imgSrc = "/covers/clearpool.png";
  const title = coverInfo.coverName;

  return (
    <div>
      <main className="bg-F1F3F6">
        {/* hero */}
        <CoverHero coverInfo={coverInfo} title={title} imgSrc={imgSrc} />

        {/* Content */}
        <div className="pt-12 pb-24 border-t border-t-B0C4DB">
          <Container className="grid gap-32 grid-cols-3">
            <div className="col-span-2">
              {/* Description */}
              <p>{coverInfo.about}</p>

              {/* Read more */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-40 hover:underline mt-4"
              >
                See More
              </a>

              <br className="mt-20" />

              <div className="mt-12">
                <CoverForm />
              </div>
            </div>

            <CoverPurchaseResolutionSources />
          </Container>
        </div>

        <CoverActionsFooter activeKey="purchase" />
      </main>
    </div>
  );
};
