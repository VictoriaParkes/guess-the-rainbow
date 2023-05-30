[Back to README.md](../../README.md#functionality-testing)

# Functionality Testing

Details of manual testing of the functions of each feature of the website. Chrome DevTools was used to test the website on different screen sizes.

| Test Label | Test Action | Expected Outcome | Test Outcome |
|----------|-----------|----------------|------------|
| Display welcome modal | Load webpage | Welcome modal is displayed when page is loaded. | PASS |
| Welcome modal "x" | Click welcome modal "x" | Welcome modal is closed and first question is displayed. | PASS |
| Click outside modal - close welcome modal | With welcome modal displayed, click outside modal | Welcome modal is closed and first question is displayed. | PASS |
| Enter key - close welcome modal | Press enter key when welcome modal is displayed | Welcome modal is closed and first question is displayed. | PASS |
|  |  |  |  |
| Display instructions modal | Click instructions button | Instructions modal is displayed. | PASS |
| Instructions modal "x" | Click instructions modal "x" | Instructions modal is closed. | PASS |
| Click outside modal - close instructions modal | With instructions modal displayed, click outside modal | Instructions modal is closed. | PASS |
| Enter key - close instructions modal | Press enter key when instructions modal is displayed | Instructions modal is closed. | PASS |
|  |  |  |  |
| Display select answer modal - submit button | Click submit button with no answer selected and no modal displayed | Select answer modal is displayed asking user to select an answer. | PASS |
| Display select answer modal - press enter | Press enter key with no answer selected and no modal displayed | Select answer modal is displayed asking user to select an answer. | PASS |
| Select answer modal "x" | Click select answer modal "x" | Select answer modal is closed. | PASS |
| Click outside modal - close select answer modal | With select answer modal displayed, click outside modal | Select answer modal is closed. | PASS |
| Enter key - close select answer modal | Press enter key when select answer modal is displayed | Select answer modal is closed. | PASS |
|  |  |  |  |
| Display correct answer modal - submit button | Click submit button with correct answer selected | Correct answer modal is displayed informing user they answered correctly. | PASS |
| Display correct answer modal - press enter | Press enter key with correct answer selected and no modal displayed | Correct answer modal is displayed informing user they answered correctly. | PASS |
| Correct answer modal "x" | Click correct answer modal "x" | Correct answer modal is closed, score is incremented, number of questions answered is incremented and next question is displayed with the answer box reset to no answer. | PASS |
| Click outside modal - close correct answer modal | With correct answer modal displayed, click outside modal | Correct answer modal is closed, score is incremented, number of questions answered is incremented and next question is displayed with the answer box reset to no answer. | PASS |
| Enter key - close correct answer modal | Press enter key when correct answer modal is displayed | Correct answer modal is closed, score is incremented, number of questions answered is incremented and next question is displayed with the answer box reset to no answer. | PASS |
|  |  |  |  |
| Display incorrect answer modal - submit button | Click submit button with incorrect answer selected | Incorrect answer modal is displayed informing user they answered incorrectly, with the correct answer displayed. | PASS |
| Display incorrect answer modal - press enter | Press enter key with incorrect answer selected and no modal displayed | Incorrect answer modal is displayed informing user they answered incorrectly, with the correct answer displayed. | PASS |
| Incorrect answer modal "x" | Click incorrect answer modal "x" | Incorrect answer modal is closed, number of questions answered is incremented and next question is displayed with the answer box reset to no answer. | PASS |
| Click outside modal - close incorrect answer modal | With incorrect answer modal displayed, click outside modal | Incorrect answer modal is closed, number of questions answered is incremented and next question is displayed with the answer box reset to no answer. | PASS |
| Enter key - close incorrect answer modal | Press enter key when incorrect answer modal is displayed | Incorrect answer modal is closed, number of questions answered is incremented and next question is displayed with the answer box reset to no answer. | PASS |
|  |  |  |  |
| End game | Submit answer for all questions and close displayed feedback modal | End game modal is displayed informing the user of their total score out of 9. | PASS |
| End game modal "x" | Click end game modal "x" | End game modal is closed and the game is reset. | PASS |
| Click outside modal - close end game modal | With end game modal displayed, click outside modal | End game modal is closed and the game is reset. | PASS |
| Enter key - close end game modal | Press enter key when end game modal is displayed | End game modal is closed and the game is reset. | PASS |
|  |  |  |  |
| Question colour hover text | Hover mouse over question colour boxes for each question | Hover text displayed informing user of the colour displayed in question box. | PASS |
| Answer box colour hover text - colour selected | For each colour, select colour and hover mouse over answer box | Hover text displayed informing user of the colour displayed in answer box. | PASS |
| Answer box colour hover text - no colour selected | Hover mouse over answer box with no answer selected | No hover text element is displayed. | PASS |
| Mobile question colour hover text | Click question colour boxes for each question | Text displayed informing user of the colour displayed in box. | PASS |
| Mobile answer box colour hover text - colour selected | For each colour, select colour and click answer box | Text displayed informing user of the colour displayed in answer box. | PASS |
| Mobile answer box colour hover text - no colour selected | Click answer box with no answer selected | No text element is displayed. | PASS |
| Answer options grid hover text | Hover mouse over each answer option | Text will inform user of the colour of the option hovered over | PASS |
|  |  |  |  |
| Submit button - no answer selected | Click submit button with no answer selected | Select answer modal is displayed asking user to select an answer. | PASS |
| Submit button - correct answer | Click submit button with correct answer selected | Correct answer modal is displayed informing user they answered correctly. | PASS |
| Submit button - incorrect answer | Click submit button with incorrect answer selected | Incorrect answer modal is displayed informing the user they answered incorrectly. | PASS |
|  |  |  |  |
| Enter key - check answer, no answer | Press enter key with no answer selected and no modal displayed | Select answer modal is displayed asking user to select an answer. | PASS |
| Enter key - check answer, correct answer | Press enter key with correct answer selected and no modal displayed | Correct answer modal is displayed informing user they answered correctly. | PASS |
| Enter key - check answer, incorrect answer | Press enter key with incorrect answer selected and no modal displayed | Incorrect answer modal is displayed informing the user they answered incorrectly. | PASS |
|  |  |  |  |
| Reset button | Click reset button | Game resets. | PASS |
|  |  |  |  |
| Screen reader - question colours | Use screen reader for each question | Screen reader will inform user of the colours displayed | PASS |
| Screen reader - no answer selected | User screen reader with no answer selected | Screen reader will read "what colour?" when it reaches the answer box | PASS |
| Screen reader - answer selected | Use screen reader for each possible selected answer | Screen reader will inform the user of the selected colour when it reaches the answer box | PASS |
| Screen reader - answer options grid | Use screen reader for answer options grid | Screen reader will inform the user of the colour of each grid section | PASS |


[Back to README.md](../../README.md#functionality-testing)