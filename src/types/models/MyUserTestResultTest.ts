/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type MyUserTestResultTest = {
    readonly id?: number;
    title?: string | null;
    status?: MyUserTestResultTest.status | null;
};
export namespace MyUserTestResultTest {
    export enum status {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        FINISHED = 'finished',
    }
}

