async function fileSystem() {
    // Read a file
    const file = Bun.file('test.txt');
    console.log(file.size);
    console.log(file.type); //MIME TYPE
    const extractTextContent = await file.text();

    console.log(extractTextContent);
    const arrayBuffer  = await file.arrayBuffer();
    console.log(arrayBuffer);

    const unit8Array = await file.bytes()
    console.log(unit8Array);


    //wrting to a file

    const data = `Writing something to be add on test.txt file`;
    
    //copy test.txt content into ouput.txt
    const input = Bun.file("output.txt");
    const output = Bun.file("test.txt")
    
    await Bun.write(input,output);
    
    const isExitst = await file.exists(); //return true

    console.log(`Return ${isExitst}`);
    
    
    
}

fileSystem();