export enum NotificationType {
    ERROR = "danger",
    WARNING = "warning",
    INFO = "info",
    DEFAULT = "default",
    SUCCESS = "success"
}

export interface INotification {
    type: NotificationType;
    message: string;
}

export const YangStatsNotifications = {
    TRY_TO_UPLOAD_FILE: "try to upload yang file...",
    TRY_TO_LOAD_FILE_FROM_URL: "try to load yang file from url...",
    LOAD_FILE_FROM_URL_SUCCEEDED: "succeeded",
    LOAD_FILE_FROM_URL_FAILED_FORMAT: "download failed: {0}"
}
