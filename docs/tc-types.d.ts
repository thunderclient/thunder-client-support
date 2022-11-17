declare var tc: tcType;

interface tcType {
    /**
     * Get environment variable value
     * @param variableName variable name
     */
    getVar(variableName: string): string | undefined,
    request: RequestModel,
    response: ResponseModel | undefined,
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