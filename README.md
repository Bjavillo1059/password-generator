# my-password-generator

## Description

This is a password generator that can randomly generate passwords from 8 characters to 128.  It can also generate the given password with whatever the user seems to fit into the ever growing need for secrue passwords

## Deployment


https://bjavillo1059.github.io/password-generator/

<img src="./assets/img/pass gen photo.PNG" alt=" img of password site"/>

## Technology used

- html
- css
- javascript

## Contact Information

please contact me at [brandonjavillo@gmail.com](brandonjavillo@gmail.com)
or [bjavillo1059@gmail.com](bjavillo1059@gmail.com)

## Road Map

*html and css code was provided from bootcamp*

- adjustments and refactoring were made to css to fit my individual style

  Javascript

    - When user opens page an alert will specify "Remember to copy your password when generated"
    - User clicks the "Generate Password" button

    Global varibales established
      - symbols
      - numbers
      - letters

    wrtiePassword function 
      - when user is completed with password prompts the password will generate in display in the the given block of html

    generatePassword function
      - when "Generate Passord btn is pressed" a window prompt will specify a number length selection for password
      - console log will read string
      - when the length of password selection is < 8 or > 128 characters window alert will specify "you must chose again"

    variables in window.confirm
      - boolean established for symbol selection
      - boolean established for number selection
      - boolean established for letter selection

    let statement
      - allows for the selection of different characters
      - boolean selections for letters, symbols, numbers combination

    for loop
      - loops random characters
      - loops according to the specfied length
      - loops with the selection of boolean selections

    generateBtn.addEventListener
      - generates button click 
      - watch the magic happen

    






