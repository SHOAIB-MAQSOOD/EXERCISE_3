let personName = "shoaib maqsood"
console.log(`Name : ${personName}`)

console.log(`Name in lower case : ${personName.toLowerCase()}`)
console.log(`Name in Upper case : ${personName.toUpperCase()}`)


let titleCaseName = personName.split(" ")
    for (let i = 0; i < titleCaseName.length; i++) {
        titleCaseName[i] = titleCaseName[i].charAt(0).toUpperCase() + titleCaseName[i].slice(1).toLowerCase()
}
console.log(titleCaseName.toString())
console.log(titleCaseName.toString().replace(/,/g , " "))

 //In the last line of the code, replace(/,/g, " ") is used to replace all commas in the string with spaces.
//The /,/g is a regular expression pattern, where the forward slashes (/) are used to enclose the pattern and 
//the g flag is used to specify a global search, meaning that it will match all occurrences of the pattern in the string.
//The comma inside the pattern represents the character to be replaced, and the " " after the comma represents 
//the replacement character or string, in this case, a space.
//So, the replace() method with this regular expression pattern and replacement string replaces all commas 
//in the string with spaces, effectively joining the words back together in the title case name output.



 
