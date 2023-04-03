// version 1.2.2

declare var tc: tcType;

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
     * @param scope [optional] environment scope with values: local, global
     */
    setVar(variableName: string, value: any, scope?: "local" | "global"): void;

    /**
     * Load and get node module from npm registry
     * @param moduleName module name
     * @param version [optional] module version, if empty latest version will be used
     */
    loadModule(moduleName: string, version?: string): Promise<any>;

    /**
     * Read file from disk
     * @param path file path relative to project root or absolute path
     */
    readFile(path: string): Promise<string | undefined>;

    /**
     * Executes the command and returns the result
     * @param command command to execute
     */
    exec(command: string): Promise<any>;
    
    /**
     * Clear all existing cookies
     */
    clearCookies(): Promise<void>;

    /**
     * Get the Request object (Only Headers can be modified)
     */
    request: RequestModel;
    
    /**
     * Get the Response object (read-only)
     */
    response: ResponseModel | undefined;
}

type RequestModel = {
    url: string;
    method: string;
    headers: KeyValue[];
    body: RequestBody | undefined;
}

type ResponseModel = {
    status: number;
    time: number;
    size: number;
    contentType: string;
    headers: KeyValue[];
    cookies: KeyValue[];
    json: object | undefined;
    text: string;
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
