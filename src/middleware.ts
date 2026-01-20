import { defineMiddleware } from 'astro:middleware';
import { getSession } from './lib/auth';

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
  
  try {
    return next();
  } catch (error) {
    console.error('Middleware error:', error);
    context.locals.error = error;
    return context.redirect('/500');
  }
});
