var ellipsis = function( string, length, ending )
{
    // If a user submits a ending string, use that, if not, use the default ...
    var postString = ending ? ending : '...';
    
    // Create the new ellipsised String
    // Start at the first character and end at the length of characters that you want to show
    // Once the new string has been created, append the ellipsis ending
    var newString  = string.substr( 0, length ) + postString;
    
    // return the ellipsised string
    return newString;
};