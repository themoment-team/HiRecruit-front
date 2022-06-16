import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const fetchUrl =
    'https://sheets.googleapis.com/v4/spreadsheets/1z65xVk7tqcp90SUVvOwl-XHozbydF5w5hyVjMVnxIkw/values/sheet1?key=AIzaSyDnEY-kE_ZCwuyQezxSuw1UO1dMOOgPYJw';
  const res = await fetch(fetchUrl);
  const data = await res.json();
  const siteState = data?.values[1][0];

  const { pathname, origin } = req.nextUrl;

  if (siteState === 'INSPECTION' && pathname !== '/site-state/inspection') {
    return NextResponse.redirect(`${origin}/site-state/inspection`);
  } else {
    return NextResponse.next();
  }
}
