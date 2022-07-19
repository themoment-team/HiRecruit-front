import { NextRequest, NextResponse, userAgent } from 'next/server';

export async function middleware(req: NextRequest) {
  const fetchUrl = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.gssIdKey}/values/sheet1?key=${process.env.gssApiKey}`;
  const res = await fetch(fetchUrl);
  const data = await res.json();
  const siteState = data?.values[1][0];

  const { pathname, origin } = req.nextUrl;

  const { device } = userAgent(req);
  const viewport = device.type === 'mobile' ? 'mobile' : 'desktop';

  if (siteState === 'INSPECTION' && pathname !== '/site-state/inspection') {
    return NextResponse.redirect(`${origin}/site-state/inspection`);
  } else {
    if (viewport === 'mobile' && pathname !== '/device/mobile') {
      return NextResponse.redirect(`${origin}/device/mobile`);
    } else {
      return NextResponse.next();
    }
  }
}

export const config = {
  matcher: ['/', '/device/mobile'],
};
