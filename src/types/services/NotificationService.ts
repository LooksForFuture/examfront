/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MyNotification } from '../models/MyNotification';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class NotificationService {
    /**
     * @returns MyNotification
     * @throws ApiError
     */
    public static notificationNotificationList(): CancelablePromise<Array<MyNotification>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/notification/notification/',
        });
    }
    /**
     * @param data
     * @returns MyNotification
     * @throws ApiError
     */
    public static notificationNotificationCreate(
        data: MyNotification,
    ): CancelablePromise<MyNotification> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/notification/notification/',
            body: data,
        });
    }
    /**
     * @param id
     * @returns MyNotification
     * @throws ApiError
     */
    public static notificationNotificationRead(
        id: string,
    ): CancelablePromise<MyNotification> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/notification/notification/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param data
     * @returns MyNotification
     * @throws ApiError
     */
    public static notificationNotificationUpdate(
        id: string,
        data: MyNotification,
    ): CancelablePromise<MyNotification> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/notification/notification/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }
    /**
     * @param id
     * @param data
     * @returns MyNotification
     * @throws ApiError
     */
    public static notificationNotificationPartialUpdate(
        id: string,
        data: MyNotification,
    ): CancelablePromise<MyNotification> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/notification/notification/{id}/',
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
    public static notificationNotificationDelete(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/notification/notification/{id}/',
            path: {
                'id': id,
            },
        });
    }
}
