function shortcut(s1, s2) {
  // your code here
	if (s1.isEmpty() || s2.isEmpty()) {
        return "empty string";
    }
    char firstChar1 = s1.charAt(0);
    char firstChar2 = s2.charAt(0);	
    return String.valueOf(firstChar1) + String.valueOf(firstChar2);
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
