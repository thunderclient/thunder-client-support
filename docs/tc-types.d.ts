// version 1.1

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

    request: RequestModel;
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
