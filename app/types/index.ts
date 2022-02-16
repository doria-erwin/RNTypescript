import { RefObject } from 'react';
import Sheet from 'react-native-raw-bottom-sheet';

// Typography
export type FontWeight = 'light' | 'regular' | 'semiBold' | 'bold' | 'black';
export type FontSize = 40 | 26 | 24 | 22 | 20 | 18 | 16 | 14 | 12 | 10;
export type Color = 'base' | 'light' | 'dark' | 'error' | 'brand';

// Button
export type ButtonVariant =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'link';

export type InputSize = 'sm' | 'md' | 'lg';

export type BorderRadius = 4 | 6 | 9 | 12;

export type AvatarSize = 40 | 60 | 80 | 90;

export type RefSheet = RefObject<Sheet>;

export type ChoiceVariant =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'link';

export type Choice = 'check' | 'radio';

export type ChoiceValue = string | number;

export type ChoiceData = {
    id: number;
    title: string;
    value: ChoiceValue;
};

export type API_METHOD = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type API_DATA = string | number | Object | Array<any> | undefined | null;

export type CONTENT_TYPE =
    | 'application/x-www-form-urlencoded'
    | 'audio/aac'
    | 'application/x-abiword'
    | 'application/x-freearc'
    | 'image/avif'
    | 'video/x-msvideo'
    | 'application/vnd.amazon.ebook'
    | 'application/octet-stream'
    | 'image/bmp'
    | 'application/x-bzip'
    | 'application/x-bzip2'
    | 'application/x-cdf'
    | 'application/x-csh'
    | 'text/css'
    | 'text/csv'
    | 'application/msword'
    | 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    | 'application/vnd.ms-fontobject'
    | 'application/epub+zip'
    | 'application/gzip'
    | 'image/gif'
    | 'text/html'
    | 'image/vnd.microsoft.icon'
    | 'text/calendar'
    | 'application/java-archive'
    | 'image/jpeg'
    | 'text/javascript'
    | 'application/json'
    | 'application/ld+json'
    | 'audio/midi'
    | 'audio/x-midi'
    | 'text/javascript'
    | 'audio/mpeg'
    | 'video/mp4'
    | 'video/mpeg'
    | 'application/vnd.apple.installer+xml'
    | 'application/vnd.oasis.opendocument.presentation'
    | 'application/vnd.oasis.opendocument.spreadsheet'
    | 'application/vnd.oasis.opendocument.text'
    | 'audio/ogg'
    | 'video/ogg'
    | 'application/ogg'
    | 'audio/opus'
    | 'font/otf'
    | 'image/png'
    | 'application/pdf'
    | 'application/x-httpd-php'
    | 'application/vnd.ms-powerpoint'
    | 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    | 'application/vnd.rar'
    | 'application/rtf'
    | 'application/x-sh'
    | 'image/svg+xml'
    | 'application/x-shockwave-flash'
    | 'application/x-tar'
    | 'image/tiff'
    | 'video/mp2t'
    | 'font/ttf'
    | 'text/plain'
    | 'application/vnd.visio'
    | 'audio/wav'
    | 'audio/webm'
    | 'video/webm'
    | 'image/webp'
    | 'font/woff'
    | 'font/woff2'
    | 'application/xhtml+xml'
    | 'application/vnd.ms-excel'
    | 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    | 'application/xml'
    | 'application/vnd.mozilla.xul+xml'
    | 'application/zip'
    | 'video/3gpp'
    | 'audio/3gpp'
    | 'video/3gpp2'
    | 'audio/3gpp2'
    | 'application/x-7z-compressed';
