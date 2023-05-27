# Guess The Rainbow

![Mock-up Screenshots](docs/mockup-screenshots.png)

Guess The Rainbow is an interactive website designed to test the users knowledge of basic colour mixing.
The website is designed to be a responsive website that can be accessed and easily viewed on a range of screen sizes.
The primary audience of the site will be children and anyone else interested in learning the basics of colour mixing.

[The deployed website can be found here](https://victoriaparkes.github.io/guess-the-rainbow/)

# Contents
/////////////////////////

---

# Features
## Current Features
The main content website is a displayed on a single page with the following features:
- A header with logo and title.
- A "welcome" modal is displayed on loading the page to welcome the user and inform them of the structure of the game.
- An interactive question section displaying the question to answer, with functionality to inform the user in text of the colours displayed when the cursor is hovered over the elements.
- A "Submit Answer" button used to submit the choosen answer to the question for feedback.
- A grid of colours to choose the answer from which will change the background colour of the question answer box to reflect the choosen answer. Each section of the colour grid also has the functionality to display the section colour in text when the cursor is hovered over.
- The user score is displayed below the colour grid displaying the number of correct answers out of the number of questions answered.

![Hover feature](docs/features/colour-hover.png)

- Feedback is recieved via the display of a modal:
 - "Select an Answer" modal to inform the user they have not submitted an answer.
 - "Correct" modal to inform the user they have submitted the correct answer.
 - "Incorrect" modal to inform the user they have submitted an incorrect answer and inform them of the correct answer.
- An instrutions button which displays a modal containing instructions informing the user how to use the website.

![Modals](docs/features/modals.png)

- A reset button with the functionality to reset the game. The questions and score are reset when clicked.

The website also has a 404 error page informing the user that the page cannot be loaded.

## Future Features
- More advanced game play levels testing the user on the mixing of secondary and tertiary colours.

---

# Design

## Structure
The website is designed with a simple structure with the content positioned centrally on the page displayed vertically in the following order:

- The logo
- The game title
- The question
- The submit button
- The answer options displayed in a grid format
- The user's current score
- The instructions and reset buttons

## Wireframes
Click [here](docs/wireframes.png) to view the wireframes.

## Colour Scheme
![colour palette](docs/colour-palette.png)
The colour scheme was chosen to complement the colours in the images without causing distraction and provide contrast for good readability of the information. The colour palette was created using [Coolors](https://coolors.co/).

## Typography
[Google Fonts](https://fonts.google.com/) was used to add the following fonts:
- 'Roboto' was used for the font of the whole website to provide a simple and clean appearance.

## Imagery
The logo image was chosen to reflect the content and title of the game, and provide a simple appearance without causing distraction.

## Icons
Icons were used for the arithmetic symbols and the question mark displayed in the question.

All icons were sourced from [Font Awesome](https://fontawesome.com/).

---

# Technologies Used
HTML - to create the structure of the website.

CSS - to add style to the website.

Javasript - to functionality to the website.

[Chrome DevTools](https://developer.chrome.com/docs/devtools/) - used to help test features and for debugging.

[Google Fonts](https://fonts.google.com/) - a fonts library.

[Font Awesome](https://fontawesome.com/) - for iconography used on the website.

[Git](https://git-scm.com/) - for version control.

[GitHub](https://github.com/) - to create and store the project repository.

[GitPod](https://gitpod.io/) - development hosting platform used to create the website.

[Balsamiq](https://balsamiq.com/) - used to create Wireframes for the layout of the pages.

[Coolors](https://coolors.co/) - used to create the colour palette.

[Rawpixel](https://www.rawpixel.com/) - used to source logo image.

[CloudConvert](https://cloudconvert.com/) - used to convert images to webp format.

[favicon.cc](https://www.favicon.cc/) - to to create the favicon.

[Am I Responsive](https://ui.dev/amiresponsive) - To view the website on a range of devices and create the mock-up screenshot image.

[The W3C Markup Validation Service](https://validator.w3.org/) - Used to validate HTML files.

[The W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) - Used to validate the CSS file.

[PageSpeed Insights](https://pagespeed.web.dev/) - Used to generate lighthouse report for 404 error page as lighthouse was unable to load the page when used in Chrome Developer Tools.

[Prettier.io](https://prettier.io/) - Used to format code.

# Testing
[Chrome DevTools](https://developer.chrome.com/docs/devtools/) was frequently utilised in the development of the website to manipulate and test features as they were added to the project, to test responsiveness and for debugging purposes.

## Functionality Testing

[See Functionality Testing Document](docs/testing/functionality-testing.md)

## Browser Compatibility
The website was tested for functionality on different browsers (Chrome, Firefox and Edge) and found to be fully functional on them all.

## Bugs Encountered
### Fixed
1. Keydown event listener was not fuctioning. The problem was fixed by targeting the whole document instead of the answer box.
2. When viewed on mobile devices the hover text was displayed before the span innerHTML was changed resulting in the previously displayed hover text being displayed. This problem was fixed by giving each span a unique id attribute and using these to set the innerHTML of each span in javascript.
3. When the submit and instructions buttons were clicked, focus remained on the button. Hitting enter to close displayed modal called the button function again. This problem was fixed by adding ```.blur();``` to display modal functions to remove focus from the button.