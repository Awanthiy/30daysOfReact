//Q1)Declare an empty array;
const arr=[]
console.log(arr)

//Q2) Declare an array with more than 5 number of elements;

const Num=[0,2,3,4,5,6,6]
console.log('Numbers',Num)

//Q3)Find the length of your array

const Num=[0,2,3,4,5,6,6]
console.log('Numbers',Num.length)

//Q4)
Get the first item, the middle item and the last item of the array

const Numbers = [0, 2, 3, 4, 5, 6, 6];

 const firstItem=Numbers[0];
 const middleItem=Numbers[Math.floor(Numbers.length/2)];
 const lastItem=Numbers[Numbers.length-1];

console.log("First item:", firstItem);
console.log("Middle item:", middleItem);
console.log("Last item:", lastItem);

/*Q5)Declare an array called mixedDataTypes, put different data types in the array and 
 find the length of the array. 
 The array size should be greater than 5*/

const arr = ['Awaa',24,false,{ country: 'Uk', city: 'london' },
    { 
      skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] 
    },
      console.log(arr)
/*Q6)Q7)Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
Print the array using console.log()*/
            
  const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
  console.log(itCompanies);
//Q8)Print the number of companies in the array
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

console.log(itCompanies.length);

//Q9)Print the first company, middle and last company

const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

const firstCompany = itCompanies[0];
const middleCompany = itCompanies[Math.floor(itCompanies.length / 2)];
const lastCompany = itCompanies[itCompanies.length - 1];

console.log("First company:", firstCompany);
console.log("Middle company (floor of half):", middleCompany);
console.log("Last company:", lastCompany);

//Q10)Print out each company
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
for (let i = 0; i < itCompanies.length; i++) {
console.log(itCompanies[i]);
}

//Q11)Change each company name to uppercase one by one and print them out
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

console.log("Companies in Uppercase:");
const companiesInUpperCase = itCompanies.map(company => company.toUpperCase());
companiesInUpperCase.forEach(company => {
console.log(company);
});
//Q12)Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
 
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
const companiesSentence = itCompanies.join(", ");
const finalSentence = companiesSentence.slice(0, -4) + " and" + companiesSentence.slice(-4) + " are big IT companies.";
console.log(finalSentence);

//Q13)



  
