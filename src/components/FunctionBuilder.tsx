function functionBuilder(args : Array<string>, func : string)
{

const func_map = new Map([
    //Setter operations
    ["let", (args : Array<string>) => `let ${args[0]} = ${args[1]};\n`],
    ["set", (args : Array<string>) => `${args[0]} = ${args[1]};\n`],
    //Mathematical operations
    ["add", (args : Array<string>) => `${args[0]} = ${args[1]} + ${args[2]};\n`],
    ["sub", (args : Array<string>) => `${args[0]} = ${args[1]} - ${args[2]};\n`],
    ["mul", (args : Array<string>) => `${args[0]} = ${args[1]} * ${args[2]};\n`],
    ["div", (args : Array<string>) => `${args[0]} = ${args[1]} / ${args[2]};\n`],
    //Loops
    ["for", (args : Array<string>) => `for(${args[0]}){\n`],
    ["while", (args : Array<string>) => `while(${args[0]}){\n`],
    //Conditional statement
    ["if", (args : Array<string>) => `if(${args[0]}){\n`],
    ["else", () => `else{\n`],
    //End bracket
    ["end", () => "}\n"],
    //Return and finish operation
    ["return", (args : Array<string>) => `postMessage(${args});\n`]
])

return func_map.get(func)!(args);

}

export functionBuilder;