<p align="center">
  <img src="images/thunder-icon.png" width="120" height="120" />
</p>

# Thunder Client
[![installs](https://img.shields.io/visual-studio-marketplace/i/rangav.vscode-thunder-client.svg)](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) [![version](https://img.shields.io/visual-studio-marketplace/v/rangav.vscode-thunder-client.svg)](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)

Thunder Client is a lightweight Rest API Client Extension for Visual Studio Code, hand-crafted by [Ranga Vadhineni](https://twitter.com/ranga_vadhineni) with a simple and clean design. The source code is not open source. You can report any Bugs Or Feature requests here.

* Voted as **#10 Product of the day** on [Product Hunt](https://www.producthunt.com/posts/thunder-client)
* Website - [www.thunderclient.com](https://www.thunderclient.com)
* Follow Us for updates - [Twitter](https://twitter.com/thunder_client), [LinkedIn](https://www.linkedin.com/company/thunderclient/)

#### Story behind Thunder Client
* Read Launch Blog Post on [Medium](https://rangav.medium.com/thunder-client-alternative-to-postman-68ee0c9486d6)

#### Milestones
* **1 Million** downloads on July 13, 2022
* **500K** downloads on Dec 20, 2021
* Extension **launched** on Mar 31, 2021

## Menu
* [How to Use](#usage)
* [Tech](#tech)
* [Features](#features)
* [Team Features / Git Sync](#team)
* [Testing](#testing)
* [Environments](#environments)
* [Set Environment Variable](#setenv)
* [Auth](#auth)
* [Cookies](#cookies)
* [Path Variables](#path)
* [System Variables](#variables)
* [Code Snippet](#codegen)
* [Proxy](#proxy)
* [Http/2](#http2)
* [Import/Export](#import)
* [Keyboard Shortcuts](#keyboard)
* [VS Code Settings](#settings)
* [Contribution](#contribution)
* [Privacy](#privacy)


<a name="usage"></a>
## How to Use
* Install the extension, click the Thunder Client icon on the Action Bar.
* From the sidebar click `New Request` button to test API
* Video: [youtube.com/watch?v=NKZ0ahNbmak](https://youtu.be/NKZ0ahNbmak?t=3)
* Minimum **VS Code** version now required is `v1.65.0`

![](images/thunder-client.gif)

<a name="tech"></a>
## Tech
* Thunder Client is built with **Javascript, Typescript, Flexbox, Ace Editor, Got, Nedb**.

<a name="features"></a>
## Main Features

- **Lightweight** Rest API Client for VS Code
- **Simple & Easy** to use UI
- Supports **Collections and Environment variables**.
- **Scriptless Testing:** Test API response easily with GUI based interface .
- **Themes:** The extension supports VS Code themes.
- **Offline & Local Storage:** Works offline and saves all the requests data locally on your device.

<a name="team"></a>
## Git Sync
This feature is useful to share requests with team by saving data in git project.

Integration with the Git is supported by below VS Code settings, choose **any one** as required. To view Thunder Client settings, open VS Code settings UI and search for Thunder Client to view all the extension settings.

1. **Save To Workspace**: (Recommended) Enable this setting when you like to save requests data in current workspace, this will create `thunder-tests` folder in root of workspace. The extension will load the data automatically when you open the project in VS Code.
   * `Workspace Relative Path` (Optional): The default location of `thunder-tests` folder is root of workspace. Use setting `Workspace Relative Path` to specify different relative path.(see below examples)
   * Make sure the `Workspace Relative Path` setting is **Workspace** setting not **User** setting.
   * Example 1: To save in Child folder of workspace then relative path is `FolderName` or `Child/FolderName`
   * Example 2: To save in Parent folder of workspace then relative path is `../`
2. **Custom Location**: Use this setting when you like save all the requests data in one fixed location, enter the full folder path to save the data.
   * Supports relative path to user root directory. use prefix **$HOME**.  e.g `$HOME/Documents/folderName`
   
<br/>

* **WARNING**: The **Environment** file which stores the secrets also saved in the same git folder (see **Note: 1** below).
* Note 1: The environments will be stored in `thunderEnvironment.json` file, which will be part of **thunder-tests** folder. If you like to exclude any secrets from `thunderEnvironment.json` file then use `Local Environment` to store values locally on your computer
* Note 2: **Files changes** are not detected by the extension yet, if you pulled changes from git, click **Reload** icon in sidebar.
* Note 3: Please **restart VS Code** after updating settings.


<a name="testing"></a>
## Scriptless Testing
![](https://github.com/rangav/thunder-client-support/blob/master/images/thunder-client-tests.png?raw=true)

* We need to write a lot of boilerplate code in Postman and other clients to do basic testing using scripting like status code equal 200. So I implemented GUI based tests, where you select a couple of dropdowns to do most standard tests very easily without any scripting knowledge.
* Tests can be done for strings, numbers, count, and type checking
* `Json schema` validation
* Setting `env variables` is also possible in the Tests section
* Re-arrange tests order using drag and drop
* Use Json Query Tests for `Xml Response`. ( Xml is converted to Json for tests )

<a name="environments"></a>
## Environment Variables
![env2](https://user-images.githubusercontent.com/8637550/154529631-7b6a4cb0-5538-471d-ab88-4035bacba878.png)

The following environments can be used in Thunder Client ranked from least precedence to highest precedence.

1. **OS Environment Variables**: You can use OS System environment variables as global variables using the format `{{variable}}`
2. **Local Environment**: You can use Local Environment to save secrets and transient tokens locally on your computer, useful to exclude `secrets` from git project. This environment is a `global type` and the variables are available to all collections. The values will not be saved in main `thunderEnvironement.json` file (See above image option 3)
3. **Global Environment**: You can use Global Environment to save variables and share with all the collections. The values will stored in main `thunderEnvironment.json` file.  (See above image option 2)  


4. **env file**: You can use `.env files` in Thunder Client. To use a .env file follow the below steps
   - Create an Environment (using option 1 in img)
   - Open the Environment view, then you will see the option `Link to .env file`
   - Select the .env file and save it, Now you can use the variables in the Requests using `{{variable}}`
   - The env file variables format should be in:
    ```
    key=value
    name=thunder
    number=25543
    ```
 5. **Active Environment**: To use environment variables, you need to make it active using the options menu `...` then select `Set Active`.
 6. **Attach Env to Collection**: (Optional) You can attach an environment to a collection from the Collection Settings view. Use this option when you like to link multiple collections to multiple environments. The values in this environment will take precedence over the active environment. If you change environments frequently, this option is not recommended. Please see the example below:
    ```
    CollectionA -> EnvA
    CollectionB -> EnvB
    CollectionC -> EnvC
    ```
 #### How to use Environment Variables
 * To use env variables use the format `{{variableName}}`, you can use variables in Query Params, Headers, Body & Tests

 #### Import Env
  * You can import Thunder Client, Postman and .env files using the Import Menu Option ( see above image option 4), more details [here](#import)

<br/>

<a name="setenv"></a>
## Set Environment Variable
Setting environment variables is supported in the Tests tab. Follow the steps below:
 * Create an environment first from the Env tab if it's not already created.
 * In the Tests tab, select the `Set Env Variable` dropdown option. (The action will automatically become `setTo`.)
 * Enter the appropriate source of variable value in the left input box:
   * **Header:** Enter `header.headerName` where `headerName` is the response header name.
   * **Cookie:** Enter `cookie.cookieName` where `cookieName` is the response cookie name.
   * **JSON Response:** Enter `json.propertyName` where `propertyName` is the JSON key in the response body.
   * **Text Response:** Enter the `text` keyword. This sets the entire response body to the variable.
   * **Custom Value:** To set any custom value manually, Just type the text as required in the left input e.g `processing`
   * **Clear Value:** To clear values use `null` keyword in the left input.
   * **Delete Variable:** To delete a variable completely use `delete` keyword in left input.
 * In the value input, enter a variable name in the `{{variableName}}` format.
   * When it matches a variable name in Env, it will turn **green**. If the variable doesn't exist, it will be created.
 * Now execute the request. You will see the variable value set in the Env tab.
   * If you don't see the change in the Env tab, close and re-open the tab to refresh it.
 <a name="scope"></a>
 #### Set Env with Scope
   The default location will be Active Environment when you use `{{variable}}`. You can use a scope to control which environment variable to set the value explicitly
 * To set a variable in **local** environment use `{{variable, local}}`
 * To set a variable in **global** environment use `{{variable, global}}`
 * (optional) To set a variable in **active** environment use `{{variable, active}}`, Use this format only when you have attached Environment to Collection, otherwise `{{variable}}` format should be used

<a name="auth"></a>
## Auth
* OAuth 2.0 when grant type is **Authorization Code** the **callback url** needs to be entered into your oauth server trusted redirect url list.
* OAuth authentication credentials are sent **via header or body**, please select appropriate one based on your server requirement.

* ### Manual SSL Certificates
  * Provide ssl certificate paths for auth, using relative path to workspace or absolute paths. 
  * Use the **Certificates** VS Code setting, see example below
  
  ```json
  "thunder-client.certificates": [
          {
              "host": "thunderclient.io",
              "certPath": "ssl/cert.pem",
              "keyPath": "ssl/keyfile.key",
              "pfxPath": "ssl/pfx.p12",
              "passphrase": "test"
          },
          {
              "host": "localhost:8081",
              "pfxPath": "/Users/test/Documents/ssl/pfx.p12",
              "passphrase": "test"
          },
          {
              "host": "testing.com",
              "certPath": "ssl/cert.pem",
              "keyPath": "ssl/keyfile.key"
          },
      ]
  ```

<a name="cookies"></a>
## Cookies
* You can create or modify cookies using the `Cookie` header in the request.
* To Clear existing cookies for the request, use `Clear All` button in the Cookies Tab


![image](https://user-images.githubusercontent.com/8637550/171612397-378b5ac8-5215-4f2a-94f4-5fdb8cab6ed7.png)


<a name="path"></a>
## Path Variables
Path variables are supported using the format `{variable}` in the url field
* e.g 1: `https://www.thunderclient.com/details/customer/{customerId}`
* e.g 2: `https://www.thunderclient.com/details/{customerId}{name}/`

<a name="variables"></a>
## System Variables
The system variables are useful to generate random/dynamic data for use in request query params or body. The format is `{{#variableName}}`
* {{#guid}} - generates random uuid
* {{#string}} - generates random string
* {{#number}} - generates random number between 1 to 1000000
  * Custom Range: use `{{#number, min, max}}`, e.g: `{{#number, 100, 999}}`
* {{#email}} - generates random email
* {{#date}} - generates unix date timestamp in milliseconds
  * Custom date format: use `{{#date, 'YYYY-MM-DD hh:mm:ss:fff'}}`, the format should be in single quote.
  * Unix timestamp: use `{{#date, 'X'}}`, this will output unix timestamp in seconds.
* {{#dateISO}} - generates date ISO format
* {{#bool}} - generates true or false
* {{#enum, val1, val2, val3,...}} generates one of the enum values (comma separated) provided
  * e.g `{{#enum, red, green, blue}}`
  * e.g `{{#enum, 1, 2, 3}}`

<a name="codegen"></a>
## Code Snippet
The code snippet generation is available for following languages. Open request view and click icon `{}` to see Code Tab.
* C# - HttpClient
* cURL
* Dart Http
* Javascipt Fetch & Axios
* Php Laravel
* PowerShell
* Python requests & http.client
* and other languages are powered by [httpsnippet](https://github.com/Kong/httpsnippet)

The feature is open for **contribution** - https://github.com/rangav/thunder-codegen

<a name="proxy"></a>
## Proxy
* Proxy is supported using VS Code proxy setting. format `http://username:password@host:port` 
* **exclude Proxy Host List**: Use this setting to exclude hosts from proxy, supports comma separated values e.g: `abc.com,xyz.com`

<a name="http2"></a>
## Http/2
* To send request using Http/2 protocol, please select `HTTP/2` option in VS Code settings for **Http Version**

<a name="import"></a>
## Import/Export
* The following import of Collections & Environments supported
  - Postman 2.1.0 format
  - Insomnia v4 json file
  - Open API v3 json or yaml files
  - Thunder Client
* You can import or export Thunder Client collections and environment data.
* **Import Curl** is now supported from Activity tab. Keyboard shortcut `Cmd/Ctrl + u`
* Import of **.env files** also supported, select `Import` from Env tab and choose .env file

#### How to Import Collection
  1. Select the `Collection` tab from the sidebar
  2. Click the `Menu` icon near the search bar, and select `Import`
  3. Now select a file from Postman, Thunder Client, Insomnia, or Open API.

#### How to Convert to Postman Format
  - First Export Thunder Client collection/environment to a .json file, Then convert to Postman format using the below options
  - From Command Palette - `Convert To Postman Format` option available
  - From the Sidebar menu at the Top `(...)` select `Convert To Postman Format`

<a name="keyboard"></a>
## Keyboard Shortcuts
* `Ctl+Shift+P`: From Command Palette
  * Thunder Client - New Request
  * Thunder Client - Run Last Request
  * Thunder Client - Import Curl
  * Thunder Client - Change Environment
  * Thunder Client - Convert To Postman Format
* `Cmd/Ctrl + Enter`: To execute the request.
* `Enter` on request url field to send request.
* `Cmd/Ctrl + s` Save Request without run.
* `Cmd/Ctrl + click` on request in Sidebar will open in new tab
* `Cmd/Ctrl + s` Environment view save data.
* `Cmd/Ctrl + e` Change Active Environment.
* `Alt+Shft + f` Format Post Body data.
* `Cmd/Ctrl + u` Import Curl
* `Alt + z` Toggle Word wrap on response
* `Escape` to cancel Response full screen mode

<a name="settings"></a>
## VS Code Settings

To see all the Thunder Client VS Code settings
1. Open VS Code settings View, then search for `Thunder Client`
2. From Sidebar View -> Click `...` menu at the top, then click `Extension Settings`

<a name="contribution"></a>
## Contribution
* Documentation: if you like to improve documentation, please submit PR.
* The following modules are open for contribution, let me know if you like to contribute
  * Code Snippet Generation - https://github.com/rangav/thunder-codegen

<a name="privacy"></a>
## Privacy
* Basic anonymised analytics data is collected using [vscode-extension-telemetry](https://github.com/Microsoft/vscode-extension-telemetry), No Personal or request data is collected. You can opt out using VS Code Settings [details here](https://code.visualstudio.com/docs/getstarted/telemetry)
* There is no backend or cloud sync, all the data is stored locally on your computer.
