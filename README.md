<p align="center">
  <img src="images/thunder-icon.png" width="120" height="120" />
</p>

# Thunder Client
Thunder Client is a lightweight Rest API Client Extension for Visual Studio Code, hand-crafted by [Ranga Vadhineni](https://twitter.com/ranga_vadhineni) with simple and clean design. The source code is not open source. You can report any Bugs Or Feature requests here.

* Voted as **#10 Product of the day** on [Product Hunt](https://www.producthunt.com/posts/thunder-client)
* Website - [www.thunderclient.io](https://www.thunderclient.io)
* Follow Us for updates - [Twitter](https://twitter.com/thunder_client), [LinkedIn](https://www.linkedin.com/company/thunderclient/)

#### Story behind Thunder Client
* Read Launch Blog Post on [Medium](https://rangav.medium.com/thunder-client-alternative-to-postman-68ee0c9486d6)

## Menu
* [How to Use](#usage)
* [Tech](#tech)
* [Features](#features)
* [Team Features](#team)
* [Auth](#auth)
* [System Variables](#variables)
* [Proxy](#proxy)
* [Import/Export](#import)
* [Run Collection](#runcol)
* [Testing](#testing)
* [Keyboard Shortcuts](#keyboard)
* [Contribution](#contribution)
* [Privacy](#privacy)


<a name="usage"></a>
## How to Use
* Install the Extension, Click Thunder Client icon on the Action Bar.
* From Command Palette (Cm+Sh+P) type ``thunder`` and select ``Thunder Client: New Request``
* Video: [youtube.com/watch?v=NKZ0ahNbmak](https://www.youtube.com/watch?v=NKZ0ahNbmak)

![](images/thunder-client.gif)

<a name="tech"></a>
## Tech
* Thunder Client is built with **Javascript, Flexbox, Typescript, Ace Editor, Got, Nedb**. No javascript or bootstrap frameworks used.

<a name="features"></a>
## Features
* Send http/https API request using any of the methods GET, POST, PUT, DELETE, PATCH, HEAD and OPTIONS.
* The Response data supports **syntax hightlighting using ACE Editor** which can handle large responses easily, you can also view response in **Full Screen**
* **History, Collections and Environment** Tabs in the Action Bar View for quick access.
* **[Authentication](#auth):** Basic Auth, Bearer Token and OAuth 2.0 are supported.
* **Headers:** You can send http headers to test api, with **auto-complete** support.
* **Post Body:** Send post body as Text, Json, Xml, Form Data, Files and Form-Url-Encoded. Content-Type header will be automatically set.
* **Graphql:** Send Graphql Query & Variables has syntax highlighting support.
* **Environment Variables:** Syntax highlighting support for environment variables just use `{{variable}}` syntax in most fields
* **[Scriptless Testing](#testing):** Test APIs with GUI based functionality, no scripting knowledge needed.
* **Themes:** The extension also supports VS Code themes.

<a name="team"></a>
## Team Features
The team features are useful to share requests with team. The feature is still in **Beta**, based on feedback I will improve it.

**WARNING**: The **Environment** file which stores the secrets also saved in the same git folder, see **Note: 1** below.

Integrate with the Git source control is now supported to sync data, 2 settings provided
1. **Load From Project**: select this option when you like to spilt data per project, it will create `thunder-tests` folder in workspace. This loads the data when you open the project in vscode.
   * Now supports relative path to workspace directory (Optional). Use setting `Workspace Relative Path` to specify the relative path.
   * Make sure the `Workspace Relative Path` setting is **Workspace** setting not **User** setting.
   * Example 1: Relative Path to save in child folder of workspace is `FolderName` or `Child/FolderName`
   * Example 2: Relative Path to save in Parent folder of workspace is `../`
2. **Custom Location**: select this option when you like save all the data in one location, enter the full folder path to save the data.
   * Now supports relative path to Home directory. use **$HOME** prefix e.g `$HOME/Documents/ProjectName`
* Note 1: **Environment file**: if you dont want to save environment file to git server, use **.gitignore** to ingore the file thunderEnvironment.db
* Note 2: **Files changes** are not detected by the extension yet, if you pulled changes from git, click **Reload** option from collection Tab to update data.
* Note 3: Please **restart vscode** after updating settings.

<a name="auth"></a>
## Auth
* OAuth 2.0 when grant type is **Authorization Code** the **callback url** needs to be entered into your oauth server trusted redirect url list.
* OAuth authentication credentials is sent **via header or body**, please select appropriate one based on your server requirement.

<a name="variables"></a>
## System Variables
The system variables are useful to generate random/dynamic data for use in request query params or body. The format is `{{#variableName}}`
* {{#randomString}} - generates random uuid
* {{#randomNumber}} - generates random number between 1 to 1000000
* {{#randomEmail}} - generates random email
* {{#date}} - generates date timestamp
* {{#dateISO}} - generates date ISO format

<a name="proxy"></a>
## Proxy
* Proxy is supported using vscode proxy setting. format `http://username:password@host:port` 
* **exclude Proxy Host List**: Use this setting to exclude hosts from proxy, supports comma separated values e.g: `abc.com,xyz.com`

<a name="import"></a>
## Import/Export
* You can import or export Thunder Client collections and environment data.
* Currently you can import collection or Environment file from **Postman** 2.1.0 format. ( other file formats support soon.. ).
* Submit PR for other file formats on https://github.com/rangav/thunder-imports
* **Import Curl** is now supported from Activity tab. Keyboard shortcut `Cmd/Ctrl + u`

<a name="runcol"></a>
## Run Collection
* You can test multiple requests using Collection, select `Run All` option from the collection menu.
* The collection runner will execute all requests and test cases and display the result.

<a name="testing"></a>
## Scriptless Testing
![](https://github.com/rangav/thunder-client-support/blob/master/images/thunder-client-tests.png?raw=true)

* I noticed we need to write lot of boilerplate code in Postman and other clients to do basic testing using scripting like status code equal 200. So I implemented GUI based tests, where you select couple of dropdowns to do most standard tests very easily without any scripting knowledge.

#### Set Environment Variable
 Setting Environment Variable from Tests tab is now supported, follow below steps
 * Create Environment first from Env Tab if its not already created.
 * From the Tests tab select `Set Env Variable` dropdown option
 * **Set Variable from Json Response**: enter the `json.propertyName`  on the left input box
 * In value input enter the variable name, when its matches name in Env, it will turn **green**, if variable not exists, it will create new.
 * Now execute the request you will see the variable value set in the Env.
 * **Set Variable from Text Response**: Enter `text` keyword in the left input
 * **Set Variable from Header**: Enter `header.headerName` in the left input, the prefix is `header.`
 * **Set Variable from Cookie**: Enter `cookie.cookieName` in the left input, the prefix is `cookie.`


<a name="keyboard"></a>
## Keyboard Shortcuts
* `Ctl+Shift+P`: From Command Palette
  * Thunder Client - New Request 
  * Thunder Client - Run Last Request
* `Cmd/Ctrl + Enter`: To execute the request.
* `Enter` on request url to send request.
* `Cmd/Ctrl + s` Environment variable window save data.
* `Alt+Shft + f` Format Post Body data.
* `Cmd/Ctrl + u` Import Curl

<a name="contribution"></a>
## Contribution Guidelines
* As the project is not open source, when you submit feature request or bug, if you know the solution, please submit code sample or a sample project in **node or .Net**, so it will be faster for me to integrate into main project. 

<a name="privacy"></a>
## Privacy
* Basic anonymised telemetry data of extension usage is collected using [vscode-extension-telemetry](https://github.com/Microsoft/vscode-extension-telemetry), No Personal or request data is collected. You can opt out using VS Code Settings [details here](https://code.visualstudio.com/docs/getstarted/telemetry)
* There is no backend or cloud sync currently, all the data is stored locally on your computer.


