import { defineMiddleware } from 'astro:middleware';
import { getSession } from './lib/auth';
import { getTranslations, type Locale } from './lib/translations';

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  const path = url.pathname;
  
  const adminProtectedRoutes = ['/admin/dashboard', '/admin/reports', '/admin/settings'];
  
  if (adminProtectedRoutes.some(route => path.startsWith(route))) {
    const token = context.cookies.get('adminToken')?.value;
    const session = getSession(token || '');
    
    if (!session) {
      return context.redirect('/admin/login');
    }
    
    context.locals.admin = session;
  }
  
  if (path === '/admin/login') {
    const token = context.cookies.get('adminToken')?.value;
    const session = getSession(token || '');
    
    if (session) {
      return context.redirect('/admin/dashboard');
    }
  }
  
  const searchParams = url.searchParams;
  const cookieLocale = context.cookies.get('locale')?.value as Locale;
  const urlLocale = searchParams.get('lang') as Locale;
  
  const supportedLocales: Locale[] = ['th', 'en'];
  let locale = urlLocale || cookieLocale || 'th';
  
  if (!supportedLocales.includes(locale)) {
    locale = 'th';
  }
  
  context.cookies.set('locale', locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
  });
  
  context.locals.locale = locale;
  const trans = getTranslations(locale);
  context.locals.t = (key: string) => {
    const keys = key.split('.');
    let value: any = trans;
    for (const k of keys) {
      value = value[k];
      if (value === undefined) return key;
    }
    return value as string;
  };
  
  try {
    return next();
  } catch (error) {
    console.error('Middleware error:', error);
    context.locals.error = error;
    return context.redirect('/500');
  }
});
