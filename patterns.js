/*1. Right-Angled Triangle
*
**
***
****
*****
*/

function rightTriangle(n) {
    for (let i = 1; i <= n; i++) {
      console.log('*'.repeat(i));
    }
  }
// rightTriangle(5);

/*
2. Inverted Triangle
*****
****
***
**
*
*/

function invertedTriangle(n){
   for (let i = n; i > 0; i--) {
       console.log("*" . repeat(i))
   }
}
// invertedTriangle(5)

/*
3. Pyramid Pattern
/*
    *
   ***
  *****
 *******
*********
*/
function pyramidTriangle(n){
    for (let i = 0; i < n ; i++) {
        let spaces = ' '.repeat(n - i);
        let stars = '*'.repeat(2 * i + 1);
        console.log(spaces + stars);
    }
 }
 pyramidTriangle(5)