/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ManagerTest = {
    readonly id?: number;
    title?: string | null;
    status?: ManagerTest.status | null;
    readonly image?: string;
    readonly question_set?: string;
};
export namespace ManagerTest {
    export enum status {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        FINISHED = 'finished',
    }
}

