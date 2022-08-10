import { NextRequest, NextResponse, userAgent } from 'next/server';

const getSiteState = async () => {
  const fetchUrl = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.gssIdKey}/values/sheet1?key=${process.env.gssApiKey}`;
  const res = await fetch(fetchUrl);
  const data = await res.json();

  return data?.values[1][0];
};

export async function middleware(req: NextRequest) {
  const { pathname, origin } = req.nextUrl;
  const { device } = userAgent(req);

  const siteState = await getSiteState();

  if (
    process.env.SITE_ENV === 'production' &&
    siteState === 'INSPECTION' &&
    pathname !== '/site-state/inspection'
  ) {
    return NextResponse.redirect(`${origin}/site-state/inspection`);
  } else {
    if (device.type === 'mobile' && pathname !== '/device/mobile') {
      return NextResponse.redirect(`${origin}/device/mobile`);
    } else {
      return NextResponse.next();
    }
  }
}

export const config = {
  matcher: ['/', '/device/mobile'],
};
