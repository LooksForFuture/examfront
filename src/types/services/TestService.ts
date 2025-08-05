/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ManagerTest } from '../models/ManagerTest';
import type { Question } from '../models/Question';
import type { User } from '../models/User';
import type { UserAnswer } from '../models/UserAnswer';
import type { UserProfile } from '../models/UserProfile';
import type { UserTestResult } from '../models/UserTestResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TestService {
    /**
     * @returns Question
     * @throws ApiError
     */
    public static testGetActiveQuestionRead(): CancelablePromise<Question> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/test/get-active-question/',
        });
    }
    /**
     * @returns UserProfile
     * @throws ApiError
     */
    public static testProfileMeRead(): CancelablePromise<UserProfile> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/test/profile/me/',
        });
    }
    /**
     * Retrieve the results for a specific test, ordered by score
     * @param testId
     * @returns UserTestResult
     * @throws ApiError
     */
    public static testResultRead(
        testId: string,
    ): CancelablePromise<Array<UserTestResult>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/test/result/{test_id}/',
            path: {
                'test_id': testId,
            },
            errors: {
                404: `Test not found`,
            },
        });
    }
    /**
     * @param status status
     * @returns ManagerTest
     * @throws ApiError
     */
    public static testTestList(
        status?: 'active' | 'inactive' | 'finished',
    ): CancelablePromise<Array<ManagerTest>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/test/test/',
            query: {
                'status': status,
            },
        });
    }
    /**
     * @param data
     * @returns ManagerTest
     * @throws ApiError
     */
    public static testTestCreate(
        data: ManagerTest,
    ): CancelablePromise<ManagerTest> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/test/test/',
            body: data,
        });
    }
    /**
     * @param id A unique integer value identifying this test.
     * @returns ManagerTest
     * @throws ApiError
     */
    public static testTestRead(
        id: number,
    ): CancelablePromise<ManagerTest> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/test/test/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this test.
     * @param data
     * @returns ManagerTest
     * @throws ApiError
     */
    public static testTestUpdate(
        id: number,
        data: ManagerTest,
    ): CancelablePromise<ManagerTest> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/test/test/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }
    /**
     * @param id A unique integer value identifying this test.
     * @param data
     * @returns ManagerTest
     * @throws ApiError
     */
    public static testTestPartialUpdate(
        id: number,
        data: ManagerTest,
    ): CancelablePromise<ManagerTest> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/test/test/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }
    /**
     * @param id A unique integer value identifying this test.
     * @returns void
     * @throws ApiError
     */
    public static testTestDelete(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/test/test/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns UserAnswer
     * @throws ApiError
     */
    public static testUserAnswerList(): CancelablePromise<Array<UserAnswer>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/test/user-answer/',
        });
    }
    /**
     * @param data
     * @returns UserAnswer
     * @throws ApiError
     */
    public static testUserAnswerCreate(
        data: UserAnswer,
    ): CancelablePromise<UserAnswer> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/test/user-answer/',
            body: data,
        });
    }
    /**
     * @param id A unique integer value identifying this user answer.
     * @returns UserAnswer
     * @throws ApiError
     */
    public static testUserAnswerRead(
        id: number,
    ): CancelablePromise<UserAnswer> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/test/user-answer/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this user answer.
     * @param data
     * @returns UserAnswer
     * @throws ApiError
     */
    public static testUserAnswerUpdate(
        id: number,
        data: UserAnswer,
    ): CancelablePromise<UserAnswer> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/test/user-answer/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }
    /**
     * @param id A unique integer value identifying this user answer.
     * @param data
     * @returns UserAnswer
     * @throws ApiError
     */
    public static testUserAnswerPartialUpdate(
        id: number,
        data: UserAnswer,
    ): CancelablePromise<UserAnswer> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/test/user-answer/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }
    /**
     * @param id A unique integer value identifying this user answer.
     * @returns void
     * @throws ApiError
     */
    public static testUserAnswerDelete(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/test/user-answer/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns User
     * @throws ApiError
     */
    public static testUserList(): CancelablePromise<Array<User>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/test/user/',
        });
    }
    /**
     * @param data
     * @returns User
     * @throws ApiError
     */
    public static testUserCreate(
        data: User,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/test/user/',
            body: data,
        });
    }
    /**
     * @param id
     * @returns User
     * @throws ApiError
     */
    public static testUserRead(
        id: string,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/test/user/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param data
     * @returns User
     * @throws ApiError
     */
    public static testUserUpdate(
        id: string,
        data: User,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/test/user/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }
    /**
     * @param id
     * @param data
     * @returns User
     * @throws ApiError
     */
    public static testUserPartialUpdate(
        id: string,
        data: User,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/test/user/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }
    /**
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static testUserDelete(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/test/user/{id}/',
            path: {
                'id': id,
            },
        });
    }
}
