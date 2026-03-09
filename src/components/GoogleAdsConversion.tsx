"use client";

import Script from "next/script";

const AW_ID = "AW-837109052";
const CONVERSION_LABEL = "bRsTCKnv6YIcELyKlY8D";

export default function GoogleAdsConversion() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${AW_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-conversion" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${AW_ID}');
          gtag('event', 'conversion', {'send_to': '${AW_ID}/${CONVERSION_LABEL}'});
        `}
      </Script>
    </>
  );
}
