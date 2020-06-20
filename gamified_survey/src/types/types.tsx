export interface Questions {
    type: 'checkbox' | 'radiogroup' | 'matrix' | 'text',
    name: string,
    title: string,
    columns?: Array<MatrixObject>
    rows?: Array<MatrixObject>
    choices?: Array<string>,
    isRequired?: boolean,
    hasSelectAll?: true,

}

export interface MatrixObject {
    value: number | string
    text: string
}
export interface Json {
    questions: Array<Questions>
    completeText: string
    mode: 'display' | 'edit'
}