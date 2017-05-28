
export const isAuth = function () {
 if (localStorage.getItem('token') != null) {
   return true
 } else {
   return false
 }
}
