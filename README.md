## Tech stuff

- Node 10.16.0 or later version
- Any editor or IDE of your preference

## Check beforehand

- Internet connection is available;
- Quiet place;
- Code-base is running as expected.

## Suggestion on how to proceed with the pair session

- Duration: 1h10m
- First 5 minutes: Explaining the challenge itself (see "Challenge suggestion" below)
- Next 5 minutes: Ask the candidate to explain how they would implement that in code. This part is crucial since we won't be able to see the final code in ~1 hour, but we will know how the candidate would tackle the whole problem in theory.
- Next 50 minutes: Pairing and rotating the keyboard every 10 minutes
- Last 5 minutes: Ask for feedback on how we can improve

## Challenge suggestion

Implement a selectable list of items with the "Check all" control, which should have the correct state based on the selected items.

<img src="https://user-images.githubusercontent.com/2061821/77397301-6e1e8680-6df9-11ea-84b2-1ab272ed7e7d.gif" />

### Check all states:

- Checked (all the items are selected)
- Unchecked (no items are selected)
- Indeterminate (some items are selected)

### Alternative implementation

This implementation uses 100% controlled components
https://codesandbox.io/s/multiple-checkboxes-0lm1y

References:
- https://reactjs.org/docs/uncontrolled-components.html
- https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/

### Do not:

- Do not write any visual style (CSS)
