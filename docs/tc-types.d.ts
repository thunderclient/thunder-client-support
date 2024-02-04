// version 2.17.7

declare var tc: tcType;
declare var expect: any;
declare var assert: any;

interface tcType {
    /**
     * Get Environment variable value
     * @param variableName variable name
     */
    getVar(variableName: string): string;

    /**
     * Set Environment variable value
     * @param variableName variable name
     * @param value variable value
     * @param scope [optional] environment scope with values: local, global and request
     */
    setVar(variableName: string, value: any, scope?: "local" | "global" | "request"): void;

    /**
    * Add or update the query parameter of the URL
    * @param paramName query parameter name
    * @param value parameter value
    * @since 2.11.0
    */
    setParam(paramName: string, value: any): void;

    /**
     * Load and get node module from npm registry
     * @param moduleName module name
     * @param version [optional] module version, if empty latest version will be used
     */
    loadModule(moduleName: string, version?: string): Promise<any>;

    /**
     * Read the file from disk
     * @param path file path relative to project root or absolute path
     * @param encoding [optional] encoding to use base64 or utf8. if empty utf8 will be used
     */
    readFile(path: string, encoding?: string): Promise<string | undefined>;

    /**
     * Executes the command and returns the result
     * @param command command to execute
     */
    exec(command: string): Promise<any>;

    /**
     * Get all cookies in cookie store
     * @param url [optional] to get cookies for url, if empty all cookies will be returned
     * @since 2.14.0
     */
    getCookies(url?: string): Promise<Cookie[]>;

    /**
     * Clear all existing cookies
     * @param url [optional] to clear cookies for url, if empty all cookies will be cleared
     * @param name [optional] to clear cookie by name, if empty all cookies for the url will be cleared
     */
    clearCookies(url?: string, name?: string): Promise<void>;

    /**
     * Set cookie in cookie store
     * @param url the url to set cookie for
     * @param name cookie name
     * @param value cookie value
     * @since 2.14.0
     */
    setCookie(url: string, name: string, value: string): Promise<void>;

    /**
     * Delay the execution for the specified milliseconds
     * @param ms the delay time in milliseconds
     * @since 2.9.2
     */
    delay(ms: number): Promise<void>;

    /**
     * Test assertion (Only works in Post Request Script)
     * @param name the name of the test
     * @param result the result of the test -> boolean or function that returns false or throws exception
     * @since 2.10.0
     */
    test(name: string, result: boolean | (() => boolean | void)): void;

    /**
     * Run Request from the script
     * @param reqId the request id
     * @since 2.9.0
     */
    runRequest(reqId: string): Promise<ResponseModel>;

    /**
     * Retry Request from the script. This will not execute the pre-reqs and pre script
     * @since 2.17.5
     */
    retryRequest(): Promise<ResponseModel>;

    /**
     * Skip Request from execution in collection run
     * @param reqId the request id
     * @since 2.16.0
     */
    skipRequest(reqId: string): void;

    /**
     * Set the chart template and data
     * @param template chart template HTML string
     * @param data chart data
     * @since 2.17.0
     */
    chartHTML(template: string, data: any): void;

    /**
     * Get the Request Info
     * @since 2.15.0
     */
    info: InfoModel;

    /**
     * Get the Request object (Only Headers can be modified)
     */
    request: RequestModel;

    /**
     * Get the Response object (read-only)
     */
    response: ResponseModel;
}

type RequestModel = {
    id: string;
    name: string;
    url: string;
    method: string;
    headers: KeyValue[];
    body: RequestBody | undefined;
    getHeader: (name: string) => string | undefined;
    setHeader: (name: string, value: string) => void;
}

type ResponseModel = {
    status: number;
    time: number;
    size: number;
    contentType: string;
    headers: KeyValue[];
    cookies: KeyValue[];
    json: any;
    text: string;
    getHeader: (name: string) => string | undefined;
}

type RequestBody = {
    type: BodyType,
    raw: string | undefined,
    form: KeyValue[] | undefined,
    files: KeyValue[] | undefined,
    graphql: GraphqlBody | undefined,
    binary: string | undefined
}

type KeyValue = {
    name: string,
    value: string,
    isDisabled?: boolean | undefined
}

type BodyType = "none" | "text" | "json" | "xml" | "formdata" | "formencoded" | "graphql" | "binary";

type GraphqlBody = {
    query: string,
    variables?: string | undefined
}

type Cookie = {
    key: string;
    value: string;
    expires?: string; // date in ISO 8601 format
    domain: string;
    path: string;
    hostOnly: boolean;
    httpOnly?: boolean;
    creation: string;  // date in ISO 8601 format
    lastAccessed: string;  // date in ISO 8601 format
}

type InfoModel = {
    environmentName: string,
    requestName: string,
    collectionName: string,
    folderName: string,
}

