"use client";


import {ReactTerminal} from 'react-terminal';

const Terminal = () =>{
    // terminal configuration
    const welcomeMessage = "Welcome to cognisyn , please enter 'help' for more information \n";
    const errorMessage = "please enter a valid command, enter help for list of commands ";
    const prompt = "$"
    const commands = {
        whoami : 'Dheeraj Chowdary github@rufevean',
        help : () => {
            return(
                 <>
                <p> You can access the following commands : </p>
                <p> usage - takes you through all the commands in the applications </p>
                <p> download - to download and install cognisyn </p>
                <p> whoami - about the developer of the website </p>
                <p> cogterm - upcoming ai integrated terminal </p> 
                </>
            )
        },
        usage : () => {
            return (
                <>
                <p> cogni - access the application </p>
                <p> cogniapi - add the openapi key to your run commands (.bashrc or .zshrc) to make the application work </p>
                <p> cognihelp - access the help manual </p></>
            )
        },
        download : () =>{
            return (
                <>
                <p> access https://github.com/Cognisyn/cognisyn-bash to download and install the application </p>
                </>
            )
        },
        cogterm : () =>{
            return(
                <p> A opensource terminal developed in rust with inbuilt code generation , for more details - https://github.com/Cognisyn </p>
            )
        }
    }

    return(

        <main>
        < ReactTerminal commands={commands} 
        errorMessage={errorMessage}
        showControlBar={false}  prompt={prompt} theme="material-dark"  welcomeMessage={welcomeMessage}/>
    
                     </main>
    )
}

export default Terminal;
