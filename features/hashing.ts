




//use agron2 (default)
async function hashPassword(){
    const password = "MyWeakPassword";


    const algorithmHash = await Bun.password.hash(password, {
    algorithm : "argon2id", // hashing algorith
    memoryCost : 2, //memory usage in kilobytes
    timeCost: 4, //no of iterations
    });



///use bycrypt to hash the password

const bycrypt  = await Bun.password.hash(password,{
    algorithm: "bcrypt",
    cost: 4
});


const IsArgonMatch = await Bun.password.verify(password,algorithmHash)
console.log("Argon matched ? ", IsArgonMatch ? "True" : "false" , algorithmHash);
const isBcryptMatch = await Bun.password.verify(password,bycrypt);
console.log("Bycrpy matched ? ", isBcryptMatch ? "True" : "false",bycrypt);

 // Prepare output content
 const output = `Argon2 Hash: ${algorithmHash}\nBcrypt Hash: ${bycrypt}\n`;

 // Write the output to a file
 await Bun.write("hash.txt", output);
 console.log("Hashes written to hash.txt");

}

await hashPassword();