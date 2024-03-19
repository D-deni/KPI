export default defineNuxtRouteMiddleware((to, from)=> {
  if(!useRequestHeader('Authorization')) {}
  return navigateTo('/')
})