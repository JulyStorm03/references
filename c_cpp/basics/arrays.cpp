#include<iostream>
#include<stdio.h>

using namespace std;

int main () {
   // local variable declaration:
   cout << "Type a number: ";
   cin >> a;
 
   // check the boolean condition
   if( a < 20 ) {
      // if condition is true then print the following
      cout << "a is less than 20;" << endl;
   }
   cout << "value of a is : " << a << endl;
 
   return 0;
}