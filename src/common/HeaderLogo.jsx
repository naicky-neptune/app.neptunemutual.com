import { t } from "@lingui/macro";

export const HeaderLogo = () => {
  return (
    <picture>
      <img
        loading="lazy"
        alt={t`Neptune Mutual`}
        srcSet="/logos/neptune-mutual-inverse-full.svg"
        className="w-full h-9"
        data-testid="header-logo"
      />
    </picture>
  );
};
