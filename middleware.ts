import { authMiddleware } from "@clerk/nextjs/server";
<<<<<<< HEAD

export default authMiddleware({
  // publicRoutes: [''],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
=======
export default authMiddleware({
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
>>>>>>> 64128c0cc990f297636df45721804704d4b9dadc
};