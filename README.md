*A ellipsis that works on characters count only and will append any string you want.*

This simple function allows you to call ellipsis(), pass in a few parameters and get your new ellipsised string in return.
Right now this only supports an ellipsis by character count vs my width/height of the container.


**Example 1:**

    var originalString = 'This is a simple ellipsis script';
    var finalString = ellipsis( originalString, 25 );

**Output 1:**

    finalString = 'This is a simple ellipsis...'

**Example 2:**

    var originalString = 'This is a simple ellipsis script';
    var finalString = ellipsis( originalString, 25, '***' );

**Output 2:**

    finalString = 'This is a simple ellipsis***'